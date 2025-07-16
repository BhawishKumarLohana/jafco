"use client";
import { motion } from "framer-motion";

export default function ZoomFramer() {
  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">
      {/* Zooming Image */}
      <motion.img
        src="/building.png"
        alt="Zoom Building"
        initial={{ scale: 1 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 5, ease: "easeInOut" }}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute inset-0 bg-black"
      />

      {/* Animated Text */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 3.5, duration: 1 }}
  className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
>
  <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg mb-4">
    Jafco Mall & Apartments
  </h1>

  <p
    className="text-[20px] md:text-[28px] font-medium text-yellow-400"
    style={{
      transform: "rotate(-2deg)",
      textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
      letterSpacing: "1px",
      fontFamily: "'Cinzel', serif", // optional: add to _app.tsx or HTML head
      borderBottom: "2px dotted rgba(255,215,0,0.3)",
      borderRadius: "50%",
    }}
  >
    Innovation Beyond Location
  </p>
</motion.div>

    </div>
  );
}
