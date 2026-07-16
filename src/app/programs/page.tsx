"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
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
  Search,
  Filter
} from "lucide-react";

export default function ProgramsPage() {
  const { mode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Postgraduate Insurance (`PGDIM` / `MIB` / `MS`)",
    "Undergraduate (B.Tech / B.Arch)",
    "Postgraduate (M.Tech)",
    "Cambridge CAIE Pathway",
    "CBSE Senior Secondary",
  ];

  const programList = [
    {
      id: "mib-insurance",
      title: "Master of Insurance Business (`MIB`) - 1 Year PG Diploma",
      school: "College of Insurance Studies Jodhpur (`CISJ`)",
      category: "Postgraduate Insurance (`PGDIM` / `MIB` / `MS`)",
      duration: "1 Year (2 Semesters)",
      intake: "60 Seats",
      highlights: [
        "Core focus on General & Life Insurance operations, Underwriting, and Claim Management",
        "Taught by former CMDs & General Managers of United India and New India Assurance",
        "Comprehensive modules on Insurance Brokers, Reinsurance, and Third-Party Administrators (`TPAs`)",
        "Integration of quantitative AI actuarial risk modeling and real-time industry internships",
      ],
      icon: ShieldAlert,
      badge: "Industry Flagship (`PGDIM`)",
    },
    {
      id: "ms-insurance-eng",
      title: "M.Sc. in Insurance (`Specialized for Engineering Graduates`)",
      school: "College of Insurance Studies Jodhpur (`CISJ`)",
      category: "Postgraduate Insurance (`PGDIM` / `MIB` / `MS`)",
      duration: "1 Year (2 Semesters)",
      intake: "40 Seats",
      highlights: [
        "Tailored exclusively for B.Tech/BE Engineering Graduates entering risk surveying & inspection",
        "Deep-dive into Risk Assessment, Fire & Engineering Underwriting, and Loss Surveying",
        "Mentored by senior Technical Advisory Committee (`TAC`) engineers & certified loss assessors",
        "NVIDIA DGX simulation of structural failure probabilities & automated industrial risk pricing",
      ],
      icon: Cpu,
      badge: "TAC & Engineer Track",
    },
    {
      id: "ai-ds",
      title: "B.Tech in Artificial Intelligence & Quantitative Risk Science",
      school: "School of AI & Data Science",
      category: "Undergraduate (B.Tech / B.Arch)",
      duration: "4 Years (8 Semesters)",
      intake: "60 Seats",
      highlights: [
        "Direct access to NVIDIA GPU cluster for neural network training",
        "Curriculum co-designed with top Silicon Valley engineers",
        "Mandatory 6-month industry internship in Semester 8",
        "Dual degree option available with M.Tech AI (5-Year Track)",
      ],
      icon: Cpu,
      badge: "Highest Placement Demand",
    },
    {
      id: "cyber-defense",
      title: "B.Tech in Cybersecurity & Network Defense",
      school: "School of Cybersecurity & Defense",
      category: "Undergraduate (B.Tech / B.Arch)",
      duration: "4 Years (8 Semesters)",
      intake: "60 Seats",
      highlights: [
        "Dedicated isolated sandbox for ethical hacking and cryptanalysis",
        "Preparation for OSCP, CISSP, and CEH industry certifications",
        "Zero-trust cloud security architecture modules",
        "Live cybersecurity hackathon and defense competitions",
      ],
      icon: ShieldAlert,
      badge: "Defense Partnered",
    },
    {
      id: "mtech-ai",
      title: "M.Tech in Deep Learning & Quantum Computing",
      school: "School of AI & Data Science",
      category: "Postgraduate (M.Tech)",
      duration: "2 Years (4 Semesters)",
      intake: "30 Seats",
      highlights: [
        "Advanced research thesis with full lab fellowship stipend",
        "Quantum circuit simulation and hybrid AI architectures",
        "Publication requirement in IEEE / ACM peer-reviewed journals",
        "Direct placement track with R&D labs worldwide",
      ],
      icon: Cpu,
      badge: "Research Fellowship",
    },
    {
      id: "cloud-comp",
      title: "B.Tech in Cloud Computing & Distributed Systems",
      school: "Department of Cloud Computing",
      category: "Undergraduate (B.Tech / B.Arch)",
      duration: "4 Years (8 Semesters)",
      intake: "60 Seats",
      highlights: [
        "Multi-cloud orchestration across AWS, Azure, and Google Cloud",
        "Kubernetes, Docker, and microservice mesh architecture",
        "Serverless edge computing and high-availability database design",
        "Official cloud provider certification exam sponsorship",
      ],
      icon: Cloud,
      badge: "Corporate Track",
    },
    {
      id: "barch",
      title: "B.Arch in Sustainable Architecture & Urban Design",
      school: "School of Architecture & Design",
      category: "Undergraduate (B.Tech / B.Arch)",
      duration: "5 Years (10 Semesters)",
      intake: "40 Seats",
      highlights: [
        "Blending Rajasthani passive cooling heritage with BIM CAD modeling",
        "Hands-on conservation studios at Mehrangarh and desert sites",
        "Zero-carbon green building design and LEED certification prep",
        "Annual international architectural study tour",
      ],
      icon: Compass,
      badge: "Council Approved",
    },
    {
      id: "cambridge-a-levels",
      title: "Cambridge International A-Levels (Grade 11 & 12)",
      school: "Cambridge CAIE Center #IN892",
      category: "Cambridge CAIE Pathway",
      duration: "2 Years",
      intake: "80 Seats",
      highlights: [
        "Subject choices across Physics, Chemistry, Maths, Further Maths & CS",
        "International inquiry-based curriculum recognized globally",
        "Dedicated SAT / AP and overseas university counseling desk",
        "Access to institutional AI and computing labs from Grade 11",
      ],
      icon: Globe,
      badge: "International Track",
    },
    {
      id: "cbse-senior",
      title: "CBSE Senior Secondary (Science & Commerce)",
      school: "Integrated School Division",
      category: "CBSE Senior Secondary",
      duration: "2 Years (Grade 11 & 12)",
      intake: "120 Seats",
      highlights: [
        "Integrated IIT-JEE Advanced and NEET competitive coaching",
        "Strict discipline, daily doubt-clearing sessions, and mock test matrix",
        "Balanced character building, sports, and technical leadership",
        "Direct scholarship eligibility for CIS Jodhpur B.Tech programs",
      ],
      icon: GraduationCap,
      badge: "Integrated Track",
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
        <div className="space-y-4">
          <p>
            At CIS Jodhpur, we offer both curricula because each serves a distinct educational aspiration:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-normal">
            <div className="p-4 rounded-xl bg-[#D97706]/10 border border-[#D97706]/20">
              <strong className="block text-[#D97706] mb-1">Cambridge CAIE (IGCSE / A-Levels)</strong>
              Ideal for students targeting international universities, research careers, or holistic analytical reasoning. Emphasis on critical writing, laboratory experiments, and global flexibility.
            </div>
            <div className="p-4 rounded-xl bg-[#1E3A8A]/10 border border-[#1E3A8A]/20">
              <strong className="block text-[#1E3A8A] dark:text-blue-300 mb-1">CBSE Senior Secondary</strong>
              Ideal for students targeting Indian national competitive examinations (`IIT-JEE Advanced`, `NEET`). Rigorous syllabus alignment, daily problem-solving drills, and structured objective testing.
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
        <p>
          Admission to B.Tech programs is evaluated based on JEE Main / Advanced ranks along with Class 12 board scores (minimum 75% in PCM). Candidates must fill out online <strong>Application Form A-01</strong>, upload academic transcripts, and attend an online or campus counseling interview. Scholarships up to 100% tuition waiver are awarded to top JEE rankers.
        </p>
      ),
    },
    {
      id: "comp-3",
      title: "Can high school students access the B.Tech AI & computing labs?",
      badge: "Institutional Advantage",
      content: (
        <p>
          Yes! One of the unique advantages of our unified 40-acre campus is that senior secondary students (both Cambridge and CBSE tracks) undergo mandatory computing bootcamps inside our NVIDIA GPU clusters, giving them an unmatched technical foundation before entering college.
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* 1. HEADER */}
      <div className="pt-6">
        <SectionHeader
          overtitle="Academic Matrix 2026-27"
          title="Curricular Pathways & Degree Programs"
          subtitle="Explore our comprehensive undergraduate, postgraduate, and senior secondary schools engineered for global dominance."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 pb-6 border-b border-gray-400/20">
          <span className="text-xs font-semibold uppercase opacity-60 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter by Track:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[#D97706] text-white shadow-md"
                  : mode === "v2"
                  ? "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10"
                  : "bg-white hover:bg-[#E6DED1]/50 text-[#262626] border border-[#E6DED1]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2. PROGRAM CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPrograms.map((prog) => {
          const Icon = prog.icon;
          return (
            <Card key={prog.id} variant="bordered-interactive" className="p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#D97706]/10 text-[#D97706] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-[#D97706] block">
                        {prog.school}
                      </span>
                      <Badge variant="royal">{prog.duration}</Badge>
                    </div>
                  </div>
                  <Badge variant="amber">{prog.badge}</Badge>
                </div>

                <h3 className="font-serif text-2xl font-bold leading-tight">
                  {prog.title}
                </h3>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider opacity-70 block">
                    Curriculum & Lab Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm opacity-80">
                    {prog.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-400/15 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono font-medium opacity-70">
                  Intake Capacity: <strong>{prog.intake}</strong>
                </span>
                <div className="flex items-center gap-3">
                  <Button href={`/resources?program=${prog.id}`} variant="outline" size="sm">
                    <FileText className="w-3.5 h-3.5" /> Syllabus PDF
                  </Button>
                  <Button href="/apply" variant="primary" size="sm">
                    Apply Online (`Form A-01`)
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* 3. CAMBRIDGE vs CBSE COMPARISON & FAQ ACCORDION */}
      <div>
        <SectionHeader
          overtitle="Curriculum Insights"
          title="Frequently Asked Program Queries"
          subtitle="Clear, transparent guidance on curriculum selection, lab access, and admission prerequisites."
        />
        <Accordion items={comparisonAccordion} defaultOpenId="comp-1" />
      </div>

      {/* 4. ADMISSIONS BANNER */}
      <Card variant={mode === "v2" ? "midnight-glass" : "sandstone"} className="p-10 text-center space-y-4">
        <Badge variant="amber">Next Step</Badge>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold">
          Ready to Secure Your Seat for 2026-27?
        </h2>
        <p className="text-sm opacity-80 max-w-xl mx-auto">
          Begin your application online via Form A-01, or speak with our academic admissions counseling desk today.
        </p>
        <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
          <Button href="/apply" variant="primary">
            Start Form A-01 Online <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="/faq" variant="outline">
            View Complete Admissions FAQ
          </Button>
        </div>
      </Card>
    </div>
  );
}
