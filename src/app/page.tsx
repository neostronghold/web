import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { HowItWorks } from "@/components/sections/how-it-works"
import { HardwareShowcase } from "@/components/sections/hardware-showcase"
import { AgentHub } from "@/components/sections/agent-hub"
import { AIAgent } from "@/components/sections/ai-agent"
import { Features } from "@/components/sections/features"
import { TeslaIntegration } from "@/components/sections/tesla-integration"
import { Marketplace } from "@/components/sections/marketplace"
import { Architects } from "@/components/sections/architects"
import { Diaspora } from "@/components/sections/diaspora"
import { Competition } from "@/components/sections/competition"
import { Market } from "@/components/sections/market"
import { Pricing } from "@/components/sections/pricing"
import { OpenSource } from "@/components/sections/open-source"
import { Roadmap } from "@/components/sections/roadmap"
import { AlphaCommunity } from "@/components/sections/alpha-community"
import { Team } from "@/components/sections/team"
import { Investors } from "@/components/sections/investors"
import { CTA } from "@/components/sections/cta"
import { Nav } from "@/components/layout/nav"
import { Footer } from "@/components/layout/footer"
import { Starfield } from "@/components/effects/starfield"
import { CosmicDivider } from "@/components/effects/cosmic-divider"

export default function Home() {
  return (
    <>
      <Nav />
      <Starfield />

      <main>
        <Hero />
        <CosmicDivider />
        <Problem />
        <HowItWorks />
        <CosmicDivider />
        <HardwareShowcase />
        <AgentHub />
        <AIAgent />
        <CosmicDivider />
        <Features />
        <TeslaIntegration />
        <Marketplace />
        <CosmicDivider />
        <Architects />
        <Diaspora />
        <CosmicDivider />
        <Competition />
        <Market />
        <CosmicDivider />
        <Pricing />
        <OpenSource />
        <CosmicDivider />
        <Roadmap />
        <AlphaCommunity />
        <CosmicDivider />
        <Team />
        <Investors />
        <CosmicDivider />
        <CTA />
      </main>

      <Footer />
    </>
  )
}
