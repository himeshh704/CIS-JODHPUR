"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { ScrollReveal } from "@/components/motion/MotionSystem";
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  FileText, 
  Calendar, 
  User, 
  PhoneCall 
} from "lucide-react";

interface FAQItem {
  id: string;
  categoryTag: string;
  categoryFilter: string;
  title: string;
  content: string;
}

export default function FAQPage() {
  const { mode } = useTheme();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Questions");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "faq-1": true,
    "faq-4": true,
    "faq-7": true,
  });

  const faqItems: FAQItem[] = [
    {
      id: "faq-1",
      categoryTag: "ADMISSIONS",
      categoryFilter: "Admissions",
      title: "What is the age criteria for admission to early years?",
      content: "For Nursery, the child must be 3+ years of age as of March 31st of the academic year. For Kindergarten and Grade 1, the corresponding ages are 4+ and 6+ respectively. Direct admissions to higher classes are subject to vacancy and credit transfers."
    },
    {
      id: "faq-2",
      categoryTag: "ADMISSIONS",
      categoryFilter: "Admissions",
      title: "What documents are required during the formal application process?",
      content: "Parents must submit birth certificate, previous two years' official school transcripts, transfer certificate (TC) countersigned by appropriate education authorities, four passport-sized photographs, and government ID proofs of parents/guardians during registration."
    },
    {
      id: "faq-3",
      categoryTag: "ADMISSIONS",
      categoryFilter: "Admissions",
      title: "Is there an entrance assessment for new student intake?",
      content: "Yes, for Grade 2 and above, candidates undergo a brief baseline assessment in English, Mathematics, and Scientific Reasoning to evaluate academic readiness and identify any foundational support requirements before enrollment."
    },
    {
      id: "faq-4",
      categoryTag: "ACADEMICS",
      categoryFilter: "Academics",
      title: "Which board/curriculum pathways are followed at CIS Jodhpur?",
      content: "We offer a dual-pathway curriculum of international standards: the Cambridge Assessment International Education (CAIE) pathway from Primary to A-Levels, alongside the premium CBSE national curriculum option starting from Grade 9."
    },
    {
      id: "faq-5",
      categoryTag: "ACADEMICS",
      categoryFilter: "Academics",
      title: "What is the teacher-to-student ratio at the academy?",
      content: "We maintain a strict teacher-to-student ratio of 1:12 across primary and secondary wings, ensuring highly personalized attention, differentiated academic instruction, and robust mentorship for every enrolled student."
    },
    {
      id: "faq-6",
      categoryTag: "FEES",
      categoryFilter: "Fees & Schedule",
      title: "What is the annual fee payment schedule and structure?",
      content: "Tuition and boarding fees are structured into two or three convenient installments across the academic year (April, August, and December). Comprehensive fee schedules, including scholarship waivers and optional transport slabs, are detailed in our official prospectus."
    },
    {
      id: "faq-7",
      categoryTag: "HOSTEL",
      categoryFilter: "Hostel Life",
      title: "What facilities are provided in the premium residential hostel?",
      content: "Our international-standard residential wing features centrally air-conditioned twin-sharing suites, study lounges with high-speed secure Wi-Fi, 24/7 dedicated medical wardens, customized premium dining (prep-mon-veg), and state-of-the-art security."
    },
    {
      id: "faq-8",
      categoryTag: "HOSTEL",
      categoryFilter: "Hostel Life",
      title: "Is school transport available for day scholars across Jodhpur?",
      content: "Yes, we operate a fleet of GPS-enabled, air-conditioned luxury buses equipped with CCTV surveillance and trained female support staff covering all major residential sectors and suburbs across Jodhpur."
    },
    {
      id: "faq-9",
      categoryTag: "PLACEMENTS",
      categoryFilter: "Placements",
      title: "Does CIS Jodhpur provide university guidance and placements?",
      content: "Our dedicated University Guidance Cell offers multi-year profile building, SAT/IELTS preparation workshops, portfolio mentoring, and direct application support for premier global universities across the US, UK, Canada, and India."
    },
    {
      id: "faq-10",
      categoryTag: "EXAMS",
      categoryFilter: "Exams & Certification",
      title: "How are examinations conducted and evaluated for Cambridge students?",
      content: "Assessments follow Cambridge benchmark grading standards with continuous formative evaluations, semester checkpoints, and external board examinations for IGCSE (Grade 10) and AS/A-Levels (Grades 11-12) overseen by accredited British Council invigilators."
    }
  ];

  const categories = [
    { name: "All Questions", count: 10 },
    { name: "Admissions", count: 3 },
    { name: "Academics", count: 2 },
    { name: "Fees & Schedule", count: 1 },
    { name: "Hostel Life", count: 2 },
    { name: "Placements", count: 1 },
    { name: "Exams & Certification", count: 1 },
  ];

  const filteredItems = useMemo(() => {
    return faqItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "All Questions" || item.categoryFilter === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryTag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={`min-h-screen transition-colors ${
      mode === "v2" ? "bg-[#0A0A0A] text-[#EDEDED]" : "bg-[#F9F6F0] text-[#111827]"
    }`}>
      {/* 1. HERO SECTION & SEARCH BAR (input_file_1.png) */}
      <div className="bg-[#0E1117] text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-blue-900 font-bold text-xs shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>CIS JODHPUR SUPPORT DESK</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Find comprehensive assistance regarding admissions, international academic paths, residential services, and campus guidelines.
          </p>

          {/* Search Pill */}
          <div className="max-w-2xl mx-auto pt-4">
            <div className="bg-white rounded-full p-2 pl-6 flex items-center justify-between shadow-xl gap-3">
              <div className="flex items-center gap-3 flex-1">
                <Search className="w-5 h-5 text-gray-400 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for policies, document lists, fee timelines..."
                  className="w-full bg-transparent text-gray-800 text-sm sm:text-base placeholder-gray-400 focus:outline-none"
                />
              </div>
              <button
                onClick={() => {}}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm transition-colors tracking-wide uppercase shrink-0"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CATEGORY FILTER PILLS BAR (input_file_3.png) */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-16 z-30 shadow-sm py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2.5 py-1">
          {categories.map((cat, idx) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500"
                }`}
              >
                <span>{cat.name}</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                  isSelected
                    ? "bg-blue-500 text-white"
                    : "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400"
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. MAIN DIRECTORY & ACCORDION SECTION (input_file_2.png) */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Sidebar: In-Depth Directory */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-40">
            <ScrollReveal animation="fadeUp">
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-blue-900 dark:text-blue-300">
                  In-Depth Directory
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Browse structured answers arranged explicitly by our administrative and pastoral boards. Hover or select individual categories on the navigation layout to filter results.
                </p>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Total Directives</span>
                    <span className="font-mono font-bold text-blue-900 dark:text-blue-300">
                      {faqItems.length} Articles
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Last Updated</span>
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                      Oct 2024
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-8 space-y-4">
            {filteredItems.length === 0 ? (
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-12 text-center space-y-3">
                <p className="text-gray-500 dark:text-gray-400 font-medium">No direct answers matched your query &ldquo;{searchQuery}&rdquo;.</p>
                <button
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All Questions"); }}
                  className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:underline"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              filteredItems.map((item) => {
                const isOpen = !!openIds[item.id];
                return (
                  <ScrollReveal key={item.id} animation="fadeUp">
                    <div
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "bg-white dark:bg-gray-900 border-blue-500 shadow-md ring-1 ring-blue-500/20"
                          : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 shadow-sm"
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none group"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <span className="inline-block px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-[10px] font-mono font-bold uppercase tracking-wider shrink-0 w-fit">
                            {item.categoryTag}
                          </span>
                          <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                            {item.title}
                          </h3>
                        </div>

                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                            isOpen
                              ? "bg-blue-600 text-white shadow-sm"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-500 group-hover:bg-blue-50 dark:group-hover:bg-gray-700"
                          }`}
                        >
                          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-6 pt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed border-t border-blue-100 dark:border-blue-900/30">
                          <p>{item.content}</p>
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                );
              })
            )}
          </div>

        </div>
      </div>

      {/* 4. STILL HAVE UNANSWERED QUERIES? BANNER (input_file_4.png) */}
      <ScrollReveal animation="fadeUp">
        <div className="bg-gray-50 dark:bg-gray-900/60 border-t border-b border-gray-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
                Still have unanswered queries?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Our expert educational admissions counselors are online to offer personalized assistance regarding entrance formats, campus tours, and enrollment files.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full md:w-auto justify-end">
              <div className="text-left sm:text-right">
                <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest block">
                  DIRECT HELPLINE
                </span>
                <span className="font-bold text-2xl text-gray-900 dark:text-white font-mono">
                  +91 291 2940250
                </span>
              </div>

              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-blue-500/25 flex items-center justify-center gap-2 transition-all whitespace-nowrap text-sm sm:text-base"
              >
                <span>Contact Admissions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 5. ESSENTIAL DOWNLOADS / RESOURCES (input_file_5.png) */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-10">
        <ScrollReveal animation="fadeUp">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block">
              ESSENTIAL DOWNLOADS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Academic &amp; Campus Resources
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Download Prospectus */}
          <ScrollReveal animation="fadeUp">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all flex flex-col justify-between h-full space-y-6 group">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                  Download Prospectus
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Explore our vision, dual-academic pathway structures, exhaustive co-curricular choices, and comprehensive fee models.
                </p>
              </div>
              <a
                href="/resources"
                className="text-blue-600 dark:text-blue-400 font-bold text-xs sm:text-sm flex items-center gap-1 group-hover:gap-2 transition-all pt-2 border-t border-gray-100 dark:border-gray-800"
              >
                <span>PDF Prospectus 2024-25</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>

          {/* Card 2: Plan Campus Visit */}
          <ScrollReveal animation="fadeUp">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all flex flex-col justify-between h-full space-y-6 group">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                  Plan Campus Visit
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Schedule an elegant guided physical walkthrough around our sprawling state-of-the-art campus landmarks in Jodhpur.
                </p>
              </div>
              <Link
                href="/campus"
                className="text-blue-600 dark:text-blue-400 font-bold text-xs sm:text-sm flex items-center gap-1 group-hover:gap-2 transition-all pt-2 border-t border-gray-100 dark:border-gray-800"
              >
                <span>Request Date Slot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 3: Talk to Alumni */}
          <ScrollReveal animation="fadeUp">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all flex flex-col justify-between h-full space-y-6 group">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                  Talk to Alumni
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Converse interactively with distinguished global alumni regarding residential standard operations, study load, and placements.
                </p>
              </div>
              <Link
                href="/contact"
                className="text-blue-600 dark:text-blue-400 font-bold text-xs sm:text-sm flex items-center gap-1 group-hover:gap-2 transition-all pt-2 border-t border-gray-100 dark:border-gray-800"
              >
                <span>Schedule Call Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

