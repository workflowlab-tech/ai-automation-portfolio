import { credentials } from "@/data/credentials";
import { site } from "@/data/site";

export default function CredentialsRow() {
  return (
    <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-[var(--color-ink)]">Credentials</p>
        <a
          href={site.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[var(--color-primary)] hover:underline"
        >
          Download full resume →
        </a>
      </div>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {credentials.map((cred) =>
          cred.href ? (
            <a
              key={cred.label}
              href={cred.href}
              target="_blank"
              rel="noopener noreferrer"
              title={cred.issuer}
              className="rounded-full border border-[var(--color-border)] bg-white px-3.5 py-1.5 text-xs font-medium text-[var(--color-body)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              {cred.label}
            </a>
          ) : (
            <span
              key={cred.label}
              title={cred.issuer}
              className="rounded-full border border-[var(--color-border)] bg-white px-3.5 py-1.5 text-xs font-medium text-[var(--color-body)]"
            >
              {cred.label}
            </span>
          )
        )}
      </div>
    </div>
  );
}
