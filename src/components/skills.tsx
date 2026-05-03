const bentoItems = [
  {
    span: "col-span-2 row-span-2",
    title: "31 skills",
    subtitle: "zero guesses",
    content: "every agent call loads skill markdown into system context. bundled locally, never fetched at runtime. verified addresses, real gas costs, chain aware routing.",
    accent: true,
  },
  {
    span: "col-span-1",
    title: "security",
    list: ["reentrancy", "overflow", "access control", "oracle manipulation", "flash loan", "front running"],
  },
  {
    span: "col-span-1",
    title: "standards",
    list: ["ERC20", "ERC721", "ERC1155", "ERC4337", "EIP712", "EIP2612"],
  },
  {
    span: "col-span-1",
    title: "testing",
    list: ["foundry fuzz", "invariant tests", "fork testing", "gas snapshots", "coverage reports"],
  },
  {
    span: "col-span-1",
    title: "frontend",
    list: ["scaffold eth 2", "wagmi hooks", "wallet connect", "tx UX", "page load animations", "number formatting"],
  },
  {
    span: "col-span-2",
    title: "build pipeline",
    list: ["architect plans contracts", "builder forks template", "solidity against verified addresses only", "foundry tests", "slither audit", "forge deploy"],
  },
  {
    span: "col-span-1",
    title: "chains",
    list: ["mainnet", "base", "arbitrum", "optimism", "zksync"],
  },
  {
    span: "col-span-1",
    title: "tools",
    list: ["foundry", "hardhat", "slither", "anvil", "tenderly", "etherscan"],
  },
  {
    span: "col-span-1",
    title: "launch",
    list: ["pitch deck", "grant apps", "hackathon prep", "investor map", "competitive analysis"],
  },
  {
    span: "col-span-1",
    title: "advanced",
    list: ["noir circuits", "gas optimization", "protocol design", "indexing", "orchestration"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-white/[0.04] px-5 py-24 sm:px-8 sm:py-32 lg:px-14"
    >
      <div className="w-full">
        {/* Header */}
        <div className="mb-14 sm:mb-16">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
            the grounding contract
          </p>
          <h2 className="font-pixel text-3xl font-normal tracking-wide text-white sm:text-4xl md:text-5xl">
            what your agents{" "}
            <span className="text-gradient-blue">actually know.</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid auto-rows-[minmax(140px,auto)] grid-cols-2 gap-3 md:grid-cols-4">
          {bentoItems.map((item) => (
            <div
              key={item.title}
              className={`${item.span} group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0a] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#0c0c0c] ${
                item.accent
                  ? "flex flex-col justify-center bg-gradient-to-br from-[#0a0a2e] via-[#0c0c14] to-[#0a0a0a]"
                  : ""
              }`}
            >
              {item.accent && (
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:14px_14px]" />
              )}
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
                {item.title}
              </p>

              {item.accent && item.subtitle && (
                <>
                  <p className="font-pixel text-2xl tracking-wide text-white sm:text-3xl md:text-4xl">
                    <span className="text-gradient-blue">{item.subtitle}</span>
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/40">
                    {item.content}
                  </p>
                </>
              )}

              {item.list && (
                <div className="flex flex-wrap gap-1.5">
                  {item.list.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] text-white/45 transition group-hover:text-white/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
