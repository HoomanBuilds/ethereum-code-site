"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Nav } from "@/components/nav";
import {
  NetworkEthereum,
  NetworkBase,
  NetworkArbitrumOne,
  NetworkOptimism,
} from "@web3icons/react";

const Silk = dynamic(() => import("@/components/Silk"), { ssr: false });

export function Hero() {
  const [copied, setCopied] = useState(false);
  const installCmd = "curl -fsSL https://ethereum-code.vercel.app/setup.sh | bash";

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
    <section className="grain relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* Silk shader background */}
      <div className="absolute inset-0 opacity-50">
        <Silk
          color="#3b4fd6"
          speed={2}
          scale={1.8}
          noiseIntensity={0.9}
          rotation={0.2}
        />
      </div>
      {/* Gradient overlays for depth — very subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/10 via-transparent to-[#050505]/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_85%)]" />

      {/* Nav — lives in the hero, scrolls with it */}
      <Nav />

      <div className="relative z-10 flex w-full flex-col items-center justify-center px-5 pt-32 pb-28 sm:px-8 lg:px-14">
        {/* Version badge */}
        <div className="animate-fade-in-up mb-8 inline-flex h-7 items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7aa2ff] shadow-[0_0_6px_rgba(122,162,255,0.5)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            v0.3.3 · 31 skills · 26 commands
          </span>
        </div>

        {/* Main headline — pixel font, normal weight */}
        <h1 className="animate-fade-in-up delay-100 text-center font-pixel text-5xl font-normal tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl">
          idea. build. ship.
        </h1>

        {/* Subhead */}
        <p className="animate-fade-in-up delay-200 mt-6 max-w-xl text-center text-[15px] leading-relaxed text-white/45 md:mt-8 md:text-[17px]">
          an ai native cli for ethereum founders. grounded in 31 bundled skills.
          zero hallucinated addresses. hours, not weeks.
        </p>

        {/* Terminal install block */}
        <div className="animate-fade-in-up delay-300 mt-10 w-full max-w-xl sm:mt-12">
          <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a]/80 shadow-2xl shadow-black/40 backdrop-blur-xl">
            {/* Title bar */}
            <div className="flex h-10 items-center justify-between border-b border-white/[0.06] px-4">
              <div className="flex gap-[6px]">
                <div className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
                <div className="h-[10px] w-[10px] rounded-full bg-[#febc2e]" />
                <div className="h-[10px] w-[10px] rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white/25">
                install command
              </span>
              <div className="w-[46px]" />
            </div>
            {/* Command */}
            <div className="flex items-center gap-3 px-5 py-3">
              <code className="font-mono text-[12px] text-white/80 break-all leading-relaxed flex-1">
                <span className="text-[#7aa2ff]">$ </span>
                {installCmd}
              </code>
              <button
                onClick={copy}
                className="flex-shrink-0 rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                {copied ? "copied" : "copy"}
              </button>
            </div>
          </div>
        </div>

        {/* Platform pills with icons */}
        <div className="animate-fade-in-up delay-400 mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
              runs in
            </span>
            <div className="flex items-center gap-1.5">
              <Pill>Claude Code</Pill>
              <Pill>Codex</Pill>
              <Pill>eth cli</Pill>
            </div>
          </div>
          <span className="hidden h-4 w-px bg-white/[0.08] sm:block" />
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
              deploys to
            </span>
            <div className="flex items-center gap-3">
              <NetworkBase className="h-5 w-5 text-white/40 transition hover:text-white/70" />
              <NetworkArbitrumOne className="h-5 w-5 text-white/40 transition hover:text-white/70" />
              <NetworkOptimism className="h-5 w-5 text-white/40 transition hover:text-white/70" />
              <NetworkEthereum className="h-5 w-5 text-white/40 transition hover:text-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <span className="inline-flex h-[22px] items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2 font-mono text-[10px] tracking-tight text-white/50 transition hover:border-white/15 hover:text-white/70">
      {icon}
      {children}
    </span>
  );
}
