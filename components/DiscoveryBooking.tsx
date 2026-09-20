"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CalendarDays, CheckCircle2, ChevronLeft, ChevronRight, Clock3 } from "lucide-react";
import { BOOKING_TIME_SLOTS } from "@/lib/discoverySlots";
import {
  DISCOVERY_FALLBACK_EMAIL,
  DISCOVERY_HONEYPOT_FIELD,
  type DiscoveryAvailabilityResponse,
  type DiscoveryBookingResponse,
} from "@/types/discovery";

type DiscoveryData = { name: string; company: string; email: string; automate: string; tools: string; bottleneck: string; timeline: string };
const initialData: DiscoveryData = { name: "", company: "", email: "", automate: "", tools: "", bottleneck: "", timeline: "" };
const inputClass = "mt-2 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-blue-100";
const SEND_ERROR = `Something went wrong sending your request. Please email ${DISCOVERY_FALLBACK_EMAIL} directly.`;

const buildDates = () => {
  const start = new Date();
  start.setHours(12, 0, 0, 0);
  return Array.from({ length: 43 }, (_, index) => {
    const date = new Date(start);
    date.setDate(date.getDate() + index);
    return { key: date.toISOString().slice(0, 10), day: date.toLocaleDateString("en-US", { weekday: "short" }), number: date.getDate(), month: date.toLocaleDateString("en-US", { month: "short" }), year: date.getFullYear(), monthIndex: date.getMonth() };
  }).filter((date) => date.day !== "Sun");
};

