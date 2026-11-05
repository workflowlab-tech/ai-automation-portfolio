import type { Metadata } from "next";
import { idolFairiesProject } from "@/data/projects";
import { shareMetadata } from "@/lib/shareMetadata";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import SolutionAreaTabs from "@/components/SolutionAreaTabs";

export const metadata: Metadata = shareMetadata({
  title: "Idol Fairies — Finance & E-commerce Automation Demo | MJ Ablanque",
  description:
    "A connected finance and e-commerce portfolio project linking a live storefront with AI support, operations, finance, and reporting.",
  path: "/idol-fairies",
  image: { url: "/videos/idol-fairies-demo-poster.png", width: 1536, height: 1024 },
});

export default function IdolFairiesPage() {
  return (
    <ProjectCaseStudy
      project={idolFairiesProject}
      showcase={<SolutionAreaTabs />}
    />
  );
}
