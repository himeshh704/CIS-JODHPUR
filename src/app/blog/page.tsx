"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Tag, 
  Share2, 
  Bookmark, 
  User, 
  Award,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

export default function BlogPage() {
  const { mode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Quantum & Cryptography",
    "Desert Architecture",
    "Cambridge Ethics",
    "Student Research (`UROP`)"
  ];

  const articles = [
    {
      title: "Lattice Surgery & Thermal Isolation: Why Superconducting Qubits Require Extreme Substrate Inertia",
      category: "Quantum & Cryptography",
      author: "Prof. Rajeshwar Singh Rathore",
      date: "July 10, 2026",
      readTime: "8 Min Read",
      excerpt: "An architectural and cryogenic exploration into how specialized building foundations dampen sub-surface seismic vibrations by 40%, creating an ideal physical substrate for our 128-qubit optical dilution refrigerators.",
      featured: true,
      tags: ["Quantum Hardware", "Thermal Mass", "DGX Clusters"],
    },
    {
      title: "The Epistemology of Autonomous Weapon Systems: A Cambridge Philosophical Analysis",
      category: "Cambridge Ethics",
      author: "Dr. Alistair Vance",
      date: "June 28, 2026",
      readTime: "12 Min Read",
      excerpt: "When an AI rover makes a target verification determination in a contested electromagnetic environment, where does moral accountability reside? Examining deontological ethics alongside ROS 2 decision trees.",
      featured: false,
      tags: ["AI Ethics", "Cambridge CAIE", "Moral Agency"],
    },
    {
      title: "Passive Cooling via Geometric Jalis: Re-Engineering 16th-Century Aerodynamics for Modern Data Centers",
      category: "Desert Architecture",
      author: "Dr. Meenakshi Sundaram & B.Arch Guild",
      date: "June 15, 2026",
      readTime: "10 Min Read",
      excerpt: "Computational fluid dynamics (`CFD`) simulations reveal how traditional geometric jali apertures accelerate wind velocity via the Venturi effect, reducing ambient server room cooling loads by 28.4%.",
      featured: false,
      tags: ["Jalis", "Net-Zero", "Fluid Dynamics"],
    },
    {
      title: "Co-Authoring at Nineteen: My Journey from Class 12 CBSE to an IEEE TDSC Publication",
      category: "Student Research (`UROP`)",
      author: "Aarav Rathore (`B.Tech CSE '27`)",
      date: "May 30, 2026",
      readTime: "6 Min Read",
      excerpt: "How our undergraduate research team secured ₹1.5 Lakhs in UROP funding to test zero-knowledge SCADA authentication protocols against simulated nation-state cyber intrusions.",
      featured: false,
      tags: ["UROP", "Student Success", "Cybersecurity"],
    },
    {
      title: "Post-Quantum Cryptography in Smart Microgrids: A Practical Implementation Guide",
      category: "Quantum & Cryptography",
      author: "Dr. Ananya Sharma",
      date: "May 12, 2026",
      readTime: "15 Min Read",
      excerpt: "Transitioning municipal solar grids away from vulnerable RSA-2048 keys toward CRYSTALS-Kyber and Dilithium lattice signatures before quantum supremacy occurs.",
      featured: false,
      tags: ["PQC", "SCADA", "Lattice Cryptography"],
    },
  ];

  const filteredArticles = articles.filter(a => selectedCategory === "All" || a.category === selectedCategory);

  return (
    <div className="flex flex-col w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* 1. HERO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6">
        <div className="lg:col-span-7 space-y-6">
          <Badge variant="amber">Institutional Quarterly</Badge>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
            {mode === "v2" ? (
              <>CIS Research & Essays: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-blue-400">The Editorial Journal</span>.</>
            ) : (
              <>Institutional Journal: <span className="text-[#2563EB]">Essays & Preprints</span> from the Frontier.</>
            )}
          </h1>
          <p className="text-lg opacity-80 leading-relaxed font-normal">
            Read peer-reviewed preprints, philosophical essays from our Cambridge humanities chairs, and technical breakthroughs co-authored by our undergraduate research fellows.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="#journal-grid" variant="primary">
              Explore Latest Articles <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/research" variant="outline">
              View Research Portal
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Card variant={mode === "v2" ? "midnight-glass" : "sandstone"} className="p-8 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D97706] block flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Editorial Telemetry (`v4.2`)
            </span>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-gray-400/20">
                <span className="opacity-75">ISSN (`Online Journal`):</span>
                <strong className="font-mono text-[#D97706]">2984-0192-CIS</strong>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-400/20">
                <span className="opacity-75">Quarterly Circulation:</span>
                <strong className="font-mono text-[#D97706]">18,500+ Academics</strong>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="opacity-75">Open Access Index:</span>
                <strong className="font-mono text-emerald-600 dark:text-emerald-400">100% Free Preprints</strong>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* 2. FILTER & JOURNAL GRID */}
      <div id="journal-grid" className="scroll-mt-24 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-gray-400/20 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-[#D97706] text-white shadow-md"
                    : "bg-gray-200/60 dark:bg-gray-800/60 opacity-75 hover:opacity-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-xs font-mono opacity-70">
            Showing {filteredArticles.length} essays & technical reports
          </span>
        </div>

        {/* ARTICLES LIST */}
        <div className="space-y-8">
          {filteredArticles.map((art, idx) => (
            <Card
              key={idx}
              variant={art.featured ? (mode === "v2" ? "midnight-glass" : "sandstone") : "bordered-interactive"}
              className={`p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
                art.featured ? "border-2 border-[#D97706]" : ""
              }`}
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant={art.featured ? "amber" : "royal"}>{art.category}</Badge>
                  {art.featured && (
                    <span className="text-xs font-mono font-bold text-[#D97706] flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" /> Lead Editorial Feature
                    </span>
                  )}
                  <span className="text-xs font-mono opacity-70 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {art.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-gray-900 dark:text-white hover:text-[#D97706] transition-colors cursor-pointer">
                  {art.title}
                </h3>

                <p className="text-sm sm:text-base opacity-80 leading-relaxed max-w-3xl">
                  {art.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {art.tags.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-gray-200/60 dark:bg-white/5 opacity-80">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-between space-y-6 p-6 rounded-xl bg-white/5 border border-gray-400/20 h-full">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97706]">Author Attribution</span>
                  <div className="font-serif text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <User className="w-4 h-4 text-[#D97706]" /> {art.author}
                  </div>
                  <span className="text-xs font-mono opacity-70 block">{art.date}</span>
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-400/15">
                  <Button href="/research" variant={art.featured ? "primary" : "outline"} size="sm" className="w-full">
                    Read Full Essay <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* 3. SUBMIT TO THE JOURNAL CTA */}
      <Card variant="bordered-interactive" className="p-10 text-center space-y-4 max-w-4xl mx-auto">
        <Badge variant="amber">Editorial Call for Papers</Badge>
        <h2 className="font-serif text-3xl font-bold">Are You a Student or Researcher at CIS?</h2>
        <p className="text-sm opacity-80 max-w-xl mx-auto leading-relaxed">
          We accept quarterly essay submissions from undergraduate students across all departments. All published articles receive formal DOI indexing and UROP priority consideration.
        </p>
        <div className="pt-2">
          <Button href="/contact" variant="primary">
            Submit Essay Manuscript <ExternalLink className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
