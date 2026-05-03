export function Ticker() {
  const items = [
    "15 bundled ethskills",
    "AI-powered scaffolding",
    "multi-chain (Base, Arbitrum, Optimism, zkSync)",
    "Claude + Codex",
    "idea → build → ship → audit → raise",
    "open source",
  ];
  return (
    <div className="bg-[#111] border-y border-white/[0.08] py-2.5 overflow-hidden mt-[61px]">
      <div className="flex gap-12 animate-scroll w-max text-[11px] text-neutral-500 tracking-wider">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="whitespace-nowrap">
            <span className="text-[#14F195] mr-2">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
