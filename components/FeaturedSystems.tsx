import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { idolFairiesProject, getProject } from "@/data/projects";
import FadeIn from "./FadeIn";
import ProjectVisual from "./projects/ProjectVisual";

const featuredSlugs = ["ghl-idol-air-lead-to-job", "idol-fairies-beauty", "personal-income-expense"];

const featured = [idolFairiesProject, ...featuredSlugs.map((slug) => getProject(slug)!)];

export default function FeaturedSystems() {
  return (
    <section className="bg-[var(--color-surface-alt)] py-24">
      <div className="mx-auto max-w-[82rem] px-6">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
              Featured Systems
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              Selected Business Systems
            </h2>
            <p className="mt-4 text-[var(--color-body)]">
              Four systems that show the range: connected e-commerce and finance, CRM lead-to-job automation,
              and document-driven finance capture.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 80}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
                <div className="p-4">
                  <ProjectVisual visual={project.previewVisual} />
                </div>
                <div className="flex flex-1 flex-col px-5 pb-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold leading-6 text-[var(--color-ink)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-[var(--color-body)]">
                    {project.overview}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 4).map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-[var(--color-accent-cyan-light)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-accent-cyan)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-col gap-2">
                    <Link
                      href={project.viewProjectHref}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                    >
                      View project <ArrowRight size={14} />
                    </Link>
                    {project.demo.available ? (
                      <a
                        href={project.demo.videoSrc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-xs font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                      >
                        <PlayCircle size={14} /> Watch demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={120}>
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              See all projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
