import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { credentials } from "@/data/credentials";
import FadeIn from "./FadeIn";

const certificates = credentials.filter(
  (credential): credential is typeof credential & { href: string; previewHref: string } =>
    Boolean(credential.href && credential.previewHref),
);

export default function CertificateGallery() {
  return (
    <section aria-labelledby="certificates-heading" className="border-t border-blue-100 bg-slate-50/70 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeIn>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Credentials</p>
              <h2 id="certificates-heading" className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                Certificates
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-[var(--color-body)]">
              Nine completed programs in automation, AI tools, coding, and data workflows.
            </p>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <FadeIn key={certificate.label} delay={70 + index * 45}>
              <a
                href={certificate.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_14px_30px_-24px_rgba(37,99,235,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-3"
                aria-label={`Open ${certificate.label} certificate`}
              >
                <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md border border-slate-100 bg-slate-50">
                  <Image
                    src={certificate.previewHref}
                    alt={`${certificate.label} certificate issued by ${certificate.issuer}`}
                    fill
                    sizes="64px"
                    className="object-cover transition duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold leading-5 text-[var(--color-ink)]">{certificate.label}</h3>
                  <p className="mt-0.5 text-xs text-[var(--color-muted)]">{certificate.issuer}</p>
                </div>
                <ArrowUpRight size={16} className="shrink-0 text-blue-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
