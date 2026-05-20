"use client"

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import { Send, Check, Loader2, ArrowLeft } from "lucide-react"
import { Nav } from "@/components/layout/nav"
import { Footer } from "@/components/layout/footer"
import { Starfield } from "@/components/effects/starfield"
import { COMPANY } from "@/lib/constants"

const ACCESS_KEY = "b5681560-2858-4c77-be19-2ef14e9d6c39"

export default function ContactPage() {
  const router = useRouter()
  const [result, setResult] = useState("")
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSending(true)
    setResult("")

    const formData = new FormData(event.currentTarget)
    formData.append("access_key", ACCESS_KEY)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setSent(true)
      } else {
        setResult(data.message || "Something went wrong. Please email us directly.")
      }
    } catch {
      setResult("Network error. Please try again or email us directly.")
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <Nav />
      <Starfield />

      <main className="relative min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-2xl px-6">
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to home
          </button>

          <div className="glass-strong rounded-2xl p-8 sm:p-12">
            <div className="mb-8">
              <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                Get in Touch
              </h1>
              <p className="text-muted-foreground">
                Tell us about your project and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {sent ? (
              <div className="text-center py-12 space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Check size={32} className="text-accent" />
                </div>
                <h2 className="font-heading text-xl font-semibold">Message sent!</h2>
                <p className="text-sm text-muted-foreground">
                  We&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => router.push("/")}
                  className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity mt-4"
                >
                  Back to Home
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full h-12 px-4 rounded-xl bg-cosmic-surface border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full h-12 px-4 rounded-xl bg-cosmic-surface border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+27 XX XXX XXXX"
                    className="w-full h-12 px-4 rounded-xl bg-cosmic-surface border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">I&apos;m interested in</label>
                  <select
                    name="interest"
                    className="w-full h-12 px-4 rounded-xl bg-cosmic-surface border border-border/50 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all appearance-none"
                  >
                    <option value="">Select an option</option>
                    <option value="Pulse">Pulse (Core hub)</option>
                    <option value="Nexus">Nexus (Pro AI hub)</option>
                    <option value="Installation">Installation services</option>
                    <option value="Subscription">Subscription</option>
                    <option value="Investment">Investment opportunity</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-cosmic-surface border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                {result && (
                  <div className="text-sm text-destructive bg-destructive/10 rounded-xl px-4 py-3">
                    {result}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 rounded-full text-white font-medium h-13 px-6 text-base bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient-rotate shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] transition-all duration-300 disabled:opacity-60"
                >
                  {sending ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                  {sending ? "Sending..." : "Send Message"}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Or email us directly at{" "}
                  <a href="mailto:support@neoparadise.co.za" className="text-primary hover:underline">
                    support@neoparadise.co.za
                  </a>
                </p>
              </form>
            )}
          </div>

          <div className="mt-8 text-center text-xs text-muted-foreground">
            {COMPANY.company} &middot; {COMPANY.location} &middot; Usually replies within 24 hours
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
