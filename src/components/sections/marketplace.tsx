"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Button } from "@/components/ui/button"
import { MARKETPLACE_CATEGORIES } from "@/lib/constants"
import {
  Sun,
  Shield,
  Thermometer,
  Sparkles,
  Droplets,
  Car,
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Sun,
  Shield,
  Thermometer,
  Sparkles,
  Droplets,
  Car,
}

export function Marketplace() {
  return (
    <section id="marketplace" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              An app store for your{" "}
              <span className="text-gradient">home&apos;s AI</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Browse community-built agents. Install with one click. Or build
              your own with our agent SDK. Your home&apos;s capabilities grow
              every day.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MARKETPLACE_CATEGORIES.map((category, i) => {
            const Icon = iconMap[category.icon] as React.ComponentType<{ size?: number; className?: string }> | undefined
            return (
              <ScrollReveal key={category.title} delay={i * 0.08}>
                <div className="group rounded-[var(--radius)] border border-border/50 bg-card p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {Icon && <Icon size={20} className="text-primary" />}
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">
                      {category.count} agents
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 rounded-[var(--radius)] border border-border/50 bg-card p-8 text-center">
            <h3 className="font-heading text-xl font-semibold mb-2">
              Build your own agent
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-lg mx-auto">
              Our agent SDK lets anyone create, publish, and sell automations.
              The community builds what we haven&apos;t even imagined yet.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="glow" size="lg" asChild>
                <a href="#pricing">Start Building</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/neoparadise/neostronghold" target="_blank" rel="noopener noreferrer">
                  Agent SDK on GitHub
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
