"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  PhoneCall
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (pathname?.startsWith("/scholarships")) {
    return null;
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs", hasDropdown: true },
    { name: "Admissions", href: "/admissions" },
    { name: "Campus", href: "/campus" },
    { name: "Research", href: "/research" },
    { name: "Contact", href: "/contact" },
  ];

  const programsDropdown = [
    { name: "All Programs Overview", href: "/programs" },
    { name: "Academics & Pedagogy", href: "/academics" },
    { name: "Placements & Outcomes", href: "/placements" },
    { name: "BBA Program", href: "/programs" },
    { name: "MBA Strategy", href: "/programs" },
    { name: "B.Com Analytics", href: "/programs" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300">
      {/* Sleek Minimal Announcement Bar */}
      <div className="py-2 px-4 sm:px-8 text-xs sm:text-sm font-semibold flex items-center justify-between border-b bg-[#16325B] text-white border-gray-200/20">
        <div className="flex items-center justify-between mx-auto max-w-7xl w-full">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-sm bg-[#60A5FA] shrink-0 animate-pulse" />
            <span className="truncate">
              <strong>Admissions Open 2026-27:</strong> Master of Insurance Business (MIB) & M.Sc. in Insurance.
            </span>
            <Link href="/apply" className="underline font-bold text-[#60A5FA] hover:text-white shrink-0 ml-1">
              Apply Online →
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs sm:text-sm font-bold shrink-0">
            <span className="flex items-center gap-1.5 font-mono">
              <PhoneCall className="w-3.5 h-3.5 text-[#60A5FA]" /> +91-291-2801000
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar exact matching input_file_0.png to input_file_3.png */}
      <nav className="px-4 sm:px-6 lg:px-8 border-b backdrop-blur-md bg-white/95 border-gray-200 text-[#111827] shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 sm:h-22 gap-6">
          {/* Logo matching Figma: CIS JODHPUR + COLLEGE OF INSTITUTIONAL STUDIES */}
          <Link href="/" className="flex flex-col justify-center shrink-0 group">
            <span className="font-serif text-2xl sm:text-3xl tracking-tight font-normal leading-none text-[#1E293B]">
              CIS JODHPUR
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-wider text-[#2563EB] uppercase block mt-1">
              COLLEGE OF INSTITUTIONAL STUDIES
            </span>
          </Link>

          {/* Desktop Navigation Links matching input_file_3.png */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative py-2"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center gap-1 hover:text-[#2563EB] transition-colors py-2 shrink-0 font-semibold text-gray-500 hover:text-[#2563EB]"
                    >
                      {link.name} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-64 pt-2 shadow-2xl rounded-2xl border overflow-hidden transition-all bg-white border-gray-200 text-[#111827]">
                        <div className="p-2 grid grid-cols-1 gap-1">
                          <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[#2563EB]">
                            ACADEMIC PATHWAYS
                          </div>
                          {programsDropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setDropdownOpen(false)}
                              className="px-3 py-2 rounded-xl text-xs font-medium hover:bg-blue-50 hover:text-[#2563EB] transition-colors flex items-center justify-between"
                            >
                              <span>{sub.name}</span>
                              <span className="opacity-40">→</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-2 relative group shrink-0 font-semibold ${
                    isActive ? "text-[#2563EB]" : "text-gray-500 hover:text-[#2563EB]"
                  }`}
                >
                  {link.name}
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-[#2563EB] transition-transform origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Action Bar matching input_file_1.png (APPLY NOW + Cmd K Search) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Command Palette Trigger */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 bg-gray-50/80 hover:bg-blue-50/70 hover:border-blue-200 text-gray-600 text-xs font-semibold transition-all group"
              title="Search institutional routes (Cmd+K)"
            >
              <Search className="w-4 h-4 text-[#2563EB] group-hover:scale-110 transition-transform" />
              <span className="hidden xl:inline">Search portal...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] rounded bg-white border border-gray-200 font-mono text-gray-400 group-hover:text-[#2563EB]">
                ⌘K
              </kbd>
            </button>

            {/* APPLY NOW Button exact matching Figma blue button */}
            <Link
              href="/apply"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-md bg-[#2563EB] text-white font-sans font-bold text-xs sm:text-sm hover:bg-[#1D4ED8] transition-all duration-300 shrink-0 shadow-sm uppercase tracking-wider"
            >
              APPLY NOW
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-gray-200 text-[#111827] hover:bg-gray-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 py-6 border-b transition-colors max-h-[80vh] overflow-y-auto bg-white border-gray-200 text-[#111827]">
          <div className="flex flex-col gap-2 font-medium text-base">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-blue-50 hover:text-[#2563EB] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs opacity-50 font-mono">→</span>
              </Link>
            ))}

            <Link
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 w-full py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-center font-semibold text-sm shadow-md uppercase tracking-wider"
            >
              APPLY NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

