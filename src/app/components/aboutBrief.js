"use client";
import { motion } from "framer-motion";
import { MapPinIcon, BuildingOfficeIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import React from "react";

const features = [
  {
    title: "Strategic Location",
    description: "Positioned in the heart of the city with high footfall and connectivity.",
    icon: MapPinIcon,
  },
  {
    title: "Modern Architecture",
    description: "State-of-the-art design blending luxury and functionality.",
    icon: BuildingOfficeIcon,
  },
  {
    title: "Flexible Investment",
    description: "Options suited for both home buyers and commercial investors.",
    icon: CurrencyDollarIcon,
  },
];

function AboutBrief() {
  return (
    <section className="w-full bg-white py-20 px-6">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-[#047857] mb-4">
          Why Choose JAFCO?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the unique value we bring to residential and commercial living.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              className="bg-white border border-[#047857] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#d4af37] p-3 rounded-full">
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#047857] mb-2">{feature.title}</h3>
              <p className="text-[#5c5c5c]">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default AboutBrief;
