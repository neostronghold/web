import { COMPANY, FOOTER_LINKS } from "@/lib/constants"
import { Logo } from "@/components/ui/logo"

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-cosmic-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <a href="#hero" className="flex items-center gap-2.5 mb-4">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-heading text-lg font-bold tracking-tight text-gradient">
                neostronghold
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs mb-4">
              {COMPANY.description}
            </p>
            <p className="text-xs text-muted-foreground">
              by {COMPANY.company} &middot; {COMPANY.location}
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-3">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {COMPANY.company} (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
