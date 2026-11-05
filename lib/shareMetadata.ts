import type { Metadata } from "next";
import type { Project } from "@/data/projects";

const SITE_NAME = "MJ Ablanque — AI Automation Portfolio";

type ShareImage = { url: string; width?: number; height?: number };

/**
 * Per-page Open Graph + Twitter metadata, so link previews (LinkedIn, Messenger, Slack)
 * show this page's own title and image instead of the site-wide defaults from the root layout.
 */
export function shareMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image: ShareImage;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      images: [{ ...image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

/** The project's own share image: its demo poster, else its preview visual. */
export function projectShareImage(project: Project): ShareImage | undefined {
  if (project.demo.available && project.demo.posterSrc) return { url: project.demo.posterSrc };
  if (project.previewVisual.type === "image") return { url: project.previewVisual.src };
  return undefined;
}
