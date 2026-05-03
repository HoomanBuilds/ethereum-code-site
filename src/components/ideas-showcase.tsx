"use client";

import { useState } from "react";

const ideas = [
  {
    title: "stablecoin remittance",
    desc: "global remittance powered by usdc with built in on/off ramps",
    chains: ["Base", "Optimism"],
    skills: ["standards", "addresses", "building-blocks"],
  },
  {
    title: "agent wallet",
    desc: "erc 4337 smart account for ai agents, session keys, spending limits",
    chains: ["Base"],
    skills: ["wallets", "security", "standards"],
  },
  {
    title: "regional neobank",
    desc: "region first neobank on l2 stablecoins, built for latam and sea",
    chains: ["Arbitrum"],
    skills: ["frontend-ux", "wallets", "l2s"],
  },
  {
    title: "everlasting options",
    desc: "no expiry perpetual options, continuous optionality without rolling",
    chains: ["Arbitrum"],
    skills: ["testing", "security", "gas"],
  },
  {
    title: "mm vaults",
    desc: "depositor funded market making vaults for programs and perp books",
    chains: ["Mainnet"],
    skills: ["building-blocks", "security", "testing"],
  },
  {
    title: "structured product vaults",
    desc: "exotic yield vaults leveraging lst credit, options, and hedged leverage",
    chains: ["Base"],
    skills: ["standards", "gas", "building-blocks"],
  },
  {
    title: "morpho style p2p lending",
    desc: "permissionless p2p matcher composable with existing money markets",
    chains: ["Mainnet"],
    skills: ["security", "addresses", "tools"],
  },
  {
    title: "power perps",
    desc: "quadratic leverage perpetuals with non linear payoff and gamma",
    chains: ["Arbitrum"],
    skills: ["testing", "gas", "security"],
  },
  {
    title: "rwa issuance",
    desc: "configurable platform for private credit, rev share notes, mining contracts",
    chains: ["Mainnet"],
    skills: ["standards", "audit", "qa"],
  },
  {
    title: "shielded payroll",
    desc: "noir circuit private payroll — verifiable amounts, hidden recipients",
    chains: ["Mainnet"],
    skills: ["noir", "security", "testing"],
  },
];

export function IdeasShowcase() {
  const [activeIdea, setActiveIdea] = useState(ideas[0].title);
  const activeData = ideas.find((i) => i.title === activeIdea) || ideas[0];

  return (
    <section
      id="ideas"
      className="relative w-full border-t border-white/[0.04] px-5 py-24 sm:px-8 sm:py-32 lg:px-14"
    >
      {/* Warm gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0808] to-[#050505]" />

      <div className="relative z-10 w-full">
        {/* Section header */}
        <div className="mb-14 sm:mb-16">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
            build useful & tasteful
          </p>
          <h2 className="font-pixel text-3xl font-normal tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl">
            ethereum{" "}
            <span className="text-gradient-blue">apps</span>
          </h2>
        </div>

        {/* Two column: ideas list + skills panel */}
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,400px)] lg:gap-14">
          {/* Left: Ideas list */}
          <div className="space-y-0">
            {ideas.map((idea) => (
              <button
                key={idea.title}
                onClick={() => setActiveIdea(idea.title)}
                className={`group flex w-full items-start gap-4 border-b border-white/[0.04] px-1 py-5 text-left transition-all ${
                  activeIdea === idea.title
                    ? "bg-white/[0.02]"
                    : "hover:bg-white/[0.01]"
                }`}
              >
                <span
                  className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full transition ${
                    activeIdea === idea.title
                      ? "bg-[#7aa2ff] shadow-[0_0_6px_rgba(122,162,255,0.4)]"
                      : "bg-white/15 group-hover:bg-white/30"
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h4
                      className={`font-mono text-sm font-semibold tracking-tight transition ${
                        activeIdea === idea.title
                          ? "text-white"
                          : "text-white/70 group-hover:text-white/90"
                      }`}
                    >
                      {idea.title}
                    </h4>
                    <div className="flex gap-1">
                      {idea.chains.map((chain) => (
                        <span
                          key={chain}
                          className="rounded border border-white/[0.06] bg-white/[0.02] px-1.5 py-px font-mono text-[8px] uppercase tracking-wider text-white/30"
                        >
                          {chain}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[12px] leading-relaxed text-white/35">
                    {idea.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Skills panel for active idea */}
          <div className="sticky top-24 hidden h-fit lg:block">
            <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a]">
              {/* Header */}
              <div className="border-b border-white/[0.06] px-6 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                  skills loaded for this build
                </p>
                <p className="mt-2 font-pixel text-lg text-white">
                  {activeData.title}
                </p>
              </div>

              {/* Skills grid */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {activeData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-md border border-[#7aa2ff]/15 bg-[#7aa2ff]/[0.04] px-3 py-1.5 font-mono text-[11px] text-[#7aa2ff]/70"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#7aa2ff]/40" />
                      {skill}
                    </span>
                  ))}
                </div>

                {/* How it works */}
                <div className="mt-6 space-y-3 border-t border-white/[0.04] pt-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/25">
                      grounding flow
                    </span>
                  </div>
                  <div className="space-y-2">
                    <Step num="1" text="runtime.ts loads skill markdown" />
                    <Step num="2" text="injected as system context" />
                    <Step num="3" text="verified addresses only" />
                    <Step num="4" text="zero hallucinated outputs" />
                  </div>
                </div>

                {/* Run command */}
                <div className="mt-5 rounded-lg border border-white/[0.06] bg-[#080808] px-4 py-3">
                  <code className="font-mono text-[12px] text-white/60">
                    <span className="text-[#7aa2ff]">$ </span>
                    eth build --brief &quot;{activeData.title}&quot;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ num, text }: { num: string; text: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-5 w-5 items-center justify-center rounded border border-white/[0.06] bg-white/[0.02] font-mono text-[9px] text-white/30">
        {num}
      </span>
      <span className="font-mono text-[11px] text-white/40">{text}</span>
    </div>
  );
}
