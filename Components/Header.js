"use client"; // If you're using Next.js 13+ with App Router

import { useState } from "react";

import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import ar from "@/app/locale/ar";
import en from "@/app/locale/en";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = language === "ar" ? ar : en;

  return (
    <header className="bg-white shadow-lg w-full scroll-smooth">
      <div
        className={`py-3 flex items-center justify-between px-8 ${
          language === "ar" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Logo */}
        <div
          className={`flex items-center justify-between gap-x-10 ${
            language === "ar" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <Image src="/logo.png" alt="logo" width={80} height={80} />
          <nav
            className={`hidden md:flex text-base font-medium text-[#0F172A] ${
              language === "ar"
                ? "flex-row-reverse space-x-6 space-x-reverse"
                : "flex-row space-x-6"
            }`}
          >
            <Link href="/">{t.header.nav.home}</Link>
            <Link href="/Services">{t.header.nav.services}</Link>
            <Link href="#team">{t.header.nav.about}</Link>
            <Link href="/Contact">{t.header.nav.contact}</Link>
          </nav>
        </div>

        {/* Desktop Navigation */}

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <Link href="/Role">
            <button className="bg-[#007BFF] hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg">
              {t.header.nav.getStarted}
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
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4 space-y-3 text-sm text-gray-700 ">
          <div
            className={`flex justify-center gap-x-3 py-2 ${
              language === "ar" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <Link href="/" onClick={() => setMenuOpen(false)}>
              {t.header.nav.home}
            </Link>
            <Link href="/Services" onClick={() => setMenuOpen(false)}>
              {t.header.nav.services}
            </Link>
            <Link href="#team" onClick={() => setMenuOpen(false)}>
              {t.header.nav.about}
            </Link>
            <Link href="/Contact" onClick={() => setMenuOpen(false)}>
              {t.header.nav.contact}
            </Link>
          </div>

          <div className="flex justify-center gap-x-4">
            <LanguageSwitcher />
            <Link href="/Role" onClick={() => setMenuOpen(false)}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white  py-2 rounded p-2">
                {t.header.nav.getStarted}
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
