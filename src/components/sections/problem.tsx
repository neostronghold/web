"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { PAIN_POINTS } from "@/lib/constants"
import { Grid3X3, CloudOff, ZapOff, Brain } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Grid3X3,
  CloudOff,
  ZapOff,
  Brain,
}

export function Problem() {
  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Smart homes in South Africa are{" "}
              <span className="text-gradient">broken</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The current options force you to choose between luxury prices,
              technical complexity, or vendor lock-in.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PAIN_POINTS.map((point, i) => {
            const Icon = iconMap[point.icon] as React.ComponentType<{ size?: number; className?: string }> | undefined
            return (
              <ScrollReveal key={point.title} delay={i * 0.1}>
                <div className="group relative rounded-[var(--radius)] border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--primary)/0.08)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
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
