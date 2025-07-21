"use client";

import { Building, Users, Handshake } from "lucide-react";
import FoundersMessage from "../components/FoundersMessage";
import VisionVisual from "../components/VisionVisual";
import CTA from "../components/CTA";
export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4">Founder's Message</h1>            
        </div>
      </section>
      {/* Founder's Message */}
      <section>
        <FoundersMessage/>
      </section>

      {/* Vision */}
      Under Development
      <VisionVisual/>
      

      

      {/* CTA */}
      <CTA/>
     
    </div>
  );
}
