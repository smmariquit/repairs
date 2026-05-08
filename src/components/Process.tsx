import { Container } from "./Container";

const steps = [
  {
    step: "01",
    title: "Tell me what's wrong",
    description:
      "Send a quick message describing the issue. Photos help. I'll reply with a ballpark quote and timeline.",
  },
  {
    step: "02",
    title: "Drop off or meet up",
    description:
      "Drop your device at my workshop or meet at an agreed pickup point in the metro. I'll confirm the diagnosis on the spot.",
  },
  {
    step: "03",
    title: "Repair & QA",
    description:
      "I fix it carefully and run a full QA pass: charging, audio, sensors, thermals—the works.",
  },
  {
    step: "04",
    title: "Pick up, pay, smile",
    description:
      "You only pay once you're happy. Every repair is backed by a 30-day workmanship warranty.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="border-t border-[color:var(--color-border)] py-24 sm:py-32"
    >
      <Container>
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-accent)]">
            How it works
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, four-step process
          </h2>
          <p className="mt-4 text-[color:var(--color-muted)]">
            No jargon, no runaround. From the first message to handing your
            device back, you&apos;re in the loop.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.step}
              className="relative rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6"
            >
              <span className="font-[family-name:var(--font-display)] text-sm font-bold text-[color:var(--color-accent)]">
                {s.step}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
