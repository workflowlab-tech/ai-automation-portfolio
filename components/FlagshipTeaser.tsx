import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Maximize2, PlayCircle } from "lucide-react";
import { idolFairiesProject } from "@/data/projects";
import FadeIn from "./FadeIn";
import WorkflowDetailsToggle from "./projects/WorkflowDetailsToggle";

const journeySteps = [
  "Storefront",
  "AI Support",
  "Orders",
  "Sales Processing",
  "Inventory",
  "Finance Operations",
  "Reporting",
];

const story = [
  { label: "Problem", body: idolFairiesProject.problem, tone: "text-rose-600" },
  { label: "Solution", body: idolFairiesProject.solution, tone: "text-blue-600" },
  { label: "Result", body: idolFairiesProject.result, tone: "text-emerald-600" },
];

export default function FlagshipTeaser() {
  return (
    <section className="bg-[var(--color-surface-alt)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">Flagship case study</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              One customer journey, one connected operating system
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-body)]">
              Idol Fairies shows how a live storefront can share reliable data with support, operations, finance, and reporting.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-sm">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="border-b border-[var(--color-border)] bg-blue-50/50 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                <a
                  href="/screenshots/storefront/home.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-video overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-md shadow-blue-100/60"
                  aria-label="Open full-size image: Idol Fairies storefront homepage"
                >
                  <Image
                    src="/screenshots/storefront/home.png"
                    alt="Idol Fairies storefront homepage"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 52vw, 100vw"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)]/90 px-3 py-2 text-xs font-semibold text-white shadow-sm transition-transform group-hover:scale-[1.03]">
                    <Maximize2 size={14} /> View full size
                  </span>
                </a>
                <a
                  href={idolFairiesProject.liveSiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                >
                  Visit live website <ExternalLink size={16} />
                </a>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <Image
                    src="/brand/idol-fairies-logo.jpg"
                    alt="Idol Fairies logo"
                    width={44}
                    height={44}
                    className="rounded-xl border border-slate-100"
                  />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary)]">Connected commerce system</p>
                    <h3 className="mt-0.5 text-2xl font-semibold text-[var(--color-ink)]">Idol Fairies</h3>
                  </div>
                </div>

                <p className="mt-5 text-lg leading-8 text-[var(--color-body)]">{idolFairiesProject.overview}</p>

                <div className="mt-7 divide-y divide-slate-100 border-y border-slate-100">
                  {story.map((item) => (
                    <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-[5.5rem_1fr] sm:gap-4">
                      <p className={`text-xs font-bold uppercase tracking-[0.13em] ${item.tone}`}>{item.label}</p>
                      <p className="text-sm leading-6 text-[var(--color-ink)]">{item.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/videos/idol-fairies-demo.mp4"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  >
                    <PlayCircle size={16} /> Watch demo
                  </a>
                  <Link
                    href="/idol-fairies"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
                  >
                    View full project <ArrowRight size={16} />
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
