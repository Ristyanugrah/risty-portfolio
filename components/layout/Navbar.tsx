"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const menus = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-pink-200 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-pink-500"
        >
          Risty<span className="text-gray-900">.</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              className="text-gray-700 font-medium transition hover:text-pink-500"
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-pink-500 md:hidden"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-pink-100 bg-white shadow-lg md:hidden">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              onClick={() => setOpen(false)}
              className="block border-b border-pink-50 px-6 py-4 font-medium text-gray-700 transition hover:bg-pink-50 hover:text-pink-500"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}