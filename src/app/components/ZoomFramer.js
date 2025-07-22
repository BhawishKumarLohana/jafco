"use client";
import { motion } from "framer-motion";

export default function ZoomFramer() {
  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/video3d.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for dark filter */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.6 }}
  transition={{ delay: 2.5, duration: 1.5 }}
  className="absolute inset-0 bg-black"
/>

{/* Bottom gradient mask for smooth fade */}
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#024032] z-20 pointer-events-none" />


      {/* Animated Logo + Button */}
<motion.div
  initial={{ opacity: 0, y: 60, scale: 0.8 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ delay: 3.2, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
  className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-6"
>
  {/* Logo */}
  <img
    src="/logo.png"
    alt="JAFCO Logo"
    className="h-28 md:h-40 w-auto drop-shadow-2xl transition-transform"
  />

  {/* Button */}
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 4.6, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
    className="mt-4 px-6 py-2 border border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black font-semibold tracking-wide rounded-full backdrop-blur-sm bg-white/5 transition duration-300"
  >
    Find More
  </motion.button>
</motion.div>

    </div>
  );
}
