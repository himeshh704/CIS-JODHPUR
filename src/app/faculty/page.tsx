"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/MotionSystem";
import { Mail, ExternalLink, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className || "w-4 h-4 fill-current"} viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export default function FacultyPage() {
  const [selectedDept, setSelectedDept] = useState<string>("ALL");

  const departments = [
    "ALL",
    "MANAGEMENT",
    "COMMERCE",
    "COMPUTER SCIENCE",
    "ARTS & HUMANITIES",
    "EDUCATION"
  ];

  const facultyMembers = [
    {
      name: "Dr. Ananya Sharma",
      role: "PROFESSOR",
      deptLabel: "Dept. of Management",
      deptCategory: "MANAGEMENT",
      focus: "Strategic Leadership",
      creds: "Ph.D. IIM Ahmedabad",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      email: "asharma@cisjodhpur.edu.in",
      linkedin: "#",
      profileUrl: "#"
    },
    {
      name: "Prof. Rajesh Verma",
      role: "ASSOCIATE PROFESSOR",
      deptLabel: "Computer Science",
      deptCategory: "COMPUTER SCIENCE",
      focus: "Artificial Intelligence",
      creds: "Ph.D. IIT Delhi",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      email: "rverma@cisjodhpur.edu.in",
      linkedin: "#",
      profileUrl: "#"
    },
    {
      name: "Dr. Sanya Gupta",
      role: "ASSISTANT PROFESSOR",
      deptLabel: "Arts & Humanities",
      deptCategory: "ARTS & HUMANITIES",
      focus: "Contemporary Literature",
      creds: "Ph.D. JNU Delhi",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      email: "sgupta@cisjodhpur.edu.in",
      linkedin: "#",
      profileUrl: "#"
    },
    {
      name: "Prof. Vikram Singh",
      role: "PROFESSOR",
      deptLabel: "Dept. of Commerce",
      deptCategory: "COMMERCE",
      focus: "International Finance",
      creds: "CFA, Ph.D. DU",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      email: "vsingh@cisjodhpur.edu.in",
      linkedin: "#",
      profileUrl: "#"
    },
    {
      name: "Dr. Meera Iyer",
      role: "ASSOCIATE PROFESSOR",
      deptLabel: "Education",
      deptCategory: "EDUCATION",
      focus: "Curriculum Design",
      creds: "Ph.D. University of Mumbai",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
      email: "miyer@cisjodhpur.edu.in",
      linkedin: "#",
      profileUrl: "#"
    },
    {
      name: "Prof. Amit Trivedi",
      role: "ASSISTANT PROFESSOR",
      deptLabel: "Management",
      deptCategory: "MANAGEMENT",
      focus: "Digital Marketing",
      creds: "MBA ISB, Ph.D.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      email: "atrivedi@cisjodhpur.edu.in",
      linkedin: "#",
      profileUrl: "#"
    },
    {
      name: "Dr. Karan Malhotra",
      role: "PROFESSOR",
      deptLabel: "Computer Science",
      deptCategory: "COMPUTER SCIENCE",
      focus: "Cybersecurity",
      creds: "Ph.D. BITS Pilani",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      email: "kmalhotra@cisjodhpur.edu.in",
      linkedin: "#",
      profileUrl: "#"
    },
    {
      name: "Prof. Neha Kapoor",
      role: "ASSOCIATE PROFESSOR",
      deptLabel: "Arts & Humanities",
      deptCategory: "ARTS & HUMANITIES",
      focus: "Social Psychology",
      creds: "Ph.D. AMU",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      email: "nkapoor@cisjodhpur.edu.in",
      linkedin: "#",
      profileUrl: "#"
    }
  ];

  const filteredFaculty = selectedDept === "ALL" 
    ? facultyMembers 
    : facultyMembers.filter(f => f.deptCategory === selectedDept);

  return (
    <div className="flex flex-col w-full min-h-screen bg-white dark:bg-[#0A0A0A] text-slate-900 dark:text-gray-100 transition-colors duration-300">
      <ScrollReveal animation="fadeUp">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[450px] md:h-[520px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80"
          alt="Faculty Hero Architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight drop-shadow-md">
            Learn from Visionaries
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 font-light max-w-2xl mx-auto leading-relaxed drop-shadow">
            Our faculty consists of world-class scholars, industry pioneers, and transformative educators dedicated to shaping the next generation of leaders.
          </p>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="w-full bg-[#EFF6FF] dark:bg-slate-800/80 border-y border-blue-100 dark:border-slate-700 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2563EB] dark:text-blue-400 font-light">
                50+
              </span>
              <p className="text-[11px] font-mono tracking-widest text-gray-500 dark:text-gray-400 uppercase">
                CORE FACULTY
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2563EB] dark:text-blue-400 font-light">
                15
              </span>
              <p className="text-[11px] font-mono tracking-widest text-gray-500 dark:text-gray-400 uppercase">
                PHD SCHOLARS
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2563EB] dark:text-blue-400 font-light">
                200+
              </span>
              <p className="text-[11px] font-mono tracking-widest text-gray-500 dark:text-gray-400 uppercase">
                PUBLICATIONS
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2563EB] dark:text-blue-400 font-light">
                30+
              </span>
              <p className="text-[11px] font-mono tracking-widest text-gray-500 dark:text-gray-400 uppercase">
                AVG EXPERIENCE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE ACADEMIC ROSTER DIRECTORY */}
      <section className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-gray-900 dark:text-white">
              The Academic Roster
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-light">
              Browse our directory of distinguished educators across departments.
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-6 border-b border-gray-200 dark:border-slate-700 pb-4">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`text-xs font-mono uppercase tracking-wider pb-2 px-3 border-b-2 transition-all ${
                  selectedDept === dept
                    ? "border-[#2563EB] text-[#2563EB] dark:text-blue-400 font-bold"
                    : "border-transparent text-gray-400 hover:text-gray-600 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {filteredFaculty.map((fac, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 overflow-hidden flex flex-col justify-between transition-transform hover:-translate-y-1"
              >
                <div>
                  <div className="relative w-full h-64 overflow-hidden bg-gray-100 dark:bg-slate-700">
                    <Image
                      src={fac.image}
                      alt={fac.name}
                      fill
                      className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="p-5 space-y-1.5">
                    <h3 className="font-serif text-lg font-bold leading-tight text-gray-900 dark:text-white">
                      {fac.name}
                    </h3>
                    <p className="text-[11px] font-bold tracking-wider text-[#2563EB] dark:text-blue-400 uppercase">
                      {fac.role}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {fac.deptLabel}
                    </p>
                    <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 pt-1">
                      {fac.focus}
                    </p>
                    <p className="text-[11px] text-gray-400 dark:text-gray-500">
                      {fac.creds}
                    </p>
                  </div>
                </div>

                {/* Footer Icons */}
                <div className="px-5 py-3.5 border-t border-gray-100 dark:border-slate-700 flex items-center gap-3.5 text-gray-400 dark:text-gray-400">
                  <a href={`mailto:${fac.email}`} className="hover:text-[#2563EB] transition-colors" title="Email">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href={fac.linkedin} className="hover:text-[#2563EB] transition-colors" title="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={fac.profileUrl} className="hover:text-[#2563EB] transition-colors" title="View Profile">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. LEADERSHIP IN THOUGHT (FEATURED DEAN) */}
      <section className="w-full bg-[#F8FAFC] dark:bg-slate-900 py-20 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-gray-900 dark:text-white">
              Leadership in Thought
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
              Meet the visionaries guiding our academic departments.
            </p>
          </div>

          <div className="bg-[#EFF6FF] dark:bg-slate-800/80 rounded-2xl border border-blue-100 dark:border-slate-700 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 shadow-sm">
            
            <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[440px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Dr. Ishwar Chandra"
                fill
                className="object-cover grayscale"
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] dark:text-blue-400 font-bold block">
                  DEAN OF MANAGEMENT
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-gray-900 dark:text-white">
                  Dr. Ishwar Chandra
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                With over 35 years of experience in corporate strategy and institutional development, Dr. Chandra has been instrumental in placing CIS Jodhpur at the forefront of management education in India. His research on &apos;Frugal Innovation&apos; has been published in over 40 international journals.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-serif text-lg font-normal text-gray-900 dark:text-white">
                  Key Achievements
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                    Recipient of the National Education Excellence Award 2022
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                    Former Board Member at SEBI
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                    Published &apos;The Digital Frontier&apos; - Bestselling Academic Text
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <button className="px-5 py-2.5 rounded-lg border border-[#2563EB] text-[#2563EB] dark:text-blue-400 dark:border-blue-400 text-xs font-bold uppercase tracking-wider hover:bg-[#2563EB] hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all">
                  VIEW FULL PROFILE
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. RESEARCH & PUBLICATIONS */}
      <section className="w-full bg-[#0B192C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-white">
                Research &amp; Publications
              </h2>
              <p className="text-sm text-slate-300 font-light">
                Our faculty&apos;s contributions to global knowledge across disciplines.
              </p>
            </div>
            <Link 
              href="/research"
              className="px-5 py-2.5 rounded-lg border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white text-xs font-bold uppercase tracking-wider transition-all self-start sm:self-auto"
            >
              VIEW ALL RESEARCH
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl p-6 shadow-md border border-gray-100 dark:border-slate-700 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#2563EB] dark:text-blue-400 block">
                  2024
                </span>
                <h3 className="font-serif text-lg font-bold leading-snug text-gray-900 dark:text-white">
                  Socio-Economic Impacts of AI in Developing Rural Markets
                </h3>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  Dr. Rajesh Verma
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Global Journal of Tech Economics
                </p>
              </div>
              <Link href="/research" className="text-xs font-bold text-[#2563EB] dark:text-blue-400 hover:underline flex items-center gap-1 pt-2">
                READ PAPER <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl p-6 shadow-md border border-gray-100 dark:border-slate-700 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#2563EB] dark:text-blue-400 block">
                  2024
                </span>
                <h3 className="font-serif text-lg font-bold leading-snug text-gray-900 dark:text-white">
                  Sustainable Supply Chain Models in Post-Pandemic India
                </h3>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  Dr. Ananya Sharma
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Logistics &amp; Management Review
                </p>
              </div>
              <Link href="/research" className="text-xs font-bold text-[#2563EB] dark:text-blue-400 hover:underline flex items-center gap-1 pt-2">
                READ PAPER <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl p-6 shadow-md border border-gray-100 dark:border-slate-700 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#2563EB] dark:text-blue-400 block">
                  2023
                </span>
                <h3 className="font-serif text-lg font-bold leading-snug text-gray-900 dark:text-white">
                  Ethical Frameworks for Data Privacy in Emerging Fintech
                </h3>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  Prof. Vikram Singh
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  International Finance Journal
                </p>
              </div>
              <Link href="/research" className="text-xs font-bold text-[#2563EB] dark:text-blue-400 hover:underline flex items-center gap-1 pt-2">
                READ PAPER <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl p-6 shadow-md border border-gray-100 dark:border-slate-700 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#2563EB] dark:text-blue-400 block">
                  2023
                </span>
                <h3 className="font-serif text-lg font-bold leading-snug text-gray-900 dark:text-white">
                  Transformative Pedagogy in Rural Primary Education
                </h3>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  Dr. Meera Iyer
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Education Reform Quarterly
                </p>
              </div>
              <Link href="/research" className="text-xs font-bold text-[#2563EB] dark:text-blue-400 hover:underline flex items-center gap-1 pt-2">
                READ PAPER <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 6. INDUSTRY MENTORS */}
      <section className="w-full bg-[#F8FAFC] dark:bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-gray-900 dark:text-white">
              Industry Mentors
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
              Learning from active practitioners and industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Mentor 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm space-y-4">
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white">
                  Siddharth Jain
                </h3>
                <p className="text-xs font-bold text-[#2563EB] dark:text-blue-400">
                  CEO, TechMatrix
                </p>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 pt-2 border-t border-gray-100 dark:border-slate-700">
                Expertise: Cloud Architecture
              </p>
            </div>

            {/* Mentor 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm space-y-4">
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white">
                  Riya Oberoi
                </h3>
                <p className="text-xs font-bold text-[#2563EB] dark:text-blue-400">
                  VP Marketing, BrandCo
                </p>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 pt-2 border-t border-gray-100 dark:border-slate-700">
                Expertise: Consumer Behavior
              </p>
            </div>

            {/* Mentor 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm space-y-4">
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white">
                  Manish Pandey
                </h3>
                <p className="text-xs font-bold text-[#2563EB] dark:text-blue-400">
                  Director, GreenFin
                </p>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 pt-2 border-t border-gray-100 dark:border-slate-700">
                Expertise: Impact Investing
              </p>
            </div>

            {/* Mentor 4 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm space-y-4">
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white">
                  Aditi Rao
                </h3>
                <p className="text-xs font-bold text-[#2563EB] dark:text-blue-400">
                  Principal Designer, Studio9
                </p>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 pt-2 border-t border-gray-100 dark:border-slate-700">
                Expertise: UX Strategy
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. JOIN OUR ACADEMIC COMMUNITY BANNER */}
      <section className="w-full bg-[#2563EB] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
            Join Our Academic Community
          </h2>
          <p className="text-sm sm:text-base opacity-90 max-w-xl mx-auto font-light leading-relaxed">
            We are always looking for exceptional minds to join our faculty. Explore our current openings for teaching and research positions.
          </p>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
