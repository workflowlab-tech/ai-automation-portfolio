type Props = {
  steps: string[];
  note?: string;
};

export default function WorkflowFlowDiagram({ steps, note }: Props) {
  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-[var(--color-primary-light)]/60 px-4 py-2">
              <span className="text-xs font-bold text-[var(--color-primary)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-[var(--color-ink)]">{step}</span>
            </div>
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="text-lg text-[var(--color-primary)]">
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
      {note ? <p className="mt-4 text-xs leading-5 text-[var(--color-muted)]">{note}</p> : null}
    </div>
  );
}
