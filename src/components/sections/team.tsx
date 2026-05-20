"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { TEAM_MEMBERS } from "@/lib/constants"

export function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Built by <span className="text-gradient">family</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A small team with big ambition. We&apos;ve been running our own
              smart home for years. Now we&apos;re bringing that experience to
              every South African home.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 max-w-2xl mx-auto">
          {TEAM_MEMBERS.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.12}>
              <div className="group rounded-[var(--radius)] border border-border/50 bg-card p-6 text-center hover:border-primary/30 transition-colors duration-300">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 text-lg font-bold text-primary group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  {member.initials}
                </div>
                <h3 className="font-heading text-xl font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
