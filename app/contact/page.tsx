import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Clock, FileText, Mail, Search, Send } from "lucide-react";
import { site } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import GithubIcon from "@/components/icons/GithubIcon";

export const metadata: Metadata = {
  title: "Contact — MJ Ablanque",
  description: "Share a finance or e-commerce process and get a practical next step for improving or automating it.",
};

const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Process or automation inquiry"
)}&body=${encodeURIComponent(
  "Hi Mary Joyce,\n\nThe process today:\n\nWhere it slows us down:\n\nTools involved:\n\nWhat a better outcome would look like:\n\n"
)}`;

const usefulDetails = [
  { number: "01", title: "The Process Today", body: "A short step-by-step description is enough." },
  { number: "02", title: "The friction", body: "Where time, errors, follow-ups, or duplicate work appear." },
  { number: "03", title: "The Tools and Outcome", body: "What you use now and what should become easier." },
];

const nextSteps = [
  { icon: Search, title: "I Review the Process", body: "I look for the real bottleneck, not just the most visible task." },
  { icon: CheckCircle2, title: "You Get an Honest Fit Check", body: "I’ll say whether automation, process cleanup, or neither is the right move." },
  { icon: Send, title: "We Choose a Practical Next Step", body: "If there’s a fit, we define the smallest useful system to build first." },
];

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">Start a Conversation</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-[var(--color-ink)] sm:text-5xl sm:leading-[1.08]">
              Bring Me the Process That Keeps Slowing Your Team Down.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-body)]">
              Share what happens today, where it gets stuck, and what a better outcome would look like. I’ll help identify the clearest practical next step.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Finance operations", "E-commerce systems", "n8n + AI workflows"].map((focus) => (
                <span key={focus} className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-[var(--color-ink)]">
                  {focus}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="rounded-3xl bg-[var(--color-ink)] p-8 text-white shadow-xl shadow-blue-200/60 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Start Here</span>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Send the Process. I’ll Help Clarify the Opportunity.</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Your email opens with a short prompt, so you don’t need to prepare a formal brief.
              </p>
              <a
                href={mailtoHref}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-blue-500"
              >
                <Mail size={18} /> Email Mary Joyce <ArrowRight size={18} />
              </a>
              <p className="mt-5 text-center text-sm text-slate-300">{site.email}</p>
              <p className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
                <Clock size={14} /> Usually replies within 1–2 business days
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">A Useful First Message</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)]">Three Details Are Enough to Begin.</h2>
            </div>
            <div className="border-t border-[var(--color-border)]">
              {usefulDetails.map((item) => (
                <div key={item.number} className="grid gap-3 border-b border-[var(--color-border)] py-6 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:items-start">
                  <span className="text-sm font-bold text-[var(--color-primary)]">{item.number}</span>
                  <h3 className="font-semibold text-[var(--color-ink)]">{item.title}</h3>
                  <p className="text-sm leading-6 text-[var(--color-body)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="bg-[var(--color-surface-alt)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">What Happens Next</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)]">A Clear Conversation Before Any Build.</h2>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {nextSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.title} delay={index * 70}>
                  <article className="border-t-2 border-blue-200 pt-6">
                    <Icon size={22} className="text-[var(--color-primary)]" />
                    <h3 className="mt-4 text-lg font-semibold text-[var(--color-ink)]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-body)]">{step.body}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={180}>
            <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:items-center">
              <p className="text-sm text-[var(--color-body)]">Want more context before reaching out?</p>
              <div className="flex flex-wrap gap-5">
                <a href={site.resumeHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline">
                  <FileText size={16} /> Download resume
                </a>
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline">
                  <GithubIcon size={16} /> View GitHub
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
