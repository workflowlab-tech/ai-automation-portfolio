import { NextResponse, type NextRequest } from "next/server";
import {
  MAX_HISTORY_MESSAGES,
  MAX_MESSAGE_LENGTH,
  type ChatHistoryMessage,
  type ChatReply,
} from "@/types/chat";

// Proxies to the n8n Portfolio AI Agent webhook — must run in the Node.js runtime,
// never statically cached.
export const runtime = "nodejs";

const MAX_REPLY_LENGTH = 900;
const N8N_TIMEOUT_MS = 15000;
const FALLBACK_TEXT = "MJ AI is temporarily unavailable. Please try again in a moment, or reach out directly.";
const RATE_LIMIT_TEXT = "You've sent a lot of messages in a short time — please wait a minute and try again.";

// Best-effort per-IP rate limit, in front of n8n's own rate limiting. In-memory, so
// it resets on redeploy and doesn't span multiple instances — good enough to blunt
// casual abuse of a public, unauthenticated endpoint before it ever reaches n8n.
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

  const webhookUrl = process.env.N8N_CHAT_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[api/chat] N8N_CHAT_WEBHOOK_URL is not set.");
    return NextResponse.json<ChatReply>({ text: FALLBACK_TEXT, error: true });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), N8N_TIMEOUT_MS);

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history }),
      signal: controller.signal,
    });

    if (!res.ok) {
      console.error(`[api/chat] n8n webhook responded with status ${res.status}`);
      return NextResponse.json<ChatReply>({ text: FALLBACK_TEXT, error: true });
    }

    const data = (await res.json()) as { text?: unknown };
    const text = typeof data.text === "string" ? data.text.trim() : "";
    const payload: ChatReply = { text: text ? text.slice(0, MAX_REPLY_LENGTH) : FALLBACK_TEXT };
    return NextResponse.json(payload);
  } catch (error) {
    console.error("[api/chat] n8n webhook request failed:", error);
    return NextResponse.json<ChatReply>({ text: FALLBACK_TEXT, error: true });
  } finally {
    clearTimeout(timeout);
  }
}
