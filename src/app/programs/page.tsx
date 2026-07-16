"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Cpu, 
  ShieldAlert, 
  Globe, 
  Cloud, 
  Compass, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Filter,
  ChevronDown,
  ChevronUp,
  Award,
  BookOpen,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { ScrollReveal } from "@/components/motion/MotionSystem";

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openAccordion, setOpenAccordion] = useState<string | null>("comp-1");

  const categories = [
    "All",
    "Postgraduate Insurance (PGDIM / MIB / MS)",
    "Undergraduate (B.Tech / B.Arch)",
    "Postgraduate (M.Tech)",
    "Cambridge CAIE Pathway",
    "CBSE Senior Secondary",
  ];

  const programList = [
    {
      id: "mib-insurance",
      title: "Master of Insurance Business (MIB) - 1 Year PG Diploma",
      school: "College of Insurance Studies Jodhpur (CISJ)",
      category: "Postgraduate Insurance (PGDIM / MIB / MS)",
      duration: "1 Year (2 Semesters)",
      intake: "60 Seats",
      highlights: [
        "Core focus on General & Life Insurance operations, Underwriting, and Claim Management",
        "Taught by former CMDs & General Managers of United India and New India Assurance",
        "Comprehensive modules on Insurance Brokers, Reinsurance, and Third-Party Administrators (TPAs)",
        "Integration of quantitative AI actuarial risk modeling and real-time industry internships",
      ],
      icon: ShieldAlert,
      badge: "Industry Flagship (PGDIM)",
      code: "PG-MIB-01"
    },
    {
      id: "ms-insurance-eng",
      title: "M.Sc. in Insurance (Specialized for Engineering Graduates)",
      school: "College of Insurance Studies Jodhpur (CISJ)",
      category: "Postgraduate Insurance (PGDIM / MIB / MS)",
      duration: "1 Year (2 Semesters)",
      intake: "40 Seats",
      highlights: [
        "Tailored exclusively for B.Tech/BE Engineering Graduates entering risk surveying & inspection",
        "Deep-dive into Risk Assessment, Fire & Engineering Underwriting, and Loss Surveying",
        "Mentored by senior Technical Advisory Committee (TAC) engineers & certified loss assessors",
        "NVIDIA DGX simulation of structural failure probabilities & automated industrial risk pricing",
      ],
      icon: Cpu,
      badge: "TAC & Engineer Track",
      code: "PG-MSC-02"
    },
    {
      id: "ai-ds",
      title: "B.Tech in Artificial Intelligence & Quantitative Risk Science",
      school: "School of AI & Data Science",
      category: "Undergraduate (B.Tech / B.Arch)",
      duration: "4 Years (8 Semesters)",
      intake: "60 Seats",
      highlights: [
        "Direct access to NVIDIA GPU cluster for neural network training and predictive modeling",
        "Curriculum co-designed with top Silicon Valley engineers and quantitative risk leaders",
        "Mandatory 6-month industry internship in Semester 8 with top technology firms",
        "Dual degree option available with M.Tech AI (5-Year Accelerated Track)",
      ],
      icon: Cpu,
      badge: "Highest Placement Demand",
      code: "UG-AI-101"
    },
    {
      id: "cyber-defense",
      title: "B.Tech in Cybersecurity & Network Defense",
      school: "School of Cybersecurity & Defense",
      category: "Undergraduate (B.Tech / B.Arch)",
      duration: "4 Years (8 Semesters)",
      intake: "60 Seats",
      highlights: [
        "Dedicated isolated sandbox for ethical hacking, penetration testing, and cryptanalysis",
        "Preparation for OSCP, CISSP, and CEH industry certifications incorporated into coursework",
        "Zero-trust cloud security architecture and network forensics lab modules",
        "Live cybersecurity hackathons and inter-university defense competitions",
      ],
      icon: ShieldAlert,
      badge: "Defense Partnered",
      code: "UG-CY-102"
    },
    {
      id: "mtech-ai",
      title: "M.Tech in Deep Learning & Quantum Computing",
      school: "School of AI & Data Science",
      category: "Postgraduate (M.Tech)",
      duration: "2 Years (4 Semesters)",
      intake: "30 Seats",
      highlights: [
        "Advanced research thesis with full lab fellowship stipend and faculty mentorship",
        "Quantum circuit simulation, hybrid AI architectures, and algorithm optimization",
        "Publication requirement in IEEE / ACM peer-reviewed journals before defense",
        "Direct placement track with corporate R&D labs and institutional partners worldwide",
      ],
      icon: Cpu,
      badge: "Research Fellowship",
      code: "PG-AI-201"
    },
    {
      id: "cloud-comp",
      title: "B.Tech in Cloud Computing & Distributed Systems",
      school: "Department of Cloud Computing",
      category: "Undergraduate (B.Tech / B.Arch)",
      duration: "4 Years (8 Semesters)",
      intake: "60 Seats",
      highlights: [
        "Multi-cloud orchestration across AWS, Microsoft Azure, and Google Cloud Platform",
        "Kubernetes, Docker containerization, and microservice mesh architecture engineering",
        "Serverless edge computing and high-availability distributed database design",
        "Official cloud provider certification exam sponsorship for top academic performers",
      ],
      icon: Cloud,
      badge: "Corporate Track",
      code: "UG-CL-103"
    },
    {
      id: "barch",
      title: "B.Arch in Sustainable Architecture & Urban Design",
      school: "School of Architecture & Design",
      category: "Undergraduate (B.Tech / B.Arch)",
      duration: "5 Years (10 Semesters)",
      intake: "40 Seats",
      highlights: [
        "Blending Rajasthani passive cooling heritage with cutting-edge BIM CAD modeling",
        "Hands-on architectural conservation studios at Mehrangarh Fort and desert heritage sites",
        "Zero-carbon green building design, LEED certification prep, and environmental engineering",
        "Annual international architectural study tour across major global urban hubs",
      ],
      icon: Compass,
      badge: "Council Approved",
      code: "UG-AR-104"
    },
    {
      id: "cambridge-a-levels",
      title: "Cambridge International A-Levels (Grade 11 & 12)",
      school: "Cambridge CAIE Center #IN892",
      category: "Cambridge CAIE Pathway",
      duration: "2 Years",
      intake: "80 Seats",
      highlights: [
        "Subject choices across Physics, Chemistry, Maths, Further Maths, Computer Science & Economics",
        "International inquiry-based curriculum recognized globally by top Ivy League and UK universities",
        "Dedicated SAT / AP preparation and personalized overseas university counseling desk",
        "Direct access to institutional AI and computing research labs starting from Grade 11",
      ],
      icon: Globe,
      badge: "International Track",
      code: "SS-CAIE-01"
    },
    {
      id: "cbse-senior",
      title: "CBSE Senior Secondary (Science & Commerce Streams)",
      school: "Integrated School Division",
      category: "CBSE Senior Secondary",
      duration: "2 Years (Grade 11 & 12)",
      intake: "120 Seats",
      highlights: [
        "Integrated IIT-JEE Advanced and NEET competitive coaching inside daily academic schedules",
        "Strict discipline, daily doubt-clearing sessions, and structured objective mock test matrix",
        "Balanced character building, sports excellence, and technical leadership development",
        "Direct scholarship eligibility for CIS Jodhpur B.Tech undergraduate degree programs",
      ],
      icon: GraduationCap,
      badge: "Integrated Track",
      code: "SS-CBSE-02"
    },
  ];

  const filteredPrograms = selectedCategory === "All"
    ? programList
    : programList.filter((p) => p.category === selectedCategory);

  const comparisonAccordion = [
    {
      id: "comp-1",
      title: "Cambridge CAIE vs CBSE Pathway: Which is right for your child?",
      badge: "Academic Counseling",
      content: (
        <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
          <p>
            At CIS Jodhpur, we offer both curricula because each serves a distinct educational aspiration and learning methodology:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-[#C58940]/10 border border-[#C58940]/30 shadow-xs">
              <strong className="block text-[#C58940] font-serif text-lg mb-1">
                Cambridge CAIE (IGCSE / A-Levels)
              </strong>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Ideal for students targeting international universities, research careers, or holistic analytical reasoning. Emphasis on critical writing, laboratory experiments, and global flexibility.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/30 shadow-xs">
              <strong className="block text-[#2563EB] font-serif text-lg mb-1">
                CBSE Senior Secondary
              </strong>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Ideal for students targeting Indian national competitive examinations (IIT-JEE Advanced, NEET). Rigorous syllabus alignment, daily problem-solving drills, and structured objective testing.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "comp-2",
      title: "What is the admission procedure for B.Tech / M.Tech programs?",
      badge: "Form A-01",
      content: (
        <div className="space-y-3 text-sm sm:text-base text-gray-600 leading-relaxed">
          <p>
            Admission to B.Tech programs is evaluated based on JEE Main / Advanced ranks along with Class 12 board scores (minimum 75% in PCM). Candidates must fill out online <strong className="text-[#0F172A] font-semibold">Application Form A-01</strong>, upload academic transcripts, and attend an online or campus counseling interview.
          </p>
          <p>
            Scholarships up to <span className="font-semibold text-[#2563EB]">100% tuition waiver</span> are awarded to top JEE rankers and National Olympiad medalists during the first counseling round.
          </p>
        </div>
      ),
    },
    {
      id: "comp-3",
      title: "Can high school students access the B.Tech AI & computing labs?",
      badge: "Institutional Advantage",
      content: (
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Yes! One of the unique advantages of our unified 40-acre campus is that senior secondary students (both Cambridge and CBSE tracks) undergo mandatory computing bootcamps inside our NVIDIA GPU clusters, giving them an unmatched technical foundation before entering college.
        </p>
      ),
    },
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC] min-h-screen selection:bg-[#2563EB] selection:text-white">
      
      {/* 1. HERO SECTION (Our Signature Sandstone & Blue Aesthetics) */}
      <section className="relative w-full h-[540px] md:h-[620px] overflow-hidden flex items-center bg-[#E5E7EB]">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/nakoda/academics_hero_bg.png"
            alt="CIS Jodhpur Curricular Pathways Hall"
            fill
            className="object-cover object-center opacity-85 brightness-[0.92]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F3F4F6]/95 via-[#F3F4F6]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent opacity-90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="max-w-3xl">
            {/* Overtitle Badge */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-8 h-[2px] bg-[#2563EB] block" />
              <span className="text-xs font-bold tracking-[0.16em] text-[#2563EB] font-mono uppercase">
                ACADEMIC MATRIX 2026–27
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-[68px] font-normal text-[#1E293B] tracking-tight leading-[1.06] mb-6">
              Curricular Pathways &amp;<br />
              Degree Programs
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-500 font-normal leading-relaxed max-w-2xl">
              Explore our comprehensive undergraduate, postgraduate, and senior secondary schools engineered for global leadership, research excellence, and industry dominance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#programs-grid"
                className="bg-[#2563EB] hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>EXPLORE ALL PROGRAMS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/resources"
                className="bg-white/80 hover:bg-white text-[#0F172A] border border-gray-300 font-mono text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-xl shadow-xs transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#2563EB]" />
                <span>DOWNLOAD SYLLABUS PDFS</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY CATEGORY FILTER BAR */}
      <section id="programs-grid" className="w-full border-b border-gray-200/80 bg-white sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto no-scrollbar py-2">
            <span className="text-xs font-mono font-bold uppercase text-gray-400 mr-2 flex items-center gap-1.5 shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#2563EB]" /> Filter Track:
            </span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all relative shrink-0 ${
                    isActive
                      ? "bg-[#2563EB] text-white shadow-sm"
                      : "bg-[#F8FAFC] text-gray-600 hover:bg-gray-100 border border-gray-200/80"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 space-y-24">
        
        {/* 3. PROGRAM CARDS GRID (Motion System + Sandstone/Blue Polish) */}
        <section className="w-full">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#C58940] block" />
                <span className="text-xs font-mono font-bold tracking-[0.15em] text-[#C58940] uppercase">
                  ACTIVE CURRICULAR ROSTER
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1E293B] tracking-tight">
                {selectedCategory === "All" ? "All Curricular Offerings" : selectedCategory}
              </h2>
            </div>
            <div className="text-xs font-mono text-gray-500 bg-white border border-gray-200 px-3.5 py-2 rounded-lg self-start md:self-auto shadow-2xs">
              Showing <strong className="text-[#2563EB] font-bold">{filteredPrograms.length}</strong> available programs
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((prog, index) => {
              const Icon = prog.icon;
              const isFlagship = prog.badge === "Industry Flagship (PGDIM)" || prog.badge.includes("Highest");
              
              return (
                <ScrollReveal key={prog.id} animation="fadeUp" delayMs={index * 100}>
                  <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden flex flex-col justify-between h-full hover:shadow-xl hover:border-[#2563EB]/40 hover:-translate-y-1.5 transition-all duration-300 group">
                    <div className="p-7 space-y-5">
                      {/* Top Bar: Icon, Code & Badge */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-transform duration-300 group-hover:scale-105 ${
                            isFlagship ? "bg-[#2563EB] text-white shadow-sm" : "bg-[#C58940]/10 text-[#C58940]"
                          }`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold text-gray-400 block uppercase">
                              {prog.code}
                            </span>
                            <span className="text-xs font-mono font-bold text-[#C58940] block">
                              {prog.school}
                            </span>
                          </div>
                        </div>
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shrink-0 ${
                          isFlagship 
                            ? "bg-[#2563EB] text-white shadow-2xs" 
                            : "bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]/80"
                        }`}>
                          {prog.badge}
                        </span>
                      </div>

                      {/* Program Title */}
                      <h3 className="font-serif text-2xl font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-snug">
                        {prog.title}
                      </h3>

                      {/* Duration & Intake Pill Bar */}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="px-3 py-1 rounded-lg bg-[#F8FAFC] border border-gray-200 text-xs font-mono font-semibold text-[#475569]">
                          ⏱️ {prog.duration}
                        </span>
                        <span className="px-3 py-1 rounded-lg bg-[#F8FAFC] border border-gray-200 text-xs font-mono font-semibold text-[#475569]">
                          👥 Intake: <strong className="text-[#0F172A]">{prog.intake}</strong>
                        </span>
                      </div>

                      {/* Curriculum Highlights */}
                      <div className="space-y-2.5 pt-3 border-t border-gray-100">
                        <span className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider block">
                          Curriculum &amp; Lab Highlights:
                        </span>
                        <ul className="space-y-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                          {prog.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="px-7 py-5 bg-[#F8FAFC] border-t border-gray-100 flex items-center justify-between gap-4 mt-auto">
                      <Link
                        href={`/resources?program=${prog.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-gray-500 hover:text-[#2563EB] transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>Syllabus PDF</span>
                      </Link>
                      <Link
                        href="/apply"
                        className="bg-[#2563EB] hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-xs hover:shadow transition-all flex items-center gap-1.5 group-hover:bg-[#1d4ed8]"
                      >
                        <span>Apply Online</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* 4. DECISION & COMPARISON MATRIX */}
        <section className="w-full">
          <ScrollReveal animation="fadeUp">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#2563EB] block" />
                <span className="text-xs font-mono font-bold tracking-[0.15em] text-[#2563EB] uppercase">
                  ANALYTICAL EVALUATION
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1E293B] tracking-tight mb-2">
                Program Track Comparison Matrix
              </h2>
              <p className="text-sm sm:text-base text-gray-500 max-w-3xl leading-relaxed">
                Contrast structural parameters across our school tracks to identify the academic trajectory most suited to your career ambition.
              </p>
            </div>
          </ScrollReveal>

          <div className="w-full overflow-x-auto rounded-2xl border border-gray-200/80 shadow-xs bg-white">
            <table className="w-full text-left border-collapse min-w-[750px]">
              <thead>
                <tr className="bg-[#1E293B] text-white text-xs sm:text-sm font-semibold font-mono">
                  <th className="py-4.5 px-6 w-[22%]">School Track</th>
                  <th className="py-4.5 px-6 w-[18%]">Target Degree</th>
                  <th className="py-4.5 px-6 w-[25%]">Eligibility Criteria</th>
                  <th className="py-4.5 px-6 w-[20%]">Key Institutional Advantage</th>
                  <th className="py-4.5 px-6 w-[15%] text-right">Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                <tr className="hover:bg-blue-50/40 transition-colors">
                  <td className="py-5 px-6 font-serif font-bold text-[#0F172A] text-base">
                    College of Insurance Studies (CISJ)
                  </td>
                  <td className="py-5 px-6 font-semibold text-[#2563EB]">
                    MIB / M.Sc. Insurance
                  </td>
                  <td className="py-5 px-6 text-gray-600">
                    Graduation (50% min) / B.Tech for M.Sc track
                  </td>
                  <td className="py-5 px-6 text-gray-600">
                    Direct mentorship by former TAC Engineers &amp; CMDs
                  </td>
                  <td className="py-5 px-6 text-right">
                    <Link href="/apply" className="text-xs font-mono font-bold text-[#2563EB] hover:underline">
                      Form A-01 →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/40 transition-colors">
                  <td className="py-5 px-6 font-serif font-bold text-[#0F172A] text-base">
                    School of AI &amp; Data Science
                  </td>
                  <td className="py-5 px-6 font-semibold text-[#2563EB]">
                    B.Tech / M.Tech AI
                  </td>
                  <td className="py-5 px-6 text-gray-600">
                    10+2 PCM (75% min) + JEE Main / Advanced Rank
                  </td>
                  <td className="py-5 px-6 text-gray-600">
                    NVIDIA GPU cluster &amp; Silicon Valley co-designed labs
                  </td>
                  <td className="py-5 px-6 text-right">
                    <Link href="/apply" className="text-xs font-mono font-bold text-[#2563EB] hover:underline">
                      Form A-01 →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/40 transition-colors">
                  <td className="py-5 px-6 font-serif font-bold text-[#0F172A] text-base">
                    School of Cybersecurity &amp; Cloud
                  </td>
                  <td className="py-5 px-6 font-semibold text-[#2563EB]">
                    B.Tech Cyber / Cloud
                  </td>
                  <td className="py-5 px-6 text-gray-600">
                    10+2 PCM (75% min) + JEE Main Rank
                  </td>
                  <td className="py-5 px-6 text-gray-600">
                    OSCP / CISSP sandbox &amp; multi-cloud certification
                  </td>
                  <td className="py-5 px-6 text-right">
                    <Link href="/apply" className="text-xs font-mono font-bold text-[#2563EB] hover:underline">
                      Form A-01 →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/40 transition-colors">
                  <td className="py-5 px-6 font-serif font-bold text-[#0F172A] text-base">
                    Cambridge CAIE Center #IN892
                  </td>
                  <td className="py-5 px-6 font-semibold text-[#2563EB]">
                    IGCSE / A-Levels
                  </td>
                  <td className="py-5 px-6 text-gray-600">
                    Grade 10 completion with strong aptitude test scores
                  </td>
                  <td className="py-5 px-6 text-gray-600">
                    Global university pathway &amp; early AI lab access
                  </td>
                  <td className="py-5 px-6 text-right">
                    <Link href="/apply" className="text-xs font-mono font-bold text-[#2563EB] hover:underline">
                      Form A-01 →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/40 transition-colors">
                  <td className="py-5 px-6 font-serif font-bold text-[#0F172A] text-base">
                    CBSE Integrated Division
                  </td>
                  <td className="py-5 px-6 font-semibold text-[#2563EB]">
                    Grade 11 &amp; 12 Science
                  </td>
                  <td className="py-5 px-6 text-gray-600">
                    Grade 10 Board completion (PCM/Commerce)
                  </td>
                  <td className="py-5 px-6 text-gray-600">
                    Integrated IIT-JEE/NEET coaching + CIS scholarships
                  </td>
                  <td className="py-5 px-6 text-right">
                    <Link href="/apply" className="text-xs font-mono font-bold text-[#2563EB] hover:underline">
                      Form A-01 →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. FREQUENTLY ASKED PROGRAM QUERIES (Accordion) */}
        <section className="w-full">
          <ScrollReveal animation="fadeUp">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#C58940] block" />
                <span className="text-xs font-mono font-bold tracking-[0.15em] text-[#C58940] uppercase">
                  CURRICULUM COUNSELING
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1E293B] tracking-tight mb-2">
                Frequently Asked Program Queries
              </h2>
              <p className="text-sm sm:text-base text-gray-500 max-w-3xl leading-relaxed">
                Clear, transparent guidance on curriculum selection, lab access, and admission prerequisites.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4 max-w-4xl">
            {comparisonAccordion.map((item) => {
              const isOpen = openAccordion === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded bg-[#2563EB]/10 text-[#2563EB] font-mono text-[11px] font-bold uppercase tracking-wider">
                        {item.badge}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0F172A]">
                        {item.title}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100/80 animate-fadeIn">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. NEXT STEP CTA BANNER */}
        <section className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-10 sm:p-16 border border-slate-800 shadow-2xl text-center space-y-6">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C58940]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-[#60A5FA]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>NEXT STEP</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight">
              Ready to Secure Your Seat for 2026–27?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto">
              Begin your application online via Form A-01, or speak with our academic admissions counseling desk today for scholarship eligibility.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/apply"
                className="bg-[#2563EB] hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>START FORM A-01 ONLINE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/faq"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-mono text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl backdrop-blur-sm transition-all"
              >
                <span>VIEW COMPLETE ADMISSIONS FAQ</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
