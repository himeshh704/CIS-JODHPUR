"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, GraduationCap, Users, Menu, X, Sparkles, Award, PhoneCall, Calendar, Building2, HelpCircle } from "lucide-react";

export function BottomTabBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { name: "Home", href: "/", icon: Home },
    { name: "Programs", href: "/programs", icon: BookOpen },
    { name: "Apply Now", href: "/apply", icon: Sparkles, isPrimary: true },
    { name: "Faculty", href: "/faculty", icon: Users },
  ];

  const quickLinks = [
    { name: "About CIS Jodhpur", href: "/about", icon: Award, desc: "Our legacy of 25+ years" },
    { name: "Admissions Desk", href: "/admissions", icon: GraduationCap, desc: "Eligibility & fee structure" },
    { name: "Campus Facilities", href: "/facilities", icon: Building2, desc: "Labs, hostels & research wings" },
    { name: "Academic Events", href: "/events", icon: Calendar, desc: "Seminars & technical fests" },
    { name: "Institutional FAQ", href: "/faq", icon: HelpCircle, desc: "Common applicant queries" },
    { name: "Contact & Support", href: "/contact", icon: PhoneCall, desc: "Reach our admissions team" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname?.startsWith(path);
  };

  return (
    <>
      {/* Mobile Drawer Menu when 'Menu' tab is tapped */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] bg-white rounded-t-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
            
            {/* Drawer Header */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white">
              <div>
                <span className="font-serif text-lg tracking-wide block">CIS Jodhpur</span>
                <span className="text-[10px] font-mono text-blue-300 tracking-widest uppercase">Institutional Hub</span>
              </div>
              <button 
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Links Grid */}
            <div className="p-6 overflow-y-auto space-y-3">
              <span className="text-xs font-bold font-mono tracking-wider uppercase text-gray-400 block mb-2">
                Quick Destinations
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickLinks.map((link) => {
                  const IconComp = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-100 bg-gray-50/60 hover:bg-blue-50/70 hover:border-blue-200 transition-all active:scale-[0.98]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#2563EB] flex-shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-[#1E293B] block">{link.name}</span>
                        <span className="text-xs text-gray-500 block">{link.desc}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Action Banner */}
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white shadow-md">
                <h4 className="font-serif text-lg mb-1">Join the Class of 2026</h4>
                <p className="text-xs text-blue-100 mb-4">
                  Applications are currently open across computational and business leadership tracks.
                </p>
                <Link
                  href="/apply"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center py-3 rounded-xl bg-white text-[#2563EB] font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-blue-50 transition-colors"
                >
                  Start Application
                </Link>
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 text-center text-xs text-gray-400 font-mono">
              © 2026 CIS Jodhpur · All Rights Reserved
            </div>
          </div>
        </div>
      )}

      {/* Fixed Bottom Navigation Bar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 py-1.5 pb-safe">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {tabs.map((tab) => {
            const active = isActive(tab.href);
            const IconComp = tab.icon;

            if (tab.isPrimary) {
              return (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className="flex flex-col items-center justify-center -mt-5 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#2563EB] to-[#3B82F6] text-white flex items-center justify-center shadow-lg shadow-blue-500/30 group-active:scale-90 transition-transform duration-150">
                    <IconComp className="w-6 h-6 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-bold text-[#2563EB] tracking-tight mt-1">
                    {tab.name}
                  </span>
                </Link>
              );
            }

            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-150 active:scale-90 ${
                  active 
                    ? "text-[#2563EB] font-semibold" 
                    : "text-gray-500 hover:text-[#1E293B]"
                }`}
              >
                <div className="relative">
                  <IconComp className={`w-5 h-5 ${active ? "text-[#2563EB]" : "text-gray-500"}`} />
                  {active && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  )}
                </div>
                <span className="text-[10px] tracking-tight mt-1.5">
                  {tab.name}
                </span>
              </Link>
            );
          })}

          {/* Menu / More Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-150 active:scale-90 ${
              menuOpen 
                ? "text-[#2563EB] font-semibold" 
                : "text-gray-500 hover:text-[#1E293B]"
            }`}
          >
            <div className="relative">
              <Menu className={`w-5 h-5 ${menuOpen ? "text-[#2563EB]" : "text-gray-500"}`} />
              {menuOpen && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              )}
            </div>
            <span className="text-[10px] tracking-tight mt-1.5">
              Menu
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
