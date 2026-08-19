import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroCopy } from "@/data/site";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface-alt)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-96 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-light),_transparent_70%)]"
      />
      <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:py-32">
        <FadeIn>
          <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-white px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
            {heroCopy.eyebrow}
          </span>
        </FadeIn>

        <FadeIn delay={80}>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
            {heroCopy.headline}
          </h1>
        </FadeIn>

        <FadeIn delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-body)]">
            {heroCopy.subhead}
          </p>
        </FadeIn>

        <FadeIn delay={240}>
          <div className="mt-10 mb-8 flex flex-col items-center justify-center gap-4 sm:mb-0 sm:flex-row">
            <Link
              href={heroCopy.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              {heroCopy.primaryCta.label}
              <ArrowRight size={18} />
            </Link>
            <Link
              href={heroCopy.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-7 py-3.5 text-base font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              {heroCopy.secondaryCta.label}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
