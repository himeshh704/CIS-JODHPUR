"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { 
  FileText, 
  Download, 
  BookOpen, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  FolderDown,
  Sparkles
} from "lucide-react";

export default function ResourcesPage() {
  const { mode } = useTheme();
  const [activeTab, setActiveTab] = useState<"curricula" | "admissions" | "governance">("curricula");

  const curriculaDocs = [
    { title: "B.Tech AI & Data Science (`4-Year Curriculum & Syllabus PDF`)", size: "4.2 MB", format: "PDF", desc: "Detailed semester-by-semester breakdown of coursework, laboratory assignments, and mandatory Semester 8 Industry Co-op." },
    { title: "B.Tech Cybersecurity & Defense (`Syllabus & Lab Specs`)", size: "3.8 MB", format: "PDF", desc: "Covers air-gapped SCADA security protocols, reverse engineering rubrics, and ethical penetration testing guidelines." },
    { title: "Cambridge CAIE IGCSE & A-Levels (`Academic Handbook 2026-27`)", size: "5.1 MB", format: "PDF", desc: "Comprehensive guide to AS and A-Level subject groupings, international grading schemes, and Oxford/Cambridge preparation tracks." },
    { title: "CBSE Senior Secondary Science & Commerce (`Examination Regulations`)", size: "2.9 MB", format: "PDF", desc: "Official NCERT & institutional evaluation guidelines for Grades 11-12 PCM and Commerce streams." },
  ];

  const admissionDocs = [
    { title: "Offline Form A-01 Registration Template (`Printable Version`)", size: "1.4 MB", format: "PDF", desc: "For students submitting physical applications at our campus counseling desk or regional admission offices." },
    { title: "Merit Scholarship & Financial Aid Verification Packet", size: "1.8 MB", format: "PDF", desc: "Required documentation checklist for Founder's Gold (100% tuition waiver) and Director's Silver scholarships." },
    { title: "Campus Residential Charter & Fee Matrix", size: "2.2 MB", format: "PDF", desc: "Details suite amenities, dining schedules, biometric security protocols, and semester residential payment schedules." },
    { title: "International Student Visa & FRRO Clearance Guide", size: "3.0 MB", format: "PDF", desc: "Step-by-step immigration assistance for international students enrolling from UAE, UK, Singapore, and East Africa." },
  ];

  const governanceDocs = [
    { title: "Institutional AI Ethics & Academic Integrity Policy (`v4.0`)", size: "2.1 MB", format: "PDF", desc: "Explicit guidelines governing the ethical use of LLMs, automated code generation, and research citations across all departments." },
    { title: "Campus Safety, Biometric Access & Anti-Ragging Manual", size: "1.9 MB", format: "PDF", desc: "Strict UGC and institutional policies enforcing zero tolerance for hazing, with 24/7 emergency grievance redressal procedures." },
    { title: "Undergraduate Research Opportunities (`UROP`) Grant Rubric", size: "1.6 MB", format: "PDF", desc: "Evaluation criteria and proposal templates for undergraduate teams applying for ₹1.5 Crore annual R&D capital." },
  ];

  return (
    <div className="flex flex-col w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* 1. HERO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6">
        <div className="lg:col-span-7 space-y-6">
          <Badge variant="amber">Institutional Repository</Badge>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
            {mode === "v2" ? (
              <>Downloadable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-amber-300">Curricula & Guides</span>.</>
            ) : (
              <>Resources & Documents: <span className="text-[#D97706]">Complete Clarity</span> at Your Fingertips.</>
            )}
          </h1>
          <p className="text-lg opacity-80 leading-relaxed font-normal">
            Access official academic handbooks, Form A-01 registration templates, scholarship packets, and institutional governance charters directly from our digital document center.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="#document-tabs" variant="primary">
              Browse Document Library <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/faq" variant="outline">
              Visit AI Counselor & FAQ
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Card variant={mode === "v2" ? "midnight-glass" : "sandstone"} className="p-8 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D97706] block">
              Document Center Quick Links
            </span>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-gray-400/20">
                <span className="opacity-75">Curriculum Handbooks:</span>
                <strong className="font-mono text-[#D97706]">4 Academic PDF Packs</strong>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-400/20">
                <span className="opacity-75">Form A-01 Application:</span>
                <strong className="font-mono text-[#D97706]">Online / Offline Available</strong>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="opacity-75">Document Security:</span>
                <strong className="font-mono text-emerald-600 dark:text-emerald-400">SHA-256 Verified PDFs</strong>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* 2. INTERACTIVE DOCUMENT TABS */}
      <div id="document-tabs" className="scroll-mt-24 space-y-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-gray-400/20 pb-4">
          <div>
            <h2 className="font-serif text-3xl font-bold">Official Document Repository</h2>
            <p className="text-xs sm:text-sm opacity-75 mt-1">Select a category below to download high-resolution verified PDF charters.</p>
          </div>
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-gray-200/50 dark:bg-gray-800/60 border border-gray-400/20">
            <button
              onClick={() => setActiveTab("curricula")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === "curricula" ? "bg-[#D97706] text-white shadow-md" : "opacity-75 hover:opacity-100"
              }`}
            >
              Academic Curricula
            </button>
            <button
              onClick={() => setActiveTab("admissions")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === "admissions" ? "bg-[#D97706] text-white shadow-md" : "opacity-75 hover:opacity-100"
              }`}
            >
              Admissions & Scholarships
            </button>
            <button
              onClick={() => setActiveTab("governance")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === "governance" ? "bg-[#D97706] text-white shadow-md" : "opacity-75 hover:opacity-100"
              }`}
            >
              Governance & Policies
            </button>
          </div>
        </div>

        {/* TAB LISTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
          {(activeTab === "curricula" ? curriculaDocs : activeTab === "admissions" ? admissionDocs : governanceDocs).map((doc, idx) => (
            <Card key={idx} variant="bordered-interactive" className="p-7 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="royal">{doc.format} • {doc.size}</Badge>
                  <span className="text-xs font-mono text-[#D97706] font-bold">Verified Release</span>
                </div>
                <h3 className="font-serif text-xl font-bold leading-snug">{doc.title}</h3>
                <p className="text-xs opacity-80 leading-relaxed">{doc.desc}</p>
              </div>

              <div className="pt-4 border-t border-gray-400/15 flex items-center justify-between">
                <span className="text-[11px] font-mono opacity-60">SHA-256: 9f8a...c4b2</span>
                <Button href="/admissions" variant="primary" size="sm" className="shadow-md">
                  <Download className="w-3.5 h-3.5 mr-1.5" /> Download PDF
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* 3. NEED CUSTOM ASSISTANCE CTA */}
      <Card variant={mode === "v2" ? "midnight-glass" : "sandstone"} className="p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <Badge variant="amber">AI Counselor Assistance</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">Have Specific Questions About Our Documents?</h2>
          <p className="text-sm opacity-80 leading-relaxed max-w-2xl">
            Our interactive FAQ & AI Counselor Center provides instant, 24/7 guidance regarding Form A-01 registration nuances, Cambridge A-Level equivalencies, and scholarship criteria.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col items-start sm:items-end justify-center">
          <Button href="/faq" variant="primary" size="lg" className="shadow-xl">
            Visit FAQ & Ask AI Box <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
