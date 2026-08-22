import Image from "next/image";
import { ExternalLink, PlayCircle } from "lucide-react";
import type { Project } from "@/data/projects";
import GithubIcon from "../icons/GithubIcon";

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <section className="border-b border-blue-100 bg-gradient-to-b from-blue-50/80 via-white to-white">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {project.logoSrc ? (
            <Image
              src={project.logoSrc}
              alt={`${project.title} logo`}
              width={42}
              height={42}
              className="mr-1 rounded-xl border border-white shadow-sm"
            />
          ) : null}
          <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            {project.category}
          </span>
          {project.workflowCountLabel ? (
            <span className="rounded-full bg-[var(--color-accent-cyan-light)] px-3 py-1 text-xs font-medium text-[var(--color-accent-cyan)]">
              {project.workflowCountLabel}
            </span>
          ) : null}
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

        {project.liveSiteHref || project.demo.available || project.githubHref ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {project.liveSiteHref ? (
              <a
                href={project.liveSiteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-colors hover:bg-[var(--color-primary-dark)]"
              >
                Visit live website <ExternalLink size={16} />
              </a>
            ) : null}
            {project.demo.available ? (
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                Watch demo <PlayCircle size={16} />
              </a>
            ) : null}
            {project.githubHref ? (
              <a
                href={project.githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                View project code <GithubIcon size={16} />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
