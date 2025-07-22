"use client";
import { motion } from "framer-motion";

import {
  BuildingOfficeIcon,
  MapIcon,
  UserGroupIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import AnimatedMap from "@/app/components/AnimatedMap"
import Counter from "@/app/components/Counter"

export default function StatsSectionPakistan() {
  return (
    <section className="relative z-30 text-white pt-32 pb-24 px-6 bg-[#024032]">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

    
    {/* Left Content */}
    <div className="md:w-1/2 space-y-6">
      <h2 className="text-4xl font-bold text-white tracking-wide">
        Advancing Real Estate in Pakistan
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        With deep-rooted local expertise and a forward-looking development approach, we are reshaping the commercial and residential landscape across Pakistan.
      </p>
      <button className="mt-4 px-6 py-3 border border-[#d4af37] text-[#d4af37] hover:bg-[#e6dbb7] hover:text-black transition rounded-md font-semibold tracking-wide">
        View Our Projects
      </button>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-2 gap-10">
        <div>
          <UserGroupIcon className="h-6 w-6 text-black mb-2" />
          <h3 className="text-3xl font-extrabold text-black">
            <Counter target={2000} suffix="+" />
          </h3>
          <p className="text-sm text-black">Clients & Investors</p>
        </div>
        <div>
          <MapIcon className="h-6 w-6 text-black mb-2" />
          <h3 className="text-3xl font-extrabold text-black">5M+</h3>
          <p className="text-sm text-black">Sq. ft. Developed</p>
        </div>
        <div>
          <BuildingOfficeIcon className="h-6 w-6 text-black mb-2" />
          <h3 className="text-3xl font-extrabold text-black">30+</h3>
          <p className="text-sm text-black">Projects Completed</p>
        </div>
        <div>
          <GlobeAltIcon className="h-6 w-6 text-black mb-2" />
          <h3 className="text-3xl font-extrabold text-black">~1%</h3>
          <p className="text-sm text-black">of Karachi’s GDP</p>
        </div>
      </div>
    </div>

    {/* Right: Animated Map */}
<div className="md:w-1/2 mt-16 md:mt-0 flex justify-center">
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
    transition={{
      delay: 0.2,
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="w-[80%] md:w-[70%] backdrop-blur-lg bg-white/10 p-4 rounded-xl border border-white/10 shadow-2xl transform-gpu"
  >
    <AnimatedMap />
  </motion.div>
</div>

  </div>
</section>


  );
}
