"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Shield, Code2, Lock, ExternalLink } from "lucide-react"
import { COMPANY } from "@/lib/constants"

export function OpenSource() {
  return (
    <section id="open-source" className="relative py-24 sm:py-32 bg-cosmic-surface/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-4">
                <Code2 size={14} />
                Apache 2.0 licensed
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Freedom is{" "}
                <span className="text-gradient">non-negotiable</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                neostronghold is built on a fork of Home Assistant, the world&apos;s
                most powerful open-source home automation platform. We keep our
                modifications open-source because we believe you should never be
                locked in.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: Code2,
                    title: "Fork it, modify it, own it",
                    desc: "Our entire platform is open-source. Developers can audit, extend, and customise freely.",
                  },
                  {
                    icon: Lock,
                    title: "No vendor lock-in",
                    desc: "Move to any Home Assistant-compatible system at any time. Your devices work everywhere.",
                  },
                  {
                    icon: Shield,
                    title: "Auditable security",
                    desc: "Open-source means anyone can review our code. Your home's security is transparent, not obfuscated.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-sm">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a href={`https://${COMPANY.github}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium rounded-full border border-primary/30 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary/60 transition-all duration-300">
                <Code2 className="mr-2" size={18} />
                View on GitHub
                <ExternalLink className="ml-1" size={14} />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative rounded-[var(--radius)] border border-border/50 bg-card p-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive" />
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <div className="h-3 w-3 rounded-full bg-accent" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">
                  neostronghold OS &mdash; Apache 2.0
                </span>
              </div>

              <pre className="text-sm text-muted-foreground overflow-x-auto">
                <code>{`MIT License

Copyright (c) 2026 NeoParadise

Permission is hereby granted, free of charge,
to any person obtaining a copy of this software
and associated documentation files...

No warranty — but no restrictions either.

Built with ❤️ in Cape Town, South Africa.`}</code>
              </pre>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
