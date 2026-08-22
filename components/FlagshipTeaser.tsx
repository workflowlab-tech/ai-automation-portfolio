import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, PlayCircle } from "lucide-react";
import { proofBanner } from "@/data/caseStudy";
import FadeIn from "./FadeIn";

const journeySteps = [
  "Storefront",
  "Orders",
  "Sales processing",
  "Inventory & finance",
  "AI support",
  "Reporting",
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
                    Flagship Project
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

                <p className="mt-6 text-sm font-medium text-[var(--color-accent-green)]">
                  {proofBanner.headline} · {proofBanner.date}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://idolfairies.workflowlab.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                  >
                    Visit Live Website <ExternalLink size={16} />
                  </a>
                  <a
                    href="/videos/idol-fairies-demo.mp4"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  >
                    <PlayCircle size={16} /> Watch Demo
                  </a>
                  <Link
                    href="/idol-fairies"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  >
                    View Full Project <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[280px] bg-[var(--color-ink)] lg:min-h-full">
                <Image
                  src="/screenshots/storefront/home.png"
                  alt="Idol Fairies storefront homepage"
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
