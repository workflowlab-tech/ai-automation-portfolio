import { ImageIcon } from "lucide-react";

export default function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface-alt)] p-8 text-center">
      <ImageIcon size={28} strokeWidth={1.5} className="text-[var(--color-muted)]" />
      <p className="text-sm font-medium text-[var(--color-muted)]">{label}</p>
      <p className="text-xs text-[var(--color-muted)]">Screenshot coming soon</p>
    </div>
  );
}
