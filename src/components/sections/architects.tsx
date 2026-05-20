"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Button } from "@/components/ui/button"
import { useContact } from "@/components/contact-provider"
import { ARCHITECT_PROGRAM } from "@/lib/constants"
import { GraduationCap, FileText, Building2, Users, Ruler, Handshake } from "lucide-react"

const benefitIcons: Record<string, React.ElementType> = {
  GraduationCap,
  FileText,
  Building2,
  Users,
  Ruler,
  Handshake,
}

export function Architects() {
  const { open: openContact } = useContact()
  return (
    <section id="architects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Designed for{" "}
              <span className="text-gradient">architects</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The system architects choose for their own homes. CPD-accredited
              training, spec sheets, BIM objects, and a transparent trade
              partner program.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <ScrollReveal direction="left">
            <div className="rounded-[var(--radius)] border border-border/50 bg-card p-8">
              <h3 className="font-heading text-xl font-semibold mb-6">
                Trade partner benefits
              </h3>
              <div className="space-y-4">
                  {ARCHITECT_PROGRAM.benefits.map((benefit, i) => {
                  const benefitKeys = ["GraduationCap", "FileText", "Building2", "Users", "Ruler", "Handshake"]
                  const Icon = benefitIcons[benefitKeys[i]] as React.ComponentType<{ size?: number; className?: string }> | undefined
                  return (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {Icon && <Icon size={16} />}
                      </div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="rounded-[var(--radius)] glass-strong p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs text-accent mb-4">
                <GraduationCap size={12} />
                CPD Accredited
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">
                {ARCHITECT_PROGRAM.cpdTitle}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {ARCHITECT_PROGRAM.cpdDescription}
              </p>
              <Button variant="glow" size="lg" onClick={() => openContact({ interest: "Partnership" })}>
                Book a Lunch &amp; Learn
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3 text-center">
            {[
              { label: "CPD Points per course", value: "1" },
              { label: "SAIA-registered courses", value: "Yes" },
              { label: "IID Corporate Member", value: "Yes" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[var(--radius)] border border-border/50 bg-card p-4"
              >
                <div className="font-heading text-2xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
