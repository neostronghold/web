"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { TESLA_FEATURES } from "@/lib/constants"
import {
  Battery,
  Car,
  Gauge,
  CloudAlert,
  Zap,
  Radio,
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Battery,
  Car,
  Gauge,
  CloudAlert,
  Zap,
  Radio,
}

export function TeslaIntegration() {
  return (
    <section id="tesla" className="relative py-24 sm:py-32 bg-cosmic-surface/50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-4">
              <Zap size={14} />
              Tesla Fleet API integrated
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Your car and home,{" "}
              <span className="text-gradient">one intelligence</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Direct integration with Powerwall, vehicle, and energy products
              via the Tesla Fleet API. Your home manages your energy, your
              vehicle preconditions itself, and you never tap your phone
              for the garage again.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESLA_FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] as React.ComponentType<{ size?: number; className?: string }> | undefined
            return (
              <ScrollReveal key={feature.title} delay={i * 0.08}>
                <div className="group rounded-[var(--radius)] border border-border/50 bg-card p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {Icon && <Icon size={20} className="text-primary" />}
                    </div>
                    <h3 className="font-heading font-semibold">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 rounded-[var(--radius)] glass-strong p-8">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Coming soon: the X demo
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  60-second video showing one AI agent controlling Powerwall +
                  vehicle + home, all on a local-first hub. One dashboard.
                  Zero cloud. We&apos;re building it now.
                </p>
                <div className="flex gap-2">
                  <Badge variant="glow">Powerwall</Badge>
                  <Badge variant="outline">Vehicle API</Badge>
                  <Badge variant="outline">HomeLink</Badge>
                  <Badge variant="outline">Storm Watch</Badge>
                </div>
              </div>
              <div className="flex h-24 w-full lg:w-48 items-center justify-center rounded-xl border border-dashed border-primary/30 bg-primary/5">
                <span className="text-xs text-primary">Demo video placeholder</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
