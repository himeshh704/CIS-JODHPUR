"use client";

import React, { useState } from "react";
import { Building2, MapPin, Sparkles, Server, Users, Coffee, BookOpen, ShieldCheck, Wifi, ArrowRight } from "lucide-react";

interface CampusHotspot {
  id: string;
  name: string;
  category: "Academic" | "Technology" | "Residential" | "Recreation";
  coordinates: { x: number; y: number }; // Percentage from left/top
  description: string;
  stats: string;
  image: string;
}

const HOTSPOTS: CampusHotspot[] = [
  {
    id: "hs-1",
    name: "Sandstone Academic Block A",
    category: "Academic",
    coordinates: { x: 28, y: 35 },
    description: "Main administrative & lecture wing featuring royal architectural arches, climate-controlled lecture halls, and Dean suites.",
    stats: "24 Smart Halls • 800-Seater Auditorium",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=75"
  },
  {
    id: "hs-2",
    name: "Bloomberg & InsurTech GPU Wing",
    category: "Technology",
    coordinates: { x: 55, y: 25 },
    description: "High-density computational laboratory for actuarial risk modeling, stochastic simulation, and live global market feed analysis.",
    stats: "64 Bloomberg Terminals • NVIDIA A100 Clusters",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=75"
  },
  {
    id: "hs-3",
    name: "Executive Sandstone Residences",
    category: "Residential",
    coordinates: { x: 75, y: 60 },
    description: "Air-conditioned single and twin suites surrounded by landscaped courtyards, high-speed Wi-Fi mesh, and 24/7 security.",
    stats: "450 Suites • Solar Powered • 100% Wi-Fi 6E",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=75"
  },
  {
    id: "hs-4",
    name: "Central Actuarial Library & Archive",
    category: "Academic",
    coordinates: { x: 42, y: 65 },
    description: "Multi-level quiet research repository with over 45,000 physical volumes, actuarial journals, and private study pods.",
    stats: "45,000+ Volumes • IEEE/IFoA Digital Access",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=75"
  },
  {
    id: "hs-5",
    name: "Courtyard Amphitheater & Student Hub",
    category: "Recreation",
    coordinates: { x: 22, y: 75 },
    description: "Open-air sandstone amphitheater for cultural symposiums, hackathon finals, and evening student networking.",
    stats: "1,200 Capacity • Gourmet Dining & Cafeteria",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=75"
  }
];

export function CampusMap() {
  const [selectedHotspot, setSelectedHotspot] = useState<CampusHotspot>(HOTSPOTS[0]);
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Academic", "Technology", "Residential", "Recreation"];

  const filteredHotspots = activeTab === "All" 
    ? HOTSPOTS 
    : HOTSPOTS.filter(h => h.category === activeTab);

  return (
    <div className="bg-[#0F172A] text-white rounded-3xl p-6 sm:p-10 border border-blue-500/20 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#60A5FA]" /> Interactive Campus Masterplan
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Explore Our Sandstone Blueprint
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-2xl">
            Tap on any hotspot across our 45-acre Jodhpur campus to inspect research facilities, residential quarters, and architectural highlights.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10 shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === cat 
                  ? "bg-[#2563EB] text-white shadow-sm" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Map + Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive Map Blueprint Canvas */}
        <div className="lg:col-span-7 relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl border border-blue-500/30 h-[380px] sm:h-[460px] overflow-hidden group shadow-inner">
          {/* Blueprint Grid Lines & Watermark */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <span className="font-serif text-7xl sm:text-9xl font-bold tracking-tighter text-blue-400">
              CIS 45
            </span>
          </div>

          {/* Decorative Campus Zones */}
          <div className="absolute top-[20%] left-[20%] w-[35%] h-[40%] rounded-2xl border border-blue-400/20 bg-blue-500/5 backdrop-blur-[1px]" />
          <div className="absolute top-[15%] right-[15%] w-[35%] h-[35%] rounded-2xl border border-purple-400/20 bg-purple-500/5 backdrop-blur-[1px]" />
          <div className="absolute bottom-[15%] right-[15%] w-[40%] h-[35%] rounded-2xl border border-emerald-400/20 bg-emerald-500/5 backdrop-blur-[1px]" />
          <div className="absolute bottom-[15%] left-[15%] w-[35%] h-[30%] rounded-2xl border border-amber-400/20 bg-amber-500/5 backdrop-blur-[1px]" />

          {/* Map Compass Label */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-mono text-gray-300 flex items-center gap-2 z-20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>N 26° 17&apos; JODHPUR • 45 ACRES</span>
          </div>

          {/* Hotspot Markers */}
          {filteredHotspots.map((hs) => {
            const isSelected = selectedHotspot.id === hs.id;
            return (
              <button
                key={hs.id}
                onClick={() => setSelectedHotspot(hs)}
                style={{ left: `${hs.coordinates.x}%`, top: `${hs.coordinates.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group/marker focus:outline-none"
              >
                {/* Pulse Ring */}
                <span className={`absolute -inset-2 rounded-full animate-ping opacity-75 ${isSelected ? "bg-amber-400" : "bg-blue-400"}`} />
                
                {/* Pin Button */}
                <span className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 transition-transform shadow-lg ${
                  isSelected 
                    ? "bg-amber-500 border-white scale-125 text-black shadow-amber-500/50" 
                    : "bg-[#2563EB] border-white text-white hover:scale-110 shadow-blue-600/50"
                }`}>
                  <MapPin className="w-5 h-5 fill-current" />
                </span>

                {/* Hover Tooltip */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-lg bg-black/90 text-white text-[11px] font-mono whitespace-nowrap opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/20">
                  {hs.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Hotspot Detail Panel */}
        <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/15 overflow-hidden flex flex-col justify-between h-full min-h-[380px] sm:min-h-[460px]">
          <div>
            <div className="relative h-44 sm:h-52 overflow-hidden">
              <img 
                src={selectedHotspot.image} 
                alt={selectedHotspot.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#2563EB]/90 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm border border-white/20">
                {selectedHotspot.category} Zone
              </span>
            </div>

            <div className="p-6 space-y-3">
              <h4 className="font-serif text-2xl font-bold text-white leading-snug">
                {selectedHotspot.name}
              </h4>
              <div className="text-xs font-mono font-semibold text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> {selectedHotspot.stats}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {selectedHotspot.description}
              </p>
            </div>
          </div>

          <div className="p-6 pt-0 flex items-center justify-between gap-4 border-t border-white/10 mt-4 bg-black/20">
            <div className="text-[11px] font-mono text-gray-400">
              Hotspot <strong className="text-white">{HOTSPOTS.findIndex(h => h.id === selectedHotspot.id) + 1}</strong> of {HOTSPOTS.length}
            </div>
            <div className="flex gap-2">
              {HOTSPOTS.map((h, idx) => (
                <button
                  key={h.id}
                  onClick={() => setSelectedHotspot(h)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    selectedHotspot.id === h.id ? "bg-[#2563EB] w-6" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to ${h.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
