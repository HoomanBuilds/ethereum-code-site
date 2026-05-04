export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.04] px-5 py-12 sm:px-8 sm:py-16 lg:px-14">
      <div className="w-full">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: brand */}
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-5 w-5" />
              <p className="font-pixel text-[14px] text-white/80">
                ETHEREUM.CODE
              </p>
            </div>
            <p className="mt-2 font-mono text-[11px] text-white/20">
              2026 · MIT License
            </p>
          </div>

          {/* Right: cards */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://ethskills.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 rounded-xl border border-white/[0.06] bg-[#0a0a0a] px-6 py-5 transition hover:border-white/[0.12] hover:bg-[#0c0c0c]"
            >
              <span className="font-mono text-sm font-medium text-white/80 transition group-hover:text-white">
                Browse Ethereum Skills
              </span>
              <span className="text-[18px]">⟠</span>
            </a>

            <a
              href="https://github.com/HoomanBuilds/ethereum-code"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 rounded-xl border border-white/[0.06] bg-[#0a0a0a] px-6 py-5 transition hover:border-white/[0.12] hover:bg-[#0c0c0c]"
            >
              <span className="font-mono text-sm font-medium text-white/80 transition group-hover:text-white">
                Contributions are Open!
              </span>
              <div className="flex items-center gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white/40"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white/40"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
