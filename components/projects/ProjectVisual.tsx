import Image from "next/image";
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
          className={`relative block ${aspectClass} overflow-hidden rounded-xl border border-[var(--color-border)] bg-white`}
          aria-label={`Open full-size image: ${visual.label}`}
        >
          <Image
            src={visual.src}
            alt={visual.label}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </a>
        <figcaption className="mt-2 text-xs font-medium text-[var(--color-muted)]">
          {visual.label} · Open full size
        </figcaption>
      </figure>
    );
  }

  return <Placeholder label={visual.label} />;
}
