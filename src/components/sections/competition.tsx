"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { CheckCircle2 } from "lucide-react"

export function Competition() {
  return (
    <section id="competition" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              <span className="text-gradient">No one</span> does both.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Premium or open-source? Until now, you had to choose.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative mx-auto max-w-4xl">
            {/* Matrix */}
            <div className="grid grid-cols-[80px_1fr_1fr] gap-px bg-border/30 rounded-[var(--radius)] overflow-hidden">
              {/* Header */}
              <div className="bg-card p-4" />
              <div className="bg-card p-4 text-center">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Closed
                </span>
              </div>
              <div className="bg-card p-4 text-center">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Open
                </span>
              </div>

              {/* Premium row */}
              <div className="bg-card p-4 flex items-center justify-center">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider -rotate-90 whitespace-nowrap">
                  Premium
                </span>
              </div>
              <div className="bg-card p-6 flex flex-col items-center justify-center min-h-[140px]">
                <div className="text-center space-y-1">
                  <span className="text-sm font-medium text-muted-foreground block">Control4</span>
                  <span className="text-sm font-medium text-muted-foreground block">Loxone</span>
                  <span className="text-sm font-medium text-muted-foreground block">Crestron</span>
                  <span className="text-xs text-muted-foreground/60 mt-2 block">R100k&ndash;R2M</span>
                </div>
              </div>
              <div className="bg-card p-6 flex flex-col items-center justify-center min-h-[140px] relative">
                <div className="absolute inset-2 rounded-[calc(var(--radius)-4px)] border-2 border-primary/50 shadow-[0_0_30px_hsl(var(--primary)/0.15)]" />
                <div className="relative text-center">
                  <CheckCircle2 size={20} className="mx-auto mb-2 text-primary" />
                  <span className="font-heading text-lg font-bold text-primary block">
                    neostronghold
                  </span>
                  <span className="text-xs text-muted-foreground block mt-1">
                    R6k&ndash;R65k
                  </span>
                  <span className="text-xs text-primary/80 block mt-1 font-medium">
                    Open + Premium
                  </span>
                </div>
              </div>

              {/* DIY row */}
              <div className="bg-card p-4 flex items-center justify-center">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider -rotate-90 whitespace-nowrap">
                  DIY
                </span>
              </div>
              <div className="bg-card p-6 flex flex-col items-center justify-center min-h-[140px]">
                <div className="text-center space-y-1">
                  <span className="text-sm font-medium text-muted-foreground block">Sonoff</span>
                  <span className="text-sm font-medium text-muted-foreground block">Tuya</span>
                  <span className="text-sm font-medium text-muted-foreground block">Ring</span>
                  <span className="text-xs text-muted-foreground/60 mt-2 block">R1k&ndash;R8k</span>
                </div>
              </div>
              <div className="bg-card p-6 flex flex-col items-center justify-center min-h-[140px]">
                <div className="text-center">
                  <span className="text-sm font-medium text-muted-foreground block">Home Assistant</span>
                  <span className="text-xs text-muted-foreground/60 block mt-2">Free</span>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-6">
              neostronghold is the only player in the{" "}
              <span className="text-primary font-semibold">Open + Premium</span> quadrant.
              No lock-in, no cloud dependency, no compromises.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
