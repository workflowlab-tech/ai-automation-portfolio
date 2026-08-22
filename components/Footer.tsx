import Link from "next/link";
import { Mail, FileText } from "lucide-react";
import { site } from "@/data/site";
import GithubIcon from "./icons/GithubIcon";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-alt)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-semibold text-[var(--color-ink)]">{site.name}</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              {site.role} — {site.tagline}
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">{site.location}</p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-[var(--color-body)] hover:text-[var(--color-primary)]"
            >
              <Mail size={16} /> {site.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--color-body)] hover:text-[var(--color-primary)]"
            >
              <GithubIcon size={16} /> github.com/{site.githubHandle}
            </a>
            <a
              href={site.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--color-body)] hover:text-[var(--color-primary)]"
            >
              <FileText size={16} /> Download resume
            </a>
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/idol-fairies" className="text-[var(--color-body)] hover:text-[var(--color-primary)]">
              Idol Fairies
            </Link>
            <Link href="/projects" className="text-[var(--color-body)] hover:text-[var(--color-primary)]">
              Projects
            </Link>
            <Link href="/about" className="text-[var(--color-body)] hover:text-[var(--color-primary)]">
              About
            </Link>
            <Link href="/contact" className="text-[var(--color-body)] hover:text-[var(--color-primary)]">
              Contact
            </Link>
          </nav>
        </div>

        <p className="mt-10 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-muted)]">
          Idol Fairies is a self-directed portfolio/demo project, built with substantial
          AI-assisted development on realistic simulated data — it is not a live client
          deployment.
        </p>
      </div>
    </footer>
  );
}
