import Image from "next/image";
import { Maximize2 } from "lucide-react";
import Placeholder from "../Placeholder";
import type { ProjectVisual as ProjectVisualType } from "@/data/projects";

export default function ProjectVisual({
  visual,
  className = "",
}: {
  visual: ProjectVisualType;
  className?: string;
}) {
  if (visual.type === "image") {
    const aspectClass =
      visual.aspect === "wide"
        ? "aspect-[16/8]"
        : visual.aspect === "portrait"
          ? "aspect-[4/5]"
          : "aspect-[16/10]";

    return (
      <figure className={className}>
        <a
          href={visual.src}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative block ${aspectClass} overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm`}
          aria-label={`Open full-size image: ${visual.label}`}
        >
          <Image
            src={visual.src}
            alt={visual.label}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)]/90 px-3 py-2 text-xs font-semibold text-white shadow-sm transition-transform group-hover:scale-[1.03]">
            <Maximize2 size={14} />
            Click to view full size
          </span>
        </a>
        <figcaption className="mt-3 text-sm font-medium text-[var(--color-body)]">
          {visual.label}
        </figcaption>
      </figure>
    );
  }

  return <Placeholder label={visual.label} />;
}
