import { CheckCircle2 } from "lucide-react";

export default function BestForBand({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-[var(--color-accent-blue-light)] px-6 py-6 shadow-sm sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">Best for</p>
      <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-ink)]">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
