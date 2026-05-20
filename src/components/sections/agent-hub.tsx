"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AGENT_EXAMPLES } from "@/lib/constants"
import {
  Sun,
  Shield,
  Bell,
  Thermometer,
  Droplets,
  Car,
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Sun,
  Shield,
  Bell,
  Thermometer,
  Droplets,
  Car,
}

export function AgentHub() {
  return (
    <section id="agent-hub" className="relative py-24 sm:py-32 bg-cosmic-surface/50">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-4">
              <span className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
              Your home&apos;s operating system
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Meet your{" "}
              <span className="text-gradient">agent workspace</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Think of it as tmux for your home. Each agent is a panel in your
              workspace — spawn, monitor, and control them all from one
              interface. You&apos;re the sysadmin of your intelligent home.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-5 items-start">
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="rounded-[var(--radius)] glass-strong overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive" />
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <div className="h-3 w-3 rounded-full bg-accent" />
                </div>
                <span className="text-xs text-muted-foreground ml-2 font-mono">
                  agent-workspace@neostronghold ~ $
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {AGENT_EXAMPLES.slice(0, 4).map((agent, i) => {
                    const Icon = iconMap[agent.icon] as React.ComponentType<{ size?: number; className?: string }> | undefined
                    return (
                      <div
                        key={agent.name}
                        className={`rounded-xl border border-border/30 bg-gradient-to-br ${
                          i === 0 ? "from-amber-500/10 to-transparent" :
                          i === 1 ? "from-cyan-500/10 to-transparent" :
                          i === 2 ? "from-purple-500/10 to-transparent" :
                          "from-emerald-500/10 to-transparent"
                        } p-4 hover:border-primary/30 transition-colors cursor-pointer group`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br ${agent.color}`}>
                            {Icon && <Icon size={14} className="text-white" />}
                          </div>
                          <span className="text-sm font-semibold">{agent.name}</span>
                            <span className="text-[10px] text-primary/60 font-medium ml-1">/{agent.brand}</span>
                          <span className="ml-auto h-2 w-2 rounded-full bg-accent animate-glow-pulse" />
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {agent.description}
                        </p>
                      </div>
                    )
                  })}
                </div>

                <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2 font-mono text-xs text-muted-foreground">
                  <span className="text-primary">&gt;</span>
                  <span className="animate-pulse">_</span>
                  <span className="ml-1 opacity-60"># spawn energy-manager --watch --auto-optimize</span>
                  <span className="ml-auto text-accent">Agent running (PID 42)</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-2">
            <div className="space-y-4">
              <div className="rounded-[var(--radius)] border border-border/50 bg-card p-6">
                <h3 className="font-heading font-semibold mb-3 text-sm">
                  Agent lifecycle
                </h3>
                <div className="space-y-3">
                  {[
                    { step: "spawn", desc: "Create an agent from a template or scratch" },
                    { step: "train", desc: "Show it your preferences. It learns in minutes." },
                    { step: "deploy", desc: "Set it loose. It runs 24/7 in your workspace." },
                    { step: "monitor", desc: "Dashboard shows every action, decision, and insight." },
                    { step: "evolve", desc: "Agents improve over time. They adapt to your life." },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-[10px] font-bold text-primary uppercase">
                          {item.step[0]}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-mono text-primary">{item.step}</span>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[var(--radius)] border border-border/50 bg-card p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Bell size={20} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium">Goodnight routine</div>
                    <div className="text-xs text-muted-foreground truncate">
                      Agent executor: locks, arms, dims, sets climate
                    </div>
                  </div>
                  <Badge variant="glow">Running</Badge>
                </div>
              </div>

              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href="#pricing">Try the Agent Workspace</a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
