"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"

function Globe() {
  return (
    <Sphere args={[1, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color="#0ea5e9"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        wireframe
        transparent
        opacity={0.7}
        emissive="#0ea5e9"
        emissiveIntensity={0.05}
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
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#a78bfa" />
      <Globe />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}
