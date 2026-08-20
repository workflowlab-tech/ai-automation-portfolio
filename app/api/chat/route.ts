import { GoogleGenAI, type Content } from "@google/genai";
import { NextResponse, type NextRequest } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/chat/systemPrompt";
import {
  MAX_HISTORY_MESSAGES,
  MAX_MESSAGE_LENGTH,
  type ChatHistoryMessage,
  type ChatReply,
} from "@/types/chat";

// Calls Gemini directly — must run in the Node.js runtime, never statically cached.
export const runtime = "nodejs";

// Pinned rather than a "-latest" alias, to avoid surprise quota/behavior changes.
const MODEL = "gemini-3.5-flash";
const MAX_REPLY_LENGTH = 900;
// Short, grounded Q&A answers don't need extended reasoning — disabling the
// thinking budget keeps the full maxOutputTokens available for the visible
// reply instead of being consumed by hidden thinking tokens first.
const MAX_OUTPUT_TOKENS = 600;
const FALLBACK_TEXT = "Idol AI is temporarily unavailable. Please try again in a moment, or reach out directly.";
const RATE_LIMIT_TEXT = "You've sent a lot of messages in a short time — please wait a minute and try again.";

// Best-effort per-IP rate limit. In-memory, so it resets on redeploy and
// doesn't span multiple instances — good enough to blunt casual abuse of a
// public, unauthenticated endpoint that spends real API quota; not a
// substitute for a real rate limiter if this ever needs to scale.
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 12;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  if (requestLog.size > 5000) requestLog.clear(); // crude cap on unbounded memory growth
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

type ChatRequestBody = {
  message?: unknown;
  history?: unknown;
};

type ValidatedRequest = {
  message: string;
  history: ChatHistoryMessage[];
};

function validateBody(body: ChatRequestBody): ValidatedRequest | null {
  if (typeof body.message !== "string") return null;
  const message = body.message.trim();
  if (!message || message.length > MAX_MESSAGE_LENGTH) return null;

  let history: ChatHistoryMessage[] = [];
  if (Array.isArray(body.history)) {
    history = body.history
      .filter((entry): entry is Record<string, unknown> => typeof entry === "object" && entry !== null)
      .map((entry): ChatHistoryMessage => ({
        role: entry.role === "assistant" ? "assistant" : "user",
        text: typeof entry.text === "string" ? entry.text.slice(0, MAX_MESSAGE_LENGTH) : "",
      }))
      .filter((entry) => entry.text.length > 0)
      .slice(-MAX_HISTORY_MESSAGES);
  }

  return { message, history };
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json<ChatReply>({ text: RATE_LIMIT_TEXT, error: true });
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = validateBody((rawBody ?? {}) as ChatRequestBody);
  if (!parsed) return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  const { message, history } = parsed;

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("[api/chat] GEMINI_API_KEY is not set.");
    return NextResponse.json<ChatReply>({ text: FALLBACK_TEXT, error: true });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const contents: Content[] = [
      ...history.map((turn): Content => ({
        role: turn.role === "assistant" ? "model" : "user",
        parts: [{ text: turn.text }],
      })),
      { role: "user", parts: [{ text: message }] },
    ];

    const response = await ai.models.generateContent({
      model: MODEL,
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        maxOutputTokens: MAX_OUTPUT_TOKENS,
        thinkingConfig: { thinkingBudget: 0 },
      },
    });

    const text = (response.text ?? "").trim();
    const payload: ChatReply = { text: text ? text.slice(0, MAX_REPLY_LENGTH) : FALLBACK_TEXT };
    return NextResponse.json(payload);
  } catch (error) {
    console.error("[api/chat] Gemini request failed:", error);
    return NextResponse.json<ChatReply>({ text: FALLBACK_TEXT, error: true });
  }
}
