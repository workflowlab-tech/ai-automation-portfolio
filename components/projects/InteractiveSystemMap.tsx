"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Minus, Plus } from "lucide-react";

type MapNode = {
  id: string;
  label: string;
  children?: MapNode[];
  detail?: string;
};

const branches: MapNode[] = [
  {
    id: "intake",
    label: "Document Intake",
    detail: "The system requires a source receipt or statement and accepts records through Gmail or Telegram; it does not connect to a bank feed or move money.",
    children: [
      {
        id: "gmail",
        label: "Gmail",
        children: [
          { id: "gmail-attachment", label: "Attachment" },
          { id: "gmail-body", label: "Body text" },
        ],
      },
      {
        id: "telegram",
        label: "Telegram",
        children: [
          { id: "telegram-text", label: "Text" },
          { id: "telegram-file", label: "Photo / document" },
        ],
      },
    ],
  },
  {
    id: "processing",
    label: "AI Processing",
    children: [
      {
        id: "extraction",
        label: "Gemini Extraction",
        detail: "Reads supported text, PDF, PNG, and CSV inputs and extracts the transaction fields used by the workflows.",
      },
      {
        id: "validation",
        label: "Validation",
        children: [
          { id: "valid", label: "Valid → Continue" },
          { id: "review", label: "Missing / ambiguous → Manual review" },
        ],
        detail: "Required fields are checked before anything is written. Incomplete or ambiguous data is routed for review instead of guessed.",
      },
      {
        id: "duplicates",
        label: "Duplicate Protection",
        children: [
          { id: "new", label: "New → Continue" },
          { id: "duplicate", label: "Duplicate → Stop" },
        ],
        detail: "File hashing plus reference, amount, and date matching prevents a repeated submission from creating a second record.",
      },
      {
        id: "categories",
        label: "Categorization",
        detail: "The workflow assigns a category from the approved fixed list rather than creating free-text categories.",
      },
    ],
  },
  {
    id: "outputs",
    label: "Outputs",
    detail: "Validated records are written only to the specific Income or Expense sheets and archived in a dedicated Drive location.",
    children: [
      {
        id: "sheets",
        label: "Google Sheets",
        children: [
          { id: "income", label: "Income" },
          { id: "expense", label: "Expense" },
        ],
        detail: "Validated, non-duplicate records are written to the correct Income or Expense sheet.",
      },
      {
        id: "archive",
        label: "Google Drive Archive",
        detail: "The source document is retained in a dedicated archive location rather than a shared folder, with access limited to the required archive and Income/Expense sheets—not the full inbox or Drive.",
      },
      {
        id: "confirmation",
        label: "Confirmation",
        detail: "A confirmation is sent after the record write succeeds, so the sender knows what happened.",
      },
    ],
  },
];

function collectIds(nodes: MapNode[]): string[] {
  return nodes.flatMap((node) => [node.id, ...(node.children ? collectIds(node.children) : [])]);
}

export default function InteractiveSystemMap() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<MapNode | null>(null);

  const toggle = (node: MapNode) => {
    if (node.children?.length) {
      setExpanded((current) => {
        const next = new Set(current);
        if (next.has(node.id)) next.delete(node.id);
        else next.add(node.id);
        return next;
      });
    }
    setSelected(node.detail ? node : null);
  };

  const setAll = (open: boolean) => setExpanded(open ? new Set(collectIds(branches)) : new Set());

  const renderNode = (node: MapNode, depth = 0) => {
    const hasChildren = Boolean(node.children?.length);
    const isOpen = expanded.has(node.id);
    const isSelected = selected?.id === node.id;
    return (
      <div key={node.id} className={depth === 0 ? "min-w-0" : "relative pl-5"}>
        {depth > 0 ? <span aria-hidden="true" className="absolute left-1 top-5 h-px w-4 bg-blue-200" /> : null}
        <button
          type="button"
          onClick={() => toggle(node)}
          aria-expanded={hasChildren ? isOpen : undefined}
          className={`flex w-full items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm transition-colors ${
            isSelected
              ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] text-[var(--color-primary)]"
              : depth === 0
                ? "border-blue-200 bg-blue-50/70 font-semibold text-[var(--color-ink)] hover:border-blue-300"
                : "border-slate-200 bg-white text-[var(--color-body)] hover:border-blue-200 hover:bg-blue-50/40"
          }`}
        >
          {hasChildren ? (isOpen ? <ChevronDown size={15} /> : <ChevronRight size={15} />) : <span className="h-3.5 w-3.5" />}
          <span className="min-w-0 flex-1">{node.label}</span>
          {node.detail ? <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-primary)]">Info</span> : null}
        </button>
        {hasChildren && isOpen ? (
          <div className="ml-3 mt-2 space-y-2 border-l border-blue-100 pl-3">
            {node.children!.map((child) => renderNode(child, depth + 1))}
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <section aria-labelledby="system-map-heading" className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">System Map</span>
          <h2 id="system-map-heading" className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
            How the System Works
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-body)]">
            Start with the three system branches, then open the parts you want to inspect.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => setAll(true)} className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] hover:bg-blue-50">
            <Plus size={14} /> Expand All
          </button>
          <button type="button" onClick={() => setAll(false)} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-[var(--color-body)] hover:bg-slate-50">
            <Minus size={14} /> Collapse All
          </button>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-sm text-center">
        <div className="rounded-2xl border border-[var(--color-primary)] bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-white shadow-sm">
          Personal Income &amp; Expense Automation
        </div>
        <div aria-hidden="true" className="mx-auto h-7 w-px bg-blue-200" />
      </div>

      <div className="relative grid gap-5 md:grid-cols-3 md:gap-6">
        <div aria-hidden="true" className="absolute left-[16.66%] right-[16.66%] top-0 hidden h-px bg-blue-200 md:block" />
        {branches.map((branch) => (
          <div key={branch.id} className="relative pt-3 md:pt-5">
            <div aria-hidden="true" className="absolute left-1/2 top-0 hidden h-5 w-px -translate-x-1/2 bg-blue-200 md:block" />
            {renderNode(branch)}
          </div>
        ))}
      </div>

      {selected ? (
        <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/60 p-4" role="status">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">{selected.label}</p>
          <p className="mt-1 text-sm leading-6 text-[var(--color-body)]">
            {selected.detail ?? "This boundary keeps the automation focused on record capture, validation, and organized outputs."}
          </p>
        </div>
      ) : null}
    </section>
  );
}
