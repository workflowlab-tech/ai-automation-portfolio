import type { Metadata } from "next";
import { idolFairiesBeautyProject } from "@/data/idolFairiesBeautyProject";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import BeautySolutionAreaTabs from "@/components/BeautySolutionAreaTabs";

export const metadata: Metadata = {
  title: "Idol Fairies Beauty — Full-stack E-commerce Case Study | MJ Ablanque",
  description: "A full-stack Korean beauty e-commerce platform connecting catalog, checkout, payments, shipping, referrals, customer support, and operations.",
};

export default function IdolFairiesBeautyPage() {
  return (
    <ProjectCaseStudy
      project={idolFairiesBeautyProject}
      showcase={<BeautySolutionAreaTabs />}
    />
  );
}
