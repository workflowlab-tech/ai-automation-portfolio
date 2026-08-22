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
    return (
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-ink)] ${className}`}
      >
        <Image
          src={visual.src}
          alt={visual.label}
          fill
          className="object-cover object-top"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
      </div>
    );
  }

  return <Placeholder label={visual.label} />;
}
