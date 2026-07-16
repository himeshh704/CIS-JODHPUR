"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  BookOpen, 
  Briefcase, 
  Globe, 
  Cpu, 
  ChevronRight, 
  ArrowRight,
  Download,
  MessageSquare
} from "lucide-react";
import { ScrollReveal, AnimatedCounter, TimelineTrace } from "@/components/motion/MotionSystem";

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState<string>("All Programs");

  const tabs = [
    "All Programs",
    "Undergraduate",
    "Postgraduate",
    "Professional",
    "Diploma"
  ];

  const featuredPrograms = [
    {
      id: "mba",
      category: "Postgraduate",
      duration: "2 YEARS • POSTGRADUATE",
      title: "Master of Business Administration (MBA)",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      bullets: [
        "Global immersive leadership modules in collaboration with elite business networks",
        "Deep exploration into digital transformation and predictive market strategies",
        "Intensive case study methodology paired with regional sandstone conglomerate projects"
      ],
      href: "/programs"
    },
    {
      id: "bba",
      category: "Undergraduate",
      duration: "3 YEARS • UNDERGRADUATE",
      title: "Bachelor of Business Administration (BBA)",
      image: "https://images.unsplash.com/photo-1542744094-3a3e2205a990?auto=format&fit=crop&w=800&q=80",
      bullets: [
        "Foundational entrepreneurship incubation program mentored by industry leads",
        "Strong focus on analytical decision-making and mathematical economic models",
        "Mandatory 6-month corporate residency and strategic analysis presentation"
      ],
      href: "/programs"
    },
    {
      id: "bca",
      category: "Undergraduate",
      duration: "3 YEARS • UNDERGRADUATE",
      title: "Bachelor of Computer Applications (BCA)",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      bullets: [
        "Advanced specialization in cloud computing, applied AI, and cyber-security systems",
        "Direct research pipeline with top defense labs and national tech institutes",
        "Weekly technical hackathons evaluated by senior global network architects"
      ],
      href: "/programs"
    }
  ];

  const allPrograms = [
    {
      id: "mba-portfolio",
      category: "Postgraduate",
      subTag: "POSTGRADUATE • 2 YEARS",
      title: "Master of Business Administration",
      description: "A rigorous journey built for future corporate strategists and policy orchestrators.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      href: "/programs"
    },
    {
      id: "bba-portfolio",
      category: "Undergraduate",
      subTag: "UNDERGRADUATE • 3 YEARS",
      title: "Bachelor of Business Administration",
      description: "Deep analytical and structural knowledge preparing tomorrow's entrepreneurial ecosystem.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      href: "/programs"
    },
    {
      id: "bcom-portfolio",
      category: "Undergraduate",
      subTag: "UNDERGRADUATE • 3 YEARS",
      title: "Bachelor of Commerce (Honours)",
      description: "Advanced forensic accounting, financial architectures, and economic trend analysis.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      href: "/programs"
    },
    {
      id: "bca-portfolio",
      category: "Undergraduate",
      subTag: "UNDERGRADUATE • 3 YEARS",
      title: "Bachelor of Computer Applications",
      description: "An immersion into advanced software design, machine models, and algorithmic science.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      href: "/programs"
    },
    {
      id: "ma-portfolio",
      category: "Postgraduate",
      subTag: "POSTGRADUATE • 2 YEARS",
      title: "MA International Relations",
      description: "Global policy, regional resource dynamics, and geopolitical governance studies.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      href: "/programs"
    },
    {
      id: "bed-portfolio",
      category: "Professional",
      subTag: "UNDERGRADUATE • 2 YEARS",
      title: "Bachelor of Education (B.Ed)",
      description: "Pedagogical science designed to form elite educators for progressive institutions.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      href: "/programs"
    }
  ];

  const compareOfferings = [
    {
      program: "MBA",
      duration: "2 Years",
      eligibility: "Graduation (50% min) + CAT/MAT",
      careerPaths: "Brand Manager, Strategy Lead, Consultant",
      feeRange: "INR 4.5 - 6.0L/Annum"
    },
    {
      program: "BBA",
      duration: "3 Years",
      eligibility: "10+2 (All Streams, 50% min)",
      careerPaths: "Business Analyst, Financial Officer",
      feeRange: "INR 2.5 - 3.2L/Annum"
    },
    {
      program: "B.Com (Hons)",
      duration: "3 Years",
      eligibility: "10+2 (Commerce/Maths, 50% min)",
      careerPaths: "Auditor, Investment Associate",
      feeRange: "INR 1.8 - 2.4L/Annum"
    },
    {
      program: "BCA",
      duration: "3 Years",
      eligibility: "10+2 (With Computer/Maths, 50% min)",
      careerPaths: "Full-Stack Developer, AI Integrator",
      feeRange: "INR 2.2 - 2.8L/Annum"
    },
    {
      program: "MA Int. Relations",
      duration: "2 Years",
      eligibility: "Graduation (Any Stream, 50% min)",
      careerPaths: "Policy Researcher, Diplomat, NGO Advisor",
      feeRange: "INR 1.5 - 2.0L/Annum"
    },
    {
      program: "B.Ed",
      duration: "2 Years",
      eligibility: "Graduation (50% min)",
      careerPaths: "Educationalist, School Principal, Pedagogue",
      feeRange: "INR 1.2 - 1.6L/Annum"
    }
  ];

  const pedagogicalPillars = [
    {
      icon: BookOpen,
      title: "Case-Based Learning",
      description: "Rigorous diagnostic examination of actual corporate and geo-political paradigms."
    },
    {
      icon: Briefcase,
      title: "Industry Projects",
      description: "Real-world strategic solutions engineered directly with allied manufacturing partners."
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description: "Bilateral study modules and direct connectivity with international technology centres."
    },
    {
      icon: Cpu,
      title: "Research-Driven",
      description: "Mandatory original literature publication under the direct supervision of global PhD guides."
    }
  ];

  const alumniImpact = [
    {
      quote: "The rigor of the case-based pedagogical system at CIS allowed me to transition directly into global financial orchestration without a hitch.",
      name: "Devendra Singh Rathore",
      detail: "MBA, Class of 2022",
      role: "Strategic Analyst, J.P. Morgan",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      quote: "The elite computational infrastructure and directly-mentored research pipelines positioned me to file two patents prior to graduation.",
      name: "Ananya Mehta",
      detail: "BCA, Class of 2021",
      role: "AI Scientist, Google",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      quote: "The entrepreneurship incubator provided critical regulatory assistance and linked our seed round directly with venture funds.",
      name: "Kabir Bhatia",
      detail: "BBA, Class of 2023",
      role: "Co-Founder, Desert Tech Ventures",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const academicMilestones = [
    {
      year: "1962",
      title: "Founded as Insurance Training Institute",
      description: "Established to build a foundational baseline for professional risk assessment and carrier operations.",
      tag: "TRIGGERED"
    },
    {
      year: "1985",
      title: "Expanded to Financial Planning Programs",
      description: "Broader curriculum designed to cover diversified assets, wealth preservation, and risk management advisory.",
      tag: "TRIGGERED"
    },
    {
      year: "2003",
      title: "University Affiliation & Degree Programs",
      description: "Academic transition offering full undergraduate and graduate degrees accredited on national frameworks.",
      tag: "TRIGGERED"
    },
    {
      year: "2015",
      title: "International Partnerships Established",
      description: "Facilitating global exchange and aligning risk methodologies with European and American insurance standards.",
      tag: "ENTERING"
    },
    {
      year: "2024",
      title: "AI & InsurTech Innovation Center Launch",
      description: "Incubating advanced predictive modeling, decentralized ledgers, and automated claim settlement workflows.",
      tag: "WAITING"
    }
  ];

  const filteredFeatured = activeTab === "All Programs" 
    ? featuredPrograms 
    : featuredPrograms.filter(p => p.category === activeTab);

  const filteredPortfolio = activeTab === "All Programs" 
    ? allPrograms 
    : allPrograms.filter(p => p.category === activeTab);

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC] min-h-screen selection:bg-[#2563EB] selection:text-white">
      
      {/* 1. HERO HEADER (Exact match to input_file_4.png slice 5 with custom pristine AI hero photo) */}
      <section className="relative w-full h-[540px] md:h-[620px] overflow-hidden flex items-center bg-[#E5E7EB]">
        {/* Background Custom Sandstone Library & Academic Hall Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/nakoda/academics_hero_bg.png"
            alt="CIS Jodhpur Academic Hall & Library"
            fill
            className="object-cover object-center opacity-85 brightness-[0.92]"
            priority
          />
          {/* Subtle warm fog/gradient overlay matching Figma exactly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F3F4F6]/95 via-[#F3F4F6]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent opacity-90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="max-w-3xl">
            {/* Admissions Open Badge */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-8 h-[2px] bg-[#2563EB] block" />
              <span className="text-xs font-bold tracking-[0.16em] text-[#2563EB] uppercase">
                ADMISSIONS OPEN 2024–25
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-[68px] font-normal text-[#1E293B] tracking-tight leading-[1.06] mb-6">
              Academic Excellence,<br />
              Global Standards
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-500 font-normal leading-relaxed max-w-2xl">
              CIS Jodhpur offers meticulously designed programs combining rigorous scientific methodology, local cultural perspective, and world-class faculty engagement.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY / FILTER TABS BAR */}
      <section className="w-full border-b border-gray-200/80 bg-white sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-8 overflow-x-auto no-scrollbar py-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3.5 px-3 whitespace-nowrap text-sm font-semibold transition-all relative shrink-0 ${
                    isActive
                      ? "text-[#2563EB]"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {tab}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#2563EB] rounded-t" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 space-y-24">
        
        {/* 3. FEATURED PROGRAMS OF PRESTIGE */}
        <section className="w-full">
          <ScrollReveal animation="fadeUp">
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#2563EB] block" />
                <span className="text-xs font-bold tracking-[0.15em] text-[#2563EB] uppercase">
                  ELITE PATHWAYS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-normal text-[#1E293B] tracking-tight mb-3">
                Featured Programs of Prestige
              </h2>
              <p className="text-sm sm:text-base text-gray-400 max-w-3xl leading-relaxed">
                Our flagship offerings, defined by architectural pedagogical standards and strong placement linkages.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {filteredFeatured.map((prog) => (
              <div
                key={prog.id}
                className="card-course-hover bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover:border-blue-200 transition-all duration-300 group"
              >
                <div>
                  {/* Top Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Sub-Tag */}
                  <div className="px-6 pt-6 pb-1">
                    <span className="text-[11px] font-bold tracking-wider text-[#2563EB] uppercase">
                      {prog.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="px-6 text-xl sm:text-2xl font-serif font-normal text-[#1E293B] leading-snug mb-4">
                    {prog.title}
                  </h3>

                  {/* Bullet Points */}
                  <ul className="px-6 space-y-3 mb-8">
                    {prog.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-[#2563EB] shrink-0 mt-2 block" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Link */}
                <div className="px-6 pb-6 pt-2 border-t border-gray-50 mt-auto">
                  <Link
                    href={prog.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2563EB] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore Program</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. COMPARE ACADEMIC OFFERINGS */}
        <section className="w-full">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#2563EB] block" />
              <span className="text-xs font-bold tracking-[0.15em] text-[#2563EB] uppercase">
                DECISION METRICS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-normal text-[#1E293B] tracking-tight mb-2">
              Compare Academic Offerings
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-3xl leading-relaxed">
              Contrast key parameters to identify the academic path most aligned to your ultimate professional roadmap.
            </p>
          </div>

          <div className="w-full overflow-x-auto rounded-xl border border-gray-200/80 shadow-xs bg-white">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#2563EB] text-white text-xs sm:text-sm font-semibold">
                  <th className="py-4 px-6 w-[18%]">Program</th>
                  <th className="py-4 px-6 w-[14%]">Duration</th>
                  <th className="py-4 px-6 w-[26%]">Eligibility</th>
                  <th className="py-4 px-6 w-[26%]">Career Paths</th>
                  <th className="py-4 px-6 w-[16%] text-right">Fee Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {compareOfferings.map((row, idx) => (
                  <tr key={row.program} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4.5 px-6 font-serif font-bold text-[#1E293B] text-base">
                      {row.program}
                    </td>
                    <td className="py-4.5 px-6 text-gray-400 font-medium">
                      {row.duration}
                    </td>
                    <td className="py-4.5 px-6 text-gray-400">
                      {row.eligibility}
                    </td>
                    <td className="py-4.5 px-6 text-gray-400">
                      {row.careerPaths}
                    </td>
                    <td className="py-4.5 px-6 text-right font-semibold text-[#2563EB]">
                      {row.feeRange}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. EXPLORE ALL ACADEMIC PATHS */}
        <section className="w-full">
          <ScrollReveal animation="fadeUp">
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#2563EB] block" />
                <span className="text-xs font-bold tracking-[0.15em] text-[#2563EB] uppercase">
                  COMPLETE PORTFOLIO
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-normal text-[#1E293B] tracking-tight mb-3">
                Explore All Academic Paths
              </h2>
              <p className="text-sm sm:text-base text-gray-400 max-w-3xl leading-relaxed">
                Select a discipline tailored to modern research, economic utility, and leadership development.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="card-course-hover bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover:border-blue-200 transition-all duration-300 group"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* SubTag */}
                  <div className="px-6 pt-5 pb-1">
                    <span className="text-[11px] font-bold tracking-wider text-[#2563EB] uppercase">
                      {item.subTag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="px-6 text-lg sm:text-xl font-serif font-normal text-[#1E293B] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="px-6 text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Learn More link */}
                <div className="px-6 pb-6 pt-3 border-t border-gray-50 mt-auto">
                  <Link
                    href={item.href}
                    className="inline-block text-xs sm:text-sm font-semibold text-[#1E293B] hover:text-[#2563EB] transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. WHERE CLASSROOM MEETS INDUSTRY */}
        <section className="w-full py-6 border-t border-b border-gray-200/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#2563EB] block" />
                <span className="text-xs font-bold tracking-[0.15em] text-[#2563EB] uppercase">
                  ALLIANCE & INTEGRATION
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[46px] font-serif font-normal text-[#1E293B] tracking-tight leading-[1.12]">
                Where Classroom Meets Industry
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed pt-2">
                CIS Jodhpur has established systematic pathways connecting students to strategic advisory roles, research labs, and modern financial institutions. Our students actively co-author policy briefs and technical patches utilized globally.
              </p>
            </div>

            {/* Right Column Animated Stat Cards (Sheet 01 - 02 / Statistics Counter Animation) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AnimatedCounter
                endValue={100}
                suffix="+"
                label="Industry Projects"
                percentage={100}
              />
              <AnimatedCounter
                endValue={50}
                suffix="+"
                label="Guest Lectures/Yr"
                percentage={85}
              />
              <AnimatedCounter
                endValue={20}
                suffix="+"
                label="Corporate Partners"
                percentage={70}
              />
            </div>
          </div>
        </section>

        {/* 6.5. ACADEMIC HERITAGE TIMELINE (Sheet 01 - 01 / Timeline Reveal Animation) */}
        <section className="w-full py-10">
          <ScrollReveal animation="fadeUp">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#C58940] block" />
                <span className="text-xs font-bold tracking-[0.15em] text-[#C58940] uppercase">
                  HISTORICAL TRACE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-normal text-[#1E293B] tracking-tight mb-3">
                Academic Heritage & Milestones
              </h2>
              <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Experience the vertical trace progression from our foundational insurance origins to our modern AI & InsurTech innovation center.
              </p>
            </div>
          </ScrollReveal>

          <TimelineTrace milestones={academicMilestones} />
        </section>

        {/* 7. OUR PEDAGOGICAL PHILOSOPHY */}
        <section className="w-full">
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#2563EB] block" />
              <span className="text-xs font-bold tracking-[0.15em] text-[#2563EB] uppercase">
                PEDAGOGICAL STANCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-normal text-[#1E293B] tracking-tight mb-2">
              Our Pedagogical Philosophy
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-3xl leading-relaxed">
              More than static instruction. We prepare minds to critically structure complexity under pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pedagogicalPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div key={pillar.title} className="flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center mb-5">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-medium text-[#1E293B] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 8. WHAT OUR GRADUATES ACHIEVE */}
        <section className="w-full">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#2563EB] block" />
              <span className="text-xs font-bold tracking-[0.15em] text-[#2563EB] uppercase">
                TRIUMPHS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-normal text-[#1E293B] tracking-tight mb-2">
              What Our Graduates Achieve
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-3xl leading-relaxed">
              Our alumni are a testament to our structural academic ethos, shaping industries worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {alumniImpact.map((alum) => (
              <div
                key={alum.name}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Photo */}
                  <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={alum.image}
                      alt={alum.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Quote */}
                  <div className="p-6 pb-4">
                    <p className="text-xs sm:text-sm text-gray-400 italic leading-relaxed">
                      &ldquo;{alum.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="px-6 pb-6 pt-2 border-t border-gray-50/80">
                  <h4 className="font-serif font-medium text-base text-[#1E293B]">
                    {alum.name}
                  </h4>
                  <div className="text-[11px] font-semibold text-[#2563EB] mt-0.5">
                    {alum.detail}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    {alum.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* 9. FIND YOUR PERFECT PROGRAM CTA BANNER */}
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
            Find Your Perfect Program
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Your path to transformative global leadership begins here. Download our curriculum blueprint or contact our admissions secretariat to program your visit.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/downloads"
              className="bg-[#2563EB] text-white hover:bg-blue-700 px-6 py-3.5 rounded font-semibold text-xs tracking-wider uppercase shadow-sm transition-all flex items-center gap-2"
            >
              <span>DOWNLOAD PROGRAM GUIDE</span>
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
