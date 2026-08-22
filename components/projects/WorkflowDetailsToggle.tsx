"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
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
    <div>
      <div className="mx-auto max-w-2xl">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-3 rounded-xl border border-[var(--color-border)] bg-white px-5 py-4 text-left"
        >
          <span className="text-sm font-semibold text-[var(--color-ink)]">Workflow Details</span>
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
