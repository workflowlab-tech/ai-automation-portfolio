import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { shareMetadata, projectShareImage } from "@/lib/shareMetadata";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.title} — MJ Ablanque`;
  const image = projectShareImage(project);
  if (!image) return { title, description: project.overview };
  return shareMetadata({ title, description: project.overview, path: `/projects/${slug}`, image });
}

export default async function ProjectDetailPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <ProjectCaseStudy project={project} />
  );
}
