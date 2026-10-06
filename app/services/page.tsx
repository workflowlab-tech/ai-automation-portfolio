import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, FileText, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import {
  carePlans,
  faqs,
  guarantees,
  included,
  offers,
  steps,
  type IndustryOffer,
  type Tier,
} from "@/data/offers";

export const metadata: Metadata = {
  title: "Services — MJ Ablanque",
  description:
    "GoHighLevel lead follow-up packages for home services, skin clinics and real estate agencies, plus custom finance, order and AI support workflows built in n8n. Mapped, tested and handed over documented.",
  alternates: { canonical: "https://portfolio.workflowlab.site/services" },
};

const AUDIT_HREF = "/contact#booking-flow";

const otherWork = [
  {
    title: "Orders, stock and finance",
    body: "Receipts, invoices and payments captured once, duplicates blocked, and owner approval kept where money moves.",
    tools: "n8n · Supabase · Google Sheets",
    proof: [
      { label: "Idol Fairies", href: "/idol-fairies" },
      { label: "Personal Income & Expense", href: "/projects/personal-income-expense" },
    ],
  },
  {
    title: "AI customer assistant",
    body: "Answers from your approved product and policy information, and hands the conversation to a person when it can't verify.",
    tools: "n8n · Gemini · Messenger via GoHighLevel",
    proof: [
      { label: "Idol Fairies Beauty", href: "/idol-fairies-beauty" },
      { label: "Portfolio AI Agent", href: "/projects/portfolio-ai-agent" },
    ],
  },
];

const enquiryTimeline = [
  { time: "9:47:02 pm", text: "Enquiry submitted on the website" },
  { time: "9:47:04 pm", text: "Customer gets a text and an email with your booking link" },
  { time: "9:47:05 pm", text: "You get an alert with their name, phone and what they need" },
  { time: "Day 1, 3, 6", text: "Follow-ups go out until they book or reply" },
];

