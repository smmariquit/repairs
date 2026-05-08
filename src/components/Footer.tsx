import { Container } from "./Container";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-border)] py-12">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-sm text-[color:var(--color-muted)]">
            &copy; {year} {site.name}. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-6 text-sm text-[color:var(--color-muted)]">
          <a href="#services" className="hover:text-white">
            Services
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </Container>
    </footer>
  );
}
