import { ArrowRight } from "lucide-react";

export default function WorkflowFlow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <span className="rounded-full border border-[var(--color-border)] bg-white px-3.5 py-2 text-xs font-medium text-[var(--color-ink)] sm:text-sm">
            {step}
          </span>
          {i < steps.length - 1 && <ArrowRight size={14} className="shrink-0 text-[var(--color-muted)]" />}
        </span>
      ))}
    </div>
  );
}
