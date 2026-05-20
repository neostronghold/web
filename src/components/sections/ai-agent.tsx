"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Button } from "@/components/ui/button"
import { useContact } from "@/components/contact-provider"
import { Bot, MessageCircle, Zap, Shield } from "lucide-react"

export function AIAgent() {
  const { open: openContact } = useContact()
  return (
    <section id="ai-agent" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent mb-4">
              <Bot size={14} />
              Meet your new home manager
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Your home, now on{" "}
              <span className="text-gradient">speaking terms</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Control your home via WhatsApp, Telegram, or voice. Your AI agent
              understands load-shedding, manages energy, and keeps you safe.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <ScrollReveal direction="left">
            <div className="relative overflow-hidden max-w-full">
              <div className="rounded-2xl border border-border/50 bg-card p-4 sm:p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <MessageCircle size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-heading text-sm font-semibold">
                      neostronghold AI
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Online &middot; Local processing
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      from: "you",
                      text: "I'm going to bed",
                    },
                    {
                      from: "ai",
                      text: "Goodnight. Locked doors, armed alarm, lights off. AC set to 18°C. Battery at 82% — sufficient for stage 4.",
                    },
                    {
                      from: "you",
                      text: "Is there load-shedding tonight?",
                    },
                    {
                      from: "ai",
                      text: "Stage 2, 20:00–22:30. Your battery will cover it. I'll delay pool pump to preserve charge.",
                    },
                  ].map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.from === "you" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm break-words ${
                          msg.from === "you"
                            ? "bg-primary text-primary-foreground rounded-br-sm"
                            : "bg-muted text-foreground rounded-bl-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-accent animate-glow-pulse" />
                    AI is typing...
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              {[
                {
                  icon: Zap,
                  title: "Energy Intelligence",
                  desc: "Manages battery, solar, and load-shedding automatically. Keeps your home running when the grid doesn't.",
                },
                {
                  icon: Shield,
                  title: "Always Aware",
                  desc: "Camera feeds, motion detection, gate alerts — all processed locally. No cloud subscription required.",
                },
                {
                  icon: MessageCircle,
                  title: "Multi-Channel",
                  desc: "WhatsApp, Telegram, voice, app, web. However you communicate, your home understands.",
                },
                {
                  icon: Bot,
                  title: "Privately Yours",
                  desc: "Every interaction stays on your hub. No cloud dependency. Your home's data is your own.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 rounded-xl border border-border/50 bg-card p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}

              <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => openContact()}>
                Try the AI Agent
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
