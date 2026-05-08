import { Container } from "./Container";

const points = [
  {
    title: "Genuine parts",
    description:
      "I use OEM or premium-grade parts only—and I'll tell you which is which before any work begins.",
  },
  {
    title: "30-day warranty",
    description:
      "Every repair is covered. If something goes wrong with my work, I'll make it right at no extra cost.",
  },
  {
    title: "Same-day options",
    description:
      "Common repairs (screens, batteries, deep cleans) can usually be turned around the same day.",
  },
  {
    title: "Privacy first",
    description:
      "Your data stays your data. I never browse files and offer secure wipes if you'd prefer.",
  },
];

export function Trust() {
  return (
    <section className="border-t border-[color:var(--color-border)] py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-accent)]">
              Why choose me
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Repairs you can actually trust
            </h2>
            <p className="mt-4 max-w-md text-[color:var(--color-muted)]">
              I treat every device like my own. Careful work, clear
              communication, and zero pressure tactics.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <li
                key={p.title}
                className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5"
              >
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                  {p.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
