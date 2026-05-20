"use client"

import { useState, FormEvent, useEffect, useRef } from "react"
import { X, Send, Check, Loader2 } from "lucide-react"

const ACCESS_KEY = "b5681560-2858-4c77-be19-2ef14e9d6c39"
const LS_EMAIL = "ns_email"
const LS_PHONE = "ns_phone"

interface ContactDialogProps {
  open: boolean
  prefill?: { interest?: string; message?: string }
  onClose: () => void
}

export function ContactDialog({ open, prefill, onClose }: ContactDialogProps) {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  // Pre-fill from localStorage when dialog opens
  useEffect(() => {
    if (!open) return
    const email = localStorage.getItem(LS_EMAIL) || ""
    const phone = localStorage.getItem(LS_PHONE) || ""
    if (formRef.current) {
      const emailInput = formRef.current.elements.namedItem("email") as HTMLInputElement
      const phoneInput = formRef.current.elements.namedItem("phone") as HTMLInputElement
      if (emailInput) emailInput.value = email
      if (phoneInput) phoneInput.value = phone
    }
  }, [open])

  if (!open) return null

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", ACCESS_KEY)
    if (prefill?.interest) formData.append("interest", prefill.interest)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        // Remember for next time
        const email = formData.get("email") as string
        const phone = formData.get("phone") as string
        if (email) localStorage.setItem(LS_EMAIL, email)
        if (phone) localStorage.setItem(LS_PHONE, phone)
        setSent(true)
      } else {
        setError(data.message || "Something went wrong.")
      }
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative w-full sm:max-w-md bg-card border border-border/50 rounded-t-2xl sm:rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-border/30">
          <div>
            <h2 className="font-heading text-lg font-semibold">Get in Touch</h2>
            <p className="text-xs text-muted-foreground">We reply within 24 hours</p>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {sent ? (
          <div className="p-12 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Check size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold">Message sent!</h3>
            <p className="text-sm text-muted-foreground">We&apos;ll be in touch within 24 hours.</p>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity mt-4"
            >
              Done
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-4">
            {prefill?.interest && (
              <input type="hidden" name="interest" value={prefill.interest} />
            )}

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

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Phone <span className="text-muted-foreground">(optional)</span></label>
              <input
                type="text"
                name="phone"
                placeholder="+27 XX XXX XXXX"
                className="w-full h-12 px-4 rounded-xl bg-cosmic-surface border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>

            {error && (
              <div className="text-sm text-destructive bg-destructive/10 rounded-xl px-4 py-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 rounded-full text-white font-medium h-12 text-sm bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient-rotate shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300 disabled:opacity-60"
            >
              {sending ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
              {sending ? "Sending..." : prefill?.interest === "Investment" ? "Request Investor Deck" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
