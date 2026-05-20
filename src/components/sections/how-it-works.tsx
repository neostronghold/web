"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { HOW_IT_WORKS } from "@/lib/constants"
import { Package, Zap, Sparkles } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Package,
  Zap,
  Sparkles,
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-cosmic-surface/50">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              From box to brilliance in{" "}
              <span className="text-gradient">three steps</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              No degrees in electrical engineering required.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-1/2 hidden md:block h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {HOW_IT_WORKS.map((step, i) => {
            const Icon = iconMap[step.icon] as React.ComponentType<{ size?: number; className?: string }> | undefined
            return (
              <ScrollReveal key={step.step} delay={i * 0.15}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20">
                      {Icon && <Icon size={28} className="text-primary" />}
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
