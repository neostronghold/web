"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Check, Cpu } from "lucide-react"
import { HARDWARE_TIERS } from "@/lib/constants"

export function HardwareShowcase() {
  return (
    <section id="hardware" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Two paths to an{" "}
              <span className="text-gradient">intelligent home</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Pulse for cloud-managed simplicity. Nexus for local AI sovereignty.
              Both run the same neostronghold OS.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {HARDWARE_TIERS.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.15}>
              <div
                className={`relative group ${
                  tier.isPro ? "lg:-mt-4 lg:mb-[-1rem]" : ""
                }`}
              >
                {tier.isPro && (
                  <div className="absolute -inset-[1px] rounded-[var(--radius)] bg-gradient-to-r from-primary via-secondary to-accent opacity-40 group-hover:opacity-70 blur-md transition-all duration-700 animate-gradient-rotate bg-[length:200%_200%]" />
                )}
                <div
                  className={`relative rounded-[var(--radius)] p-8 ${
                    tier.isPro
                      ? "glass-strong"
                      : "border border-border/50 bg-card"
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium text-primary/60 uppercase tracking-widest">{tier.name}</span>
                        <h3 className="font-heading text-xl sm:text-2xl font-bold">
                          {tier.brand}
                        </h3>
                        <p className="font-heading text-lg font-semibold text-gradient sm:hidden">{tier.name}</p>
                        <span
                          className={`hidden sm:inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            tier.isPro
                              ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30"
                              : "bg-muted text-muted-foreground border border-border/50"
                          }`}
                        >
                          {tier.badge}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {tier.tagline}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-heading text-3xl font-bold">
                        {tier.price}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        once-off
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    {tier.description}
                  </p>

                  {/* Device Render */}
                  <div className="mb-8 h-48 rounded-xl overflow-hidden relative">
                    {tier.isPro ? (
                      /* Nexus: Translucent premium hub */
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-secondary/[0.04] to-accent/[0.06] border border-primary/20 rounded-xl">
                        {/* Internal glow layers */}
                        <div className="absolute inset-4 rounded-lg bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/20 blur-2xl animate-glow-pulse" />

                        {/* Circuit lines */}
                        <div className="absolute top-8 left-6 w-16 h-px bg-gradient-to-r from-primary/60 to-transparent" />
                        <div className="absolute top-12 left-6 w-12 h-px bg-gradient-to-r from-accent/60 to-transparent" />
                        <div className="absolute top-16 left-6 w-20 h-px bg-gradient-to-r from-secondary/60 to-transparent" />
                        <div className="absolute bottom-8 right-6 w-16 h-px bg-gradient-to-r from-transparent to-primary/60" />
                        <div className="absolute bottom-12 right-6 w-12 h-px bg-gradient-to-r from-transparent to-accent/60" />

                        {/* LED indicators */}
                        <div className="absolute top-4 right-4 flex gap-1.5">
                          <div className="h-2 w-2 rounded-full bg-accent animate-glow-pulse" />
                          <div className="h-2 w-2 rounded-full bg-primary/60" />
                          <div className="h-2 w-2 rounded-full bg-secondary/40" />
                        </div>

                        {/* Center chip / logo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 border border-white/10 flex items-center justify-center">
                            <Cpu size={20} className="text-primary" />
                          </div>
                          <span className="text-[10px] text-primary/60 mt-2 font-mono">NEXUS</span>
                        </div>

                        {/* Edge glow */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                      </div>
                    ) : (
                      /* Pulse: Sleek router */
                      <div className="absolute inset-0 bg-muted/40 border border-border/50 rounded-xl">
                        {/* Router body */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-16 rounded-xl bg-gradient-to-b from-card to-muted border border-border/40 shadow-lg">
                          {/* Antenna lines */}
                          <div className="absolute -top-8 left-1/4 w-px h-10 bg-gradient-to-t from-primary/40 to-transparent" />
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-t from-primary/60 to-transparent" />
                          <div className="absolute -top-8 right-1/4 w-px h-10 bg-gradient-to-t from-primary/40 to-transparent" />

                          {/* WiFi waves */}
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                            <svg width="24" height="16" className="text-primary/40">
                              <path d="M3 6 Q12 0 21 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                              <path d="M6 10 Q12 5 18 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                              <path d="M9 14 Q12 11 15 14" fill="none" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                          </div>

                          {/* LED strip */}
                          <div className="absolute top-2 left-4 right-4 flex items-center gap-1.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <div className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                            <div className="flex-1" />
                            <span className="text-[8px] text-muted-foreground font-mono">PULSE</span>
                          </div>

                          {/* Ports */}
                          <div className="absolute bottom-2 left-4 right-4 flex justify-center gap-2">
                            <div className="h-2 w-6 rounded-sm bg-muted-foreground/20 border border-border/30" />
                            <div className="h-2 w-6 rounded-sm bg-muted-foreground/20 border border-border/30" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check
                          size={16}
                          className={`mt-0.5 shrink-0 ${
                            tier.isPro ? "text-primary" : "text-muted-foreground"
                          }`}
                        />
                        <span
                          className={
                            tier.isPro ? "text-foreground" : "text-muted-foreground"
                          }
                        >
                          {spec}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={tier.isPro ? "glow" : "outline"}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a href="#pricing">
                      {tier.isPro ? "Get Nexus" : "Get Pulse"}
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
