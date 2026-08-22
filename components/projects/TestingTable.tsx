import { ShieldCheck } from "lucide-react";
import type { ProjectTestRow } from "@/data/projects";

export default function TestingTable({ rows, summary }: { rows: ProjectTestRow[]; summary: string }) {
  return (
    <div>
      <div className="flex items-start gap-2 rounded-xl bg-[var(--color-accent-green-light)] px-4 py-3">
        <ShieldCheck size={18} className="mt-0.5 shrink-0 text-[var(--color-accent-green)]" />
        <p className="text-sm text-[var(--color-ink)]">{summary}</p>
      </div>

      <div className="mt-5 overflow-x-auto rounded-xl border border-[var(--color-border)]">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface-alt)]">
              <th className="px-4 py-3 font-semibold text-[var(--color-ink)]">Test area</th>
              <th className="px-4 py-3 font-semibold text-[var(--color-ink)]">What we verify</th>
              <th className="px-4 py-3 font-semibold text-[var(--color-ink)]">Result</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.area} className={i < rows.length - 1 ? "border-b border-[var(--color-border)]" : ""}>
                <td className="px-4 py-3 align-top font-medium text-[var(--color-ink)]">{row.area}</td>
                <td className="px-4 py-3 align-top text-[var(--color-body)]">{row.whatWeVerify}</td>
                <td className="px-4 py-3 align-top font-medium text-[var(--color-accent-green)]">{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
