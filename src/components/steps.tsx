const engines = [
  {
    key: "01",
    name: "Idea",
    tag: "<Idea>",
    accent: "#7aa2ff",
    description:
      "52 curated ideas from the corpus, plus first principles synthesis from three founder questions. output: idea.md with why now, why ethereum, gtm, risks, and your first 24h plan.",
    skills: ["why", "concepts", "l2s", "validate-idea"],
    cmd: "eth idea",
  },
  {
    key: "02",
    name: "Build",
    tag: "<Build>",
    accent: "#a78bfa",
    description:
      "architect (opus) plans contracts and picks a chain. builder (sonnet) forks the template — solidity against verified addresses only, foundry tests, scaffold eth 2 frontend.",
    skills: ["security", "tools", "addresses", "standards", "gas", "testing"],
    cmd: "eth build",
  },
  {
    key: "03",
    name: "Audit",
    tag: "<Audit>",
    accent: "#f97316",
    description:
      "a separate agent from the builder — different model run, no shared context. wraps slither and walks the 500+ item checklist across 19 security domains.",
    skills: ["audit", "security"],
    cmd: "eth audit",
  },
  {
    key: "04",
    name: "Ship",
    tag: "<Ship>",
    accent: "#22c55e",
    description:
      "pre ship reviewer runs the qa checklist. deploy wraps forge script with chain aware rpc, contract verification, and multisig handoff guidance.",
    skills: ["qa", "ship", "l2s"],
    cmd: "eth ship",
  },
  {
    key: "05",
    name: "Raise",
    tag: "<Raise>",
    accent: "#eab308",
    description:
      "competitive landscape mapped to your niche. seed deck. smart money map scoring 15 eth native funds against your thesis.",
    skills: ["create-pitch-deck", "why"],
    cmd: "eth raise",
  },
];

export function Steps() {
  return (
    <section
      id="engines"
      className="relative w-full border-t border-white/[0.04] px-5 py-24 sm:px-8 sm:py-32 lg:px-14"
    >
      <div className="w-full">
        {/* Header with pipeline */}
        <div className="mb-14 flex flex-col gap-10 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
              the five engines
            </p>
            <h2 className="font-pixel text-3xl font-normal tracking-wide text-white md:text-4xl lg:text-5xl">
              founder mode{" "}
              <span className="text-gradient-blue">ON.</span>
            </h2>
          </div>

          {/* Pipeline progress */}
          <div className="hidden items-center gap-1 lg:flex">
            {engines.map((engine, i) => (
              <div key={engine.name} className="flex items-center gap-1">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08]"
                  style={{ backgroundColor: `${engine.accent}15` }}
                >
                  <span
                    className="font-mono text-[10px] font-bold"
                    style={{ color: engine.accent }}
                  >
                    {engine.key}
                  </span>
                </div>
                {i < engines.length - 1 && (
                  <div className="h-px w-6 bg-white/[0.08]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Engine cards */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {engines.map((engine) => (
            <div
              key={engine.name}
              className="hover-glow group flex flex-col rounded-2xl border border-white/[0.06] bg-[#0a0a0a] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#0c0c0c]"
            >
              {/* Tag */}
              <p
                className="mb-4 font-pixel text-sm tracking-wide"
                style={{ color: engine.accent }}
              >
                {engine.tag}
              </p>

              {/* Command */}
              <code className="mb-4 inline-flex w-fit rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-white/60">
                {engine.cmd}
              </code>

              {/* Description */}
              <p className="mb-5 flex-1 text-[12px] leading-[1.7] text-white/40">
                {engine.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1">
                {engine.skills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex h-5 items-center rounded border border-white/[0.06] bg-white/[0.02] px-1.5 font-mono text-[8px] uppercase tracking-wide text-white/30"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
