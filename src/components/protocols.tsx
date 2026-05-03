"use client";

import Marquee from "react-fast-marquee";
import {
  NetworkEthereum,
  NetworkBase,
  NetworkArbitrumOne,
  NetworkOptimism,
  NetworkZksync,
  NetworkPolygon,
  NetworkAvalanche,
  NetworkBinanceSmartChain,
  TokenUSDC,
  TokenUSDT,
  TokenDAI,
  TokenETH,
  TokenLINK,
  TokenUNI,
  TokenAAVE,
  TokenENS,
  TokenMKR,
  TokenLDO,
  TokenCOMP,
  TokenCRV,
  TokenRPL,
  TokenGRT,
  TokenDYDX,
} from "@web3icons/react";

const items = [
  NetworkEthereum,
  TokenUSDC,
  NetworkBase,
  TokenAAVE,
  NetworkArbitrumOne,
  TokenUNI,
  NetworkOptimism,
  TokenLINK,
  TokenDAI,
  NetworkPolygon,
  TokenENS,
  NetworkAvalanche,
  TokenMKR,
  NetworkBinanceSmartChain,
  TokenETH,
  TokenUSDT,
  TokenLDO,
  TokenCOMP,
  TokenCRV,
  TokenRPL,
  TokenGRT,
  TokenDYDX,
];

export function ProtocolsTicker() {
  return (
    <section className="relative w-full border-y border-white/[0.04] bg-[#070707] py-3">
      <Marquee speed={30} gradient gradientColor="#070707" gradientWidth={80}>
        {[...items, ...items, ...items].map((Icon, i) => (
          <span key={i} className="mx-3 inline-flex items-center justify-center">
            <Icon className="h-7 w-7 opacity-35" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
