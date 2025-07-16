"use client"

import React from 'react';

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
      <a href='/project' className="hover:text-blue-600 cursor-pointer" >Project</a>
      <a href='/about' className="hover:text-blue-600 cursor-pointer">About</a>
      <a href='/blogs' className="hover:text-blue-600 cursor-pointer">Blogs</a>
      <a href='/contact' className="hover:text-blue-600 cursor-pointer">Contact us</a>
    </ul>
  </nav>
</header>

  );
}

export default Navbar;