export default function DiscoveryBooking() {
  const [data, setData] = useState(initialData);
  const [honeypot, setHoneypot] = useState("");
  const dates = useMemo(() => buildDates(), []);
  const [selectedDate, setSelectedDate] = useState("");
  const [view, setView] = useState({ y: dates[0].year, m: dates[0].monthIndex });
  const [selectedTime, setSelectedTime] = useState("");
  // Keyed by date so a late-resolving fetch for a since-abandoned date can never
  // overwrite the slots shown for the date the visitor is now looking at.
  const [availability, setAvailability] = useState<{ date: string; blockedTimes: string[] } | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!selectedDate) return;
    fetch(`/api/discovery?date=${selectedDate}`)
      .then((res) => (res.ok ? (res.json() as Promise<DiscoveryAvailabilityResponse>) : { blockedTimes: [] }))
      .then((payload) => setAvailability({ date: selectedDate, blockedTimes: payload.blockedTimes ?? [] }))
      .catch(() => setAvailability({ date: selectedDate, blockedTimes: [] }));
  }, [selectedDate]);

  const loadingAvailability = Boolean(selectedDate) && availability?.date !== selectedDate;
  const blockedTimes = availability?.date === selectedDate ? availability.blockedTimes : [];

  const update = (field: keyof DiscoveryData, value: string) => { setData((current) => ({ ...current, [field]: value })); setErrors((current) => current.filter((item) => item !== field)); };

  const submitBooking = async (event: React.FormEvent) => {
    event.preventDefault();
    const required: (keyof DiscoveryData)[] = ["name", "email", "automate", "bottleneck", "timeline"];
    const missing: string[] = required.filter((field) => !data[field].trim());
    if (!selectedTime) missing.push("time");
    if (missing.length) { setErrors(missing); return; }

    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/discovery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, preferredDate: selectedDate, preferredTime: selectedTime, [DISCOVERY_HONEYPOT_FIELD]: honeypot }),
      });
      const payload = (await res.json().catch(() => null)) as DiscoveryBookingResponse | null;
      if (!res.ok || !payload?.ok) {
        setSubmitError((payload && !payload.ok && payload.error) || SEND_ERROR);
        return;
      }
      setSubmitted(true);
      document.getElementById("booking-flow")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch {
      setSubmitError(SEND_ERROR);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) return <div id="booking-flow" className="scroll-mt-24 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-6 py-16 text-center sm:px-10"><CheckCircle2 className="mx-auto text-[var(--color-accent-green)]" size={44} /><h2 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">Request Received</h2><p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[var(--color-body)]">Request received. I&apos;ll confirm your call time by email within 1 business day.</p><button type="button" onClick={() => { setSubmitted(false); setData(initialData); setSelectedTime(""); setErrors([]); setSubmitError(null); }} className="mt-7 text-sm font-semibold text-[var(--color-primary)] hover:underline">Start another inquiry</button></div>;

  const selectedDateLabel = dates.find((date) => date.key === selectedDate);
  const availableKeys = new Set(dates.map((date) => date.key));
  const monthLabel = new Date(view.y, view.m, 1).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const firstWeekday = new Date(view.y, view.m, 1).getDay();
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
  const keyFor = (day: number) => new Date(view.y, view.m, day, 12).toISOString().slice(0, 10);
  const shiftMonth = (delta: number) => { const target = new Date(view.y, view.m + delta, 1); return { y: target.getFullYear(), m: target.getMonth() }; };
  const hasDates = (target: { y: number; m: number }) => dates.some((date) => date.year === target.y && date.monthIndex === target.m);
  const canPrev = hasDates(shiftMonth(-1));
  const canNext = hasDates(shiftMonth(1));
  const availableTimes = BOOKING_TIME_SLOTS.filter((time) => !blockedTimes.includes(time));

  return <form id="booking-flow" onSubmit={submitBooking} noValidate className="scroll-mt-24 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6 sm:p-8 lg:p-10"><div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
    <section aria-labelledby="discovery-heading"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">Discovery questions</p><h2 id="discovery-heading" className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">Tell me what you&apos;re trying to automate.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[var(--color-body)]">A few focused details help make the conversation useful from the start.</p><div className="mt-7 grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-semibold text-[var(--color-ink)]">Name *<input className={inputClass} value={data.name} onChange={(e) => update("name", e.target.value)} aria-invalid={errors.includes("name")} placeholder="Your name" /></label>
      <label className="text-sm font-semibold text-[var(--color-ink)]">Email *<input type="email" className={inputClass} value={data.email} onChange={(e) => update("email", e.target.value)} aria-invalid={errors.includes("email")} placeholder="you@company.com" /></label>
      <label className="text-sm font-semibold text-[var(--color-ink)]">Company / business name<input className={inputClass} value={data.company} onChange={(e) => update("company", e.target.value)} placeholder="Optional" /></label>
      <label className="text-sm font-semibold text-[var(--color-ink)]">Current tools / platforms<input className={inputClass} value={data.tools} onChange={(e) => update("tools", e.target.value)} placeholder="n8n, Shopify, Xero..." /></label>
      <label className="text-sm font-semibold text-[var(--color-ink)] sm:col-span-2">What would you like to automate? *<textarea className={`${inputClass} min-h-24 resize-y`} value={data.automate} onChange={(e) => update("automate", e.target.value)} aria-invalid={errors.includes("automate")} placeholder="For example: lead capture, invoice follow-up, inventory updates" /></label>
      <label className="text-sm font-semibold text-[var(--color-ink)] sm:col-span-2">Biggest bottleneck / repetitive task *<textarea className={`${inputClass} min-h-24 resize-y`} value={data.bottleneck} onChange={(e) => update("bottleneck", e.target.value)} aria-invalid={errors.includes("bottleneck")} placeholder="What takes too much time or gets missed today?" /></label>
      <label className="text-sm font-semibold text-[var(--color-ink)] sm:col-span-2">Preferred project timeline *<select className={inputClass} value={data.timeline} onChange={(e) => update("timeline", e.target.value)} aria-invalid={errors.includes("timeline")}><option value="">Select one</option><option>Exploring options</option><option>Within 1 month</option><option>Within 1–3 months</option><option>Flexible</option></select></label>
      <div className="absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true"><label>Website<input type="text" name={DISCOVERY_HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} /></label></div>
    </div></section>
    <section aria-labelledby="calendar-heading" className="lg:border-l lg:border-[var(--color-border)] lg:pl-10"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">Calendar</p><div className="mt-3 flex items-start justify-between gap-4"><div><h2 id="calendar-heading" className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">Choose a Preferred Time</h2><p className="mt-3 text-sm leading-6 text-[var(--color-body)]">Select a Monday–Saturday date, then choose an available preferred time.</p></div><CalendarDays className="shrink-0 text-[var(--color-primary)]" size={28} /></div><div className="mt-5 rounded-2xl border border-[var(--color-border)] bg-white p-4 sm:flex sm:gap-5"><div className="sm:flex-1"><div className="flex items-center justify-between"><p className="text-sm font-semibold text-[var(--color-ink)]">{monthLabel}</p><div className="flex gap-1"><button type="button" onClick={() => setView(shiftMonth(-1))} disabled={!canPrev} aria-label="Previous month" className="rounded-lg p-1.5 text-[var(--color-ink)] transition hover:bg-[var(--color-primary-light)] disabled:cursor-not-allowed disabled:opacity-30"><ChevronLeft size={18} /></button><button type="button" onClick={() => setView(shiftMonth(1))} disabled={!canNext} aria-label="Next month" className="rounded-lg p-1.5 text-[var(--color-ink)] transition hover:bg-[var(--color-primary-light)] disabled:cursor-not-allowed disabled:opacity-30"><ChevronRight size={18} /></button></div></div><div className="mt-3 grid grid-cols-7 text-center text-[10px] font-semibold uppercase text-[var(--color-muted)]">{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => <span key={day} className="py-1">{day}</span>)}</div><div className="mt-1 grid grid-cols-7 gap-1">{Array.from({ length: firstWeekday }, (_, index) => <span key={`blank-${index}`} />)}{Array.from({ length: daysInMonth }, (_, index) => { const day = index + 1; const key = keyFor(day); const enabled = availableKeys.has(key); const selected = selectedDate === key; return <button key={key} type="button" disabled={!enabled} onClick={() => { setSelectedDate(key); setSelectedTime(""); setErrors((current) => current.filter((item) => item !== "time")); }} aria-label={`${new Date(view.y, view.m, day).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}`} aria-pressed={selected} className={`aspect-square rounded-full text-sm font-semibold transition ${selected ? "bg-[var(--color-primary)] text-white" : enabled ? "text-[var(--color-primary)] bg-blue-50 hover:bg-[var(--color-primary-light)]" : "cursor-not-allowed text-[var(--color-muted)] opacity-40"}`}>{day}</button>; })}</div></div><div className="mt-4 border-t border-[var(--color-border)] pt-4 sm:mt-0 sm:w-40 sm:shrink-0 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">{selectedDateLabel ? <><p className="text-sm font-semibold text-[var(--color-ink)]">{selectedDateLabel.day}, {selectedDateLabel.month} {selectedDateLabel.number}</p><p className="mt-1 text-xs text-[var(--color-muted)]">Preferred times</p><div className={`mt-3 flex max-h-72 flex-col gap-2 overflow-y-auto pr-1 transition-opacity ${loadingAvailability ? "opacity-50" : ""}`}>{availableTimes.map((time) => { const selected = selectedTime === time; return <button key={time} type="button" disabled={loadingAvailability} onClick={() => { setSelectedTime(time); setErrors((current) => current.filter((item) => item !== "time")); }} aria-pressed={selected} className={`inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed ${selected ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white" : "border-[var(--color-border)] bg-white text-[var(--color-primary)] hover:border-[var(--color-primary)]"}`}><Clock3 size={14} />{time}</button>; })}{!loadingAvailability && availableTimes.length === 0 && <p className="text-xs text-[var(--color-muted)]">No times left on this day.</p>}</div></> : <p className="text-sm leading-6 text-[var(--color-muted)]">Select a date to see available times.</p>}</div></div>{errors.includes("time") && <p className="mt-4 text-sm font-medium text-[var(--color-accent-red)]" role="alert">Choose a date and preferred time to continue.</p>}<button type="submit" disabled={submitting} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Sending…" : "Submit discovery request"} <ArrowRight size={17} /></button>{errors.some((error) => error !== "time") && <p className="mt-4 text-sm font-medium text-[var(--color-accent-red)]" role="alert">Please complete the required questions before submitting.</p>}{submitError && <p className="mt-4 text-sm font-medium text-[var(--color-accent-red)]" role="alert">{submitError}</p>}</section>
  </div></form>;
}
