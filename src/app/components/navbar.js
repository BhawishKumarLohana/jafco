"use client"

import React from 'react';

function Navbar() {
  return (
   <header className="w-full border-b border-gray-200">
  <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-8">
    {/* Left: Logo */}
    <div className="flex items-center space-x-2">
      <span className="text-4xl font-semibold tracking-tight text-gray-900">
        JAFCO
      </span>
    </div>

    {/* Right: Navigation Links */}
    <ul className="flex items-center space-x-10 text-xl font-medium text-gray-800 ml-auto">
      <li className="hover:text-blue-600 cursor-pointer">Project</li>
      <li className="hover:text-blue-600 cursor-pointer">About</li>
      <li className="hover:text-blue-600 cursor-pointer">Blogs</li>
      <li className="hover:text-blue-600 cursor-pointer">Contact us</li>
    </ul>
  </nav>
</header>

  );
}

export default Navbar;
