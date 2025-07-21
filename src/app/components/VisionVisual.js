"use client";

import { motion } from "framer-motion";
import { Building, Handshake, Users } from "lucide-react";

export default function VisionVisual() {
  const values = [
    {
      icon: <Building className="h-10 w-10 text-yellow-400" />,
      title: "Design-Led Spaces",
      description:
        "Every project is crafted with architecture that blends form, function, and future value.",
    },
    {
      icon: <Users className="h-10 w-10 text-yellow-400" />,
      title: "People-First Thinking",
      description:
        "Our residents, partners, and communities are central to every decision we make.",
    },
    {
      icon: <Handshake className="h-10 w-10 text-yellow-400" />,
      title: "Transparent Partnerships",
      description:
        "Built on trust, our investor relationships thrive on openness and long-term value.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-[#fdfbf7] to-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-emerald-900 mb-16"
        >
          Our Three Pillars
        </motion.h2>

        {/* 3D Buildings / Core Values */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 + index * 0.2 }}
              viewport={{ once: true }}
              className="group perspective"
            >
              <div className="relative preserve-3d transform transition-transform duration-700 group-hover:rotate-y-180 rounded-xl shadow-lg border border-yellow-300 bg-white h-[300px] flex items-center justify-center px-6 text-center">
                {/* Front face */}
                <div className="absolute backface-hidden inset-0 flex flex-col items-center justify-center space-y-4 p-6">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>

                {/* Back face */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden bg-white flex items-center justify-center p-6 rounded-xl">
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
