// src/components/Contact.tsx

import { Container } from "./Container";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[color:var(--color-border)] py-24 sm:py-32"
    >
      <Container>
        <div className="grid gap-10 rounded-3xl border border-[color:var(--color-border)] bg-gradient-to-br from-[color:var(--color-surface)] to-[color:var(--color-surface-2)] p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-accent)]">
              Get in touch
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get it fixed?
            </h2>
            <p className="mt-4 max-w-md text-[color:var(--color-muted)]">
              Send a message describing your device and the issue. I&apos;ll
              reply with a quote and turnaround estimate—usually within a few
              hours.
            </p>

            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-[color:var(--color-muted)]">Email</dt>
                <dd>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-white underline-offset-4 hover:underline"
                  >
                    {site.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[color:var(--color-muted)]">Phone</dt>
                <dd>
                  <a
                    href={`tel:${site.contact.phone.replace(/\s+/g, "")}`}
                    className="text-white underline-offset-4 hover:underline"
                  >
                    {site.contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[color:var(--color-muted)]">Service area</dt>
                <dd className="text-white">{site.contact.location}</dd>
              </div>
            </dl>
          </div>

          <form
            action={`mailto:${site.contact.email}`}
            method="post"
            encType="text/plain"
            className="grid gap-4"
          >
            <div className="grid gap-2">
              <label
                htmlFor="name"
                className="text-xs font-medium uppercase tracking-wider text-[color:var(--color-muted)]"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3 text-sm text-white placeholder:text-[color:var(--color-muted)] focus:border-[color:var(--color-accent)] focus:outline-none"
                placeholder="Juan dela Cruz"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="device"
                className="text-xs font-medium uppercase tracking-wider text-[color:var(--color-muted)]"
              >
                Device & issue
              </label>
              <input
                id="device"
                name="device"
                required
                className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3 text-sm text-white placeholder:text-[color:var(--color-muted)] focus:border-[color:var(--color-accent)] focus:outline-none"
                placeholder="iPhone 13 — cracked screen"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="message"
                className="text-xs font-medium uppercase tracking-wider text-[color:var(--color-muted)]"
              >
                Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3 text-sm text-white placeholder:text-[color:var(--color-muted)] focus:border-[color:var(--color-accent)] focus:outline-none"
                placeholder="Tell me more about the issue, when it started, and your preferred turnaround."
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition hover:bg-[color:var(--color-accent-strong)]"
            >
              Send message <span aria-hidden>→</span>
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
