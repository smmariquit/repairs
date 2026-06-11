// src/components/Hero.tsx

import { Container } from "./Container";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-[color:var(--color-accent)]/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[480px] translate-x-1/3 rounded-full bg-[color:var(--color-brand)]/10 blur-[120px]" />
      </div>

      <Container className="py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col items-start gap-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3 py-1 text-xs font-medium text-[color:var(--color-muted)]">
            <span className="h-2 w-2 rounded-full bg-[color:var(--color-accent)]" />
            Now booking in {site.contact.location}
          </span>

          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Cellphone repair &<br />
            laptop cleaning,
            <span className="bg-gradient-to-r from-[color:var(--color-accent)] to-[color:var(--color-accent-strong)] bg-clip-text text-transparent">
              {" "}done right.
            </span>
          </h1>

          <p className="max-w-2xl text-lg text-[color:var(--color-muted)] sm:text-xl">
            Fast turnaround, transparent pricing, and a workmanship guarantee.
            From cracked screens to dusty fans—I&apos;ll get your device back to
            new.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition hover:bg-[color:var(--color-accent-strong)]"
            >
              Get a free quote
              <span aria-hidden>→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              See services
            </a>
          </div>

          <dl className="mt-8 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-[color:var(--color-border)] pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                Avg. turnaround
              </dt>
              <dd className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                24h
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                Devices serviced
              </dt>
              <dd className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                500+
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                Warranty
              </dt>
              <dd className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                30 days
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
