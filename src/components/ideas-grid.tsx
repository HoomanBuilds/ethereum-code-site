const ideas = [
  { title: "stablecoin remittance", desc: "global remittance and fx powered by usdc / pyusd with built-in on/off-ramps and ens-routed payouts.", tag: "stablecoins" },
  { title: "agent wallet", desc: "erc-4337 smart account for ai agents with session keys, spending limits, and programmatic guardrails.", tag: "wallets" },
  { title: "regional neobank", desc: "region-first neobank on l2 stablecoins, built for latam, southeast asia, and africa.", tag: "banking" },
  { title: "everlasting options", desc: "no-expiry perpetual options on arbitrum — continuous optionality, no rolling contracts.", tag: "derivatives" },
  { title: "mm vaults", desc: "depositor-funded market-making vaults for clob amms, lp pools, and perp books.", tag: "defi" },
  { title: "structured vaults", desc: "exotic yield vaults stacking eth lst credit, options, and hedged leverage on base.", tag: "yield" },
  { title: "morpho-style p2p", desc: "permissionless p2p matcher composable with aave and compound — better rates, same risk.", tag: "lending" },
  { title: "power perps", desc: "quadratic-leverage perpetuals — non-linear payoff, gamma without rolling options.", tag: "derivatives" },
  { title: "conditional markets", desc: "prediction markets for conditional outcomes — 'if x then y' at scale.", tag: "prediction" },
  { title: "scalar markets", desc: "exotic prediction types beyond binary: scalar, parametric, replication, benchmark.", tag: "prediction" },
  { title: "robinhood on-chain", desc: "global equities via tokenized stocks, pre-ipo tokens, and every spot token from one wallet.", tag: "trading" },
  { title: "llm credit exchange", desc: "buy, sell, and redeem inference credits for every model in one onchain market.", tag: "ai" },
  { title: "x402 facilitator", desc: "depin-style token-incentivized facilitator for x402 micropayments and agent commerce.", tag: "payments" },
  { title: "exotic capital", desc: "launchpad for niche themes — peptides, chips, datacenters, foreign equities.", tag: "rwa" },
  { title: "rwa issuance", desc: "configurable platform for private credit, mining contracts, rev-share notes — all permissioned.", tag: "rwa" },
  { title: "shielded payroll", desc: "noir-circuit private payroll on ethereum — verifiable amounts, hidden recipients.", tag: "privacy" },
  { title: "dao governance kit", desc: "openzeppelin governor + tally with timelocked execution, guardian veto, and conviction voting.", tag: "governance" },
  { title: "nft drop pipeline", desc: "erc-721a with allowlist signing, farcaster-frame mint flow, and onchain metadata.", tag: "nft" },
];

export function IdeasGrid() {
  return (
    <section id="ideas" className="relative border-t border-white/[0.06] px-4 py-24 sm:px-6 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-4 sm:mb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">build useful & tasteful</span>
          <div className="h-px flex-1 bg-white/[0.08]" />
        </div>

        <h2 className="mb-12 max-w-3xl font-mono text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl">
          ethereum <span className="text-transparent [-webkit-text-stroke:1px_#7aa2ff]">apps</span> the corpus already knows how to ship.
        </h2>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {ideas.map((card) => (
            <div
              key={card.title}
              className="group bg-[#0a0a0a] p-7 transition-colors hover:bg-[#0e0e0e]"
            >
              <span className="mb-4 inline-block rounded border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-white/55">
                {card.tag}
              </span>
              <h4 className="mb-2 font-mono text-sm font-semibold tracking-tight text-white">
                {card.title}
              </h4>
              <p className="text-[12.5px] leading-relaxed text-white/50">
                {card.desc}
              </p>
            </div>
          ))}
          <div className="flex items-center justify-center bg-[#0e0e0e] p-7">
            <div className="text-center">
              <div className="mb-2 font-mono text-2xl text-white/30">+</div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
                52 in corpus · 500 by v0.6
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
