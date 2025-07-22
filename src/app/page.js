"use client"
import AboutBrief from "./components/aboutBrief";
import ZoomFramer from "./components/ZoomFramer";
import BuildingBlocks3D from "@/app/components/buildingBlocks"
import BuildingBlockLeft from "@/app/components/buildBlockLeft";
import BuildingBlockRight from "@/app/components/buildBlockRight"
import StatsSectionPakistan from "@/app/components/StatsSectionPakistan"
import Footer from "./components/Footer";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      
      
      <main>
        <ZoomFramer />

        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.6 }}
          className="overflow-hidden" // Helps in boundary control
        >
          <StatsSectionPakistan />
        </motion.section>


        <section>
          <AboutBrief />
        </section>

        <section>
          <BuildingBlocks3D />
        </section>

        {/* Building Block Sections */}
        <section>
          <BuildingBlockLeft
          image="/Parking.jpg"
          title="Integrated Parking & Access"
          subtitle="Campus Park Infrastructure"
          description="Seamlessly integrated parking and pedestrian zones designed to optimize flow, enhance safety, and ensure a smooth arrival experience for residents and visitors."
          note="(design in progress)"
        />


          <BuildingBlockRight
            image="/Parking.jpg"
            title="Refined Living Spaces"
            subtitle="Elevated Comfort & Privacy"
            description="Immerse yourself in thoughtfully designed rooms that blend modern aesthetics with functionality — offering unmatched privacy, natural light, and elevated everyday living."
            note="(under development)"
          />
        


        </section>
      </main>
    </div>
  );
}
