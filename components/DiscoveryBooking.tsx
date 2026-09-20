"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CalendarDays, CheckCircle2, Clock3 } from "lucide-react";
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
    return { key: date.toISOString().slice(0, 10), day: date.toLocaleDateString("en-US", { weekday: "short" }), number: date.getDate(), month: date.toLocaleDateString("en-US", { month: "short" }), year: date.getFullYear() };
  }).filter((date) => date.day !== "Sun");
};

export default function DiscoveryBooking() {
  const [data, setData] = useState(initialData);
  const [honeypot, setHoneypot] = useState("");
  const dates = useMemo(() => buildDates(), []);
  const [selectedDate, setSelectedDate] = useState(dates[0].key);
  const [selectedTime, setSelectedTime] = useState("");
  // Keyed by date so a late-resolving fetch for a since-abandoned date can never
  // overwrite the slots shown for the date the visitor is now looking at.
  const [availability, setAvailability] = useState<{ date: string; blockedTimes: string[] } | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch(`/api/discovery?date=${selectedDate}`)
      .then((res) => (res.ok ? (res.json() as Promise<DiscoveryAvailabilityResponse>) : { blockedTimes: [] }))
      .then((payload) => setAvailability({ date: selectedDate, blockedTimes: payload.blockedTimes ?? [] }))
      .catch(() => setAvailability({ date: selectedDate, blockedTimes: [] }));
  }, [selectedDate]);

  const loadingAvailability = availability?.date !== selectedDate;
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
  const firstDateLabel = dates[0];
  const lastDateLabel = dates[dates.length - 1];
  const rangeLabel = firstDateLabel.month === lastDateLabel.month ? `${firstDateLabel.month} ${firstDateLabel.year}` : `${firstDateLabel.month}–${lastDateLabel.month} ${lastDateLabel.year}`;
  const availableTimes = BOOKING_TIME_SLOTS.filter((time) => !blockedTimes.includes(time));

  return <form id="booking-flow" onSubmit={submitBooking} noValidate className="scroll-mt-24 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6 sm:p-8 lg:p-10"><div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
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
    <section aria-labelledby="calendar-heading" className="lg:border-l lg:border-[var(--color-border)] lg:pl-10"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">Calendar</p><div className="mt-3 flex items-start justify-between gap-4"><div><h2 id="calendar-heading" className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">Choose a Preferred Time</h2><p className="mt-3 text-sm leading-6 text-[var(--color-body)]">Select a Monday–Saturday date, then choose an available preferred time.</p></div><CalendarDays className="shrink-0 text-[var(--color-primary)]" size={28} /></div><div className="mt-5 rounded-2xl border border-[var(--color-border)] bg-white p-4"><div className="flex items-center justify-between"><p className="text-sm font-semibold text-[var(--color-ink)]">{rangeLabel}</p><span className="text-xs text-[var(--color-muted)]">{selectedDateLabel?.month} {selectedDateLabel?.number}</span></div><div className="mt-4 grid grid-cols-7 gap-1.5">{dates.map((date) => { const selected = selectedDate === date.key; return <button key={date.key} type="button" onClick={() => { setSelectedDate(date.key); setSelectedTime(""); setErrors((current) => current.filter((item) => item !== "time")); }} aria-label={`${date.day}, ${date.month} ${date.number}`} aria-pressed={selected} className={`min-h-14 rounded-xl px-1 py-2 text-center transition ${selected ? "bg-[var(--color-primary)] text-white" : "text-[var(--color-ink)] hover:bg-[var(--color-primary-light)]"}`}><span className={`block text-[10px] font-semibold uppercase ${selected ? "text-blue-100" : "text-[var(--color-muted)]"}`}>{date.day}</span><span className="mt-1 block text-sm font-semibold">{date.number}</span></button>; })}</div></div><div className="mt-5"><p className="text-sm font-semibold text-[var(--color-ink)]">Available preferred times for {selectedDateLabel?.day}, {selectedDateLabel?.month} {selectedDateLabel?.number}</p><p className="mt-1 text-xs text-[var(--color-muted)]">9:00–11:00 AM and 1:00–4:00 PM</p><div className={`mt-3 grid grid-cols-2 gap-2 transition-opacity ${loadingAvailability ? "opacity-50" : ""}`}>{availableTimes.map((time) => { const selected = selectedTime === time; return <button key={time} type="button" disabled={loadingAvailability} onClick={() => { setSelectedTime(time); setErrors((current) => current.filter((item) => item !== "time")); }} aria-pressed={selected} className={`inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-semibold transition disabled:cursor-not-allowed ${selected ? "border-[var(--color-primary)] bg-blue-50 text-[var(--color-primary)] ring-2 ring-blue-100" : "border-[var(--color-border)] bg-white text-[var(--color-ink)] hover:border-[var(--color-primary)]"}`}><Clock3 size={15} />{time}</button>; })}</div></div>{errors.includes("time") && <p className="mt-4 text-sm font-medium text-[var(--color-accent-red)]" role="alert">Choose a date and preferred time to continue.</p>}<button type="submit" disabled={submitting} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Sending…" : "Submit discovery request"} <ArrowRight size={17} /></button>{errors.some((error) => error !== "time") && <p className="mt-4 text-sm font-medium text-[var(--color-accent-red)]" role="alert">Please complete the required questions before submitting.</p>}{submitError && <p className="mt-4 text-sm font-medium text-[var(--color-accent-red)]" role="alert">{submitError}</p>}</section>
  </div></form>;
}
