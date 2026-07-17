"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/MotionSystem";
import { 
  Play, 
  Compass, 
  Download, 
  FileText, 
  ExternalLink, 
  Eye, 
  Maximize2,
  Filter,
  Layers,
  Camera,
  Video,
  Sparkles
} from "lucide-react";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filterTabs = [
    { id: "ALL", label: "ALL" },
    { id: "CAMPUS", label: "CAMPUS" },
    { id: "EVENTS", label: "EVENTS" },
    { id: "SPORTS", label: "SPORTS" },
    { id: "CULTURAL", label: "CULTURAL" },
    { id: "ACADEMICS", label: "ACADEMICS" },
    { id: "CONVOCATION", label: "CONVOCATION" },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Courtyard Noir",
      category: "CAMPUS",
      description: "Monochromatic study of the sandstone colonnades during the monsoon twilight.",
      image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[4/3]"
    },
    {
      id: 2,
      title: "Vortex of Ideas",
      category: "ACADEMICS",
      description: "Senior students collaborating on quantum computing algorithms inside the Innovation Center.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[4/3]"
    },
    {
      id: 3,
      title: "Spasm Cultural Fest",
      category: "CULTURAL",
      description: "Electric classical fusion dance performance under golden stage spotlights.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[4/3]"
    },
    {
      id: 4,
      title: "Sprint to Glory",
      category: "SPORTS",
      description: "400m hurdles final during the Annual Athletic Meet at the Olympic-grade stadium.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[4/3]"
    },
    {
      id: 5,
      title: "The Glass Library",
      category: "CAMPUS",
      description: "Sunlit reading carrels and multi-level book stacks inside the Central Athenaeum.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[4/3]"
    },
    {
      id: 6,
      title: "Symphony in Bronze",
      category: "CULTURAL",
      description: "Student orchestra performing Beethoven's Symphony No. 5 at the Grand Auditorium.",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[4/3]"
    },
    {
      id: 7,
      title: "Robotics Odyssey",
      category: "ACADEMICS",
      description: "Autonomous rover testing on simulated Martian terrain inside the AI Lab.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[4/3]"
    },
    {
      id: 8,
      title: "Aquatic Dominance",
      category: "SPORTS",
      description: "Freestyle swimming championship at the all-weather indoor heated pool.",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[4/3]"
    },
    {
      id: 9,
      title: "Convocation Spires",
      category: "CONVOCATION",
      description: "Class of 2025 tossing mortarboards against the dramatic backdrop of the clock tower.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[4/3]"
    },
    {
      id: 10,
      title: "Sculpting Light",
      category: "CAMPUS",
      description: "Geometric shadows cast by the lattice jali screens across the faculty corridor.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[4/3]"
    },
    {
      id: 11,
      title: "Debate Colloquium",
      category: "ACADEMICS",
      description: "Model United Nations plenary session debating global climate protocols.",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[4/3]"
    },
    {
      id: 12,
      title: "Twilight Rhapsody",
      category: "EVENTS",
      description: "Annual Alumni Gala dinner under starry fairy lights across the South Lawns.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[4/3]"
    }
  ];

  const filteredItems = activeFilter === "ALL" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-[#1E293B] dark:text-gray-100 font-sans selection:bg-[#2563EB] selection:text-white transition-colors duration-300">
      <ScrollReveal animation="fadeUp">
      {/* 1. STICKY TOP SUB-NAVIGATION BAR */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-16 sm:top-20 z-40 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="font-serif font-medium text-gray-900 tracking-tight text-base hover:text-[#2563EB] transition-colors">
              CIS JODHPUR
            </Link>
            <span className="ml-2.5 pl-2.5 border-l border-gray-200 text-[10px] tracking-widest text-gray-400 uppercase font-mono hidden sm:inline-block">
              ATELIER OF EXCELLENCE
            </span>
          </div>

          <div className="flex items-center space-x-6 sm:space-x-8 text-xs font-medium tracking-wider uppercase">
            <Link href="/" className="text-gray-600 hover:text-[#2563EB] transition-colors hidden md:inline-block">
              ATELIER
            </Link>
            <Link href="/academics" className="text-gray-600 hover:text-[#2563EB] transition-colors hidden md:inline-block">
              ACADEMICS
            </Link>
            <Link href="/admissions" className="text-gray-600 hover:text-[#2563EB] transition-colors hidden md:inline-block">
              ADMISSIONS
            </Link>
            <Link href="/campus-life" className="text-gray-600 hover:text-[#2563EB] transition-colors">
              CAMPUS LIFE
            </Link>
            <Link href="/gallery" className="text-[#2563EB] font-semibold border-b-2 border-[#2563EB] pb-1">
              GALLERY
            </Link>
            <Link 
              href="/contact" 
              className="border border-[#2563EB] text-[#2563EB] bg-white hover:bg-[#EFF6FF] px-4 py-1.5 rounded-none text-[11px] font-semibold tracking-wider uppercase transition-colors shadow-sm"
            >
              VIRTUAL TOUR
            </Link>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION & VISUAL COLLAGE */}
      <section className="pt-16 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase mb-4 block flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#2563EB]"></span>
            VISUAL ARCHIVE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1E293B] font-normal tracking-tight leading-tight">
            Life at CIS Jodhpur — In Pictures
          </h1>
          <p className="text-[#64748B] text-base sm:text-lg max-w-2xl mt-4 font-normal leading-relaxed">
            A photographic exploration of campus architecture, academic intensity, and student culture.
          </p>
        </div>

        {/* Hero Bento Collage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-12">
          
          {/* Main Hero Image (Left Spanning 8 Cols) */}
          <div className="lg:col-span-8 group relative overflow-hidden bg-slate-100 h-[400px] sm:h-[520px]">
            <img 
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1600" 
              alt="The Central Courtyard at Dusk" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute top-6 left-6">
              <span className="bg-white/95 backdrop-blur-sm text-[#1E293B] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                ARCHITECTURAL HERITAGE
              </span>
            </div>
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6">
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                The Central Courtyard at Dusk
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
                Sandstone colonnades framed by Jodhpur sunset, blending centuries of Rajasthani architectural heritage with modern academic spaces.
              </p>
            </div>
          </div>

          {/* Right Column Stack (Spanning 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 justify-between">
            
            {/* Top Right Collage Image */}
            <div className="group relative overflow-hidden bg-slate-100 h-[244px]">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Advanced Robotics & AI Atelier" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-white/95 backdrop-blur-sm text-[#1E293B] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider shadow-sm">
                  ACADEMIC INTENSITY
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-serif text-lg text-white font-normal">
                  Advanced Robotics & AI Atelier
                </h4>
              </div>
            </div>

            {/* Bottom Right Collage Image */}
            <div className="group relative overflow-hidden bg-slate-100 h-[244px]">
              <img 
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800" 
                alt="Spasm Cultural Fest 2025" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-white/95 backdrop-blur-sm text-[#1E293B] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider shadow-sm">
                  CULTURAL EPOCHS
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-serif text-lg text-white font-normal">
                  Spasm Cultural Fest 2025
                </h4>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. FILTER ARCHIVE BAR & 12-CARD PHOTOGRAPHIC GRID */}
      <section className="bg-white pb-24 border-t border-gray-100">
        
        {/* Filter Bar exact replica of input_file_0.png */}
        <div className="border-b border-gray-100 bg-gray-50/70 py-4 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-x-auto">
            <div className="flex items-center gap-3 shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase whitespace-nowrap">
                FILTER ARCHIVE:
              </span>
            </div>

            <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`text-xs tracking-wider uppercase transition-all whitespace-nowrap py-1 relative ${
                      isActive
                        ? "text-[#2563EB] font-bold after:absolute after:bottom-[-16px] sm:after:bottom-[-17px] after:left-0 after:right-0 after:h-0.5 after:bg-[#2563EB]"
                        : "text-gray-500 hover:text-[#1E293B] font-medium"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 12-Card Photographic Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group flex flex-col bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden bg-slate-100 ${item.aspect}`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#1E293B] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-xl text-[#1E293B] font-normal group-hover:text-[#2563EB] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-[#2563EB] transition-colors">
                    <span>View High-Res</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State when filter yields nothing */}
          {filteredItems.length === 0 && (
            <div className="py-20 text-center border border-dashed border-gray-200">
              <Camera className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="font-serif text-xl text-gray-700">No photographs found in this category</h3>
              <p className="text-gray-400 text-sm mt-1">Please select another filter or view all items.</p>
              <button 
                onClick={() => setActiveFilter("ALL")}
                className="mt-6 bg-[#2563EB] text-white px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#1d4ed8] transition"
              >
                Reset to All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. MOTION & SOUND ARCHIVE (VIDEO COLLECTION) */}
      <section className="py-20 sm:py-24 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase mb-3 block flex items-center gap-2">
              <Video className="w-4 h-4" />
              MOTION & SOUND ARCHIVE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E293B] font-normal tracking-tight">
              Campus Life in Motion
            </h2>
            <p className="text-[#64748B] text-base sm:text-lg max-w-2xl mt-4 font-normal leading-relaxed">
              Experience the rhythm of daily life, annual cultural fests, and research breakthroughs through motion and sound.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
            
            {/* Video Card 1 */}
            <div className="group bg-white border border-gray-200/80 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800" 
                  alt="A Day at CIS Jodhpur — From Dawn to Dusk" 
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-75 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 hover:bg-white text-[#2563EB] flex items-center justify-center shadow-lg transition duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-2 py-0.5 text-xs font-mono rounded">
                  03:45
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[#2563EB] text-[10px] font-bold tracking-wider uppercase block mb-1">
                    CAMPUS DOCUMENTARY
                  </span>
                  <h3 className="font-serif text-xl text-[#1E293B] font-normal group-hover:text-[#2563EB] transition-colors">
                    A Day at CIS Jodhpur — From Dawn to Dusk
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Follow student life across residential quads, engineering labs, and evening athletics.
                  </p>
                </div>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="group bg-white border border-gray-200/80 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800" 
                  alt="Spasm 2025: The Official Aftermovie" 
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-75 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 hover:bg-white text-[#2563EB] flex items-center justify-center shadow-lg transition duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-2 py-0.5 text-xs font-mono rounded">
                  05:12
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[#2563EB] text-[10px] font-bold tracking-wider uppercase block mb-1">
                    CULTURAL FESTIVAL
                  </span>
                  <h3 className="font-serif text-xl text-[#1E293B] font-normal group-hover:text-[#2563EB] transition-colors">
                    Spasm 2025: The Official Aftermovie
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Highlights from India&apos;s premier high-school cultural and artistic symposium.
                  </p>
                </div>
              </div>
            </div>

            {/* Video Card 3 */}
            <div className="group bg-white border border-gray-200/80 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                  alt="Inside the AI & Robotics Atelier" 
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-75 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 hover:bg-white text-[#2563EB] flex items-center justify-center shadow-lg transition duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-2 py-0.5 text-xs font-mono rounded">
                  04:20
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[#2563EB] text-[10px] font-bold tracking-wider uppercase block mb-1">
                    ACADEMIC SPOTLIGHT
                  </span>
                  <h3 className="font-serif text-xl text-[#1E293B] font-normal group-hover:text-[#2563EB] transition-colors">
                    Inside the AI &amp; Robotics Atelier
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    An immersive look inside student-led research in autonomous systems and neural networks.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE 360° CAMPUS ORBIT */}
      <section className="py-20 sm:py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#3B82F6] text-xs font-semibold tracking-widest uppercase mb-3 block flex items-center gap-2">
              <Compass className="w-4 h-4" />
              VIRTUAL REALITY PORTAL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight">
              360° Interactive Campus Experience
            </h2>
            <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mt-4 font-normal leading-relaxed">
              Explore our state-of-the-art campus in interactive 360 degrees. Wander through corridors, step inside lecture halls, and feel the architectural weight.
            </p>
          </div>

          {/* 360 Interactive Box Simulator */}
          <div className="mt-12 bg-slate-800/60 border border-slate-700 h-[380px] sm:h-[460px] relative flex flex-col items-center justify-center p-8 text-center overflow-hidden group">
            
            {/* Background Radar Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
              <div className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full border border-blue-400/30 animate-[spin_40s_linear_infinite]"></div>
              <div className="absolute w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full border border-blue-400/20"></div>
              <div className="absolute w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] rounded-full border border-dashed border-blue-400/40 animate-[spin_20s_linear_infinite_reverse]"></div>
            </div>

            {/* Orbit Active Pill */}
            <div className="relative z-10 bg-blue-500/20 border border-blue-400/40 text-blue-300 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-mono mb-6 animate-pulse">
              INTERACTIVE ORBIT ACTIVE
            </div>

            {/* Compass Icon */}
            <div className="relative z-10 w-20 h-20 rounded-full border-2 border-dashed border-blue-400 flex items-center justify-center text-blue-400 group-hover:rotate-180 transition-transform duration-1000 mb-6 bg-slate-900/80 shadow-2xl">
              <Compass className="w-10 h-10" />
            </div>

            <p className="relative z-10 text-slate-300 text-sm max-w-md">
              Drag to rotate • Scroll to zoom sm • Click hotspots to jump inside laboratories and residential halls.
            </p>

            <Link 
              href="/contact"
              className="relative z-10 mt-8 bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-none font-semibold text-xs tracking-wider uppercase transition shadow-lg inline-flex items-center gap-3 group-hover:scale-105 duration-300"
            >
              <span>EXPLORE IN 360°</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. PRESS RESOURCES / DOWNLOAD MEDIA KIT (exact match of input_file_1.png) */}
      <section className="bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          
          {/* Left Text */}
          <div className="max-w-2xl">
            <span className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase mb-3 block font-sans">
              PRESS RESOURCES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1E293B] font-normal tracking-tight">
              Download Media Kit
            </h2>
            <p className="text-[#94A3B8] text-base leading-relaxed max-w-2xl mt-4">
              Access high-resolution photographs, official branding guides, architectural brochures, and academic statements for editorial or broadcast use.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); alert("Media Kit Photos (240 MB ZIP) download initiated."); }}
              className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 py-3.5 rounded-none font-semibold text-xs tracking-wider uppercase transition shadow-sm flex items-center justify-center gap-2.5"
            >
              <span>DOWNLOAD PHOTOS</span>
              <Download className="w-4 h-4" />
            </a>
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); alert("Official Architectural & Academic Brochure download initiated."); }}
              className="border border-[#BFDBFE] text-[#2563EB] bg-white hover:bg-[#EFF6FF] px-6 py-3.5 rounded-none font-semibold text-xs tracking-wider uppercase transition flex items-center justify-center gap-2.5"
            >
              <span>DOWNLOAD BROCHURE</span>
              <FileText className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>
      </ScrollReveal>
      {/* 7. GLOBAL FOOTER (Rendered automatically by Footer.tsx in layout.tsx) */}
    </div>
  );
}
