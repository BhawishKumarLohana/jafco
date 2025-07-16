"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"; // Or use Heroicons if preferred

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <h3 className="text-3xl font-bold text-yellow-400">JAFCO</h3>
          <p className="text-sm text-gray-300 mt-4">
            JAFCO is redefining real estate across Pakistan with thoughtfully designed spaces for living, working, and investment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-yellow-300 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Projects</a></li>
            <li><a href="#" className="hover:text-yellow-400">Investors</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-yellow-300 mb-3">Contact</h4>
          <p className="text-sm text-gray-300">Karachi, Pakistan</p>
          <p className="text-sm text-gray-300">+92 300 1234567</p>
          <p className="text-sm text-gray-300">info@jafco.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-yellow-300 mb-3">Follow Us</h4>
          <div className="flex gap-4 mt-2 text-yellow-400">
            <a href="#"><Facebook className="h-5 w-5 hover:text-white" /></a>
            <a href="#"><Instagram className="h-5 w-5 hover:text-white" /></a>
            <a href="#"><Twitter className="h-5 w-5 hover:text-white" /></a>
            <a href="#"><Linkedin className="h-5 w-5 hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-sm text-gray-400 border-t border-emerald-700 pt-6">
        © {new Date().getFullYear()} JAFCO Group. All rights reserved.
      </div>
    </footer>
  );
}
