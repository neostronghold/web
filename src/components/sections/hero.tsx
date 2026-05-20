"use client"

import { CosmicBackground } from "@/components/effects/cosmic-background"
import { TextRotate } from "@/components/effects/text-rotate"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Home, Ruler, Wrench, TrendingUp } from "lucide-react"
import { ROTATING_WORDS, COMPANY } from "@/lib/constants"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <CosmicBackground />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-8">
          <span className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
          Your home&apos;s AI operating system
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-6">
          Make your home
          <br />
          <TextRotate
            words={ROTATING_WORDS}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2"
          />
        </h1>

        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground mb-10">
          {COMPANY.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="glow" size="xl" asChild>
            <a href="#hardware">
              Explore the Hardware <ArrowRight className="ml-1" size={18} />
            </a>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <a href="#agent-hub">
              <Code2 className="mr-2" size={18} />
              Meet the Agents
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {[
            { label: "Homeowner", href: "#pricing", icon: Home },
            { label: "Architect", href: "#architects", icon: Ruler },
            { label: "Installer", href: "#tesla", icon: Wrench },
            { label: "Investor", href: "#investors", icon: TrendingUp },
          ].map((role) => (
            <a
              key={role.label}
              href={role.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background/60 backdrop-blur-sm px-3.5 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              <role.icon size={12} />
              {role.label}
            </a>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { label: "Local AI", desc: "On-device processing" },
            { label: "Open Source", desc: "Apache 2.0 licensed" },
            { label: "Any Protocol", desc: "Zigbee / Z-Wave / WiFi / Matter" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-heading text-sm font-semibold text-foreground">
                {item.label}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
