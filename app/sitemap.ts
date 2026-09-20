import type { MetadataRoute } from "next";
import { idolFairiesProject, projects } from "@/data/projects";

const BASE_URL = "https://portfolio.workflowlab.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/about", "/contact"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = [idolFairiesProject, ...projects].map((project) => ({
    url: `${BASE_URL}${project.viewProjectHref}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
