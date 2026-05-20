"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { ALPHA_TESTERS } from "@/lib/constants"
import { Quote, Star } from "lucide-react"

export function AlphaCommunity() {
  return (
    <section id="alpha" className="relative py-24 sm:py-32 bg-cosmic-surface/50">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent mb-4">
              <Star size={14} />
              Alpha testing now
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Built for real people,{" "}
              <span className="text-gradient">tested on neighbours</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Before it reaches your home, every agent runs in a house on our
              street. Our neighbours are our alpha testers — and they&apos;re
              our first believers.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {ALPHA_TESTERS.map((tester, i) => (
            <ScrollReveal key={tester.name} delay={i * 0.15}>
              <div className="relative rounded-[var(--radius)] border border-border/50 bg-card p-8">
                <Quote
                  size={24}
                  className="absolute top-6 right-6 text-primary/20"
                />
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 text-sm font-bold text-primary">
                    {tester.initials}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-sm">
                      {tester.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {tester.location}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{tester.quote}&rdquo;
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              5 alpha homes live. 20+ on the waitlist.
            </p>
            <p className="text-xs text-muted-foreground">
              Every issue found in alpha is one you&apos;ll never experience.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
