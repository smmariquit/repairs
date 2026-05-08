import { Container } from "./Container";

type Plan = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  highlight?: boolean;
  cta: string;
};

const plans: Plan[] = [
  {
    name: "Diagnostic",
    price: "Free",
    blurb: "15-minute checkup so you know what you're dealing with.",
    features: [
      "Hardware health scan",
      "Battery & thermal report",
      "Honest repair recommendation",
      "Quote with no obligation",
    ],
    cta: "Book a diagnostic",
  },
  {
    name: "Laptop deep clean",
    price: "from ₱899",
    blurb: "The works: disassembly, dust, fresh paste, sanitize.",
    features: [
      "Full disassembly & dust removal",
      "Premium thermal paste",
      "Fan & heatsink service",
      "Sanitization & polish",
    ],
    highlight: true,
    cta: "Book a clean",
  },
  {
    name: "Phone repair",
    price: "Quoted",
    blurb: "Quote depends on model and parts. Transparent every time.",
    features: [
      "Screen / battery / port repair",
      "Genuine or premium-grade parts",
      "Free pickup within metro*",
      "30-day workmanship warranty",
    ],
    cta: "Get a quote",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-[color:var(--color-border)] py-24 sm:py-32"
    >
      <Container>
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-accent)]">
            Pricing
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Straightforward rates
          </h2>
          <p className="mt-4 text-[color:var(--color-muted)]">
            You get a clear quote up front. No hidden fees, ever.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={
                "relative flex flex-col rounded-2xl border p-6 " +
                (plan.highlight
                  ? "border-[color:var(--color-accent)]/60 bg-gradient-to-b from-[color:var(--color-accent)]/10 to-transparent"
                  : "border-[color:var(--color-border)] bg-[color:var(--color-surface)]")
              }
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-[color:var(--color-accent)] px-3 py-1 text-xs font-semibold text-[#0a0a0a]">
                  Most popular
                </span>
              )}
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                {plan.blurb}
              </p>
              <p className="mt-6 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
                {plan.price}
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-[color:var(--color-muted)]">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--color-accent)]"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  "mt-6 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition " +
                  (plan.highlight
                    ? "bg-[color:var(--color-accent)] text-[#0a0a0a] hover:bg-[color:var(--color-accent-strong)]"
                    : "border border-[color:var(--color-border)] text-white hover:border-white/40")
                }
              >
                {plan.cta} <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-[color:var(--color-muted)]">
          * Free pickup within Metro Manila for repairs over ₱1,500.
        </p>
      </Container>
    </section>
  );
}
