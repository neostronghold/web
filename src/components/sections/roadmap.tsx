"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { ROADMAP_ITEMS } from "@/lib/constants"
import { ChevronLeft, ChevronRight, Rocket, FlaskConical, Globe, Sparkles } from "lucide-react"

const phaseIcons = [FlaskConical, Rocket, Globe, Sparkles]

export function Roadmap() {
  const [step, setStep] = useState(0)
  const phase = ROADMAP_ITEMS[step]
  const PhaseIcon = phaseIcons[step] || Sparkles
  const total = ROADMAP_ITEMS.length

  return (
    <section id="roadmap" className="relative py-24 sm:py-32 bg-cosmic-surface/50 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Our <span className="text-gradient">roadmap</span> to
              intelligent homes
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From Cape Town to the world — one step at a time.
            </p>
          </div>
        </ScrollReveal>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="relative flex items-center justify-between">
            {/* Connecting line behind dots */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] bg-border/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_hsl(var(--primary)/0.3)]"
                style={{ width: `${(step / (total - 1)) * 100}%` }}
              />
            </div>

            {ROADMAP_ITEMS.map((p, i) => {
              const Icon = phaseIcons[i] || Sparkles
              const active = i === step
              const done = i < step
              return (
                <button
                  key={p.phase}
                  onClick={() => setStep(i)}
                  className="relative flex flex-col items-center gap-2 group"
                >
                  <div className="relative z-10">
                    {/* Glow ring behind active */}
                    {active && (
                      <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-md animate-glow-pulse" />
                    )}
                    {/* Gradient border wrapper */}
                    <div
                      className={`flex items-center justify-center rounded-full transition-all duration-500 ${
                        active
                          ? "bg-gradient-to-r from-primary via-secondary to-accent p-[2px] shadow-[0_0_30px_hsl(var(--primary)/0.4)] scale-110"
                          : done
                          ? "bg-gradient-to-r from-primary/40 to-secondary/40 p-[2px]"
                          : "bg-border/40 p-[2px]"
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full transition-all duration-500 ${
                          active
                            ? "bg-background"
                            : done
                            ? "bg-card"
                            : "bg-card"
                        }`}
                      >
                        <Icon
                          size={18}
                          className={`transition-colors duration-500 ${
                            active ? "text-primary" : done ? "text-primary/60" : "text-muted-foreground"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold whitespace-nowrap transition-colors duration-500 ${
                      active ? "text-primary" : done ? "text-muted-foreground/80" : "text-muted-foreground/50"
                    }`}
                  >
                    {p.phase}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative rounded-2xl border border-border/50 bg-card p-8 sm:p-10 overflow-hidden">
              {/* Aurora backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.03]" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

              <div className="relative z-10">
                {/* Phase header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-border/30">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                      <PhaseIcon size={28} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 mb-0.5">
                        <span className="text-xs font-semibold text-primary/70 uppercase tracking-widest">
                          Phase {step + 1} of {total}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                          phase.active
                            ? "bg-accent/10 text-accent border border-accent/20"
                            : "bg-muted text-muted-foreground border border-border/50"
                        }`}>
                          {phase.active ? "Current" : "Upcoming"}
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold">{phase.phase}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-cosmic-surface rounded-xl px-4 py-2 border border-border/30">
                    <span className="h-2 w-2 rounded-full bg-primary/60 animate-glow-pulse" />
                    {phase.timeframe}
                  </div>
                </div>

                {/* Milestones */}
                <div className="grid gap-3 sm:grid-cols-2 mb-8">
                  {phase.items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                      className="flex items-start gap-3 rounded-xl border border-border/40 bg-cosmic-surface/50 p-4 group hover:border-primary/30 transition-colors duration-300"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <span className="h-2 w-2 rounded-full bg-primary/60" />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          <div className="hidden sm:flex items-center gap-1.5">
            {ROADMAP_ITEMS.map((_, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === step
                    ? "w-8 bg-primary"
                    : i < step
                    ? "w-2 bg-primary/40"
                    : "w-2 bg-border/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setStep(Math.min(total - 1, step + 1))}
            disabled={step === total - 1}
            className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Step indicator text */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Step {step + 1} of {total}
        </p>
      </div>
    </section>
  )
}
