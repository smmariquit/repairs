import { site } from "@/lib/site";

export function Logo() {
  return (
    <a
      href="#top"
      className="group inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight"
    >
      <span
        aria-hidden
        className="grid h-8 w-8 place-items-center rounded-lg bg-[color:var(--color-accent)] text-[#0a0a0a] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition group-hover:scale-105"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l6-6a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
        </svg>
      </span>
      <span className="text-white">{site.name}</span>
    </a>
  );
}
