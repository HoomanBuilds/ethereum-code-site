import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk, Silkscreen } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const silkscreen = Silkscreen({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ethereum code — idea. build. ship.",
  description:
    "AI native CLI for Ethereum founders. Idea → Build → Ship → Audit → Raise. Grounded in 31 bundled skills. Zero hallucinated addresses. Ship on chain apps in hours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrains.variable} ${spaceGrotesk.variable} ${silkscreen.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050505] text-[#f0f0f0] font-[var(--font-mono)] antialiased">
        {children}
      </body>
    </html>
  );
}
