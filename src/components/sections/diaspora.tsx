"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Button } from "@/components/ui/button"
import { useContact } from "@/components/contact-provider"
import { DIASPORA_MARKETS } from "@/lib/constants"
import { Globe, MapPin, Shield, Users, ArrowRight } from "lucide-react"

export function Diaspora() {
  const { open: openContact } = useContact()
  return (
    <section id="diaspora" className="relative py-24 sm:py-32 bg-cosmic-surface/50">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-4">
              <Globe size={14} />
              SA diaspora
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Everywhere you go, bring{" "}
              <span className="text-gradient">SA-grade security</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              900,000+ South Africans live abroad. Your home shouldn&apos;t
              compromise on security just because you moved.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2">
          {DIASPORA_MARKETS.map((market, i) => (
            <ScrollReveal key={market.country} delay={i * 0.1}>
              <div className="group rounded-[var(--radius)] border border-border/50 bg-card p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">{market.country}</h3>
                      <p className="text-xs text-muted-foreground">{market.cities}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary">
                    {market.tier}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={14} className="shrink-0" />
                    {market.community}
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Shield size={14} className="shrink-0 mt-0.5 text-primary" />
                    {market.gap}
                  </div>
                </div>

                <button onClick={() => openContact()} className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors">
                  Learn more <ArrowRight size={12} />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4 max-w-xl mx-auto">
              SA expats in the UK pay 15-30% premiums for homes with SA-grade security integration. We bring that standard — anywhere.
            </p>
            <Button variant="outline" size="lg" onClick={() => openContact()}>
              International enquiries
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
