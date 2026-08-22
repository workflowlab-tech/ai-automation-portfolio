import type { Metadata } from "next";
import { idolFairiesProject } from "@/data/projects";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import SolutionAreaTabs from "@/components/SolutionAreaTabs";
import SystemDiagram from "@/components/SystemDiagram";

export const metadata: Metadata = {
  title: "Idol Fairies — Finance & E-commerce Automation Demo | MJ Ablanque",
  description:
    "A self-directed finance and e-commerce automation portfolio project connecting storefront, operations, finance, AI support, and reporting.",
};

export default function IdolFairiesPage() {
  return (
    <ProjectCaseStudy
      project={idolFairiesProject}
      systemVisual={<SystemDiagram />}
      showcase={<SolutionAreaTabs />}
    />
  );
}
