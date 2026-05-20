"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { FEATURES } from "@/lib/constants"
import {
  Cpu,
  Layout,
  Car,
  Store,
  Sun,
  Code2,
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Layout,
  Car,
  Store,
  Sun,
  Code2,
}

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-cosmic-surface/50">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Everything you need.{" "}
              <span className="text-gradient">Nothing you don't.</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Premium hardware, intelligent software, and the freedom of
              open-source — all in one ecosystem.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] as React.ComponentType<{ size?: number; className?: string }> | undefined
            return (
              <ScrollReveal key={feature.title} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-[var(--radius)] border border-border/50 bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70">
                      {Icon && <Icon size={24} className="text-white" />}
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
