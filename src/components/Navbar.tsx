// src/components/Navbar.tsx

import { Container } from "./Container";
import { Logo } from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "How it works" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-[color:var(--color-border)]/60 bg-[color:var(--color-background)]/80 backdrop-blur"
    >
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[color:var(--color-muted)] transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-sm font-semibold text-[#0a0a0a] transition hover:bg-[color:var(--color-accent-strong)]"
        >
          Book a repair
          <span aria-hidden>→</span>
        </a>
      </Container>
    </header>
  );
}
