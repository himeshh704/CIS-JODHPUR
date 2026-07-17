"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { 
  Globe, 
  UserCheck, 
  Award, 
  Phone, 
  Mail
} from "lucide-react";
import { ScrollReveal, AnimatedProgressBar } from "@/components/motion/MotionSystem";

export default function PlacementsPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="flex flex-col w-full bg-white text-[#111827] overflow-x-hidden">
      
      {/* 1. HERO & METRICS SECTION matching input_file_0.png */}
      <section className="pt-16 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-12 pb-16 sm:pb-20 border-b border-gray-100">
          <div className="space-y-4 max-w-2xl">
            <div className={`flex items-center gap-2 text-[#2563EB] font-mono text-xs font-bold tracking-wider uppercase transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="inline-block w-8 h-px bg-[#2563EB]" />
              EXCELLENCE IN NUMBERS
            </div>
            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1E293B] leading-[1.12] tracking-tight transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Career Outcomes That <br className="hidden sm:inline" />
              Define Excellence
            </h1>
          </div>
          <div className={`max-w-md transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="text-gray-400 sm:text-gray-500 text-sm sm:text-base leading-relaxed font-sans">
              CIS Jodhpur serves as the bridge between elite talent and global opportunities, consistently setting new benchmarks in information studies.
            </p>
          </div>
        </div>

        {/* 4 Big Numbers Grid exact matching input_file_0.png */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 sm:pt-16 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2563EB] leading-none">
              95%
            </div>
            <div className="text-[11px] sm:text-xs font-sans tracking-widest uppercase text-gray-400 mt-3 font-semibold">
              PLACEMENT RATE
            </div>
          </div>

          <div>
            <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2563EB] leading-none">
              ₹12L
            </div>
            <div className="text-[11px] sm:text-xs font-sans tracking-widest uppercase text-gray-400 mt-3 font-semibold">
              HIGHEST CTC
            </div>
          </div>

          <div>
            <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2563EB] leading-none">
              ₹5.2L
            </div>
            <div className="text-[11px] sm:text-xs font-sans tracking-widest uppercase text-gray-400 mt-3 font-semibold">
              AVG CTC
            </div>
          </div>

          <div>
            <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2563EB] leading-none">
              500+
            </div>
            <div className="text-[11px] sm:text-xs font-sans tracking-widest uppercase text-gray-400 mt-3 font-semibold">
              RECRUITERS
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3 PILLARS SECTION matching input_file_2.png */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
        <ScrollReveal animation="fadeUp">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-14">
          
          <div className="group">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1E293B] font-normal mb-3">
              Global Network
            </h3>
            <p className="text-gray-400 sm:text-gray-500 text-sm sm:text-base leading-relaxed">
              Access to multi-national corporations across three continents.
            </p>
          </div>

          <div className="group">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1E293B] font-normal mb-3">
              Industry Mentorship
            </h3>
            <p className="text-gray-400 sm:text-gray-500 text-sm sm:text-base leading-relaxed">
              Direct coaching from Fortune 500 information officers.
            </p>
          </div>

          <div className="group">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1E293B] font-normal mb-3">
              Alumni Legacy
            </h3>
            <p className="text-gray-400 sm:text-gray-500 text-sm sm:text-base leading-relaxed">
              A network of 5,000+ leaders in Silicon Valley and beyond.
            </p>
          </div>

        </div>
        </ScrollReveal>
      </section>

      {/* 3. ROADMAP TO SUCCESS (4 STEPS) matching input_file_3.png */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
        <ScrollReveal animation="fadeUp">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E293B] mb-14 sm:mb-20">
          The Roadmap to Success
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          
          <div>
            <div className="font-serif text-4xl sm:text-5xl font-normal text-[#1E293B] leading-none">
              01
            </div>
            <div className="w-full h-0.5 bg-[#2563EB] my-5 sm:my-6" />
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1E293B] mb-2">
              Preparation
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Rigorous skill-mapping and soft-skill workshops.
            </p>
          </div>

          <div>
            <div className="font-serif text-4xl sm:text-5xl font-normal text-[#1E293B] leading-none">
              02
            </div>
            <div className="w-full h-0.5 bg-[#2563EB] my-5 sm:my-6" />
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1E293B] mb-2">
              Mentorship
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              One-on-one sessions with industry veterans.
            </p>
          </div>

          <div>
            <div className="font-serif text-4xl sm:text-5xl font-normal text-[#1E293B] leading-none">
              03
            </div>
            <div className="w-full h-0.5 bg-[#2563EB] my-5 sm:my-6" />
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1E293B] mb-2">
              Interaction
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Pre-placement talks and recruiter engagement.
            </p>
          </div>

          <div>
            <div className="font-serif text-4xl sm:text-5xl font-normal text-[#1E293B] leading-none">
              04
            </div>
            <div className="w-full h-0.5 bg-[#2563EB] my-5 sm:my-6" />
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1E293B] mb-2">
              Conversion
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Final interviews and multi-offer management.
            </p>
          </div>

        </div>
        </ScrollReveal>
      </section>

      {/* 4. GLOBAL RECRUITMENT PARTNERS matching input_file_4.png */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100 overflow-hidden">
        <ScrollReveal animation="fadeUp">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 sm:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1E293B]">
            Global Recruitment Partners
          </h2>
          <Link href="/contact" className="text-xs sm:text-sm text-gray-400 hover:text-[#2563EB] underline transition-colors font-medium">
            View all partners
          </Link>
        </div>

        {/* Marquee & Grid of Partner Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8">
          {[
            { name: "Microsoft", role: "Core Cloud & AI" },
            { name: "Google", role: "Systems & ML" },
            { name: "Amazon", role: "AWS Infrastructure" },
            { name: "NVIDIA", role: "GPU Supercomputing" },
            { name: "Goldman Sachs", role: "FinTech & Quant" },
            { name: "Adobe", role: "Creative Intelligence" }
          ].map((partner, idx) => (
            <div 
              key={idx}
              className="h-24 rounded-2xl border border-gray-100/80 bg-gray-50/40 hover:bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center justify-center text-center group"
            >
              <span className="font-serif font-bold text-lg sm:text-xl text-[#1E293B] group-hover:text-[#2563EB] transition-colors tracking-tight">
                {partner.name}
              </span>
              <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase mt-1">
                {partner.role}
              </span>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </section>

      {/* 5. DIVERSE INDUSTRIAL IMPACT matching input_file_1.png */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal animation="slideInLeft">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E293B] leading-tight">
              Diverse Industrial <br />
              Impact
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm pt-2">
              Our graduates permeate the top layers of global enterprise, bringing CIS excellence to every major sector.
            </p>
            </ScrollReveal>
          </div>

          {/* Horizontal Progress Bars animated on scroll */}
          <div className="lg:col-span-7 space-y-7 sm:space-y-8 w-full pt-2">
            {[
              { label: "IT & Software", pct: "35%", width: "55%" },
              { label: "Banking & Finance", pct: "25%", width: "40%" },
              { label: "Consulting", pct: "15%", width: "24%" },
              { label: "Digital Marketing", pct: "10%", width: "16%" },
              { label: "Education", pct: "10%", width: "16%" },
              { label: "Others", pct: "5%", width: "8%" },
            ].map((bar, idx) => (
              <AnimatedProgressBar
                key={idx}
                label={bar.label}
                percentage={bar.pct}
                width={bar.width}
                delayMs={idx * 150}
                durationMs={1200}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 6. VOICES OF ACHIEVEMENT matching input_file_5.png */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
        <ScrollReveal animation="fadeUp">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E293B] mb-12 sm:mb-16">
          Voices of Achievement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {[
            {
              name: "Rahul Sharma",
              role: "Placed at Microsoft, Software Engineer",
              quote: "The placement cell at CIS didn't just find me a job; they helped me identify a career trajectory that matched my potential.",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
            },
            {
              name: "Rahul Sharma",
              role: "Placed at Microsoft, Software Engineer",
              quote: "The placement cell at CIS didn't just find me a job; they helped me identify a career trajectory that matched my potential.",
              img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
            },
            {
              name: "Rahul Sharma",
              role: "Placed at Microsoft, Software Engineer",
              quote: "The placement cell at CIS didn't just find me a job; they helped me identify a career trajectory that matched my potential.",
              img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
            }
          ].map((testi, idx) => (
            <div 
              key={idx}
              className="border border-gray-100/80 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl p-8 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-full overflow-hidden mb-6 border border-gray-100 bg-gray-100">
                  <img src={testi.img} alt={testi.name} className="w-full h-full object-cover grayscale contrast-125" />
                </div>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 font-sans">
                  &quot;{testi.quote}&quot;
                </p>
              </div>
              <div>
                <div className="text-[#2563EB] font-sans font-bold text-sm sm:text-base">
                  {testi.name}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm mt-0.5">
                  {testi.role}
                </div>
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </section>

      {/* 7. YOUR FUTURE, ENGINEERED FOR SUCCESS matching input_file_6.png */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100 text-center">
        <ScrollReveal animation="scaleReveal">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E293B] leading-tight">
            Your Future, Engineered for Success
          </h2>
          <p className="text-gray-400 sm:text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Download our comprehensive placement report for 2023-24 to dive deeper into our students&apos; success stories.
          </p>
          <div className="pt-4">
            <Link
              href="/resources"
              className="inline-flex items-center justify-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-sans font-bold text-xs sm:text-sm px-8 py-3.5 sm:py-4 rounded sm:rounded-md tracking-wider uppercase transition-all duration-300 shadow-sm"
            >
              VIEW PLACEMENT REPORT
            </Link>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* 8. STRATEGIC CAREER ADVISORY BANNER matching input_file_7.png */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <ScrollReveal animation="fadeUp">
        <div className="bg-[#2563EB] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center shadow-lg">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Strategic Career Advisory
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
              The CIS Placement Cell operates as a full-scale corporate advisory, managing enterprise relations and student readiness at an elite level.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4 justify-center text-sm sm:text-base font-sans font-bold text-white">
            <a href="tel:+912912654000" className="flex items-center gap-3 hover:text-blue-200 transition-colors">
              <Phone className="w-5 h-5 text-white shrink-0" />
              <span>+91 291 265 4000</span>
            </a>
            <a href="mailto:placements@cisjodhpur.ac.in" className="flex items-center gap-3 hover:text-blue-200 transition-colors">
              <Mail className="w-5 h-5 text-white shrink-0" />
              <span>placements@cisjodhpur.ac.in</span>
            </a>
          </div>
        </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
