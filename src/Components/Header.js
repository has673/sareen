"use client"; // If you're using Next.js 13+ with App Router

import { useState } from "react";

import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg w-full scroll-smooth">
      <div className="  py-3 flex items-center justify-between px-8 ">
        {/* Logo */}
        <div className="flex items-center justify-between gap-x-10">
          <Image src="/images/logo.png" alt="logo" width={80} height={80} />
          <nav className="hidden md:flex space-x-6 text-base font-medium text-[#0F172A]">
            <a href="#Home">Home</a>
            <a href="#how-it-works">How It works</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        {/* Desktop Navigation */}

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-sm text-blue-600 hover:underline">
            Log In
          </Link>
          <Link href="/get-started">
            <button className="bg-[#007BFF] hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4 space-y-3 text-sm text-gray-700">
          <a href="Home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
            How It works
          </a>
          <a href="#team" onClick={() => setMenuOpen(false)}>
            Team
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <hr />
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="text-blue-600"
          >
            Log In
          </Link>
          <Link href="/get-started" onClick={() => setMenuOpen(false)}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
