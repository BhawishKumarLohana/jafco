"use client";
import { motion } from "framer-motion";

export default function AnimatedMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Static Map Image */}
      <img
        src="/pk.svg"
        alt="Pakistan Map"
        className="w-full h-auto opacity-90"
      />

      {/* Glowing Yellow Dot (Karachi Location) */}
      <div className="absolute left-[42%] top-[90%] transform -translate-x-1/2 -translate-y-1/2">
        <span className="relative flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-yellow-500 border-2 border-white shadow-md"></span>
        </span>
      </div>
    </motion.div>
  );
}
