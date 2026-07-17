"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Award, 
  Shield, 
  Users, 
  ArrowRight, 
  Eye, 
  Target, 
  Globe, 
  Heart,
  Activity,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { ScrollReveal, AnimatedCounter, TimelineTrace } from "@/components/motion/MotionSystem";

export default function AboutPage() {
  const coreValues = [
    {
      title: "Excellence",
      description: "Rigorous standards in research, education, and institutional administration.",
      icon: Award
    },
    {
      title: "Innovation",
      description: "Unlocking unconventional thinking and championing high-impact research projects.",
      icon: Activity
    },
    {
      title: "Integrity",
      description: "Upholding absolute transparency, ethics, and truth in every academic pursuit.",
      icon: Shield
    },
    {
      title: "Global Perspective",
      description: "Forging critical international bridges and preparing students for world-class domains.",
      icon: Globe
    },
    {
      title: "Inclusivity",
      description: "Creating a harmonious, diverse environment welcoming talent from all backgrounds.",
      icon: Users
    },
    {
      title: "Social Responsibility",
      description: "Stewarding community initiatives and regional development across Rajasthan.",
      icon: Heart
    }
  ];

  const leadership = [
    {
      name: "Dean Dr. A. K. Sharma",
      role: "DEAN & CHAIR OF ACTUARIAL SCIENCES",
      bio: "Pioneering risk theorist with 30+ years of institutional governance and quantitative risk research across global financial sectors.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Prof. Ananya Das",
      role: "CHAIR, INSURTECH & COMPUTATIONAL STRATEGY",
      bio: "Former principal investigator on AI underwriting models, leading computational workflows and risk analytics laboratories.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mr. R. V. Rao",
      role: "HEAD OF CORPORATE IMMERSION & ALLIANCES",
      bio: "Spearheaded strategic partnerships with 500+ global financial, reinsurance, and technology leaders across Europe and Asia.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const timelineMilestones = [
    {
      year: "1982",
      title: "Foundation & Inception",
      description: "Established as Jodhpur Institute of Risk and Actuarial Studies with 12 foundational scholars and high-level academic vision."
    },
    {
      year: "1996",
      title: "Modernization & IT Expansion",
      description: "Inauguration of the IT & Computational Wing, expanding degree pathways across risk management and computational finance."
    },
    {
      year: "2005",
      title: "Campus Redesign & NAAC Grade 'A+'",
      description: "Expansion of the signature golden sandstone architecture, central amphitheater, and national accreditation."
    },
    {
      year: "2012",
      title: "Global Research Integration",
      description: "Signed collaborative treaties with leading actuarial and financial research councils across Europe and North America."
    },
    {
      year: "2023",
      title: "InsurTech & Simulation Labs",
      description: "State-of-the-art computational simulation labs powered by high-density server clusters and AI risk models."
    }
  ];

  const accreditations = [
    { title: "NAAC GRADE 'A+'" },
    { title: "UGC RECOGNIZED" },
    { title: "AICTE APPROVED" },
    { title: "ISO 9001 CERTIFIED" },
  ];

  const pillarsOfCommitment = [
    {
      title: "Computational Excellence",
      description: "Rigorous quantitative algorithms, machine learning underwriting models, and real-time actuarial simulation desks for high-impact analytical precision.",
      icon: Activity
    },
    {
      title: "Strategic Partnerships",
      description: "Direct alignment with sovereign insurance bodies, actuarial institutes, and top-tier corporate risk consultancies worldwide.",
      icon: Users
    },
    {
      title: "Ethical Integrity",
      description: "Uncompromising transparency, fiduciary responsibility, and moral leadership ingrained deeply across every academic module.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC] min-h-screen selection:bg-[#2563EB] selection:text-white font-sans text-[#1E293B]">
      
      {/* 1. HERO SECTION (Exact Dark Sandstone Architectural Banner) */}
      <section className="relative w-full h-[520px] md:h-[600px] overflow-hidden flex items-center bg-[#0F172A]">
        {/* Background Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80"
            alt="CIS Jodhpur Architectural Majesty"
            fill
            priority
            className="object-cover object-center opacity-65 brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent opacity-95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-8 h-[2px] bg-[#2563EB] block" />
              <span className="text-xs font-bold tracking-[0.18em] text-[#3B82F6] uppercase font-mono">
                — ESTABLISHED 1998
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-[72px] font-normal text-white tracking-tight leading-[1.05] mb-6">
              Shaping Leaders Since 1998
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
              Set against the historic, architectural majesty of the Blue City, CIS Jodhpur integrates age-old wisdom with cutting-edge academic excellence to forge the path for tomorrow&apos;s visionaries.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24 space-y-24 sm:space-y-32">
        
        {/* 1.5 PROMINENT QUOTE BANNER (Exact from Mobile Spec) */}
        <ScrollReveal animation="scaleReveal">
          <div className="bg-gradient-to-r from-blue-50/80 via-white to-blue-50/80 border border-blue-100/80 rounded-3xl p-8 sm:p-14 text-center max-w-5xl mx-auto shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-100/40 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-indigo-100/40 rounded-full blur-2xl pointer-events-none" />
            
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#2563EB] uppercase font-mono block mb-4">
              — OUR LEGACY OF EXCELLENCE
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1E293B] font-normal leading-relaxed italic max-w-4xl mx-auto text-balance">
              &ldquo;To create global leaders by cultivating deep computational and clinical mastery in the science of risk.&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="w-12 h-0.5 bg-[#2563EB] rounded-full block" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-mono">CIS JODHPUR CHARTER</span>
              <span className="w-12 h-0.5 bg-[#2563EB] rounded-full block" />
            </div>
          </div>
        </ScrollReveal>

        {/* 2. OUR FOUNDING CHRONICLE (Two Columns: Text + Arched Corridor Photo) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal animation="fadeUp">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-[0.16em] text-[#2563EB] uppercase font-mono">
                  — OUR FOUNDING CHRONICLE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[46px] font-serif font-normal text-[#1E293B] tracking-tight leading-[1.12]">
                A Quarter Century of Architectural & Intellectual Excellence
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-2">
                Founded in 1998 amid the sand dunes and royal architecture of Jodhpur, Rajasthan, the College of Institutional Studies (CIS) has stood as a beacon of high-caliber education. Our campus is sculpted from the native golden sandstone, echoing the monumental forts that define our historic region.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Over the past 25 years, we have designed a rigorous, multi-disciplinary pedagogical system that blends state-of-the-art technological research with deeply rooted ethical leadership. Today, CIS is recognized globally for nurturing innovative thinking and social responsibility.
              </p>
              <div className="w-48 h-0.5 bg-[#2563EB] pt-0.5 mt-6" />
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6">
            <ScrollReveal animation="scaleReveal" delayMs={150}>
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
                <Image
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"
                  alt="CIS Jodhpur Arched Corridor"
                  fill
                  className="object-cover object-center grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 3. PURPOSE & FORESIGHT (Our Vision & Our Mission Cards) */}
        <section className="w-full">
          <ScrollReveal animation="fadeUp">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-[0.16em] text-[#2563EB] uppercase font-mono">
                  — FOUNDATIONAL PILLARS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-normal text-[#1E293B] tracking-tight">
                Purpose & Foresight
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal animation="staggerCard" delayMs={0}>
              <div className="bg-white rounded-2xl border border-gray-100/90 shadow-sm p-8 sm:p-10 flex flex-col justify-between h-full hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100/80 text-[#2563EB] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                      <Eye className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-[28px] font-normal text-[#1E293B]">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
                    To emerge as a premier global institution that blends classical Indian heritage with revolutionary technological innovations, producing compassionate leaders who champion progress, equity, and discovery.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="staggerCard" delayMs={150}>
              <div className="bg-white rounded-2xl border border-gray-100/90 shadow-sm p-8 sm:p-10 flex flex-col justify-between h-full hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100/80 text-[#2563EB] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                      <Target className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-[28px] font-normal text-[#1E293B]">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
                    To deliver unmatched educational experiences through robust, interdisciplinary curricula, immersive industry alignments, and research-focused infrastructure, cultivating a mindset of innovation and profound moral integrity.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 4. OUR CORE VALUES (6 Grid Cards) */}
        <section className="w-full">
          <ScrollReveal animation="fadeUp">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-[0.16em] text-[#2563EB] uppercase font-mono">
                  — GUIDING PRINCIPLES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-normal text-[#1E293B] tracking-tight">
                Our Core Values
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreValues.map((value, idx) => {
              const IconComp = value.icon;
              return (
                <ScrollReveal key={value.title} animation="staggerCard" delayMs={idx * 100}>
                  <div className="card-course-hover bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col justify-between h-full group">
                    <div>
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#1E293B] mb-3 leading-snug">
                        {value.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* 5. INSTITUTIONAL LEADERSHIP (Governing Senate Profiles) */}
        <section className="w-full">
          <ScrollReveal animation="fadeUp">
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-[0.16em] text-[#2563EB] uppercase font-mono">
                  — GOVERNING SENATE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-normal text-[#1E293B] tracking-tight">
                Institutional Leadership
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((leader, idx) => (
              <ScrollReveal key={leader.name} animation="staggerCard" delayMs={idx * 150}>
                <div className="card-faculty-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col sm:flex-row group h-full">
                  {/* Photo */}
                  <div className="faculty-portrait relative h-64 sm:h-auto sm:w-48 md:w-56 flex-shrink-0 bg-gray-100 overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="faculty-overlay absolute inset-0 bg-gradient-to-t from-[#16325B]/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Bio Content */}
                  <div className="p-6 sm:p-8 flex flex-col justify-center flex-grow">
                    <h3 className="text-2xl font-serif font-normal text-[#1E293B] mb-1">
                      {leader.name}
                    </h3>
                    <span className="text-[11px] font-bold tracking-wider text-[#2563EB] uppercase block mb-4">
                      {leader.role}
                    </span>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 6. OUR HISTORICAL JOURNEY (Vertical Chronology Timeline) */}
        <section className="w-full">
          <ScrollReveal animation="fadeUp">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-[0.16em] text-[#2563EB] uppercase font-mono">
                  — HISTORY OF HONOR
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-normal text-[#1E293B] tracking-tight">
                History of Honor
              </h2>
            </div>
          </ScrollReveal>

          <div className="w-full">
            <TimelineTrace milestones={timelineMilestones} />
          </div>
        </section>

        {/* 6.5 OUR PILLARS OF COMMITMENT (From Mobile Spec) */}
        <section className="w-full">
          <ScrollReveal animation="fadeUp">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-[0.16em] text-[#2563EB] uppercase font-mono">
                  — INSTITUTIONAL CORE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-normal text-[#1E293B] tracking-tight">
                Our Pillars of Commitment
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillarsOfCommitment.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} animation="staggerCard" delayMs={idx * 120}>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col justify-between h-full hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-300 group">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300 shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#1E293B] mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* 7. ACCREDITATIONS & STANDARDS (Quality & Recognitions Row) */}
        <section className="w-full">
          <ScrollReveal animation="fadeUp">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-[0.16em] text-[#2563EB] uppercase font-mono">
                  — QUALITY & RECOGNITIONS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-normal text-[#1E293B] tracking-tight">
                Accreditations & Standards
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map((acc, idx) => (
              <ScrollReveal key={acc.title} animation="staggerCard" delayMs={idx * 100}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center flex flex-col items-center justify-center h-full hover:border-blue-200 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full border border-blue-200 bg-blue-50 text-[#2563EB] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#1E293B] tracking-wide uppercase">
                    {acc.title}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 8. INSTITUTIONAL METRICS BANNER (4 Stat Counter Cards) */}
        <section className="w-full">
          <ScrollReveal animation="slideInLeft">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <AnimatedCounter endValue={2500} suffix="+" label="Students Enrolled" durationMs={2000} />
              <AnimatedCounter endValue={95} suffix="%" label="Placement Rate" durationMs={2000} />
              <AnimatedCounter endValue={50} suffix="+" label="Industry Partners" durationMs={2000} />
              <AnimatedCounter endValue={30} suffix="+" label="Years of Excellence" durationMs={2000} />
            </div>
          </ScrollReveal>
        </section>

      </div>

      {/* 9. BOTTOM CTA BANNER (Experience CIS Jodhpur) */}
      <section className="relative w-full overflow-hidden py-24 sm:py-32 mt-12 bg-[#E2E8F0]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80"
            alt="CIS Jodhpur Sandstone Campus"
            fill
            className="object-cover object-center opacity-45 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#E2E8F0] via-[#E2E8F0]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-[0.16em] text-[#2563EB] uppercase font-mono">
              — JOIN OUR ACADEMIC TRADITION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[54px] font-serif font-normal text-[#1E293B] tracking-tight">
            Experience CIS Jodhpur
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover how our high-standard education, pioneering research, and sandstone campus pave the way for true excellence. Schedule a private tour or apply today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/apply"
              className="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all"
            >
              APPLY NOW
            </Link>
            <Link
              href="/contact"
              className="border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white px-8 py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase bg-white/70 backdrop-blur-sm transition-all"
            >
              SCHEDULE TOUR
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
