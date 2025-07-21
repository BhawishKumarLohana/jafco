"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FoundersMessage() {
  return (
    <section className="py-24 px-6 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start gap-12 md:gap-20">
        {/* Left - Circular Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex justify-center md:w-1/3 shrink-0"
        >
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-[#d4af37]">
            <Image
              src="/founder.jpg"
              alt="Founder"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right - Message Container */}
        <div className="flex flex-col gap-10 w-full">
          {/* Top section (headline and partial message) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="md:w-full"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-6 leading-tight tracking-wide">
              A Vision Rooted in Legacy
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide line-clamp-5 md:line-clamp-none">
              At JAFCO, we believe real estate is more than just structures — it’s a reflection of trust, longevity, and purpose.
              From humble beginnings to industry benchmarks, our story is defined by commitment to excellence and sustainable development.
              At JAFCO, we believe real estate is more than just structures — it’s a reflection of trust, longevity, and purpose.
              From humble beginnings to industry benchmarks, our story is defined by commitment to excellence and sustainable development.
            </p>
          </motion.div>

          {/* Bottom (Remaining text, moved below image on smaller screens) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide">
              At JAFCO, we believe real estate is more than just structures — it’s a reflection of trust, longevity, and purpose.
              From humble beginnings to industry benchmarks, our story is defined by commitment to excellence and sustainable development.
              At JAFCO, we believe real estate is more than just structures — it’s a reflection of trust, longevity, and purpose.
              From humble beginnings to industry benchmarks, our story is defined by commitment to excellence and sustainable development.
            </p>

            <p className="mt-6 italic text-md text-gray-500">
              — Founder & Chairman, JAFCO Group
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
