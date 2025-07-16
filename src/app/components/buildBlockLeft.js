"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BuildingBlockLeft({ image, title, subtitle, description, note }) {
  return (
    <div className="w-full bg-white border-1 border-white mt-0">
      <div className="w-full border border-emerald-900  overflow-hidden shadow-md bg-white">
        <div className="flex flex-col md:flex-row h-full">
          {/* Image on the Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 h-full"
          >
            <div className="h-full w-full">
              <Image
                src={image}
                alt={title}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Structured Text Block on the Right */}
          <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="w-full md:w-1/2 flex items-center bg-emerald-900 text-white"
                    >
                      <div className="p-8 space-y-4 w-full">
                        <h2 className="text-3xl font-bold border-b pb-2 border-yellow-400">{title}</h2>
                        <h3 className="text-2xl font-bold text-yellow-300">{subtitle}</h3>
                        <p className="italic text-gray-200">{description}</p>
                        {note && <p className="text-yellow-500 font-medium">{note}</p>}
                      </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}

