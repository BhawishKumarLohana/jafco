"use client"
import AboutBrief from "./components/aboutBrief";
import ZoomFramer from "./components/ZoomFramer";
import BuildingBlocks3D from "@/app/components/buildingBlocks"
import BuildingBlockLeft from "@/app/components/buildBlockLeft";
import BuildingBlockRight from "@/app/components/buildBlockRight"
import StatsSectionPakistan from "@/app/components/StatsSectionPakistan"
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      
      
      <main>
        <ZoomFramer />

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
            image="/Room.png"
            title="Refined Living Spaces"
            subtitle="Elevated Comfort & Privacy"
            description="Immerse yourself in thoughtfully designed rooms that blend modern aesthetics with functionality — offering unmatched privacy, natural light, and elevated everyday living."
            note="(under development)"
          />
          <StatsSectionPakistan/>

        </section>
        <section>
          <Footer/>
        </section>
      </main>
    </div>
  );
}
