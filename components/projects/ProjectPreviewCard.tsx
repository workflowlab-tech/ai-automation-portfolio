import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import type { Project } from "@/data/projects";
import BestForBand from "./BestForBand";
import WorkflowDetailsToggle from "./WorkflowDetailsToggle";
import ProjectVisual from "./ProjectVisual";

export default function ProjectPreviewCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-sm">
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="bg-[var(--color-surface-alt)] p-6 sm:p-8 lg:p-10">
          <ProjectVisual visual={project.previewVisual} />
          <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">{project.previewVisualNote}</p>

          <div className="mt-6">
            <BestForBand items={project.bestFor} />
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
              {project.category}
            </span>
            {project.workflowCountLabel && (
              <span className="rounded-full bg-[var(--color-accent-cyan-light)] px-2.5 py-1 text-xs font-medium text-[var(--color-accent-cyan)]">
                {project.workflowCountLabel}
              </span>
            )}
          </div>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-[var(--color-body)]">{project.overview}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-2.5 py-1 text-xs font-medium text-[var(--color-body)]"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-[var(--color-accent-red-light)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-red)]">
                Problem
              </p>
              <p className="mt-1.5 text-sm leading-6 text-[var(--color-ink)]">{project.problem}</p>
            </div>
            <div className="rounded-xl bg-[var(--color-accent-blue-light)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                Solution
              </p>
              <p className="mt-1.5 text-sm leading-6 text-[var(--color-ink)]">{project.solution}</p>
            </div>
            <div className="rounded-xl bg-[var(--color-accent-green-light)] p-4 sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-green)]">
                Result
              </p>
              <p className="mt-1.5 text-sm leading-6 text-[var(--color-ink)]">{project.result}</p>
            </div>
          </div>

          <WorkflowDetailsToggle id={project.slug} steps={project.workflowFlow}>
            {project.demo.available ? (
              <a
                href={project.demo.videoSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                <PlayCircle size={16} /> Watch Demo
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-muted)]">
                <PlayCircle size={16} /> Demo coming soon
              </span>
            )}
            <Link
              href={project.viewProjectHref}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              View Project <ArrowRight size={16} />
            </Link>
          </WorkflowDetailsToggle>
        </div>
      </div>
    </div>
  );
}
