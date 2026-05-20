"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const CosmicThreeScene = dynamic(
  () => import("./cosmic-three-scene").then((m) => m.CosmicThreeScene),
  { ssr: false }
)

function checkWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas")
    return !!(
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl") ||
      canvas.getContext("webgl2")
    )
  } catch {
    return false
  }
}

export function CosmicBackground() {
  const [hasWebGL, setHasWebGL] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setHasWebGL(checkWebGL())
  }, [])

  if (!mounted || !hasWebGL) {
    return (
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, hsl(var(--cosmic-glow-cyan) / 0.15), transparent 60%), radial-gradient(ellipse at 80% 50%, hsl(var(--cosmic-glow-purple) / 0.1), transparent 50%)",
          }}
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-0">
      <CosmicThreeScene />
    </div>
  )
}
