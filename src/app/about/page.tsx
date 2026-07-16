"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Users, 
  MapPin, 
  ArrowRight, 
  Cpu, 
  Calendar,
  Quote,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { ScrollReveal, AnimatedCounter, TimelineTrace } from "@/components/motion/MotionSystem";

export default function AboutPage() {
  const timelineMilestones = [
    {
      year: "1998",
      title: "Foundation of Institutional Campus",
      description: "Established by Dr. Vikramaditya Choudhary on a 40-acre desert oasis in Jodhpur, focusing on foundational science, ethical discipline, and Rajasthani architectural heritage.",
      tag: "ORIGIN"
    },
    {
      year: "2006",
      title: "UGC & AICTE Technical Accreditation",
      description: "Launched the School of Computer Science & Engineering and School of Electronics, setting new benchmarks for higher technical education across Western Rajasthan.",
      tag: "EXPANSION"
    },
    {
      year: "2015",
      title: "CAIE Cambridge IGCSE & Global Center",
      description: "Accredited as official Cambridge International Center (#IN892), bridging local moral values with global STEM pathways and elite international university admissions.",
      tag: "GLOBAL"
    },
    {
      year: "2024",
      title: "AI Supercomputing & Silicon Labs",
      description: "Commissioned the state-of-the-art NVIDIA GPU computing cluster and cybersecurity defense sandbox, cementing CIS Jodhpur as India's premier high-tech education and insurance hub.",
      tag: "INNOVATION"
    },
  ];

  const leadership = [
    {
      name: "Dr. Vikramaditya Choudhary",
      role: "Director General & Founder",
      credentials: "Ex-CMD & Underwriting Governor",
      bio: "Distinguished leadership spanning decades of executive insurance management, underwriting governance, and institutional architecture across India's premier financial institutions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Prof. Eleanor Vance",
      role: "Senior Dean, Technical Advisory Committee",
      credentials: "Former TAC Chief Engineer, Fellow of Actuaries",
      bio: "Spearheads our Master of Science in Insurance and advanced quantitative risk modules, blending structural loss assessment with automated algorithmic simulations.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Col. R. S. Rathore (Retd.)",
      role: "Dean of Campus Governance & Placements",
      credentials: "M.Tech Cyber Defense, Strategic Risk Specialist",
      bio: "Oversees institutional partnerships with leading Global Insurance Brokers, Reinsurers, and Corporate TPAs to ensure 100% executive career placement transitions.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
  ];

  const pillars = [
    {
      title: "Campus Infrastructure & Insurance Rigor",
      description: "Located on the serene Campus of Shri Nakoda Parshwanath Jain Mahavidhyalaya (Basni), our pedagogy bridges soft management skills with real-time underwriting practice.",
      icon: Building2,
    },
    {
      title: "Silicon Quantitative Modeling",
      description: "We equip future leaders with advanced actuarial data science, GPU risk modeling, and algorithmic fraud detection capabilities.",
      icon: Cpu,
    },
    {
      title: "Specialized Engineering Tracks",
      description: "Our dedicated programs transform engineering and commerce graduates into elite risk inspection surveyors and strategic policy architects.",
      icon: BookOpen,
    },
    {
      title: "CMD & TAC Leadership",
      description: "Full-time instruction by former Chairmen, Managing Directors, and TAC engineers who have shaped India's modern financial landscape.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC] min-h-screen selection:bg-[#2563EB] selection:text-white font-sans">
      
      {/* 1. HERO HEADER (Exact Figma Sandstone Style) */}
      <section className="relative w-full h-[540px] md:h-[620px] overflow-hidden flex items-center bg-[#E5E7EB]">
        {/* Background Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80"
            alt="CIS Jodhpur Institutional Heritage Campus"
            fill
            priority
            className="object-cover object-center opacity-85 brightness-[0.92]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F3F4F6]/95 via-[#F3F4F6]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent opacity-90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="max-w-3xl">
            {/* Heritage Badge */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-8 h-[2px] bg-[#2563EB] block" />
              <span className="text-xs font-bold tracking-[0.16em] text-[#2563EB] uppercase">
                ESTABLISHED 1998 • INSTITUTIONAL OVERVIEW
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-[68px] font-normal text-[#1E293B] tracking-tight leading-[1.06] mb-6">
              Where Rigor Meets<br />
              Academic Heritage
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl">
              Situated on our serene 40-acre desert oasis in Jodhpur, the College of Insurance Studies bridges foundational scientific discipline with cutting-edge actuarial computing.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL METRICS BANNER (Animated Counters) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 shadow-xl rounded-2xl p-2 bg-white/50 backdrop-blur-md border border-white">
          <AnimatedCounter
            endValue={26}
            suffix="+"
            label="Years of Academic Heritage"
            percentage={100}
          />
          <AnimatedCounter
            endValue={40}
            suffix=" Acres"
            label="Institutional Oasis Campus"
            percentage={85}
          />
          <AnimatedCounter
            endValue={10000}
            prefix="+"
            label="Global Alumni Network"
            percentage={95}
          />
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 space-y-28">
        
        {/* 3. PHILOSOPHY & FOUNDER DECREE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal animation="fadeUp">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#2563EB] block" />
                <span className="text-xs font-bold tracking-[0.15em] text-[#2563EB] uppercase">
                  OUR PHILOSOPHY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[46px] font-serif font-normal text-[#1E293B] tracking-tight leading-[1.12]">
                Crafting Architects of the Future
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed pt-2">
                Situated on the prestigious campus of <strong>Shri Nakoda Parshwanath Jain Mahavidhyalaya (Sector B, Saraswati Nagar, Basni, Jodhpur 342005)</strong>, our philosophy is anchored in structural integrity. Unlike traditional degree programs, CIS Jodhpur unites essential leadership ethics with quantitative computing, risk surveying, and real-time executive decision making.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all shadow-sm"
                >
                  <span>Explore Academic Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-gray-300 hover:border-[#2563EB] text-[#1E293B] hover:text-[#2563EB] px-6 py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase bg-white transition-all shadow-xs"
                >
                  <span>Schedule Campus Visit</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal animation="scaleReveal" delayMs={150}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md relative overflow-hidden group hover:border-[#2563EB]/40 transition-all">
                <Quote className="w-16 h-16 text-[#2563EB]/10 absolute top-6 right-6 pointer-events-none group-hover:scale-110 transition-transform" />
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-[#2563EB] font-mono text-[11px] font-bold uppercase rounded-full">
                    FOUNDER&apos;S DECREE • 1998
                  </span>
                </div>
                <p className="font-serif text-xl sm:text-2xl text-[#1E293B] italic font-normal mb-8 leading-relaxed">
                  &ldquo;We do not merely teach formulas; we craft architects of the future who stand firm in moral integrity, ethical inquiry, and technical precision.&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
                  <div>
                    <span className="font-serif font-bold text-base text-[#1E293B] block">
                      Dr. Vikramaditya Choudhary
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      Director General & Founder
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center font-serif font-bold">
                    VC
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 4. THE FOUR INSTITUTIONAL PILLARS */}
        <section className="w-full">
          <ScrollReveal animation="fadeUp">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#2563EB] block" />
                <span className="text-xs font-bold tracking-[0.15em] text-[#2563EB] uppercase">
                  CORE VALUES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-normal text-[#1E293B] tracking-tight mb-3">
                The Four Pillars of CIS Jodhpur
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Our academic curriculum and vibrant campus culture are anchored by four uncompromising principles of excellence.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} animation="staggerCard" delayMs={idx * 100}>
                  <div className="card-course-hover bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col justify-between h-full hover:border-blue-200 transition-all duration-300 group">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-[#1E293B] mb-3 leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-gray-50 flex items-center text-[11px] font-bold text-[#2563EB] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                      <span>EXPLORE PILLAR</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* 5. HISTORICAL EVOLUTION TIMELINE (TimelineTrace Component) */}
        <section className="w-full">
          <ScrollReveal animation="fadeUp">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#C58940] block" />
                <span className="text-xs font-bold tracking-[0.15em] text-[#C58940] uppercase">
                  CHRONICLE OF EXCELLENCE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-normal text-[#1E293B] tracking-tight mb-3">
                26+ Years of Academic Evolution
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Experience our interactive vertical trace progression from our 1998 origins to our modern AI supercomputing sandbox.
              </p>
            </div>
          </ScrollReveal>

          <TimelineTrace milestones={timelineMilestones} />
        </section>

        {/* 6. ACADEMIC GOVERNANCE & LEADERSHIP MATRIX */}
        <section className="w-full">
          <ScrollReveal animation="fadeUp">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#2563EB] block" />
                <span className="text-xs font-bold tracking-[0.15em] text-[#2563EB] uppercase">
                  ACADEMIC GOVERNANCE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-normal text-[#1E293B] tracking-tight mb-3">
                Meet Our Leadership & Deans
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Guiding our institution with rigorous executive experience, global perspective, and moral fortitude.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {leadership.map((leader, idx) => (
              <ScrollReveal key={leader.name} animation="staggerCard" delayMs={idx * 120}>
                <div className="card-course-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover:border-blue-200 transition-all duration-300 group h-full">
                  <div>
                    {/* Photo */}
                    <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6">
                      <span className="text-[11px] font-bold tracking-wider text-[#2563EB] uppercase block mb-1">
                        {leader.role}
                      </span>
                      <h3 className="text-xl font-serif font-normal text-[#1E293B] mb-2">
                        {leader.name}
                      </h3>
                      <span className="text-xs font-mono text-gray-400 block mb-4">
                        {leader.credentials}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </div>

      {/* 7. FIGMA CTA BANNER */}
      <section className="relative w-full overflow-hidden py-24 sm:py-28 mt-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
            alt="CIS Jodhpur Campus Courtyard"
            fill
            className="object-cover object-center opacity-70 brightness-[0.9]"
          />
          <div className="absolute inset-0 bg-[#F3F4F6]/90 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1E293B] tracking-tight">
            Experience Our Campus Oasis in Person
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Walk through our AI supercomputing clusters, sandstone quadrangles, residential halls, and Cambridge research centers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="bg-[#2563EB] text-white hover:bg-blue-700 px-6 py-3.5 rounded font-semibold text-xs tracking-wider uppercase shadow-sm transition-all flex items-center gap-2"
            >
              <span>SCHEDULE CAMPUS VISIT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/admissions"
              className="border border-gray-300 text-[#1E293B] hover:bg-white/80 px-6 py-3.5 rounded font-semibold text-xs tracking-wider uppercase bg-white/50 backdrop-blur-sm transition-all"
            >
              <span>TALK TO ADMISSIONS</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
