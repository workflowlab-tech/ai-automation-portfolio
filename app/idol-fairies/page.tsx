import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info, CheckCircle2 } from "lucide-react";
import { proofBanner, systemOverview } from "@/data/caseStudy";
import FadeIn from "@/components/FadeIn";
import SystemDiagram from "@/components/SystemDiagram";
import SolutionAreaTabs from "@/components/SolutionAreaTabs";

export const metadata: Metadata = {
  title: "Idol Fairies — Flagship Case Study | Mary Joyce Ablanque",
  description:
    "A working e-commerce + finance automation ecosystem: storefront, order processing, wholesale & receivables, refunds, an AI assistant, an admin dashboard, and owner reporting — built and regression-tested end to end.",
};

export default function IdolFairiesPage() {
  return (
    <div>
      <section className="bg-[var(--color-surface-alt)]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/brand/idol-fairies-logo.jpg"
                alt="Idol Fairies logo"
                width={48}
                height={48}
                className="rounded-xl"
              />
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              Idol Fairies
            </h1>
            <p className="mt-3 text-lg text-[var(--color-body)]">
              A working K-pop merch e-commerce and finance automation ecosystem — built, automated,
              and tested end to end.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white px-5 py-4 text-left">
              <Info size={18} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
              <p className="text-sm text-[var(--color-body)]">
                <strong className="font-semibold text-[var(--color-ink)]">
                  This is a portfolio/demo environment.
                </strong>{" "}
                Everything here — the storefront, orders, customers, resellers — runs on realistic
                simulated data, built specifically to demonstrate a production-grade system safely
                without exposing a live business.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={180}>
            <div className="mx-auto mt-4 flex max-w-2xl items-start gap-3 rounded-xl bg-[var(--color-accent-green-light)] px-5 py-4 text-left">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--color-accent-green)]" />
              <p className="text-sm text-[var(--color-ink)]">
                <strong className="font-semibold">{proofBanner.headline}</strong>{" "}
                <span className="text-[var(--color-body)]">
                  ({proofBanner.date}) — {proofBanner.detail}
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              One connected system, not a pile of separate automations
            </h2>
            <p className="mt-4 text-[var(--color-body)]">{systemOverview.paragraph1}</p>
            <p className="mt-3 text-[var(--color-body)]">{systemOverview.paragraph2}</p>
          </div>
        </FadeIn>

        <FadeIn delay={120} className="mt-10">
          <SystemDiagram />
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              Explore each part of the system
            </h2>
            <p className="mt-3 text-[var(--color-body)]">
              Every area below follows the same pattern: the business problem, what it does, what
              changes, and the proof — with the technical detail one click away for anyone who
              wants it.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100} className="mt-10">
          <SolutionAreaTabs />
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <FadeIn>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-[var(--color-ink)] px-8 py-14 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-semibold text-white">Want something like this for your business?</h2>
              <p className="mt-2 max-w-xl text-slate-300">
                This is what a manual process looks like once it&rsquo;s automated properly — tell
                me about yours.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              Talk to me about your process
              <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
