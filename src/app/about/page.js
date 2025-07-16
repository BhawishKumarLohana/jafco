"use client";

import { Building, Users, Handshake } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4">About JAFCO</h1>
          <p className="text-lg text-gray-200">
            Pioneering real estate innovation across Pakistan with a commitment to quality, integrity, and community.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-900 mb-12">Our Pillars</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white border border-yellow-300 rounded-lg p-6 shadow text-center">
              <Building className="mx-auto text-yellow-400 h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Design-Led Spaces</h3>
              <p className="text-sm text-gray-600">
                Every project is crafted with architecture that blends form, function, and future value.
              </p>
            </div>

            <div className="bg-white border border-yellow-300 rounded-lg p-6 shadow text-center">
              <Users className="mx-auto text-yellow-400 h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">People-First Thinking</h3>
              <p className="text-sm text-gray-600">
                Our residents, partners, and communities are central to every decision we make.
              </p>
            </div>

            <div className="bg-white border border-yellow-300 rounded-lg p-6 shadow text-center">
              <Handshake className="mx-auto text-yellow-400 h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Transparent Partnerships</h3>
              <p className="text-sm text-gray-600">
                Built on trust, our investor relationships thrive on openness and long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              To redefine urban living in Pakistan by creating sustainable, secure, and smart real estate experiences.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg">
              A Pakistan where infrastructure meets imagination—one thoughtfully built community at a time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-900 text-center text-white px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Partner with JAFCO</h2>
          <p className="text-lg text-gray-200 mb-8">
            Whether you're a home buyer, investor, or collaborator—let’s build something meaningful together.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-yellow-400 text-emerald-900 font-semibold rounded hover:bg-yellow-300 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
