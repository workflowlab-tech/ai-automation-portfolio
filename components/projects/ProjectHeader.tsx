import type { Project } from "@/data/projects";

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <section className="bg-[var(--color-surface-alt)]">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            {project.category}
          </span>
          {project.workflowCountLabel && (
            <span className="rounded-full bg-[var(--color-accent-cyan-light)] px-3 py-1 text-xs font-medium text-[var(--color-accent-cyan)]">
              {project.workflowCountLabel}
            </span>
          )}
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          {project.title}
        </h1>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs font-medium text-[var(--color-body)]"
            >
              {tool}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--color-body)]">
          {project.headerOverview}
        </p>
      </div>
    </section>
  );
}
