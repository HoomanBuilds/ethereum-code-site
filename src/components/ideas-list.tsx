"use client";

import { useState } from "react";

const groups = [
  {
    title: "core engines",
    items: [
      { cmd: "eth new", desc: "guided flow: idea → build → ship" },
      { cmd: "eth idea", desc: "generate a fundable ethereum idea" },
      { cmd: "eth build", desc: "contracts + frontend from a brief" },
      { cmd: "eth audit", desc: "security pass before you ship" },
      { cmd: "eth ship", desc: "deploy + verify + launch pack" },
      { cmd: "eth raise", desc: "deck + investor map for your round" },
    ],
  },
  {
    title: "quality & learning",
    items: [
      { cmd: "eth beginner", desc: "learn ethereum fundamentals" },
      { cmd: "eth validate", desc: "validate an idea before building" },
      { cmd: "eth review", desc: "brutal product review" },
      { cmd: "eth design", desc: "frontend design patterns for dapps" },
      { cmd: "eth debug", desc: "debug failing contracts and tests" },
      { cmd: "eth hackathon", desc: "prepare a hackathon submission" },
      { cmd: "eth grant", desc: "apply for a grant program" },
    ],
  },
  {
    title: "discovery & ops",
    items: [
      { cmd: "eth search", desc: "search repos, skills, and mcp servers" },
      { cmd: "eth repos", desc: "browse 88 ethereum repos by category" },
      { cmd: "eth skills", desc: "list or show bundled skills" },
      { cmd: "eth mcps", desc: "list or install 29 mcp servers" },
      { cmd: "eth copilot", desc: "freeform ethereum dev assistant" },
      { cmd: "eth doctor", desc: "verify your toolchain" },
      { cmd: "eth init", desc: "install skills into ~/.claude" },
      { cmd: "eth config", desc: "manage cli configuration" },
      { cmd: "eth journey", desc: "interactive phase navigator" },
      { cmd: "eth feedback", desc: "send feedback to the team" },
      { cmd: "eth telemetry", desc: "manage telemetry data" },
      { cmd: "eth uninstall", desc: "remove skills and config" },
      { cmd: "eth completion", desc: "generate shell completions" },
    ],
  },
];

function CopyableCommand({ cmd, desc }: { cmd: string; desc: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* noop */
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group/cmd flex w-full items-start justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition hover:bg-white/[0.03]"
    >
      <div className="flex flex-col gap-0.5">
        <code className="font-mono text-xs font-medium text-white/80">
          {cmd}
        </code>
        <span className="text-[11px] leading-relaxed text-white/35">
          {desc}
        </span>
      </div>
      <span className="mt-0.5 flex-shrink-0 font-mono text-[9px] uppercase tracking-wider text-white/0 transition group-hover/cmd:text-white/30">
        {copied ? "copied!" : "copy"}
      </span>
    </button>
  );
}

export function IdeasList() {
  return (
    <section
      id="commands"
      className="relative w-full border-t border-white/[0.04] px-5 py-24 sm:px-8 sm:py-32 lg:px-14"
    >
      <div className="w-full">
        <div className="mb-14 sm:mb-16">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
            26 commands
          </p>
          <h2 className="font-pixel text-3xl font-normal tracking-wide text-white sm:text-4xl md:text-5xl">
            every step of the{" "}
            <span className="text-gradient-blue">founder journey.</span>
          </h2>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="flex flex-col rounded-2xl border border-white/[0.06] bg-[#0a0a0a] transition-all duration-300 hover:border-white/[0.10]"
            >
              <div className="border-b border-white/[0.04] px-6 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
                  {group.title}
                </p>
              </div>
              <div
                className="flex-1 overflow-y-auto p-3"
                style={{
                  maxHeight: "360px",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <style>{`
                  .hide-scrollbar::-webkit-scrollbar { display: none; }
                `}</style>
                <div className="hide-scrollbar space-y-0.5">
                  {group.items.map((item) => (
                    <CopyableCommand
                      key={item.cmd}
                      cmd={item.cmd}
                      desc={item.desc}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
