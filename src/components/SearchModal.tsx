"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { 
  Search, 
  X, 
  BookOpen, 
  Users, 
  GraduationCap, 
  Calendar, 
  Building2, 
  HelpCircle, 
  ArrowRight, 
  Sparkles, 
  Award,
  FileText,
  Briefcase
} from "lucide-react";

interface SearchItem {
  id: string;
  title: string;
  category: "Program" | "Faculty" | "Event" | "Facility" | "Page" | "FAQ";
  description: string;
  href: string;
  badge?: string;
}

const SEARCH_DATABASE: SearchItem[] = [
  // Pages
  { id: "p1", title: "About CIS Jodhpur", category: "Page", description: "Our Legacy of Excellence, Actuarial Charter & Institutional Leadership", href: "/about" },
  { id: "p2", title: "Admissions & Application Portal", category: "Page", description: "Join the Class of 2026. Application deadlines and selection criteria.", href: "/apply", badge: "Open Now" },
  { id: "p3", title: "Academic Programs Hub", category: "Page", description: "25+ Undergraduate, Postgraduate, and Doctoral tracks", href: "/programs" },
  { id: "p4", title: "Faculty Directory & Academic Leadership", category: "Page", description: "World-class researchers, risk theorists, and corporate leaders", href: "/faculty" },
  { id: "p5", title: "Academic Calendar & Symposiums", category: "Page", description: "International conferences, guest seminars, and hackathons", href: "/events" },
  { id: "p6", title: "Sandstone Campus & Research Labs", category: "Page", description: "Bloomberg terminals, InsurTech simulation labs, and executive suites", href: "/facilities" },
  { id: "p7", title: "Fee Structure & Scholarships", category: "Page", description: "Merit waivers, Dean's scholarships up to 100%, and financial assistance", href: "/scholarships", badge: "Up to 100%" },
  { id: "p8", title: "Frequently Asked Questions", category: "FAQ", description: "Instant answers on hostel rules, fee installments, and placements", href: "/faq" },
  { id: "p9", title: "Institutional Blog & Research Insights", category: "Page", description: "Latest actuarial papers, InsurTech trends, and policy updates", href: "/blog" },
  { id: "p10", title: "Placement Records & Industry Partners", category: "Page", description: "95% placement rate across 500+ global financial and tech recruiters", href: "/placements" },

  // Programs
  { id: "prog1", title: "Master of Insurance Business (MIB)", category: "Program", description: "2-year flagship corporate risk and strategic insurance leadership track", href: "/programs" },
  { id: "prog2", title: "B.Sc. (Hons) Actuarial Sciences", category: "Program", description: "Undergraduate degree aligned with Institute of Actuaries (UK/India) standards", href: "/programs" },
  { id: "prog3", title: "M.Sc. InsurTech & Clinical Risk AI", category: "Program", description: "Advanced computational risk modeling with machine learning and high-density GPU labs", href: "/programs" },
  { id: "prog4", title: "PGDM Corporate Leadership", category: "Program", description: "Executive management program for mid-career insurance and banking professionals", href: "/programs" },

  // Faculty
  { id: "fac1", title: "Dean Dr. A. K. Sharma", category: "Faculty", description: "Chair of Actuarial Sciences. Pioneering risk theorist with 30+ years experience.", href: "/faculty" },
  { id: "fac2", title: "Prof. Ananya Das", category: "Faculty", description: "Chair of InsurTech Strategy. Former quantitative lead at global re-insurance syndicates.", href: "/faculty" },
  { id: "fac3", title: "Mr. R. V. Rao", category: "Faculty", description: "Head of Corporate Immersion & Industry Relations. 25 years in enterprise banking.", href: "/faculty" },

  // Facilities & Campus
  { id: "facil1", title: "InsurTech Simulation Center", category: "Facility", description: "High-density GPU clusters and real-time stochastic actuarial engines", href: "/facilities" },
  { id: "facil2", title: "Sandstone Acoustic Auditorium", category: "Facility", description: "800-seater monumental amphitheater designed with royal Jodhpur acoustics", href: "/facilities" },
  { id: "facil3", title: "Executive Sandstone Hostels", category: "Facility", description: "Air-conditioned single and twin suites with high-speed Wi-Fi and gourmet dining", href: "/facilities" },

  // FAQs & Quick Info
  { id: "faq1", title: "What is the application deadline for 2026-27?", category: "FAQ", description: "Applications close on March 31, 2026 for early admission track.", href: "/faq" },
  { id: "faq2", title: "How do I apply for the 100% Merit Waiver?", category: "FAQ", description: "Scholarships are automatically assessed based on CAT/CIS-SAT scores during application.", href: "/scholarships" }
];

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter items based on query
  const filteredItems = query.trim() === "" 
    ? SEARCH_DATABASE.slice(0, 6) 
    : SEARCH_DATABASE.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if user is typing inside an input or textarea
      const target = e.target as HTMLElement;
      const isInputActive = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);

      // Toggle on Cmd+K or Ctrl+K (case insensitive check for 'k' or KeyK)
      const isCmdK = (e.metaKey || e.ctrlKey) && (e.key.toLowerCase() === "k" || e.code === "KeyK");
      // Also support Cmd+/ or Ctrl+/
      const isCmdSlash = (e.metaKey || e.ctrlKey) && e.key === "/";
      // Also support standalone '/' key when not actively typing inside a form input
      const isSlashOnly = !isInputActive && !e.metaKey && !e.ctrlKey && !e.altKey && e.key === "/";

      if (isCmdK || isCmdSlash || isSlashOnly) {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(prev => !prev);
      }
      // Close on Escape
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    // Use capture: true so we intercept the event early before bubbling or browser defaults when page is focused
    window.addEventListener("keydown", handleKeyDown, { capture: true });
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Handle keyboard navigation inside modal
  const handleModalKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + (filteredItems.length || 1)) % (filteredItems.length || 1));
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredItems[selectedIndex].href);
    }
  };

  const handleSelect = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  const getCategoryIcon = (category: SearchItem["category"]) => {
    switch (category) {
      case "Program": return <GraduationCap className="w-4 h-4 text-[#2563EB]" />;
      case "Faculty": return <Users className="w-4 h-4 text-purple-600" />;
      case "Event": return <Calendar className="w-4 h-4 text-amber-600" />;
      case "Facility": return <Building2 className="w-4 h-4 text-emerald-600" />;
      case "FAQ": return <HelpCircle className="w-4 h-4 text-rose-600" />;
      default: return <BookOpen className="w-4 h-4 text-blue-600" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden animate-in zoom-in-95 duration-200"
        onKeyDown={handleModalKeyDown}
      >
        {/* Search Header Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-gray-50/60">
          <Search className="w-5 h-5 text-[#2563EB] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type 'InsurTech', 'Scholarship', 'Dr. Sharma' or search 22 institutional routes..."
            className="w-full bg-transparent text-[#111827] placeholder:text-gray-400 text-sm sm:text-base font-medium focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery("")}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-1 text-[11px] font-mono font-semibold text-gray-400 bg-white border border-gray-200 rounded shadow-sm">
            ESC
          </kbd>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-3 sm:p-4 space-y-1.5 divide-y divide-gray-50">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center">
              <Search className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-sm font-semibold text-gray-700">No institutional results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-gray-400 mt-1">Try searching for programs, admissions, or campus facilities.</p>
            </div>
          ) : (
            <>
              <div className="px-2 py-1 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-gray-400">
                <span>{query ? "Search Results" : "Suggested Destinations"}</span>
                <span>{filteredItems.length} items</span>
              </div>
              {filteredItems.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item.href)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`p-3 rounded-xl cursor-pointer transition-all flex items-start justify-between gap-3 ${
                      isSelected ? "bg-blue-50/80 border border-blue-200/80" : "hover:bg-gray-50 border border-transparent"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg mt-0.5 ${isSelected ? "bg-white shadow-sm" : "bg-gray-100"}`}>
                        {getCategoryIcon(item.category)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[#1E293B]">{item.title}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-gray-100 text-gray-600 border border-gray-200/60">
                            {item.category}
                          </span>
                          {item.badge && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-100 text-[#2563EB]">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.description}</p>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 mt-2 shrink-0 transition-transform ${isSelected ? "text-[#2563EB] translate-x-1" : "text-gray-300"}`} />
                  </div>
                );
              })}
            </>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-mono">
          <div className="flex items-center gap-4">
            <span><kbd className="px-1.5 py-0.5 rounded bg-white border border-gray-200 font-bold text-gray-600">↑↓</kbd> navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-white border border-gray-200 font-bold text-gray-600">↵</kbd> select</span>
          </div>
          <span className="flex items-center gap-1 text-[#2563EB] font-bold">
            <Sparkles className="w-3.5 h-3.5" /> Institutional Search Engine
          </span>
        </div>
      </div>
    </div>
  );
}
