// src/components/FAQ.tsx

import { Container } from "./Container";

const faqs = [
  {
    q: "How long does a repair usually take?",
    a: "Most repairs are same-day or next-day. Specialty parts may take 2–4 days to source. I'll tell you up front before starting.",
  },
  {
    q: "Do you use genuine parts?",
    a: "Whenever available, yes. For older models I source premium-grade replacements—I'll always tell you which is which.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. I never browse personal files. For sensitive jobs you can wipe your device first, and I can help with backups.",
  },
  {
    q: "What if the repair doesn't fix the issue?",
    a: "If a fix doesn't hold, I'll re-do it for free within the 30-day warranty window or refund the labor portion.",
  },
  {
    q: "Do you offer pickup and delivery?",
    a: "Yes—free within Metro Manila for repairs over ₱1,500. Otherwise it's a small flat fee.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-t border-[color:var(--color-border)] py-24 sm:py-32"
    >
      <Container>
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-accent)]">
            FAQ
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="divide-y divide-[color:var(--color-border)] rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
          {faqs.map((item) => (
            <details key={item.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-[family-name:var(--font-display)] text-base font-semibold text-white">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className="grid h-7 w-7 flex-none place-items-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-muted)] transition group-open:rotate-45 group-open:border-[color:var(--color-accent)] group-open:text-[color:var(--color-accent)]"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-[color:var(--color-muted)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
