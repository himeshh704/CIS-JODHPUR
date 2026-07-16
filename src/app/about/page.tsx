"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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
  Quote
} from "lucide-react";

export default function AboutPage() {
  const { mode } = useTheme();

  const timeline = [
    {
      year: "1998",
      title: "Foundation of Institutional Campus",
      description: "Established by Dr. Vikramaditya Choudhary on a 40-acre desert oasis in Jodhpur, focusing on foundational science, ethical discipline, and Rajasthani architectural heritage.",
    },
    {
      year: "2006",
      title: "UGC & AICTE B.Tech Accreditation",
      description: "Launched the School of Computer Science & Engineering and School of Electronics, setting new benchmarks for higher technical education in Western Rajasthan.",
    },
    {
      year: "2015",
      title: "CAIE Cambridge IGCSE & A-Level Center",
      description: "Accredited as official Cambridge International Center (#IN892), bridging local values with global STEM pathways and elite university admissions.",
    },
    {
      year: "2024",
      title: "AI Supercomputing & Silicon Labs",
      description: "Commissioned the state-of-the-art NVIDIA GPU computing cluster and cybersecurity defense sandbox, cementing CIS Jodhpur as India's premier high-tech education hub.",
    },
  ];

  const leadership = [
    {
      name: "Dr. Vikramaditya Choudhary & Core CMD Council",
      role: "Director General & Former Insurance CMDs",
      credentials: "Ex-Chairmen & Managing Directors (`United India Insurance, New India Assurance`)",
      bio: "Distinguished leadership council bringing decades of executive insurance management, underwriting governance, and risk modeling from India's premier insurance companies.",
    },
    {
      name: "Prof. Eleanor Vance (`Senior TAC Chair`)",
      role: "Dean of Risk Assessment & Engineering Underwriting",
      credentials: "Former Technical Advisory Committee (`TAC`) Chief Engineer, Fellow of Actuaries",
      bio: "Spearheads our Master of Science (`MS`) in Insurance for engineering graduates, blending structural loss assessment with automated quantitative risk simulations.",
    },
    {
      name: "Col. R. S. Rathore (Retd.)",
      role: "Dean of Campus Governance & Corporate Placement",
      credentials: "M.Tech Cyber Defense, Risk Management Specialist",
      bio: "Oversees institutional partnerships with leading Insurance Brokers, Reinsurers, and Third-Party Administrators (`TPAs`) for 100% executive career transition.",
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
      description: "We equip insurance professionals with advanced actuarial data science, GPU risk modeling, and algorithmic fraud detection capabilities.",
      icon: Cpu,
    },
    {
      title: "Specialized Engineering Tracks",
      description: "Our dedicated 1-Year M.Sc. in Insurance transforms engineering graduates into elite fire, marine, and industrial risk inspection surveyors.",
      icon: BookOpen,
    },
    {
      title: "CMD & TAC Leadership",
      description: "Full-time instruction by former Chairmen, Managing Directors, and TAC engineers who have shaped India's modern insurance landscape.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* 1. HERO & PHILOSOPHY OVERVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6">
        <div className="lg:col-span-7 space-y-6">
          <Badge variant="amber">College of Insurance Studies Jodhpur (`CISJ`)</Badge>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
            {mode === "v2" ? (
              <>Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-amber-300">Quantitative Risk & Insurance</span> Meets Academic Heritage.</>
            ) : (
              <>Our Philosophy: <span className="text-[#D97706]">Professional Insurance Rigor</span> Meets High-Tech Computing.</>
            )}
          </h1>
          <p className="text-lg opacity-80 leading-relaxed font-normal">
            Situated on the prestigious campus of <strong>Shri Nakoda Parshwanath Jain Mahavidhyalaya (Sector B, Saraswati Nagar, Basni, Jodhpur 342005)</strong>, the <strong>College of Insurance Studies Jodhpur (`CISJ`)</strong> is dedicated to crafting elite insurance professionals. Unlike traditional management courses, our programs amalgamate essential soft skills of management with real-time underwriting, risk surveying, and actuarial computing.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="/programs" variant="primary">
              Explore 1-Year MIB & MS in Insurance <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/contact" variant="outline">
              Schedule Campus Visit
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Card variant={mode === "v2" ? "midnight-glass" : "sandstone"} className="p-8 relative">
            <Quote className="w-12 h-12 text-[#D97706]/30 absolute top-6 right-6 pointer-events-none" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D97706] block mb-3">
              Founder&apos;s Decree (`1998`)
            </span>
            <p className="font-serif text-xl sm:text-2xl italic font-bold mb-6 leading-relaxed">
              &ldquo;We do not merely teach formulas; we craft architects of the future who stand firm in ethical integrity and technical precision.&rdquo;
            </p>
            <div className="border-t border-gray-400/20 pt-4 flex items-center justify-between">
              <div>
                <span className="font-bold block text-sm">Dr. Vikramaditya Choudhary</span>
                <span className="text-xs opacity-70">Founder & Director General</span>
              </div>
              <Badge variant="royal">Est. 1998</Badge>
            </div>
          </Card>
        </div>
      </div>

      {/* 2. CORE INSTITUTIONAL PILLARS */}
      <div>
        <SectionHeader
          overtitle="Core Values"
          title="The Four Pillars of CIS Jodhpur"
          subtitle="Our curriculum and campus culture are anchored by four uncompromising principles."
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Card key={idx} variant="bordered-interactive" className="p-7 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#D97706]/10 text-[#D97706] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-xs opacity-80 leading-relaxed">{p.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* 3. HISTORICAL TIMELINE */}
      <div>
        <SectionHeader
          overtitle="Chronicle of Excellence"
          title="25+ Years of Academic Evolution"
          subtitle="From our humble roots in 1998 to a world-class center for artificial intelligence and global inquiry."
        />
        <div className="relative border-l-2 border-[#D97706]/40 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-sm bg-[#D97706] border-4 border-white dark:border-[#0A0A0A] shadow-md group-hover:scale-125 transition-transform" />
              <div className="md:absolute md:-left-36 md:top-0 font-mono font-bold text-lg text-[#D97706] mb-1 md:mb-0">
                {item.year}
              </div>
              <Card variant={mode === "v2" ? "midnight-glass" : "bordered-interactive"} className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{item.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* 4. LEADERSHIP & GOVERNANCE MATRIX */}
      <div>
        <SectionHeader
          overtitle="Academic Governance"
          title="Meet Our Leadership & Deans"
          subtitle="Guiding our institution with academic rigor, global perspective, and unwavering discipline."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((l, idx) => (
            <Card key={idx} variant="bordered-interactive" className="p-7 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#1E3A8A] text-white font-serif text-2xl font-bold flex items-center justify-center mb-5 shadow-md">
                  {l.name.split(" ")[1]?.[0] || "C"}
                </div>
                <Badge variant="amber" className="mb-2">{l.role}</Badge>
                <h3 className="font-serif text-xl font-bold mb-1">{l.name}</h3>
                <span className="text-xs font-mono opacity-70 block mb-4">{l.credentials}</span>
                <p className="text-xs opacity-80 leading-relaxed border-t border-gray-400/20 pt-4">
                  {l.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* 5. CALL TO ACTION BAR */}
      <Card variant="sandstone" className="p-10 text-center flex flex-col items-center justify-center space-y-4">
        <Badge variant="royal">Visit Campus</Badge>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold max-w-xl">
          Experience our 40-Acre Campus in Person
        </h2>
        <p className="text-sm opacity-80 max-w-lg">
          Walk through our AI computing clusters, academic quadrangles, residential halls, and Cambridge labs.
        </p>
        <div className="pt-2">
          <Button href="/contact" variant="primary">
            Schedule a Guided Campus Visit <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
