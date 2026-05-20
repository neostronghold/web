export function GradientBorder({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative group ${className || ""}`}>
      <div className="absolute -inset-[1px] rounded-[var(--radius)] bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 bg-[length:200%_200%] animate-gradient-rotate" />
      <div className="relative rounded-[var(--radius)] bg-card">{children}</div>
    </div>
  )
}
