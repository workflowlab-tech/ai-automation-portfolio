import Link from "next/link";
import { ArrowDown, ArrowRight, Check, FileInput, LineChart, Workflow } from "lucide-react";
import { heroCopy } from "@/data/site";
import FadeIn from "./FadeIn";

const proofPoints = ["Accounting Background", "E-commerce Operations", "Working Demos"];

const processStages = [
  {
    icon: FileInput,
    label: "Work Coming In",
    detail: "Emails, receipts, orders",
    tone: "bg-amber-50 text-amber-700",
  },
  {
    icon: Workflow,
    label: "Rules Doing the Work",
    detail: "Capture, check, route",
    tone: "bg-blue-50 text-blue-700",
  },
  {
    icon: LineChart,
    label: "Clear Business Output",
    detail: "Clean records, useful reporting",
    tone: "bg-emerald-50 text-emerald-700",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-blue-100 bg-[var(--color-surface-alt)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-blue-100/60 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
        <div>
          <FadeIn>
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-1.5 text-sm font-semibold text-[var(--color-primary)]">
              {heroCopy.eyebrow}
            </span>
          </FadeIn>

          <FadeIn delay={80}>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-6xl sm:leading-[1.06]">
              {heroCopy.headline}
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-body)]">
              {heroCopy.subhead}
            </p>
          </FadeIn>

          <FadeIn delay={220}>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {proofPoints.map((point) => (
                <span key={point} className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]">
                  <Check size={15} className="text-[var(--color-primary)]" />
                  {point}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={280}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={heroCopy.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-primary-dark)]"
              >
                {heroCopy.primaryCta.label}
                <ArrowRight size={18} />
              </Link>
              <Link
                href={heroCopy.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-7 py-3.5 text-base font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                {heroCopy.secondaryCta.label}
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={180}>
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-4 -rotate-2 rounded-[2rem] bg-blue-100/70" aria-hidden />
            <div className="relative rounded-[1.75rem] border border-blue-100 bg-white p-5 shadow-xl shadow-blue-100/60 sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">Process Map</p>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-ink)]">From Scattered Work to a Usable System</p>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgb(209_250_229)]" />
              </div>

              <div className="mt-5 space-y-3">
                {processStages.map((stage, index) => {
                  const Icon = stage.icon;
                  return (
                    <div key={stage.label}>
                      <div className="grid grid-cols-[auto_1fr] items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                        <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${stage.tone}`}>
                          <Icon size={21} />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-[var(--color-ink)]">{stage.label}</p>
                          <p className="mt-0.5 text-sm text-[var(--color-body)]">{stage.detail}</p>
                        </div>
                      </div>
                      {index < processStages.length - 1 ? (
                        <ArrowDown size={16} className="mx-auto my-1 text-blue-400" aria-hidden />
                      ) : null}
                    </div>
                  );
                })}
              </div>

              <p className="mt-5 rounded-xl bg-[var(--color-ink)] px-4 py-3 text-center text-sm font-medium text-white">
                Less chasing. Fewer errors. A clearer view of the work.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
