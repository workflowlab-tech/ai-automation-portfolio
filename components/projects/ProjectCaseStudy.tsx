import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import type { Project } from "@/data/projects";
import FadeIn from "../FadeIn";
import BestForBand from "./BestForBand";
import ProjectHeader from "./ProjectHeader";
import ProjectVisual from "./ProjectVisual";
import TestingTable from "./TestingTable";

export default function ProjectCaseStudy({
  project,
  systemVisual,
  showcase,
}: {
  project: Project;
  systemVisual?: ReactNode;
  showcase?: ReactNode;
}) {
  return (
    <div>
      <ProjectHeader project={project} />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-3">
            <article className="rounded-2xl border border-red-100 bg-[var(--color-accent-red-light)] p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-red)]">
                Problem
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[var(--color-ink)]">{project.problem}</p>
            </article>
            <article className="rounded-2xl border border-blue-100 bg-[var(--color-accent-blue-light)] p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                Solution
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[var(--color-ink)]">{project.solution}</p>
            </article>
            <article className="rounded-2xl border border-green-100 bg-[var(--color-accent-green-light)] p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-green)]">
                Result
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[var(--color-ink)]">{project.result}</p>
            </article>
          </div>
        </FadeIn>

        <FadeIn delay={80} className="mt-6">
          <BestForBand items={project.bestFor} />
        </FadeIn>
      </section>

      <section className="border-y border-blue-100 bg-[var(--color-primary-light)]/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                Workflow overview
              </span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
                How the system works
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={80} className="mx-auto mt-8 max-w-4xl">
            <ol className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
              {project.howItWorks.shared.map((step, index) => (
                <li
                  key={step}
                  className={`flex gap-4 py-4 ${index < project.howItWorks.shared.length - 1 ? "border-b border-slate-100" : ""}`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-bold text-white shadow-sm">
                    {index + 1}
                  </span>
                  <p className="text-[15px] leading-7 text-[var(--color-body)]">{step}</p>
                </li>
              ))}
            </ol>
          </FadeIn>

          {systemVisual ? (
            <FadeIn delay={140} className="mt-10">
              {systemVisual}
            </FadeIn>
          ) : null}
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
              Demonstration
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              See the automation in action
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={80} className="mt-8">
          {project.demo.available ? (
            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-ink)] shadow-lg shadow-slate-200">
              <video controls preload="none" poster={project.demo.posterSrc} className="aspect-video w-full">
                <source src={project.demo.videoSrc} type="video/mp4" />
                Your browser doesn&rsquo;t support the embedded recording. You can{" "}
                <a href={project.demo.videoSrc} className="underline">
                  open the demo directly
                </a>
                .
              </video>
            </div>
          ) : (
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface-alt)] p-12 text-center">
              <PlayCircle size={28} strokeWidth={1.5} className="text-[var(--color-muted)]" />
              <p className="text-sm font-medium text-[var(--color-muted)]">{project.demo.note}</p>
            </div>
          )}
        </FadeIn>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface-alt)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              {project.screenshotsHeading ?? "Screenshots and outputs"}
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-[var(--color-body)]">
              {project.screenshotsDescription ??
                "Income and expense workflows follow the same dependable pattern while recording the correct transaction type."}
            </p>
          </FadeIn>
          <FadeIn delay={80} className="mt-8">
            {showcase ?? (
              <div className="grid gap-8 sm:grid-cols-2">
                {project.screenshots.map((shot) => (
                  <ProjectVisual key={shot.label} visual={shot} />
                ))}
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {project.testing.length > 0 ? (
        <section className="mx-auto max-w-4xl px-6 py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              Testing and reliability
            </h2>
          </FadeIn>
          <FadeIn delay={80} className="mt-8">
            <TestingTable rows={project.testing} summary={project.testingSummary} />
          </FadeIn>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-[var(--color-ink)] px-8 py-14 text-center shadow-xl shadow-slate-200 sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                {project.ctaTitle ?? "Have a similar process to automate?"}
              </h2>
              <p className="mt-2 max-w-xl text-slate-300">
                {project.ctaDescription ?? "Tell me what the process looks like today."}
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
