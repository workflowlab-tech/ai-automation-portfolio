import type { Metadata } from "next";
import { idolFairiesProject } from "@/data/projects";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import SolutionAreaTabs from "@/components/SolutionAreaTabs";
import BeautySystemDiagram from "@/components/BeautySystemDiagram";

export const metadata: Metadata = {
  title: "Idol Fairies Beauty — Full-stack E-commerce Case Study | MJ Ablanque",
  description:
    "A full-stack Korean beauty e-commerce platform connecting catalog, checkout, payments, shipping, referrals, customer support, and operations.",
};

export default function IdolFairiesPage() {
  return (
    <ProjectCaseStudy
      project={idolFairiesProject}
      systemVisual={<BeautySystemDiagram />}
      showcase={<SolutionAreaTabs />}
    />
  );
}
