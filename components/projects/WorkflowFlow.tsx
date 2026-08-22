import { ArrowRight, Workflow } from "lucide-react";

export default function WorkflowFlow({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-2 text-[var(--color-primary)]">
        <Workflow size={18} strokeWidth={2} />
        <h4 className="text-sm font-semibold uppercase tracking-wide">Workflow architecture</h4>
      </div>

      <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3">
        {steps.map((step, index) => (
          <li key={step} className="flex w-full items-center gap-2 sm:w-auto">
            <span className="rounded-lg border border-blue-100 bg-[var(--color-primary-light)]/65 px-3.5 py-2 text-sm font-medium leading-5 text-[var(--color-ink)]">
              {step}
            </span>
            {index < steps.length - 1 && (
              <ArrowRight
                size={15}
                aria-hidden="true"
                className="shrink-0 rotate-90 text-[var(--color-primary)] sm:rotate-0"
              />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
