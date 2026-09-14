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
    <section aria-labelledby="certificates-heading" className="border-t border-blue-100 bg-slate-50/70 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Credentials</p>
            <h2 id="certificates-heading" className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              Certificates
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-body)]">
              Professional training across accounting, business automation, and practical AI tools.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <FadeIn key={certificate.label} delay={70 + index * 45}>
              <a
                href={certificate.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_24px_55px_-28px_rgba(37,99,235,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
                aria-label={`Open ${certificate.label} certificate PDF`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={certificate.previewHref}
                    alt={`${certificate.label} certificate issued by ${certificate.issuer}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-5">
                  <div>
                    <h3 className="font-semibold leading-6 text-[var(--color-ink)]">{certificate.label}</h3>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{certificate.issuer}</p>
                  </div>
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white" aria-hidden="true">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
