import { ArrowRight, Workflow } from "lucide-react";

export default function WorkflowFlow({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-5 sm:p-6">
      <div className="flex items-center gap-2 text-[var(--color-primary)]">
        <Workflow size={18} strokeWidth={2} />
        <h4 className="text-sm font-semibold uppercase tracking-wide">Workflow Architecture</h4>
      </div>

      <ol className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step} className="relative flex min-h-14 items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 shadow-sm">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-xs font-semibold text-[var(--color-primary)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium leading-5 text-[var(--color-ink)]">{step}</span>
            {index < steps.length - 1 && (
              <ArrowRight
                size={15}
                aria-hidden="true"
                className="absolute -bottom-[15px] left-1/2 z-10 -translate-x-1/2 rotate-90 text-[var(--color-primary)] sm:hidden"
              />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
