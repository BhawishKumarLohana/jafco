// BuildingBlocks3D.js
"use client";
import { motion } from "framer-motion";


import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const sections = [
  { color: "#e2e8f0", height: 1, label: "Parking & Retail" },
  { color: "#cbd5e0", height: 1.2, label: "Family Apartments" },
  { color: "#a0aec0", height: 1.2, label: "Premium Residences" },
  { color: "#718096", height: 0.8, label: "Sky Lounge & View Deck" },
];

function Block({ index, color, height, label }) {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.position.y = index * 1.3;
    }
  });

  return (
    
    <mesh ref={ref} position={[0, index * 1.3, 0]}>
      <boxGeometry args={[2, height, 2]} />
      <meshStandardMaterial color={color} />
      <Html center distanceFactor={10} position={[0, 0, 1.2]}>
        <div
          style={{
            color: "#fff",
            background: "rgba(0,0,0,0.6)",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        >
          {label}
        </div>
      </Html>
    </mesh>
  );
}

export default function BuildingBlocks3D() {
  return (
    <div className="h-[800px] w-full bg-white mt-20">
        {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-[#047857] mb-4">
          Building Structure
        </h2>
    </motion.div>
      <Canvas camera={{ position: [5, 4, 6], fov: 50 }} shadows>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <group position={[0, 0, 0]}>
          {sections.map((section, idx) => (
            <Block
              key={idx}
              index={idx}
              color={section.color}
              height={section.height}
              label={section.label}
            />
          ))}
        </group>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
