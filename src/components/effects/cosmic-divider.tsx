export function CosmicDivider() {
  return (
    <div className="relative h-32 sm:h-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/20 via-secondary/20 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl animate-glow-pulse" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-md" />
        <div className="absolute inset-8 rounded-full bg-primary/30 blur-sm" />
      </div>
    </div>
  )
}
