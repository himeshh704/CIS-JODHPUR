"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Microscope, 
  BookOpen, 
  FileText, 
  Download, 
  Calendar, 
  MapPin,
  ExternalLink
} from "lucide-react";

export default function ResearchPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const focusAreas = [
    {
      title: "Artificial Intelligence",
      desc: "Next-generation foundations of machine reasoning, neural-symbolic systems, and autonomous verification architectures.",
      projects: "24 PROJECTS ACTIVE",
    },
    {
      title: "Systems & Security",
      desc: "Resilient distributed systems, post-quantum cryptographic primitives, and high-assurance network infrastructure.",
      projects: "18 PROJECTS ACTIVE",
    },
    {
      title: "Information & Society",
      desc: "Socio-technical interactions, digital equity frameworks, and empirical studies of algorithmic impact on communities.",
      projects: "12 PROJECTS ACTIVE",
    },
    {
      title: "Computational Governance",
      desc: "Data-driven policy modeling, algorithmic fairness, and institutional design for AI safety and oversight.",
      projects: "15 PROJECTS ACTIVE",
    },
    {
      title: "Digital Humanities",
      desc: "Computational analysis of cultural heritage, ancient manuscript digitization, and spatial history methodologies.",
      projects: "09 PROJECTS ACTIVE",
    },
    {
      title: "Knowledge & Data Engineering",
      desc: "Large-scale graph architectures, semantic reasoning engines, and decentralized data provenance structures.",
      projects: "21 PROJECTS ACTIVE",
    },
  ];

  const centers = [
    {
      badge: "FLAGSHIP CENTER",
      funding: "₹4.2 CR ANNUAL GRANT",
      title: "Center for Quantum Computing & Cryptography (CQCC)",
      desc: "Specializing in post-quantum cryptographic primitives, topological qubit modeling, and secure multi-party computation over distributed networks.",
      lead: "LEAD: PROF. RAJESHWAR SINGH RATHORE",
    },
    {
      badge: "HARDWARE R&D",
      funding: "₹3.8 CR DEFENSE GRANT",
      title: "Autonomous Robotics & UAV Sandbox",
      desc: "Developing autonomous aerial and terrestrial platforms capable of precision navigation, structural inspection, and environmental sensing in extreme desert conditions.",
      lead: "LEAD: DR. PRANAV MUKHERJEE",
    },
    {
      badge: "NET-ZERO LAB",
      funding: "₹2.5 CR SUSTAINABILITY FUND",
      title: "Desert Climate AI & Microgrid Observatory",
      desc: "Combining traditional architectural climate resilience with advanced sensor networks and machine learning to optimize renewable energy grids across Rajasthan.",
      lead: "LEAD: DR. MEENAKSHI SUNDARAM",
    },
  ];

  const papers = [
    {
      title: "Neural Symbolics for Zero-Knowledge Proof Verification in Distributed SCADA Grids",
      journal: "IEEE Transactions on Dependable and Secure Computing (TDSC 2026)",
      authors: "Sharma, A., Choudhary, V., & Undergraduate UROP Team",
      citations: "42 CITATIONS",
    },
    {
      title: "Topological Error Correction on Multi-GPU Tensor Clusters using Lattice Surgery",
      journal: "ACM Transactions on Quantum Computing (TQC 2024)",
      authors: "Rathore, R. S., & Vance, A.",
      citations: "68 CITATIONS",
    },
    {
      title: "Passive Thermal Regulation of Desert Jalis: A Deep Learning Fluid Dynamics Audit",
      journal: "Building and Environment (Elsevier 2024)",
      authors: "Sundaram, M., & CIS B.Arch Research Guild",
      citations: "31 CITATIONS",
    },
  ];

  const uropPoints = [
    "Direct ₹1,50,000 annual research grant allocated directly to undergraduate teams for hardware prototyping and cloud compute credits.",
    "Guaranteed co-authorship on top-tier IEEE, ACM, and Nature journals upon successful project peer review.",
    "International conference travel sponsorship to present accepted papers at DEF CON, NeurIPS, and ICCV.",
    "Fast-track admission to our M.Tech Deep Learning & Quantum Computing fellowship with 100% tuition waiver.",
  ];

  const summits = [
    {
      date: "OCT 12-14, 2024",
      title: "International AI Governance Summit",
      location: "Main Auditorium",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    },
    {
      date: "NOV 05-07, 2024",
      title: "South Asian Economic Forum",
      location: "Center for Policy",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    },
    {
      date: "JAN 20-22, 2025",
      title: "Sustainable Smart Cities Expo",
      location: "CIS Campus",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const partners = [
    "Microsoft Research",
    "Google AI",
    "DST India",
    "CSIR",
    "DRDO",
    "NVIDIA AI Lab",
  ];

  return (
    <div className="flex flex-col w-full bg-white text-[#111827] overflow-x-hidden">
      
      {/* 1. HERO SECTION matching input_file_10.png & input_file_0.png */}
      <section className="relative bg-[#F8FAFC] border-b border-gray-100 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        {/* Subtle architectural backdrop shading */}
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl space-y-6">
            <h1 className={`font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#1E293B] leading-[1.08] tracking-tight transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Pushing Boundaries of <br />
              Knowledge
            </h1>
            <p className={`max-w-xl text-gray-500 text-sm sm:text-base leading-relaxed font-sans transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              CIS Jodhpur is a premier research destination, fostering interdisciplinary excellence at the intersection of technology, society, and business.
            </p>
            <div className={`flex flex-wrap items-center gap-4 pt-4 transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <a 
                href="#focus-areas" 
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded uppercase tracking-wider transition-all shadow-sm"
              >
                OUR RESEARCH
              </a>
              <a 
                href="#centers" 
                className="border border-gray-400 text-gray-600 hover:bg-white/80 font-bold text-xs sm:text-sm px-8 py-3.5 rounded uppercase tracking-wider transition-all"
              >
                FACULTY DIRECTORY
              </a>
            </div>
          </div>

          {/* 4 Big Numbers Grid exact matching input_file_10.png */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 sm:pt-20 mt-16 border-t border-gray-200/60 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2563EB] leading-none">
                200+
              </div>
              <div className="text-[11px] sm:text-xs font-sans tracking-widest uppercase text-gray-400 mt-3 font-semibold">
                PUBLISHED PAPERS
              </div>
            </div>
            <div>
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2563EB] leading-none">
                15
              </div>
              <div className="text-[11px] sm:text-xs font-sans tracking-widest uppercase text-gray-400 mt-3 font-semibold">
                RESEARCH CENTERS
              </div>
            </div>
            <div>
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2563EB] leading-none">
                ₹20r+
              </div>
              <div className="text-[11px] sm:text-xs font-sans tracking-widest uppercase text-gray-400 mt-3 font-semibold">
                ANNUAL FUNDING
              </div>
            </div>
            <div>
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2563EB] leading-none">
                45
              </div>
              <div className="text-[11px] sm:text-xs font-sans tracking-widest uppercase text-gray-400 mt-3 font-semibold">
                INTERNATIONAL PATENTS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FRONTIERS OF INQUIRY (FOCUS AREAS) matching input_file_1.png */}
      <section id="focus-areas" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-[#2563EB] font-mono text-xs font-bold tracking-wider uppercase">
            <span className="inline-block w-8 h-px bg-[#2563EB]" />
            FOCUS AREAS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E293B] tracking-tight">
            Frontiers of Inquiry
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Our interdisciplinary research addresses the fundamental challenges of the 21st century across six core domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {focusAreas.map((area, idx) => (
            <div 
              key={idx}
              className="border border-gray-100 rounded-xl p-8 sm:p-10 flex flex-col justify-between bg-white hover:shadow-lg hover:border-gray-200 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-normal text-[#1E293B] group-hover:text-[#2563EB] transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {area.desc}
                </p>
              </div>
              <div className="pt-8">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#2563EB] font-bold block">
                  {area.projects}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CENTERS OF EXCELLENCE matching input_file_2.png */}
      <section id="centers" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-[#2563EB] font-mono text-xs font-bold tracking-wider uppercase">
            <span className="inline-block w-8 h-px bg-[#2563EB]" />
            INSTITUTIONAL HUBS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E293B] tracking-tight">
            Centers of Excellence
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Dedicated laboratories where faculty, doctoral candidates, and undergraduate researchers collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {centers.map((center, idx) => (
            <div 
              key={idx}
              className="border border-gray-100 rounded-xl p-8 sm:p-10 flex flex-col justify-between bg-[#F8FAFC]/50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="bg-blue-50 text-[#2563EB] text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded">
                    {center.badge}
                  </span>
                  <span className="text-[#2563EB] font-mono text-xs font-bold">
                    {center.funding}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#1E293B] leading-snug">
                  {center.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {center.desc}
                </p>
              </div>
              <div className="pt-8 border-t border-gray-200/60 mt-6">
                <span className="text-xs font-mono text-gray-400 block font-medium">
                  {center.lead}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PEER-REVIEWED PUBLICATIONS matching input_file_3.png */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-[#2563EB] font-mono text-xs font-bold tracking-wider uppercase">
            <span className="inline-block w-8 h-px bg-[#2563EB]" />
            SELECTED WORKS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E293B] tracking-tight">
            Peer-Reviewed Publications
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Recent breakthroughs published in premier international journals and conferences by CIS researchers.
          </p>
        </div>

        <div className="space-y-6 pt-12">
          {papers.map((paper, idx) => (
            <div 
              key={idx}
              className="border border-gray-100 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-gray-200 hover:shadow-sm transition-all bg-white"
            >
              <div className="space-y-2.5 max-w-4xl">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-50 text-[#2563EB] text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded">
                    {paper.citations}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1E293B] leading-snug">
                  {paper.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#2563EB] font-medium">
                  {paper.journal}
                </p>
                <p className="text-xs text-gray-400">
                  Authors: {paper.authors}
                </p>
              </div>
              <div className="shrink-0">
                <a 
                  href="#"
                  className="border border-gray-300 hover:border-[#2563EB] text-[#1E293B] hover:text-[#2563EB] text-xs font-bold tracking-wider px-5 py-2.5 rounded transition-colors flex items-center gap-2 uppercase font-sans"
                >
                  <Download className="w-3.5 h-3.5" />
                  DOWNLOAD PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. UNDERGRADUATE RESEARCH OPPORTUNITIES PROGRAM (UROP) matching input_file_4.png */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-[#2563EB] font-mono text-xs font-bold tracking-wider uppercase">
              <span className="inline-block w-8 h-px bg-[#2563EB]" />
              STUDENT R&D GRANTS
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E293B] tracking-tight">
              Undergraduate Research Opportunities Program (UROP)
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              We believe meaningful research should not be locked behind a doctoral gate. Through UROP, undergraduate students receive direct financial grants, computational resources, and one-on-one faculty mentorship from their first year on campus.
            </p>
            <div className="space-y-3.5 pt-2">
              {uropPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1E293B] font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-gray-600">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl p-8 sm:p-10 text-center shadow-sm space-y-6">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#2563EB]">
              <Award className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold block">
                TOTAL STUDENT FUND
              </span>
              <div className="font-serif text-4xl sm:text-5xl font-normal text-[#1E293B]">
                ₹1.5 Crore / Yr
              </div>
            </div>
            <p className="text-xs text-gray-400">
              Next proposal window opens August 15, 2026.
            </p>
            <a 
              href="#apply" 
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded w-full uppercase tracking-wider transition-colors block shadow-sm"
            >
              APPLY VIA FORM A-01
            </a>
          </div>
        </div>
      </section>

      {/* 6. GLOBAL SUMMITS matching input_file_5.png & input_file_8.png */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-[#2563EB] font-mono text-xs font-bold tracking-wider uppercase">
            <span className="inline-block w-8 h-px bg-[#2563EB]" />
            EVENTS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E293B] tracking-tight">
            Global Summits
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            CIS Jodhpur serves as a node for international discourse, hosting researchers from 20+ nations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {summits.map((summit, idx) => (
            <div 
              key={idx}
              className="border border-gray-100 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                  <Image 
                    src={summit.image} 
                    alt={summit.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 sm:p-8 space-y-3">
                  <div className="text-[#2563EB] font-mono text-xs font-bold uppercase tracking-wider">
                    {summit.date}
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#1E293B] leading-snug group-hover:text-[#2563EB] transition-colors">
                    {summit.title}
                  </h3>
                </div>
              </div>
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                <span className="text-xs font-sans text-gray-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  {summit.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. RESEARCH PARTNERS STRIP matching input_file_9.png */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-100 w-full bg-[#F8FAFC]/40">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center text-xs font-mono uppercase tracking-widest text-gray-400 font-semibold">
            Supported by and collaborating with leading global discovery networks:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 lg:gap-20 text-gray-400 font-serif text-lg sm:text-xl font-normal tracking-wide">
            {partners.map((partner, idx) => (
              <span key={idx} className="hover:text-[#1E293B] transition-colors cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SUPPORT THE FUTURE OF DISCOVERY BANNER matching input_file_7.png */}
      <section className="bg-[#2563EB] text-white py-20 sm:py-28 px-4 sm:px-6 text-center w-full">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight">
            Support the future of discovery.
          </h2>
          <p className="max-w-xl mx-auto text-blue-100 text-sm sm:text-base leading-relaxed">
            Join our endowment program to fund groundbreaking research and provide scholarships for exceptional talent.
          </p>
          <div className="pt-2">
            <a 
              href="#donate" 
              className="bg-white text-[#2563EB] font-sans font-bold text-xs sm:text-sm px-8 py-3.5 rounded sm:rounded-md uppercase tracking-wider shadow-sm hover:bg-blue-50 transition-all inline-block"
            >
              DONATE TO ENDOWMENT
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
