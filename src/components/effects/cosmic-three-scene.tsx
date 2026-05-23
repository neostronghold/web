"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei"
import { Suspense } from "react"

function Globe() {
  return (
    <Sphere args={[1, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color="#0ea5e9"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        wireframe
        transparent
        opacity={0.6}
      />
    </Sphere>
  )
}

function InnerGlobe() {
  return (
    <Sphere args={[0.8, 32, 32]} scale={1.5}>
      <meshStandardMaterial
        color="#06b6d4"
        transparent
        opacity={0.15}
        roughness={0.1}
        metalness={0.9}
      />
    </Sphere>
  )
}

export function CosmicThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl, events }) => {
        gl.domElement.addEventListener("webglcontextlost", (e) => {
          e.preventDefault()
        })
        if (events && typeof events.connect === "function") {
          events.connect(document.body)
        }
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#a78bfa" />
        <Globe />
        <InnerGlobe />
        <Stars
          radius={50}
          depth={50}
          count={2000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
  )
}
