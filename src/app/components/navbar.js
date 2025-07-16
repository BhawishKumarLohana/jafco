"use client"

import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
   <header className="w-full border-b border-gray-200">
  <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-8">
    {/* Left: Logo */}
    <div className="flex items-center space-x-2">
      <a href='/' className="text-4xl font-semibold tracking-tight text-gray-900">
        JAFCO
      </a>
    </div>

    {/* Right: Navigation Links */}
    <ul className="flex items-center space-x-10 text-xl font-medium text-gray-800 ml-auto">
      <Link href='/project' className="hover:text-blue-600 cursor-pointer" >Project</Link>
      <Link href='/about' className="hover:text-blue-600 cursor-pointer">About</Link>
      <Link href='/blogs' className="hover:text-blue-600 cursor-pointer">Blogs</Link>
      <Link href='/contact' className="hover:text-blue-600 cursor-pointer">Contact us</Link>
    </ul>
  </nav>
</header>

  );
}

export default Navbar;
