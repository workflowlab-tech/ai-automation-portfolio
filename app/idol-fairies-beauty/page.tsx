import type { Metadata } from "next";
import { idolFairiesBeautyProject } from "@/data/idolFairiesBeautyProject";
import { shareMetadata } from "@/lib/shareMetadata";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import BeautySolutionAreaTabs from "@/components/BeautySolutionAreaTabs";

export const metadata: Metadata = shareMetadata({
  title: "Idol Fairies Beauty — Full-stack E-commerce Case Study | MJ Ablanque",
  description: "A full-stack Korean beauty e-commerce platform connecting catalog, checkout, payments, shipping, referrals, customer support, and operations.",
  path: "/idol-fairies-beauty",
  image: { url: "/og/idol-fairies-beauty.jpg", width: 1200, height: 630 },
});

export default function IdolFairiesBeautyPage() {
  return (
    <ProjectCaseStudy
      project={idolFairiesBeautyProject}
      showcase={<BeautySolutionAreaTabs />}
    />
  );
}
