"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { MARKET_STATS } from "@/lib/constants"

export function Market() {
  return (
    <section id="market" className="relative py-24 sm:py-32 bg-cosmic-surface/50">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              A <span className="text-gradient">massive</span> opportunity,
              perfectly timed
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              South Africa&apos;s smart home market is growing at 17–31% annually,
              driven by load-shedding, solar adoption, and rising demand for
              intelligent living.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MARKET_STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <div className="rounded-[var(--radius)] border border-border/50 bg-card p-6 text-center hover:border-primary/30 transition-colors duration-300">
                <div className="font-heading text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                  <span className="text-sm font-normal text-muted-foreground ml-1">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 rounded-[var(--radius)] border border-border/50 bg-card p-8">
            <h3 className="font-heading text-xl font-semibold mb-4">
              Why South Africa. Why now.
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Load-shedding legacy",
                  desc: "Solar adoption surged 7.3x in 3 years. 82% of non-solar homes plan to install within 12 months.",
                },
                {
                  title: "No local champion",
                  desc: "Control4 (US, R100k+). Fidelity ADT (cloud-only). Sonoff (cheap, Chinese, no support). SA has no home-grown premium smart home company.",
                },
                {
                  title: "WhatsApp nation",
                  desc: "95%+ of SA smartphone users are on WhatsApp. No smart home speaks their language. We do.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h4 className="font-heading font-semibold text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
