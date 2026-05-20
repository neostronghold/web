"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/ui/logo"
import { Menu, X } from "lucide-react"
import { useContact } from "@/components/contact-provider"

const NAV_ITEMS = [
  { label: "Hardware", href: "#hardware" },
  { label: "AI Hub", href: "#agent-hub" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Tesla", href: "#tesla" },
  { label: "Pricing", href: "#pricing" },
  { label: "Team", href: "#team" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { open: openContact } = useContact()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-strong"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <Logo className="h-8 w-8" />
            <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-gradient">
              neostronghold
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openContact()}
              className="hidden sm:inline-flex items-center justify-center h-9 px-5 text-sm font-medium rounded-full text-white bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient-rotate shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300"
            >
              Get in Touch
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50 text-foreground touch-action-manipulation active:scale-95 transition-transform"
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="absolute right-0 top-0 h-full w-72 glass-strong p-6 pt-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-base text-foreground hover:text-primary transition-colors rounded-xl hover:bg-primary/5"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-border/30">
                <button
                  onClick={() => { setOpen(false); openContact() }}
                  className="flex items-center justify-center h-12 text-base font-medium rounded-full text-white bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient-rotate shadow-[0_0_20px_hsl(var(--primary)/0.4)] w-full"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
