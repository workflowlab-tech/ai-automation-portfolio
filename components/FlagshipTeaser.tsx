import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { proofBanner } from "@/data/caseStudy";
import FadeIn from "./FadeIn";

const journeySteps = [
  "Storefront checkout / wholesale order",
  "Sales & order processing",
  "Inventory + receivables",
  "Owner reporting (Metabase)",
];

export default function FlagshipTeaser() {
  return (
    <section className="bg-[var(--color-surface-alt)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-sm">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <div className="flex items-center gap-3">
                  <Image
                    src="/brand/idol-fairies-logo.jpg"
                    alt="Idol Fairies logo"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                    Flagship case study
                  </span>
                </div>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
                  Idol Fairies: one connected e-commerce &amp; finance ecosystem
                </h2>
                <p className="mt-4 text-[var(--color-body)]">
                  Not a pile of separate automations — one pipeline. Retail checkout and wholesale
                  orders both flow into the same sales, inventory, receivables, and reporting
                  layer, with an AI assistant answering questions from the same live data.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-[var(--color-body)]">
                  {journeySteps.map((step, i) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="rounded-full bg-[var(--color-surface-alt)] px-3 py-1.5 font-medium text-[var(--color-ink)]">
                        {step}
                      </span>
                      {i < journeySteps.length - 1 && (
                        <ArrowRight size={14} className="text-[var(--color-muted)]" />
                      )}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-start gap-2 rounded-xl bg-[var(--color-accent-green-light)] px-4 py-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--color-accent-green)]" />
                  <p className="text-sm text-[var(--color-ink)]">
                    <strong className="font-semibold">{proofBanner.headline}</strong>{" "}
                    <span className="text-[var(--color-body)]">({proofBanner.date})</span>
                  </p>
                </div>

                <Link
                  href="/idol-fairies"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                >
                  View the Idol Fairies System
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="relative min-h-[280px] bg-[var(--color-ink)] lg:min-h-full">
                <Image
                  src="/screenshots/admin/overview.png"
                  alt="Idol Fairies staff admin dashboard overview"
                  fill
                  className="object-cover object-top opacity-95"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
