import { NextResponse, type NextRequest } from "next/server";
import {
  DISCOVERY_FALLBACK_EMAIL,
  DISCOVERY_HONEYPOT_FIELD,
  DISCOVERY_LONG_FIELD_MAX_LENGTH,
  DISCOVERY_SHORT_FIELD_MAX_LENGTH,
  type DiscoveryAvailabilityResponse,
  type DiscoveryBookingRequest,
  type DiscoveryBookingResponse,
} from "@/types/discovery";
import { expandBlockedTimes, isBookableWeekday, isBookingTimeSlot, type BookingTimeSlot } from "@/lib/discoverySlots";

// Forwards discovery-call requests to a GHL/n8n inbound webhook — must run in the
// Node.js runtime, never statically cached.
export const runtime = "nodejs";

const WEBHOOK_TIMEOUT_MS = 15000;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GENERIC_SEND_ERROR = `Something went wrong sending your request. Please email ${DISCOVERY_FALLBACK_EMAIL} directly.`;

// Best-effort, in-memory record of booked preferred times, keyed by date. Resets on
// redeploy/cold start — same trade-off as the chat route's rate limiter below. A human
// still confirms the final call time by email, so this only needs to keep the calendar
// UI honest, not act as a durable source of truth.
const bookingsByDate = new Map<string, string[]>();

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 6;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  if (requestLog.size > 5000) requestLog.clear(); // crude cap on unbounded memory growth
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function getIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function readString(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

type ValidatedBooking = Omit<DiscoveryBookingRequest, typeof DISCOVERY_HONEYPOT_FIELD | "preferredTime"> & {
  preferredTime: BookingTimeSlot;
};

function validateBody(body: Partial<DiscoveryBookingRequest>): ValidatedBooking | null {
  const name = readString(body.name, DISCOVERY_SHORT_FIELD_MAX_LENGTH);
  const company = readString(body.company, DISCOVERY_SHORT_FIELD_MAX_LENGTH);
  const email = readString(body.email, DISCOVERY_SHORT_FIELD_MAX_LENGTH);
  const automate = readString(body.automate, DISCOVERY_LONG_FIELD_MAX_LENGTH);
  const tools = readString(body.tools, DISCOVERY_LONG_FIELD_MAX_LENGTH);
  const bottleneck = readString(body.bottleneck, DISCOVERY_LONG_FIELD_MAX_LENGTH);
  const timeline = readString(body.timeline, DISCOVERY_SHORT_FIELD_MAX_LENGTH);
  const preferredDate = readString(body.preferredDate, 10);
  const preferredTime = readString(body.preferredTime, 20);

  if (!name || !email || !automate || !bottleneck || !timeline) return null;
  if (!EMAIL_PATTERN.test(email)) return null;
  if (!DATE_PATTERN.test(preferredDate) || !isBookableWeekday(preferredDate)) return null;
  if (!isBookingTimeSlot(preferredTime)) return null;

  return { name, company, email, automate, tools, bottleneck, timeline, preferredDate, preferredTime };
}

export async function GET(request: NextRequest) {
  const date = new URL(request.url).searchParams.get("date") ?? "";
  if (!DATE_PATTERN.test(date)) {
    return NextResponse.json({ error: "Invalid date." }, { status: 400 });
  }
  const blockedTimes = expandBlockedTimes(bookingsByDate.get(date) ?? []);
  return NextResponse.json<DiscoveryAvailabilityResponse>({ blockedTimes });
}

export async function POST(request: NextRequest) {
  const ip = getIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json<DiscoveryBookingResponse>(
      { ok: false, error: `You've sent a lot of requests recently — please wait a bit and try again, or email ${DISCOVERY_FALLBACK_EMAIL}.` },
      { status: 429 },
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json<DiscoveryBookingResponse>({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const body = (rawBody ?? {}) as Partial<DiscoveryBookingRequest>;

  // Honeypot tripped: pretend success without processing or forwarding anything, so the
  // bot has no signal it was caught.
  if (readString(body[DISCOVERY_HONEYPOT_FIELD], 200)) {
    return NextResponse.json<DiscoveryBookingResponse>({ ok: true });
  }

  const validated = validateBody(body);
  if (!validated) {
    return NextResponse.json<DiscoveryBookingResponse>(
      { ok: false, error: "Please complete the required fields with a valid email and preferred time." },
      { status: 400 },
    );
  }

  const alreadyBlocked = expandBlockedTimes(bookingsByDate.get(validated.preferredDate) ?? []);
  if (alreadyBlocked.includes(validated.preferredTime)) {
    return NextResponse.json<DiscoveryBookingResponse>(
      { ok: false, error: "That preferred time was just taken — please choose another." },
      { status: 409 },
    );
  }

  const webhookUrl = process.env.DISCOVERY_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[api/discovery] DISCOVERY_WEBHOOK_URL is not set.");
    return NextResponse.json<DiscoveryBookingResponse>({ ok: false, error: GENERIC_SEND_ERROR }, { status: 500 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validated),
      signal: controller.signal,
    });

    if (!res.ok) {
      console.error(`[api/discovery] webhook responded with status ${res.status}`);
      return NextResponse.json<DiscoveryBookingResponse>({ ok: false, error: GENERIC_SEND_ERROR }, { status: 502 });
    }

    const existing = bookingsByDate.get(validated.preferredDate) ?? [];
    bookingsByDate.set(validated.preferredDate, [...existing, validated.preferredTime]);

    return NextResponse.json<DiscoveryBookingResponse>({ ok: true });
  } catch (error) {
    console.error("[api/discovery] webhook request failed:", error);
    return NextResponse.json<DiscoveryBookingResponse>({ ok: false, error: GENERIC_SEND_ERROR }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}
