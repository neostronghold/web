"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Button } from "@/components/ui/button"
import { useContact } from "@/components/contact-provider"
import { INVESTOR_HIGHLIGHTS } from "@/lib/constants"
import { TrendingUp, Target, DollarSign, Users, Cpu, BarChart3 } from "lucide-react"

export function Investors() {
  const { open: openContact } = useContact()
  return (
    <section id="investors" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              For{" "}
              <span className="text-gradient">investors</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Open-source smart home hardware + AI subscription from Cape Town.
              Massive market, proven unit economics, YC-caliber founding team.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {[
            { icon: TrendingUp, label: "Market", value: INVESTOR_HIGHLIGHTS.market },
            { icon: Target, label: "LTV:CAC", value: INVESTOR_HIGHLIGHTS.ltvCac },
            { icon: Users, label: "Addressable", value: INVESTOR_HIGHLIGHTS.tam },
            { icon: DollarSign, label: "Revenue Target", value: INVESTOR_HIGHLIGHTS.arr },
            { icon: Cpu, label: "Traction", value: INVESTOR_HIGHLIGHTS.traction },
            { icon: BarChart3, label: "Seeking", value: INVESTOR_HIGHLIGHTS.funding },
          ].map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.08}>
              <div className="rounded-[var(--radius)] border border-border/50 bg-card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <item.icon size={16} className="text-primary" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="rounded-[var(--radius)] glass-strong p-8 text-center max-w-2xl mx-auto">
            <h3 className="font-heading text-xl font-semibold mb-2">
              Full business plan available
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Covers market analysis, unit economics, competitor landscape,
              regulatory roadmap, 3-year financial projections, and risk
              assessment. Preparing for Y Combinator Winter 2027.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="glow" size="lg" onClick={() => openContact({ interest: "Investment" })}>
                Request Investor Deck
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/neoparadise/neostronghold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
