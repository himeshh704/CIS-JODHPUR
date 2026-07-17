"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { ScrollReveal } from "@/components/motion/MotionSystem";
import { 
  FileText, 
  Download, 
  BookOpen, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles
} from "lucide-react";

export default function ResourcesPage() {
  const { mode } = useTheme();
  const [activeTab, setActiveTab] = useState<"curricula" | "admissions" | "governance">("curricula");

  const curriculaDocs = [
    { title: "B.Tech AI & Data Science (4-Year Curriculum & Syllabus PDF)", size: "4.2 MB", format: "PDF", desc: "Detailed semester-by-semester breakdown of coursework, laboratory assignments, and mandatory Semester 8 Industry Co-op." },
    { title: "B.Tech Cybersecurity & Defense (Syllabus & Lab Specs)", size: "3.8 MB", format: "PDF", desc: "Covers air-gapped SCADA security protocols, reverse engineering rubrics, and ethical penetration testing guidelines." },
    { title: "Cambridge CAIE IGCSE & A-Levels (Academic Handbook 2026-27)", size: "5.1 MB", format: "PDF", desc: "Comprehensive guide to AS and A-Level subject groupings, international grading schemes, and Oxford/Cambridge preparation tracks." },
    { title: "CBSE Senior Secondary Science & Commerce (Examination Regulations)", size: "2.9 MB", format: "PDF", desc: "Official NCERT & institutional evaluation guidelines for Grades 11-12 PCM and Commerce streams." },
  ];

  const admissionDocs = [
    { title: "Offline Form A-01 Registration Template (Printable Version)", size: "1.4 MB", format: "PDF", desc: "For students submitting physical applications at our campus counseling desk or regional admission offices." },
    { title: "Merit Scholarship & Financial Aid Verification Packet", size: "1.8 MB", format: "PDF", desc: "Required documentation checklist for Founder's Gold (100% tuition waiver) and Director's Silver scholarships." },
    { title: "Campus Residential Charter & Fee Matrix", size: "2.2 MB", format: "PDF", desc: "Details suite amenities, dining schedules, biometric security protocols, and semester residential payment schedules." },
    { title: "International Student Visa & FRRO Clearance Guide", size: "3.0 MB", format: "PDF", desc: "Step-by-step immigration assistance for international students enrolling from UAE, UK, Singapore, and East Africa." },
  ];

  const governanceDocs = [
    { title: "Institutional AI Ethics & Academic Integrity Policy (v4.0)", size: "2.1 MB", format: "PDF", desc: "Explicit guidelines governing the ethical use of LLMs, automated code generation, and research citations across all departments." },
    { title: "Campus Safety, Biometric Access & Anti-Ragging Manual", size: "1.9 MB", format: "PDF", desc: "Strict UGC and institutional policies enforcing zero tolerance for hazing, with 24/7 emergency grievance redressal procedures." },
    { title: "Undergraduate Research Opportunities (UROP) Grant Rubric", size: "1.6 MB", format: "PDF", desc: "Evaluation criteria and proposal templates for undergraduate teams applying for ₹1.5 Crore annual R&D capital." },
  ];

  return (
    <div className="flex flex-col w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* 1. HERO */}
      <ScrollReveal animation="fadeUp">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest font-bold bg-[#D97706]/15 text-[#D97706] border border-[#D97706]/30">
              Institutional Repository
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-gray-900 dark:text-white">
              {mode === "v2" ? (
                <>Downloadable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-amber-300">Curricula & Guides</span>.</>
              ) : (
                <>Resources & Documents: <span className="text-[#D97706]">Complete Clarity</span> at Your Fingertips.</>
              )}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              Access official academic handbooks, Form A-01 registration templates, scholarship packets, and institutional governance charters directly from our digital document center.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#document-tabs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-semibold text-sm transition-all shadow-lg shadow-[#D97706]/20"
              >
                Browse Document Library <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-[#D97706] text-gray-800 dark:text-gray-200 font-semibold text-sm transition-all"
              >
                Visit AI Counselor & FAQ
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className={`p-8 rounded-3xl border space-y-6 ${
              mode === "v2"
                ? "bg-[#0A0A0A] border-white/10 shadow-2xl"
                : "bg-white border-[#E6DED1] shadow-xl"
            }`}>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D97706] block font-bold">
                Document Center Quick Links
              </span>
              <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-800">
                  <span className="opacity-75">Curriculum Handbooks:</span>
                  <strong className="font-mono text-[#D97706]">4 Academic PDF Packs</strong>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-800">
                  <span className="opacity-75">Form A-01 Application:</span>
                  <strong className="font-mono text-[#D97706]">Online / Offline Available</strong>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="opacity-75">Document Security:</span>
                  <strong className="font-mono text-emerald-600 dark:text-emerald-400">SHA-256 Verified PDFs</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 2. INTERACTIVE DOCUMENT TABS */}
      <ScrollReveal animation="fadeUp">
        <div id="document-tabs" className="scroll-mt-24 space-y-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-gray-200 dark:border-gray-800 pb-4">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">Official Document Repository</h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Select a category below to download high-resolution verified PDF charters.</p>
            </div>
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab("curricula")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === "curricula" ? "bg-[#D97706] text-white shadow-md" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Academic Curricula
              </button>
              <button
                onClick={() => setActiveTab("admissions")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === "admissions" ? "bg-[#D97706] text-white shadow-md" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Admissions & Scholarships
              </button>
              <button
                onClick={() => setActiveTab("governance")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === "governance" ? "bg-[#D97706] text-white shadow-md" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Governance & Policies
              </button>
            </div>
          </div>

          {/* TAB LISTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(activeTab === "curricula" ? curriculaDocs : activeTab === "admissions" ? admissionDocs : governanceDocs).map((doc, idx) => (
              <div
                key={idx}
                className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-6 ${
                  mode === "v2"
                    ? "bg-[#0A0A0A] border-white/10 hover:border-[#D97706] shadow-xl"
                    : "bg-white border-[#E6DED1] hover:border-[#D97706] shadow-lg"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                      {doc.format} • {doc.size}
                    </span>
                    <span className="text-xs font-mono text-[#D97706] font-bold">Verified Release</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold leading-snug text-gray-900 dark:text-white">{doc.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{doc.desc}</p>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gray-400">SHA-256: 9f8a...c4b2</span>
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D97706] hover:bg-[#B45309] text-white font-semibold text-xs transition-all shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" /> Download PDF
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* 3. NEED CUSTOM ASSISTANCE CTA */}
      <ScrollReveal animation="fadeUp">
        <div className={`p-10 rounded-3xl border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
          mode === "v2" ? "bg-[#0A0A0A] border-white/10 shadow-2xl" : "bg-white border-[#E6DED1] shadow-xl"
        }`}>
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest font-bold bg-[#D97706]/15 text-[#D97706] border border-[#D97706]/30">
              AI Counselor Assistance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Have Specific Questions About Our Documents?</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Our interactive FAQ & AI Counselor Center provides instant, 24/7 guidance regarding Form A-01 registration nuances, Cambridge A-Level equivalencies, and scholarship criteria.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start sm:items-end justify-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm transition-all shadow-xl shadow-[#D97706]/20"
            >
              Visit FAQ & Ask AI Box <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

