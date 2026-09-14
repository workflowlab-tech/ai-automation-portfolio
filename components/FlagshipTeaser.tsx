import Link from "next/link";
import { ArrowRight, ExternalLink, PlayCircle } from "lucide-react";
import { idolFairiesProject } from "@/data/projects";
import FadeIn from "./FadeIn";
import BestForBand from "./projects/BestForBand";
import ProjectVisual from "./projects/ProjectVisual";
import ToolStack from "./projects/ToolStack";
import WorkflowDetailsToggle from "./projects/WorkflowDetailsToggle";

const journeySteps = [
  "Live Catalog",
  "Guest Checkout",
  "Shipping Estimate",
  "GCash / GoTyme",
  "Payment Review",
  "Fulfillment & Tracking",
  "Referral Rewards",
];

export default function FlagshipTeaser() {
  return (
    <section className="bg-[var(--color-surface-alt)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
              Flagship Project
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              One Customer Journey, One Connected Operating System
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-body)]">
              Idol Fairies Beauty connects a Korean beauty storefront with payments, delivery, referrals, support, and daily operations.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="border-b border-[var(--color-border)] bg-blue-50/50 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                <ProjectVisual visual={idolFairiesProject.previewVisual} />
                {idolFairiesProject.liveSiteHref ? (
                  <a
                    href={idolFairiesProject.liveSiteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                  >
                    Visit live website <ExternalLink size={16} />
                  </a>
                ) : null}
                <div className="mt-6">
                  <BestForBand items={idolFairiesProject.bestFor} />
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                    {idolFairiesProject.category}
                  </span>
                  <span className="rounded-full bg-[var(--color-accent-cyan-light)] px-2.5 py-1 text-xs font-medium text-[var(--color-accent-cyan)]">
                    {idolFairiesProject.workflowCountLabel}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
                  {idolFairiesProject.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[var(--color-body)]">
                  {idolFairiesProject.overview}
                </p>

                <div className="mt-5">
                  <ToolStack tools={idolFairiesProject.tools} compact />
                </div>

                <div className="mt-6 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
                  <div className="grid gap-1 py-3.5 sm:grid-cols-[5.5rem_1fr] sm:gap-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-red)]">Problem</p>
                    <p className="text-sm leading-6 text-[var(--color-ink)]">{idolFairiesProject.problem}</p>
                  </div>
                  <div className="grid gap-1 py-3.5 sm:grid-cols-[5.5rem_1fr] sm:gap-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">Solution</p>
                    <p className="text-sm leading-6 text-[var(--color-ink)]">{idolFairiesProject.solution}</p>
                  </div>
                  <div className="grid gap-1 py-3.5 sm:grid-cols-[5.5rem_1fr] sm:gap-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-green)]">Result</p>
                    <p className="text-sm leading-6 text-[var(--color-ink)]">{idolFairiesProject.result}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[var(--color-border)] bg-white px-6 py-8 sm:px-8 lg:px-10">
              <div className="flex flex-wrap justify-center gap-3">
                {idolFairiesProject.demo.available ? (
                  <a
                    href={idolFairiesProject.demo.videoSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] sm:w-auto sm:min-w-44"
                  >
                    <PlayCircle size={16} /> Watch demo
                  </a>
                ) : null}
                <Link
                  href={idolFairiesProject.viewProjectHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)] sm:w-auto sm:min-w-44"
                >
                  View project <ArrowRight size={16} />
                </Link>
              </div>
              <div className="mt-5">
                <WorkflowDetailsToggle id="idol-fairies" steps={journeySteps} />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
