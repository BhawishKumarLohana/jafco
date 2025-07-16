"use client";

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-emerald-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-200">
            We'd love to hear from you. Whether you’re looking to invest, partner, or learn more about our projects — reach out today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Contact Information</h2>
            <p className="mb-4 text-gray-600">
              <strong>Address:</strong> 123 JAFCO Tower, DHA Phase 6, Karachi, Pakistan
            </p>
            <p className="mb-4 text-gray-600">
              <strong>Email:</strong> info@jafco.com
            </p>
            <p className="mb-4 text-gray-600">
              <strong>Phone:</strong> +92 300 1234567
            </p>
             {/* Map Placeholder Section */}
      <section className="w-xl h-[350px]">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=Karachi"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0 w-full h-full"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={5}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="bg-yellow-400 text-emerald-900 font-semibold px-6 py-2 rounded-md hover:bg-yellow-300 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

     
    </div>
  );
}
