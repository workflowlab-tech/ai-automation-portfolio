import {
  BarChart3,
  Braces,
  Database,
  FolderOpen,
  Layers3,
  Mail,
  Sparkles,
  Table2,
  Workflow,
} from "lucide-react";

const toolIcons: Record<string, typeof Workflow> = {
  n8n: Workflow,
  Gemini: Sparkles,
  Gmail: Mail,
  "Google Sheets": Table2,
  "Google Drive": FolderOpen,
  "Next.js": Braces,
  Supabase: Database,
  Metabase: BarChart3,
};

export default function ToolStack({ tools, compact = false }: { tools: string[]; compact?: boolean }) {
  return (
    <div className={`rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50/60 ${compact ? "p-4" : "p-5"}`}>
      <div className={`flex ${compact ? "flex-col items-start" : "flex-col items-center"} gap-3 sm:flex-row sm:justify-center`}>
        <span className="inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary)]">
          <Layers3 size={16} /> Built with
        </span>
        <div className={`flex flex-wrap gap-2 ${compact ? "justify-start" : "justify-center"}`}>
          {tools.map((tool) => {
            const Icon = toolIcons[tool] ?? Braces;
            return (
              <span
                key={tool}
                className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-ink)] shadow-sm"
              >
                <Icon size={14} className="text-[var(--color-primary)]" />
                {tool}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
