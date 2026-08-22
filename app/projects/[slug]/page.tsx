import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, PlayCircle } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import ProjectHeader from "@/components/projects/ProjectHeader";
import BestForBand from "@/components/projects/BestForBand";
import ProjectVisual from "@/components/projects/ProjectVisual";
import TestingTable from "@/components/projects/TestingTable";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — MJ Ablanque`,
    description: project.overview,
  };
}

export default async function ProjectDetailPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div>
      <ProjectHeader project={project} />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-[var(--color-accent-red-light)] p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-red)]">
                Problem
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[var(--color-ink)]">{project.problem}</p>
            </div>
            <div className="rounded-2xl bg-[var(--color-accent-blue-light)] p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                Solution
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[var(--color-ink)]">{project.solution}</p>
            </div>
            <div className="rounded-2xl bg-[var(--color-accent-green-light)] p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-green)]">
                Result
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[var(--color-ink)]">{project.result}</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={80} className="mt-6">
          <BestForBand items={project.bestFor} />
        </FadeIn>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
            How the system works
          </h2>
        </FadeIn>

        <FadeIn delay={80} className="mt-8">
          <ol className="space-y-4">
            {project.howItWorks.shared.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <p className="text-[15px] leading-7 text-[var(--color-body)]">{step}</p>
              </li>
            ))}
          </ol>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {project.howItWorks.branches.map((branch, i) => (
            <FadeIn key={branch.label} delay={100 + i * 80}>
              <div className="h-full rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-[var(--color-ink)]">{branch.label}</p>
                <ul className="mt-3 space-y-2.5">
                  {branch.steps.map((step) => (
                    <li key={step} className="flex gap-2 text-sm leading-6 text-[var(--color-body)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-muted)]" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
            Demo
          </h2>
        </FadeIn>
        <FadeIn delay={80} className="mt-6">
          {project.demo.available ? (
            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-ink)] shadow-sm">
              <video controls preload="none" poster={project.demo.posterSrc} className="aspect-video w-full">
                <source
                  src={project.demo.videoSrc}
                  type="video/mp4"
                />
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

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
            Screenshots &amp; outputs
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--color-body)]">
            Both workflows shown below — Income and Expense follow the same pattern with different rules.
          </p>
        </FadeIn>
        <FadeIn delay={80} className="mt-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {project.screenshots.map((shot) => (
              <ProjectVisual key={shot.label} visual={shot} />
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
            Testing &amp; reliability
          </h2>
        </FadeIn>
        <FadeIn delay={80} className="mt-8">
          <TestingTable rows={project.testing} summary={project.testingSummary} />
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <FadeIn>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-[var(--color-ink)] px-8 py-14 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-semibold text-white">Have a similar process to automate?</h2>
              <p className="mt-2 max-w-xl text-slate-300">Tell me what it looks like today.</p>
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
