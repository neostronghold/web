"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useContact } from "@/components/contact-provider"
import { PRICING_TIERS } from "@/lib/constants"
import { Check } from "lucide-react"

export function Pricing() {
  const { open: openContact } = useContact()
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Transparent pricing.{" "}
              <span className="text-gradient">No surprises.</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From self-install starter kits to fully managed smart homes —
              there&apos;s a plan for every home.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-3 items-start">
          {PRICING_TIERS.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.12}>
              <div
                className={`relative rounded-[var(--radius)] border p-8 ${
                  tier.highlighted
                    ? "border-primary/40 bg-card shadow-[0_0_40px_hsl(var(--primary)/0.1)]"
                    : "border-border/50 bg-card"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="glow">Most Popular</Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-heading text-xl font-semibold mb-1">
                    {tier.name}
                  </h3>
                  <div className="font-heading text-4xl font-bold mb-2">
                    {tier.price}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.highlighted ? "glow" : tier.custom ? "outline" : "outline"}
                  size="lg"
                  className={`w-full ${tier.custom ? "border-primary/50" : ""}`}
                  onClick={() => openContact()}
                >
                    {tier.highlighted ? "Get Started" : tier.custom ? "Contact Us" : "Learn More"}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-xs text-muted-foreground mt-8">
            All prices exclude VAT. Installation and shipping costs are quoted
            individually. Monthly subscription available for existing customers.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
