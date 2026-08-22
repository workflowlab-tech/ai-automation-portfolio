"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, Workflow } from "lucide-react";
import WorkflowFlow from "./WorkflowFlow";

export default function WorkflowDetailsToggle({
  id,
  steps,
  children,
}: {
  id: string;
  steps: string[];
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `${id}-workflow-details`;

  return (
    <div className="rounded-2xl border border-blue-100 bg-[var(--color-primary-light)]/70 p-3 sm:p-4">
      <div className="mx-auto max-w-2xl">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-3 rounded-xl border border-blue-200 bg-white px-5 py-4 text-left shadow-sm transition-colors hover:border-[var(--color-primary)]"
        >
          <span className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-[var(--color-primary)]">
              <Workflow size={18} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-[var(--color-ink)]">Workflow details</span>
              <span className="mt-0.5 block text-xs text-[var(--color-muted)]">Open the end-to-end architecture</span>
            </span>
          </span>
          <ChevronDown
            size={18}
            className={`shrink-0 text-[var(--color-muted)] transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div id={panelId} className="mt-6">
          <WorkflowFlow steps={steps} />
          {children ? <div className="mt-6 flex flex-wrap justify-center gap-3">{children}</div> : null}
        </div>
      )}
    </div>
  );
}
