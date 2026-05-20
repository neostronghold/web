"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"
import { useContact } from "@/components/contact-provider"
import { COMPANY } from "@/lib/constants"

export function CTA() {
  const { open: openContact } = useContact()

  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-secondary/10 p-8 sm:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08)_0%,transparent_70%)]" />

            <div className="relative z-10">
              <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight mb-4">
                Ready to make your home{" "}
                <span className="text-gradient">intelligent</span>?
              </h2>
              <p className="mx-auto max-w-xl text-base sm:text-lg text-muted-foreground mb-8">
                Whether you&apos;re building, renovating, or ready to upgrade —
                we&apos;ll help you every step of the way. Based in Cape Town,
                serving the world.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="glow" size="xl" onClick={() => openContact()}>
                  Get in Touch
                  <ArrowRight className="ml-1" size={18} />
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a
                    href={`https://${COMPANY.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code2 className="mr-2" size={18} />
                    View on GitHub
                  </a>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-6">
                Investors, partners, and early adopters —{" "}
                <button onClick={() => openContact()} className="text-primary hover:underline">
                  contact us
                </button>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
