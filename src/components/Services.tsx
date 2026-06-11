// src/components/Services.tsx

import { Container } from "./Container";

type Service = {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Cellphone repair",
    description:
      "Cracked screens, swollen batteries, charging port issues, water damage—I diagnose first, then fix.",
    bullets: [
      "Screen & glass replacement",
      "Battery swaps with genuine cells",
      "Charging port & speaker repair",
      "Water damage diagnostics",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect x="6" y="2" width="12" height="20" rx="2.5" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    title: "Laptop deep cleaning",
    description:
      "Full disassembly, dust removal, fresh thermal paste, and a hardware health check. Your laptop will run cooler and quieter.",
    bullets: [
      "Internal dust & debris removal",
      "Premium thermal paste re-application",
      "Fan & heatsink servicing",
      "Keyboard & screen sanitization",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M2 20h20" />
      </svg>
    ),
  },
  {
    title: "Diagnostics & tune-up",
    description:
      "Not sure what's wrong? I'll run a full diagnostic and quote you a fix—no commitment required.",
    bullets: [
      "Free 15-min diagnostic",
      "OS reinstall & optimization",
      "Storage upgrades (SSD/RAM)",
      "Data backup & migration",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="m4.93 4.93 2.83 2.83" />
        <path d="m16.24 16.24 2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="m4.93 19.07 2.83-2.83" />
        <path d="m16.24 7.76 2.83-2.83" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-[color:var(--color-border)] py-24 sm:py-32"
    >
      <Container>
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-accent)]">
            Services
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What I can fix for you
          </h2>
          <p className="mt-4 text-[color:var(--color-muted)]">
            Honest work on phones and laptops. No upselling, no surprises—just
            the fix you came for.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative flex flex-col gap-5 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition hover:border-[color:var(--color-accent)]/40 hover:bg-[color:var(--color-surface-2)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)]">
                {service.icon}
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                  {service.description}
                </p>
              </div>
              <ul className="mt-auto space-y-2 text-sm text-[color:var(--color-muted)]">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--color-accent)]"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
