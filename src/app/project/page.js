"use client";

import React from "react";
import CTA from "../components/CTA";
import BuildingBlockLeft from "../components/buildBlockLeft";
import BuildingBlockRight from "../components/buildBlockRight";
const projects = [
  {
    title: "JAFCO Heights",
    location: "DHA Phase 6, Karachi",
    status: "Completed",
    image: "/projects/heights.jpg",
  },
  {
    title: "JAFCO Mall",
    location: "Gulshan-e-Iqbal, Karachi",
    status: "Under Construction",
    image: "/projects/mall.jpg",
  },
  {
    title: "JAFCO Residencia",
    location: "Bahria Town, Karachi",
    status: "Launching Soon",
    image: "/projects/residencia.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4">Our Projects</h1>
          <p className="text-lg text-gray-200">
            Shaping skylines across Pakistan with iconic real estate developments that blend quality, design, and value.
          </p>
        </div>
      </section>

      {/* Projects*/}
      <BuildingBlockLeft 
      image="/Parking.jpg"
          title="Project A"
          subtitle="Campus Park Infrastructure"
          description="Seamlessly integrated parking and pedestrian zones designed to optimize flow, enhance safety, and ensure a smooth arrival experience for residents and visitors."
          note="(design in progress)"
      
      />
      <BuildingBlockRight 
      image="/Parking.jpg"
          title="Project B"
          subtitle="Campus Park Infrastructure"
          description="Seamlessly integrated parking and pedestrian zones designed to optimize flow, enhance safety, and ensure a smooth arrival experience for residents and visitors."
          note="(design in progress)"
      
      
      />
      <BuildingBlockLeft 
      image="/Parking.jpg"
          title="Project C"
          subtitle="Campus Park Infrastructure"
          description="Seamlessly integrated parking and pedestrian zones designed to optimize flow, enhance safety, and ensure a smooth arrival experience for residents and visitors."
          note="(design in progress)"
      
      
      />
      
      


      {/* CTA */}
      <section>
        <CTA/>
      </section>


     

     
    </div>
  );
}
