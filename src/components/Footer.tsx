"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/apply")) {
    return null;
  }

  return (
    <footer className="bg-white border-t border-gray-100 text-[#111827] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Brand & Description matching input_file_7.png */}
          <div className="md:col-span-5 lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-3xl font-normal tracking-tight block leading-none text-[#1E293B] group-hover:text-[#2563EB] transition-colors">
                CIS Jodhpur
              </span>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-400 max-w-sm">
              Center for Information Studies, Jodhpur. Advancing the frontiers of knowledge and professional outcome since 1998.
            </p>
          </div>

          {/* Right Columns: Comprehensive Navigation covering all 17 routes in customized categories */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            
            {/* ADMISSIONS & AID */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E293B]">
                ADMISSIONS
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400 font-normal">
                <li><Link href="/admissions" className="hover:text-[#2563EB] transition-colors">How to Apply</Link></li>
                <li><Link href="/apply" className="hover:text-[#2563EB] transition-colors">Apply Portal</Link></li>
                <li><Link href="/scholarships" className="hover:text-[#2563EB] transition-colors">Scholarships</Link></li>
                <li><Link href="/admissions" className="hover:text-[#2563EB] transition-colors">Eligibility</Link></li>
                <li><Link href="/faq" className="hover:text-[#2563EB] transition-colors">Admissions FAQ</Link></li>
              </ul>
            </div>

            {/* ACADEMICS & LABS */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E293B]">
                ACADEMICS
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400 font-normal">
                <li><Link href="/academics" className="hover:text-[#2563EB] transition-colors">Programs Hub</Link></li>
                <li><Link href="/programs" className="hover:text-[#2563EB] transition-colors">All Degrees</Link></li>
                <li><Link href="/faculty" className="hover:text-[#2563EB] transition-colors">Faculty & Staff</Link></li>
                <li><Link href="/research" className="hover:text-[#2563EB] transition-colors">Research Labs</Link></li>
                <li><Link href="/facilities" className="hover:text-[#2563EB] transition-colors">Atelier Facilities</Link></li>
              </ul>
            </div>

            {/* STUDENT LIFE & ARCHIVES (New & Highlighted) */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                STUDENT LIFE
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400 font-normal">
                <li><Link href="/campus-life" className="hover:text-[#2563EB] transition-colors font-semibold text-gray-600">Campus Life</Link></li>
                <li><Link href="/gallery" className="hover:text-[#2563EB] transition-colors font-semibold text-[#2563EB]">Visual Gallery</Link></li>
                <li><Link href="/events" className="hover:text-[#2563EB] transition-colors">Events Calendar</Link></li>
                <li><Link href="/campus-life#clubs" className="hover:text-[#2563EB] transition-colors">Clubs & Guilds</Link></li>
                <li><Link href="/campus-life#residences" className="hover:text-[#2563EB] transition-colors">Residences</Link></li>
              </ul>
            </div>

            {/* PLACEMENTS & IMPACT */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E293B]">
                OUTCOMES
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400 font-normal">
                <li><Link href="/placements" className="hover:text-[#2563EB] transition-colors">Placements Hub</Link></li>
                <li><Link href="/placements" className="hover:text-[#2563EB] transition-colors">Global Partners</Link></li>
                <li><Link href="/placements" className="hover:text-[#2563EB] transition-colors">Recruiter Matrix</Link></li>
                <li><Link href="/blog" className="hover:text-[#2563EB] transition-colors">Student Blog</Link></li>
                <li><Link href="/resources" className="hover:text-[#2563EB] transition-colors">Prospectus & Media</Link></li>
              </ul>
            </div>

            {/* EXPLORE & CONTACT */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E293B]">
                EXPLORE
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400 font-normal">
                <li><Link href="/about" className="hover:text-[#2563EB] transition-colors">About CIS Jodhpur</Link></li>
                <li><Link href="/contact" className="hover:text-[#2563EB] transition-colors">Helpline Desk</Link></li>
                <li><Link href="/contact" className="hover:text-[#2563EB] transition-colors">Campus Directory</Link></li>
                <li><Link href="/gallery" className="hover:text-[#2563EB] transition-colors">360° Virtual Tour</Link></li>
                <li><Link href="/faq" className="hover:text-[#2563EB] transition-colors">General FAQ</Link></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar exact matching input_file_7.png */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-normal">
          <div>
            © {new Date().getFullYear()} CIS Jodhpur. All Rights Reserved.
          </div>
          <div className="flex items-center gap-5 text-gray-400">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition-colors" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
