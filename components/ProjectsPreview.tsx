import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import FadeIn from "./FadeIn";
import ProjectPreviewCard from "./projects/ProjectPreviewCard";

export default function ProjectsPreview() {
  return (
    <section className="bg-[var(--color-surface-alt)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
              Projects
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              Standalone automation builds
            </h2>
            <p className="mt-4 text-[var(--color-body)]">
              Smaller builds alongside the Idol Fairies flagship — each one a real problem and a
              working, tested n8n workflow.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 space-y-8">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 80}>
              <ProjectPreviewCard project={project} />
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
