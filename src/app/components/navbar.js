"use client"
"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6 relative">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2 group">
            <img
              src="/logo.png"
              alt="JAFCO Logo"
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {menuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Links: Desktop */}
        <ul className="hidden md:flex items-center space-x-10 text-lg font-medium text-gray-800 ml-auto">
          <Link href="/project" className="hover:text-blue-600">Project</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/blogs" className="hover:text-blue-600">Blogs</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-6 text-lg font-medium text-gray-800">
              <Link href="/project" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Project</Link>
              <Link href="/about" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/blogs" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Blogs</Link>
              <Link href="/contact" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
