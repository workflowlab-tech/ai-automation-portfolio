"use client";

import { useEffect, useState } from "react";

type Props = {
  steps: string[];
  note?: string;
};

export default function WorkflowFlowDiagram({ steps, note }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running || activeIndex === null) return;

    if (activeIndex >= steps.length - 1) {
      const done = setTimeout(() => {
        setRunning(false);
        setActiveIndex(null);
      }, 700);
      return () => clearTimeout(done);
    }

    const next = setTimeout(() => setActiveIndex((i) => (i ?? 0) + 1), 650);
    return () => clearTimeout(next);
  }, [running, activeIndex, steps.length]);

  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
          Sample payload walkthrough
        </p>
        <button
          type="button"
          onClick={() => {
            setActiveIndex(0);
            setRunning(true);
          }}
          disabled={running}
          className="rounded-full border border-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary-light)] disabled:opacity-50"
        >
          {running ? "Running…" : "Run simulation"}
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-4">
        {steps.map((step, index) => {
          const isActive = activeIndex === index;
          const isPast = activeIndex !== null && index < activeIndex;
          return (
            <div key={step} className="flex items-center gap-2">
              <div
                className={`flex items-center gap-2 rounded-full border px-4 py-2 transition-colors duration-300 ${
                  isActive
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)] shadow-md"
                    : isPast
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-blue-100 bg-[var(--color-primary-light)]/60"
                }`}
              >
                <span
                  className={`text-xs font-bold ${
                    isActive ? "text-white" : isPast ? "text-emerald-700" : "text-[var(--color-primary)]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`text-sm font-medium ${isActive ? "text-white" : "text-[var(--color-ink)]"}`}>
                  {step}
                </span>
              </div>
              {index < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className={`text-lg transition-colors ${
                    isPast || isActive ? "text-emerald-500" : "text-[var(--color-primary)]"
                  }`}
                >
                  →
                </span>
              ) : null}
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-xs leading-5 text-[var(--color-muted)]">
        Illustrative walkthrough of the step order — not a live data feed.
      </p>
      {note ? <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">{note}</p> : null}
    </div>
  );
}
