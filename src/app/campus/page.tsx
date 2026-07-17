"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/MotionSystem";
import { 
  Play, 
  Compass, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  Maximize2, 
  Layers, 
  BookOpen, 
  Cpu, 
  Dumbbell, 
  Coffee, 
  Sparkles,
  Phone,
  Mail
} from "lucide-react";

export default function CampusPage() {
  const [activeFacility, setActiveFacility] = useState<"cafeteria" | "classrooms" | "labs" | "sports" | "atelier">("cafeteria");
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [activeMasterPlanLayer, setActiveMasterPlanLayer] = useState<"all" | "academic" | "residential" | "solar">("all");

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-[#0F172A] dark:text-gray-100 selection:bg-[#2563EB] selection:text-white font-sans overflow-x-hidden transition-colors duration-300">
      <ScrollReveal animation="fadeUp">
      {/* 1. HERO SECTION matching uploaded_media_4_1784224377491.jpg */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
        {/* Background Aerial Sunset Photograph */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        {/* Warm golden twilight & deep slate vignette matching Figma */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-radial from-amber-500/15 via-transparent to-transparent opacity-80" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#60A5FA] animate-fade-in">
            <span className="w-6 h-0.5 bg-[#60A5FA] inline-block" />
            <span>THE FUTURE OF EDUCATION</span>
            <span className="w-6 h-0.5 bg-[#60A5FA] inline-block" />
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.05]">
            A Campus Built for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-amber-200">
              Tomorrow
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed pt-2">
            Merging the heritage of Rajasthan with world-class modern infrastructure. <br className="hidden sm:inline" />
            CIS Jodhpur is an environment designed to inspire excellence and curiosity.
          </p>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono font-bold uppercase tracking-wider">
            <a
              href="#masterplan"
              className="px-8 py-4 rounded-xl bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
            >
              <span>EXPLORE BLUEPRINT</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#tour"
              className="px-8 py-4 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md transition-all flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current text-[#60A5FA]" />
              <span>360° VIRTUAL TOUR</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. SPRAWLING INNOVATION IN THE SUN CITY matching uploaded_media_4_1784224377491.jpg */}
      <section id="masterplan" className="py-24 sm:py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Specs & Description */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-3">
                  <span className="w-6 h-0.5 bg-[#2563EB] inline-block" />
                  <span>LEGACY &amp; LOCATION</span>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#0F172A] font-normal tracking-tight leading-tight">
                  Sprawling Innovation in the Sun City
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  Established on a 15-acre estate, our campus provides a sanctuary for academic and personal growth. From the solar-powered academic blocks to the lush green commons, every corner is crafted to support the Cambridge curriculum.
                </p>
              </div>

              {/* Specs Matrix matching exact uploaded_media_4 strings & styling */}
              <div className="border-t border-b border-gray-200 divide-y divide-gray-200 bg-white">
                <div className="flex items-center justify-between py-5 sm:px-2 hover:bg-slate-50 transition-colors">
                  <span className="text-xs sm:text-sm font-sans text-gray-600 font-medium">
                    Campus Area
                  </span>
                  <span className="text-base sm:text-lg font-serif text-[#2563EB] font-normal">
                    15 Acre Sprawl
                  </span>
                </div>

                <div className="flex items-center justify-between py-5 sm:px-2 hover:bg-slate-50 transition-colors">
                  <span className="text-xs sm:text-sm font-sans text-gray-600 font-medium">
                    Learning Spaces
                  </span>
                  <span className="text-base sm:text-lg font-serif text-[#2563EB] font-normal">
                    Smart Classrooms
                  </span>
                </div>

                <div className="flex items-center justify-between py-5 sm:px-2 hover:bg-slate-50 transition-colors">
                  <span className="text-xs sm:text-sm font-sans text-gray-600 font-medium">
                    Academic Blocks
                  </span>
                  <span className="text-base sm:text-lg font-serif text-[#2563EB] font-normal">
                    03 Wings
                  </span>
                </div>

                <div className="flex items-center justify-between py-5 sm:px-2 hover:bg-slate-50 transition-colors">
                  <span className="text-xs sm:text-sm font-sans text-gray-600 font-medium">
                    Boarding
                  </span>
                  <span className="text-base sm:text-lg font-serif text-[#2563EB] font-normal">
                    02 Premium Hostels
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/facilities"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] hover:underline"
                >
                  <span>VIEW DETAILED MASTER ARCHITECTURE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Isometric Blueprint Container matching uploaded_media_4 */}
            <div className="lg:col-span-6">
              <div className="bg-[#F1F5F9] rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xl relative overflow-hidden group">
                
                {/* Blueprint Header HUD */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-300/80 text-xs font-mono text-slate-700">
                  <div className="flex items-center gap-2 font-bold tracking-wider">
                    <Layers className="w-4 h-4 text-[#2563EB]" />
                    <span>SCHOOL CAMPUS - BLUEPRINT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>SCALE 1:500</span>
                    <span>•</span>
                    <span>DATE: 2024</span>
                  </div>
                </div>

                {/* Interactive CAD Layers switcher */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { id: "all", label: "Master Grid" },
                    { id: "academic", label: "03 Academic Wings" },
                    { id: "residential", label: "02 Hostels" },
                    { id: "solar", label: "Green Belt" },
                  ].map((layer) => (
                    <button
                      key={layer.id}
                      onClick={() => setActiveMasterPlanLayer(layer.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-mono uppercase tracking-wider transition-all ${
                        activeMasterPlanLayer === layer.id
                          ? "bg-[#2563EB] text-white font-bold shadow-md"
                          : "bg-white text-slate-600 border border-gray-200 hover:bg-slate-200"
                      }`}
                    >
                      {layer.label}
                    </button>
                  ))}
                </div>

                {/* Isometric Graphic Container matching exact grid paper drawing */}
                <div className="relative h-[360px] sm:h-[440px] rounded-xl bg-white border border-gray-300 overflow-hidden flex items-center justify-center p-4 shadow-inner">
                  {/* Grid paper background pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px] opacity-60 pointer-events-none" />
                  
                  {/* Isometric CAD Blueprint SVG */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="relative w-full max-w-[460px] h-[340px] sm:h-[400px] flex items-center justify-center p-4">
                      
                      <svg className="w-full h-full text-slate-700 drop-shadow-md" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Outer Perimeter */}
                        <polygon points="250,30 480,180 250,370 20,180" stroke="#475569" strokeWidth="2" fill="rgba(241,245,249,0.5)" />
                        
                        {/* Internal Roads / Paths */}
                        <line x1="250" y1="30" x2="250" y2="370" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 4" />
                        <line x1="20" y1="180" x2="480" y2="180" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 4" />
                        <circle cx="250" cy="200" r="35" stroke="#2563EB" strokeWidth="2" fill="rgba(37,99,235,0.05)" />
                        
                        {/* Wing 1: Academic West Block */}
                        <g className={activeMasterPlanLayer === "all" || activeMasterPlanLayer === "academic" ? "opacity-100 transition-opacity" : "opacity-25"}>
                          <polygon points="110,90 190,140 160,165 80,115" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
                          <text x="110" y="132" fontSize="9" fontWeight="bold" fill="#D97706" fontFamily="monospace">SMART HALLS</text>
                        </g>

                        {/* Wing 2: Academic North Block */}
                        <g className={activeMasterPlanLayer === "all" || activeMasterPlanLayer === "academic" ? "opacity-100 transition-opacity" : "opacity-25"}>
                          <polygon points="250,60 330,110 300,135 220,85" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
                          <text x="250" y="105" fontSize="9" fontWeight="bold" fill="#D97706" fontFamily="monospace">ACADEMIC WING</text>
                        </g>

                        {/* Wing 3: Atelier / Labs East Block */}
                        <g className={activeMasterPlanLayer === "all" || activeMasterPlanLayer === "academic" ? "opacity-100 transition-opacity" : "opacity-25"}>
                          <polygon points="340,160 420,210 390,235 310,185" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
                          <text x="340" y="205" fontSize="9" fontWeight="bold" fill="#D97706" fontFamily="monospace">LABS &amp; ATELIER</text>
                        </g>

                        {/* Hostel North / Boys & Girls Hostels */}
                        <g className={activeMasterPlanLayer === "all" || activeMasterPlanLayer === "residential" ? "opacity-100 transition-opacity" : "opacity-25"}>
                          <polygon points="270,260 380,330 350,355 240,285" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
                          <text x="290" y="315" fontSize="9" fontWeight="bold" fill="#2563EB" fontFamily="monospace">HOSTEL NORTH</text>
                          
                          <polygon points="120,230 210,285 185,305 95,250" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
                          <text x="130" y="275" fontSize="9" fontWeight="bold" fill="#2563EB" fontFamily="monospace">HOSTEL SOUTH</text>
                        </g>

                        {/* Green Belt & Common Areas */}
                        <g className={activeMasterPlanLayer === "all" || activeMasterPlanLayer === "solar" ? "opacity-100 transition-opacity" : "opacity-25"}>
                          <circle cx="210" cy="180" r="8" fill="#D1FAE5" stroke="#059669" strokeWidth="1" />
                          <circle cx="290" cy="220" r="8" fill="#D1FAE5" stroke="#059669" strokeWidth="1" />
                          <path d="M 230 340 Q 250 360 280 340" stroke="#059669" strokeWidth="1.5" fill="none" />
                          <text x="210" y="360" fontSize="8" fontWeight="bold" fill="#059669" fontFamily="monospace">GREEN BELT</text>
                        </g>
                      </svg>

                      {/* Interactive Callouts matching CAD stamp */}
                      <div className="absolute bottom-4 right-4 bg-white/90 border border-gray-300 px-3 py-1.5 rounded text-[10px] font-mono text-slate-600 shadow-sm text-right">
                        <strong>SCHOOL CAMPUS - BLUEPRINT</strong> <br />
                        SCALE 1:500 • DATE: 2024
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>CAMBRIDGE CURRICULUM ARCHITECTURAL SPEC</span>
                  <span className="text-[#2563EB] hover:underline cursor-pointer flex items-center gap-1 font-bold">
                    <Maximize2 className="w-3 h-3" /> FULLSCREEN CAD VIEW
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WORLD-CLASS FACILITIES matching uploaded_media_2_1784224377491.png & input_file_0.png */}
      <section id="facilities" className="py-24 sm:py-32 bg-[#F8FAFC] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              <span className="w-6 h-0.5 bg-[#2563EB] inline-block" />
              <span>RESOURCES</span>
              <span className="w-6 h-0.5 bg-[#2563EB] inline-block" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#0F172A] tracking-tight">
              World-Class Facilities
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our classrooms are not just rooms, but hubs of global connection. Integrated with the latest LMS and interactive displays, we ensure every lesson is immersive.
            </p>
          </div>

          {/* Interactive Facilities Showcase Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Vertical Card Slices matching exact uploaded_media_2 slices */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {[
                {
                  id: "cafeteria",
                  title: "Cafeteria",
                  subtitle: "Nutritious organic multi-cuisine dining.",
                  badge: "Dietitian Approved",
                  icon: Coffee,
                  img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop"
                },
                {
                  id: "classrooms",
                  title: "Smart Classrooms",
                  subtitle: "Interactive 86-inch 4K displays & multi-screen zoning.",
                  badge: "Global LMS Hub",
                  icon: BookOpen,
                  img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop"
                },
                {
                  id: "labs",
                  title: "Research Laboratories",
                  subtitle: "Advanced physics, chemistry, robotics & bio-safety labs.",
                  badge: "Cambridge Spec",
                  icon: Cpu,
                  img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1470&auto=format&fit=crop"
                },
                {
                  id: "sports",
                  title: "Sports Complex",
                  subtitle: "Olympic-grade aquatics, indoor arena & synthetic tracks.",
                  badge: "Certified Arena",
                  icon: Dumbbell,
                  img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
                },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeFacility === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveFacility(item.id as any)}
                    className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex items-center justify-between group ${
                      isActive
                        ? "bg-white border-[#2563EB] shadow-xl ring-2 ring-[#2563EB]/10 translate-x-1 sm:translate-x-2"
                        : "bg-white/80 border-gray-200 hover:bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? "bg-[#2563EB] text-white" : "bg-slate-100 text-[#2563EB]"
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-[#0F172A] font-normal group-hover:text-[#2563EB] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                          {item.subtitle}
                        </p>
                        <span className="inline-block mt-2 text-[11px] font-mono font-bold text-[#2563EB] border-b border-[#2563EB] pb-0.5">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-transform shrink-0 ${
                      isActive ? "text-[#2563EB] translate-x-1" : "text-gray-300 group-hover:text-gray-500"
                    }`} />
                  </div>
                );
              })}
            </div>

            {/* Right Column: Deep Dive Display Panel matching exact Technology-Enabled Learning card */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB]">
                  <span className="w-6 h-0.5 bg-[#2563EB] inline-block" />
                  <span>
                    {activeFacility === "cafeteria" && "NUTRITION & DINING"}
                    {activeFacility === "classrooms" && "INNOVATION & PEDAGOGY"}
                    {activeFacility === "labs" && "STEM & RESEARCH"}
                    {activeFacility === "sports" && "PHYSICAL FORTITUDE"}
                  </span>
                </div>

                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <img 
                    src={
                      activeFacility === "cafeteria"
                        ? "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop"
                        : activeFacility === "classrooms"
                        ? "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop"
                        : activeFacility === "labs"
                        ? "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1470&auto=format&fit=crop"
                        : "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
                    }
                    alt={activeFacility} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white font-mono text-xs font-bold uppercase tracking-wider">
                    ◆ {activeFacility.toUpperCase()} SUITE • CIS JODHPUR
                  </div>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal tracking-tight">
                  {activeFacility === "cafeteria" && "Cafeteria & Multi-Cuisine Dining"}
                  {activeFacility === "classrooms" && "Technology-Enabled Learning"}
                  {activeFacility === "labs" && "Next-Gen Research Laboratories"}
                  {activeFacility === "sports" && "Olympic-Grade Athletic Complex"}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  {activeFacility === "cafeteria" && 
                    "Our spacious, sunlit cafeteria serves nutritious organic multi-cuisine dining formulated with dietitian oversight. Every meal is crafted using locally sourced farm-fresh ingredients to support sustained daily energy and focus."}
                  {activeFacility === "classrooms" && 
                    "Our classrooms are not just rooms, but hubs of global connection. Integrated with the latest LMS and interactive displays, we ensure every lesson is immersive, engaging, and tailored to diverse learning styles."}
                  {activeFacility === "labs" && 
                    "Featuring dedicated physics, chemistry, biology, and robotics laboratories compliant with international safety standards, enabling hands-on inquiry and advanced experimental validation."}
                  {activeFacility === "sports" && 
                    "We provide comprehensive athletic training facilities including heated indoor pools, floodlit turf fields, synthetic running tracks, and personalized fitness coaching designed for peak holistic health."}
                </p>

                {/* Bullet list with blue checkmark icons matching uploaded_media_2 */}
                <div className="space-y-3 pt-2">
                  {(activeFacility === "classrooms" ? [
                    "Interactive Whiteboards (86-inch 4K)",
                    "Video Conferencing for Global Experts",
                    "LMS Integration for Personalized Paths",
                    "High-Speed Campus-wide Wi-Fi 6"
                  ] : activeFacility === "cafeteria" ? [
                    "Nutritious Organic Multi-Cuisine Dining",
                    "Dietitian Approved Daily Menus & Allergen Tracking",
                    "Spacious Double-Height Sunlit Hall Architecture",
                    "Strict Hygiene & Zero-Waste Food Recycling System"
                  ] : activeFacility === "labs" ? [
                    "BSL-2 Compliant Bio-Safety Equipment",
                    "High-Precision Spectrometry & Robotics Workbenches",
                    "Dedicated High-Performance Computing (HPC) Terminals",
                    "24/7 Monitored Safety & Hazardous Material Disposal"
                  ] : [
                    "Olympic-Standard Heated Aquatics Center",
                    "400m Synthetic All-Weather Athletics Track",
                    "Multi-Specialty Indoor Basketball & Badminton Courts",
                    "Certified Fitness Trainers & Biomechanical Rehab Lounge"
                  ]).map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100 mt-6">
                <Link
                  href="/facilities"
                  className="inline-flex items-center gap-2 bg-[#2563EB] text-white hover:bg-[#1D4ED8] px-8 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  <span>EXPLORE ALL CAMPUS INFRASTRUCTURE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. HOME AWAY FROM HOME (Residences / Hostels) matching uploaded_media_0_1784224377491.png */}
      <section id="residences" className="py-24 sm:py-32 bg-[#EFF6FF]/60 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              <span className="w-6 h-0.5 bg-[#2563EB] inline-block" />
              <span>RESIDENCE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#0F172A] tracking-tight">
              Home Away From Home
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Card 1: Boys Hostel exact matching uploaded_media_0 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md flex flex-col justify-between">
              <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1469&auto=format&fit=crop" 
                  alt="Boys Hostel Room" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                    <h3 className="font-serif text-3xl font-normal text-[#0F172A]">
                      Boys Hostel
                    </h3>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                      200+ CAPACITY
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                      ROOM TYPES
                    </span>
                    <p className="text-sm text-gray-700 font-medium">
                      Studio Singles, Luxury Twins
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-3">
                      AMENITIES
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs text-gray-600 font-medium">
                      <span>Air Conditioned</span>
                      <span>Laundry Service</span>
                      <span>Common Lounge</span>
                      <span>Gym Access</span>
                      <span>Study Nooks</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Link
                    href="/campus-life#residences"
                    className="bg-[#2563EB] text-white hover:bg-[#1D4ED8] px-8 py-3.5 rounded font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                  >
                    APPLY FOR BOARDING
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Girls Hostel exact matching uploaded_media_0 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md flex flex-col justify-between">
              <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop" 
                  alt="Girls Hostel Room" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                    <h3 className="font-serif text-3xl font-normal text-[#0F172A]">
                      Girls Hostel
                    </h3>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                      200+ CAPACITY
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                      ROOM TYPES
                    </span>
                    <p className="text-sm text-gray-700 font-medium">
                      Studio Singles, Luxury Twins
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-3">
                      AMENITIES
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs text-gray-600 font-medium">
                      <span>Air Conditioned</span>
                      <span>Laundry Service</span>
                      <span>Common Lounge</span>
                      <span>Gym Access</span>
                      <span>Study Nooks</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Link
                    href="/campus-life#residences"
                    className="bg-[#2563EB] text-white hover:bg-[#1D4ED8] px-8 py-3.5 rounded font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                  >
                    APPLY FOR BOARDING
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. 360° VIRTUAL CAMPUS TOUR matching uploaded_media_1_1784224377491.png top */}
      <section id="tour" className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        {/* Background Hazy Architectural Photograph */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        {/* Gray / Slate overlay exactly matching Figma gray tone */}
        <div className="absolute inset-0 bg-slate-400/80 backdrop-blur-xs" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1E293B]">
            360° Virtual Campus Tour
          </h2>

          <div className="flex flex-col items-center justify-center gap-6">
            {/* Circular Blue Play Icon Button */}
            <button
              onClick={() => setIsTourOpen(true)}
              aria-label="Start Tour"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#1D4ED8] transition-all duration-300 group cursor-pointer"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={() => setIsTourOpen(true)}
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-3 rounded font-mono text-xs font-bold uppercase tracking-widest shadow-lg transition-all"
            >
              START TOUR
            </button>
          </div>
        </div>

        {/* Modal Virtual Tour Viewer */}
        {isTourOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in">
            <div className="relative w-full max-w-6xl h-[80vh] bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden flex flex-col text-left">
              <div className="flex items-center justify-between p-4 px-6 border-b border-slate-800 bg-slate-950 font-mono text-xs text-white">
                <div className="flex items-center gap-2 text-blue-400">
                  <Compass className="w-4 h-4 animate-spin-slow" />
                  <span className="font-bold tracking-wider">CIS JODHPUR • 360° INTERACTIVE MASTER PLAN ORBIT</span>
                </div>
                <button
                  onClick={() => setIsTourOpen(false)}
                  className="px-4 py-1.5 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500 hover:text-white font-bold transition-colors"
                >
                  CLOSE [X]
                </button>
              </div>

              <div className="flex-1 relative flex items-center justify-center bg-slate-950">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
                  alt="360 Panorama View" 
                  className="w-full h-full object-cover opacity-75"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-950/40">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-blue-400 flex items-center justify-center text-blue-400 mb-4 animate-spin-slow">
                    <Compass className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl font-normal text-white">
                    Interactive Orbit Active
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mt-2 font-mono">
                    Drag around to explore the 15-acre estate, academic blocks, and boarding facilities in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 6. IN THE HEART OF JODHPUR matching uploaded_media_1_1784224377491.png bottom */}
      <section className="py-24 sm:py-32 bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Exact text from uploaded_media_1 */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-2">
                  <span className="w-6 h-0.5 bg-[#2563EB] inline-block" />
                  <span>CONNECTIVITY</span>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#0F172A] font-normal tracking-tight">
                  In the Heart of Jodhpur
                </h2>
              </div>

              <div className="space-y-6 text-sm text-gray-700 leading-relaxed font-normal">
                <div>
                  <span className="font-mono text-[11px] font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
                    ADDRESS
                  </span>
                  <p className="text-gray-700">
                    CIS Jodhpur, Main Bypass Road, Jodhpur, Rajasthan 342001, India
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[11px] font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
                    NEARBY LANDMARKS
                  </span>
                  <p className="text-gray-700">
                    15 mins from Mehrangarh Fort | 10 mins from Jodhpur Airport
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[11px] font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
                    TRANSPORTATION
                  </span>
                  <p className="text-gray-700">
                    Dedicated bus fleet covering 50+ routes across the Sun City.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white px-8 py-3.5 rounded font-mono text-xs font-bold uppercase tracking-wider transition-all"
                >
                  GET DIRECTIONS
                </a>
              </div>
            </div>

            {/* Right Column: Dark Nighttime Satellite Transit Map matching uploaded_media_1 */}
            <div className="lg:col-span-7">
              <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden group">
                {/* Satellite map base image */}
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1474&auto=format&fit=crop" 
                  alt="Jodhpur Night Satellite Map" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/40 to-transparent" />

                {/* Glowing Transit Lines Overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 460" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 400 Q 250 250 500 220" stroke="#C084FC" strokeWidth="2.5" />
                  <path d="M100 50 Q 300 180 500 220" stroke="#34D399" strokeWidth="2.5" />
                  <path d="M650 380 Q 550 300 500 220" stroke="#38BDF8" strokeWidth="2" />
                  <circle cx="500" cy="220" r="35" stroke="#FBA919" strokeWidth="1" opacity="0.6" className="animate-ping" />
                </svg>

                {/* Glowing Yellow Pulse Beacon Marker matching exact CIS JODHPUR CAMPUS stamp */}
                <div className="absolute top-[44%] sm:top-[42%] right-[22%] sm:right-[26%] flex items-center gap-2">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-amber-400 animate-ping opacity-75" />
                    <span className="relative w-4 h-4 rounded-full bg-amber-400 border-2 border-white shadow-[0_0_20px_rgba(251,191,36,1)]" />
                  </div>
                  <div className="bg-slate-900/90 backdrop-blur-md border border-amber-400/60 px-3.5 py-1.5 rounded font-mono text-[11px] font-bold text-amber-300 shadow-xl tracking-wider">
                    CIS JODHPUR CAMPUS
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded font-mono text-[10px] text-slate-400">
                  GPS: 26.2389° N, 73.0243° E • SUN CITY TRANSIT GRID
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
