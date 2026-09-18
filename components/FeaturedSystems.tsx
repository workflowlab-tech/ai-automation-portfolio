import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { idolFairiesProject, getProject } from "@/data/projects";
import FadeIn from "./FadeIn";
import ProjectVisual from "./projects/ProjectVisual";

const featured = [idolFairiesProject, getProject("ghl-idol-air-lead-to-job")!, getProject("personal-income-expense")!];

export default function FeaturedSystems() {
  return (
    <section className="bg-[var(--color-surface-alt)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
              Featured Systems
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              Selected Business Systems
            </h2>
            <p className="mt-4 text-[var(--color-body)]">
              Selected systems across e-commerce, client operations, and finance automation.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 space-y-16 lg:space-y-24">
          {featured.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 80}>
              <article className="grid items-center gap-8 border-t border-[var(--color-border)] pt-10 lg:grid-cols-2 lg:gap-14 lg:pt-14">
                <div className={i % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                  <ProjectVisual visual={project.previewVisual} className="[&>figcaption]:hidden" />
                </div>
                <div className={`flex flex-col ${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-body)]">
                    {project.overview}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tools.slice(0, 4).map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-[var(--color-accent-cyan-light)] px-3 py-1.5 text-xs font-medium text-[var(--color-accent-cyan)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <Link
                      href={project.viewProjectHref}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                    >
                      View project <ArrowRight size={14} />
                    </Link>
                    {project.demo.available ? (
                      <a
                        href={project.demo.videoSrc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        <PlayCircle size={14} /> Watch demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
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
