import React from 'react'

function CTA() {
  return (
     <section className="py-20 bg-emerald-900 text-center text-white px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Partner with JAFCO</h2>
          <p className="text-lg text-gray-200 mb-8">
            Whether you're a home buyer, investor, or collaborator.Let’s build something meaningful together.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-yellow-400 text-emerald-900 font-semibold rounded hover:bg-yellow-300 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
  )
}

export default CTA