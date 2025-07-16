"use client";

import React from "react";

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

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-bold text-emerald-900">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.location}</p>
                  <span
                    className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : project.status === "Under Construction"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 text-center text-white px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Explore Future Opportunities</h2>
          <p className="text-lg text-gray-200 mb-8">
            Discover investment-ready plots and upcoming developments across Karachi and beyond.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-yellow-400 text-emerald-900 font-semibold rounded hover:bg-yellow-300 transition"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
  );
}
