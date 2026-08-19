"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export type Shot = { src: string; label: string };

export default function ScreenshotGallery({ shots }: { shots: Shot[] }) {
  const [active, setActive] = useState<Shot | null>(null);

  const gridCols = shots.length === 1 ? "grid-cols-1" : shots.length <= 3 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4";

  return (
    <>
      <div className={`grid gap-3 ${gridCols}`}>
        {shots.map((shot) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setActive(shot)}
            className="group overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-ink)] text-left shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={shot.src}
                alt={shot.label}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(min-width: 640px) 25vw, 50vw"
              />
            </div>
            <p className="px-3 py-2 text-xs font-medium text-[var(--color-body)]">{shot.label}</p>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-10"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 text-white/80 hover:text-white"
            onClick={() => setActive(null)}
          >
            <X size={28} />
          </button>
          <div className="relative max-h-full max-w-5xl overflow-auto rounded-xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active.src}
              alt={active.label}
              width={1600}
              height={900}
              className="h-auto w-full"
              sizes="90vw"
            />
            <p className="border-t border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-body)]">
              {active.label}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
