"use client";

import { useState } from "react";

export function CTA() {
  const [copied, setCopied] = useState(false);
  const installCmd = "curl -fsSL https://ethereum-code/setup.sh | bash";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(installCmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden border-t border-white/[0.04] px-5 py-28 sm:px-8 sm:py-36 lg:px-14">
      <div className="bg-cosmic absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(122,162,255,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-pixel text-3xl font-normal tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Your agents are ready.
          <br />
          <span className="text-gradient-blue">Are you?</span>
        </h2>

        <p className="mt-5 text-[15px] text-white/35 md:text-base">
          install ethereum code and start shipping in minutes.
        </p>

        {/* Terminal */}
        <div className="mt-10 w-full max-w-lg">
          <div className="overflow-hidden rounded-xl border border-white/[0.10] bg-[#0a0a0a]/80 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex items-center justify-between px-5 py-3.5">
              <code className="font-mono text-[13px] text-white/75">
                <span className="text-[#7aa2ff]">$ </span>
                {installCmd}
              </code>
              <button
                onClick={copy}
                className="ml-3 rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40 transition hover:border-white/20 hover:text-white"
              >
                {copied ? "copied" : "copy"}
              </button>
            </div>
          </div>
        </div>

        {/* GitHub link */}
        <a
          href="https://github.com/shreyaspatil03/ethereum-code"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex h-10 items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 font-mono text-[12px] text-white/50 backdrop-blur-sm transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white/80"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
          </svg>
          View on GitHub
        </a>
      </div>
    </section>
  );
}
