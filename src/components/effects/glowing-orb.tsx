"use client"

import { useEffect, useRef } from "react"

interface GlowingOrbProps {
  className?: string
  color?: "cyan" | "purple" | "green"
  size?: number
}

export function GlowingOrb({ className, color = "cyan", size = 300 }: GlowingOrbProps) {
  const ref = useRef<HTMLDivElement>(null)

  const colorMap = {
    cyan: "rgba(6, 182, 212, 0.15)",
    purple: "rgba(168, 85, 247, 0.15)",
    green: "rgba(52, 211, 153, 0.15)",
  }

  const gradientMap = {
    cyan: "from-cyan-500/20 via-blue-500/10 to-transparent",
    purple: "from-purple-500/20 via-violet-500/10 to-transparent",
    green: "from-emerald-500/20 via-teal-500/10 to-transparent",
  }

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute rounded-full bg-gradient-radial ${gradientMap[color]} blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        animation: `float 6s ease-in-out infinite`,
      }}
    />
  )
}
