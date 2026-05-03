import { Hero } from "@/components/hero";
import { ProtocolsTicker } from "@/components/protocols";
import { IdeasShowcase } from "@/components/ideas-showcase";
import { Steps } from "@/components/steps";
import { Skills } from "@/components/skills";
import { IdeasList } from "@/components/ideas-list";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white">
      <Hero />
      <ProtocolsTicker />
      <IdeasShowcase />
      <Steps />
      <Skills />
      <IdeasList />
      <CTA />
      <Footer />
    </main>
  );
}
