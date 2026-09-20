import type { Metadata } from "next";
import { getProject } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import ProjectPreviewCard from "@/components/projects/ProjectPreviewCard";

export const metadata: Metadata = {
  title: "Projects — MJ Ablanque",
  description: "Standalone automation builds — n8n workflows, AI extraction, and structured data output.",
};

export default function ProjectsPage() {
  const projectOrder = [
    "idol-fairies",
    "idol-fairies-beauty",
    "ghl-idol-air-lead-to-job",
    "ghl-fairy-skin-consultation-to-treatment",
    "personal-income-expense",
    "portfolio-ai-agent",
  ];
  const orderedProjects = projectOrder.map((slug) => getProject(slug)).filter((project) => project !== undefined);

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <FadeIn>
        <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
          Projects
        </span>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-ink)]">
          Standalone Automation Builds
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-body)]">
          Idol Fairies remains the flagship connected system. Here, each standalone build is presented
          through the problem it solves, how it works, and the output it produces.
        </p>
      </FadeIn>

      <div className="mt-14 space-y-10">
        {orderedProjects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 80}>
            <ProjectPreviewCard project={project} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
