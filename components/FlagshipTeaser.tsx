import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, Info, Maximize2, PlayCircle } from "lucide-react";
import { proofBanner } from "@/data/caseStudy";
import FadeIn from "./FadeIn";
import WorkflowDetailsToggle from "./projects/WorkflowDetailsToggle";

const journeySteps = [
  "Storefront",
  "Orders",
  "Sales Processing",
  "Inventory",
  "Finance Operations",
  "AI Support",
  "Reporting",
];

export default function FlagshipTeaser() {
  return (
    <section className="bg-[var(--color-surface-alt)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-sm">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="bg-[var(--color-surface-alt)] p-6 sm:p-8 lg:p-10">
                <figure>
                  <a
                    href="/screenshots/storefront/home.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-video overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm"
                    aria-label="Open full-size image: Idol Fairies storefront homepage"
                  >
                    <Image
                      src="/screenshots/storefront/home.png"
                      alt="Idol Fairies storefront homepage"
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)]/90 px-3 py-2 text-xs font-semibold text-white shadow-sm transition-transform group-hover:scale-[1.03]">
                      <Maximize2 size={14} />
                      Click to view full size
                    </span>
                  </a>
                  <figcaption className="mt-3 text-sm font-medium text-[var(--color-body)]">
                    Real Idol Fairies storefront
                  </figcaption>
                </figure>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-white px-5 py-4">
                    <Info size={18} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
                    <p className="text-sm leading-6 text-[var(--color-body)]">
                      <strong className="font-semibold text-[var(--color-ink)]">Self-directed portfolio/demo project.</strong>{" "}
                      Built with realistic simulated business data.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl bg-[var(--color-accent-green-light)] px-5 py-4">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--color-accent-green)]" />
                    <p className="text-sm leading-6 text-[var(--color-ink)]">
                      <strong className="font-semibold">{proofBanner.headline}</strong>{" "}
                      <span className="text-[var(--color-body)]">({proofBanner.date})</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
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
                  layer, with an AI assistant answering questions from the same project data.
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
            </div>

            <div className="border-t border-[var(--color-border)] bg-white px-6 py-8 sm:px-8 lg:px-10">
              <WorkflowDetailsToggle id="idol-fairies" steps={journeySteps} />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
