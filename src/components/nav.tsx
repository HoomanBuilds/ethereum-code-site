import Link from "next/link";

export function Nav() {
  return (
    <nav
      className="absolute left-0 right-0 top-0 z-50 flex h-14 w-full items-center justify-between px-5 sm:h-16 sm:px-8 lg:px-14"
    >
      <Link
        href="/"
        className="font-pixel text-[14px] tracking-wide text-white"
      >
        ethereum code
      </Link>

      <div className="hidden items-center gap-7 md:flex">
        <a
          href="#engines"
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40 transition hover:text-white"
        >
          engines
        </a>
        <a
          href="#ideas"
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40 transition hover:text-white"
        >
          ideas
        </a>
        <a
          href="#skills"
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40 transition hover:text-white"
        >
          skills
        </a>
        <a
          href="#commands"
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40 transition hover:text-white"
        >
          commands
        </a>
      </div>

      <a
        href="https://github.com/HoomanBuilds/ethereum-code"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-8 items-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 font-mono text-[11px] text-white/60 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
        </svg>
        <span className="hidden sm:inline">GitHub</span>
      </a>
    </nav>
  );
}