function TierCard({ tier }: { tier: Tier }) {
  const featured = tier.featured;
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-7 ${
        featured
          ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
          : "border-[var(--color-border)] bg-white"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className={`text-sm font-semibold ${featured ? "text-blue-300" : "text-[var(--color-primary)]"}`}>
          {tier.name}
        </p>
        {featured ? (
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
            Most complete
          </span>
        ) : null}
      </div>
      <h4 className={`mt-1 text-xl font-semibold ${featured ? "text-white" : "text-[var(--color-ink)]"}`}>
        {tier.label}
      </h4>
      <p className="mt-5 flex flex-wrap items-baseline gap-x-2">
        {tier.from ? (
          <span className={`text-sm font-medium ${featured ? "text-slate-300" : "text-[var(--color-muted)]"}`}>From</span>
        ) : null}
        <span className="text-4xl font-semibold tracking-tight">{tier.price}</span>
        <span className={`text-sm ${featured ? "text-slate-300" : "text-[var(--color-muted)]"}`}>
          USD · {tier.priceNote}
        </span>
      </p>
      <p className={`mt-1 text-sm font-medium ${featured ? "text-slate-300" : "text-[var(--color-body)]"}`}>
        {tier.delivery}
      </p>
      <p className={`mt-5 border-t pt-5 text-base font-medium leading-7 ${featured ? "border-white/15 text-white" : "border-[var(--color-border)] text-[var(--color-ink)]"}`}>
        {tier.outcome}
      </p>
      <ul className="mt-4 flex-1 space-y-3">
        {tier.items.map((item) => (
          <li key={item} className={`flex gap-3 text-sm leading-6 ${featured ? "text-slate-200" : "text-[var(--color-body)]"}`}>
            <Check size={16} className={`mt-1 shrink-0 ${featured ? "text-blue-300" : "text-[var(--color-accent-green)]"}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={AUDIT_HREF}
        className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
          featured
            ? "bg-white text-[var(--color-ink)] hover:bg-blue-50"
            : "border border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
        }`}
      >
        {tier.name === "Premium" ? "Talk about Premium" : `Start with ${tier.name}`}
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}

function IndustrySection({ offer, index }: { offer: IndustryOffer; index: number }) {
  return (
    <section id={offer.id} className={`scroll-mt-24 py-20 ${index % 2 === 0 ? "bg-white" : "bg-[var(--color-surface-alt)]"}`}>
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
                {offer.industry}
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                {offer.promise}
              </h3>
              <p className="mt-3 text-[var(--color-body)]">For {offer.who}.</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-ink)]">Where leads usually leak</p>
              <ul className="mt-3 space-y-2">
                {offer.leaks.map((leak) => (
                  <li key={leak} className="flex gap-3 text-sm text-[var(--color-body)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-red)]" />
                    {leak}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {offer.tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 60} className="h-full">
              <TierCard tier={tier} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <span className="text-[var(--color-muted)]">See it working first:</span>
          <Link href={offer.caseStudyHref} className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)]">
            {offer.demoName} demo <ArrowRight size={14} />
          </Link>
          <a href={offer.qaReportHref} className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)]">
            <FileText size={14} /> Test report (.docx)
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
              GoHighLevel systems for service businesses
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-[var(--color-ink)] sm:text-5xl sm:leading-[1.08]">
              Every enquiry answered in seconds. Every quote followed up. Live in 7 days.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-body)]">
              I install a tested lead-to-booking system inside your own GoHighLevel account, built for your industry.
              Fixed price, and you pay the second half only after it passes a live test on your number.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={AUDIT_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
              >
                Book a free missed-lead audit <ArrowRight size={18} />
              </Link>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-7 py-3.5 text-base font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
              >
                See packages and prices
              </a>
            </div>
            <p className="mt-4 text-sm text-[var(--color-muted)]">15 minutes. You leave with a list of where enquiries slip through, whether or not you buy.</p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6 sm:p-8">
              <p className="text-sm font-semibold text-[var(--color-ink)]">An enquiry at 9:47 pm, with the system in place</p>
              <ol className="mt-6 space-y-5">
                {enquiryTimeline.map((row) => (
                  <li key={row.time} className="grid grid-cols-[6.5rem_1fr] gap-4 text-sm">
                    <span className="font-mono text-xs leading-6 text-[var(--color-primary)]">{row.time}</span>
                    <span className="leading-6 text-[var(--color-body)]">{row.text}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-[var(--color-border)] pt-5 text-sm text-[var(--color-muted)]">
                Nobody on your team had to pick up the phone.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Non-GHL work */}
      <section id="other-work" className="scroll-mt-20 border-b border-[var(--color-border)] bg-[var(--color-surface-alt)] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
                  Not a GoHighLevel project?
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
                  I also build finance, order and AI support workflows.
                </h2>
                <p className="mt-3 text-base leading-7 text-[var(--color-body)]">
                  Same way of working: I map the process, build it in your tools, test the cases that usually break,
                  and hand it over documented. Fixed quote after a short call.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary)]"
              >
                Send me the process <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {otherWork.map((item, i) => (
              <FadeIn key={item.title} delay={i * 60} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-white p-7">
                  <h3 className="text-xl font-semibold text-[var(--color-ink)]">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[var(--color-body)]">{item.body}</p>
                  <p className="mt-4 text-xs font-medium text-[var(--color-muted)]">{item.tools}</p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--color-border)] pt-4 text-sm">
                    <span className="text-[var(--color-muted)]">See it built:</span>
                    {item.proof.map((p) => (
                      <Link key={p.href} href={p.href} className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)]">
                        {p.label} <ArrowRight size={14} />
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Founding offer */}
      <section id="pricing" className="scroll-mt-20 bg-[var(--color-ink)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">Founding client pricing</p>
            <p className="mt-2 text-lg leading-8 text-white">
              The first 3 clients in each industry get these prices. After that they go up about 25%.
              I&apos;m new to selling this, not to building it: each industry has a working, tested demo you can see first.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {offers.map((offer) => (
              <a
                key={offer.id}
                href={`#${offer.id}`}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white"
              >
                {offer.industry}
              </a>
            ))}
          </div>
        </div>
      </section>

      {offers.map((offer, i) => (
        <IndustrySection key={offer.id} offer={offer} index={i} />
      ))}

      {/* Risk reversal */}
      <section className="border-t border-[var(--color-border)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="flex items-center gap-3">
              <ShieldCheck size={22} className="text-[var(--color-accent-green)]" />
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                The risk sits with me, not you.
              </h2>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {guarantees.map((g, i) => (
              <FadeIn key={g.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-[var(--color-border)] p-7">
                  <h3 className="text-lg font-semibold text-[var(--color-ink)]">{g.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-body)]">{g.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-ink)]">Included with every package</h3>
                <ul className="mt-4 space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--color-body)]">
                      <Check size={16} className="mt-1 shrink-0 text-[var(--color-accent-green)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-ink)]">From yes to live</h3>
                <ol className="mt-4 space-y-4">
                  {steps.map((step) => (
                    <li key={step.day} className="grid grid-cols-[5.5rem_1fr] gap-4 text-sm">
                      <span className="font-semibold text-[var(--color-primary)]">{step.day}</span>
                      <span className="leading-6 text-[var(--color-body)]">
                        <span className="font-semibold text-[var(--color-ink)]">{step.title}.</span> {step.body}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-xs text-[var(--color-muted)]">Starter timeline shown. Growth takes about 14 business days.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Care plans */}
      <section className="bg-[var(--color-surface-alt)] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">Optional monthly care</h2>
            <p className="text-sm text-[var(--color-muted)]">Not required. Month to month, cancel any time. Extra work $45/h, quoted first.</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {carePlans.map((plan) => (
              <div key={plan.name} className="rounded-xl border border-[var(--color-border)] bg-white p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-semibold text-[var(--color-ink)]">{plan.name}</p>
                  <p className="text-sm font-semibold text-[var(--color-ink)]">{plan.price} <span className="font-normal text-[var(--color-muted)]">USD</span></p>
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--color-body)]">{plan.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)]">Questions owners ask</h2>
          <div className="mt-8 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[var(--color-ink)]">
                  {faq.q}
                  <span className="text-xl font-normal text-[var(--color-muted)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-[var(--color-body)]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-[var(--color-ink)] px-8 py-14 text-center sm:px-16">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Find out how many enquiries you&apos;re losing this month.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            A free 15-minute audit of how enquiries reach you today and where they go quiet. No pitch unless you ask for one.
          </p>
          <Link
            href={AUDIT_HREF}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
          >
            Book the free audit <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
