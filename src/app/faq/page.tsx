"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { ArrowRight, ChevronDown, ChevronUp, HelpCircle, FileText, Phone } from "lucide-react";

export default function FAQPage() {
  const { mode } = useTheme();
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqItems = [
    {
      id: "faq-1",
      badge: "Academic Tracks",
      title: "What is the difference between the Cambridge CAIE track and CBSE at CIS Jodhpur?",
      content: "The Cambridge International (IGCSE & A-Levels) track emphasizes international analytical inquiry, flexible subject combinations across sciences and humanities, and direct preparation for global university admissions (Oxford, Cambridge, Ivy League). The CBSE Senior Secondary track follows the rigorous NCERT curriculum specifically tailored for Indian competitive engineering and medical examinations including JEE Advanced and NEET."
    },
    {
      id: "faq-2",
      badge: "Scholarships",
      title: "How do I apply for Institutional Merit Scholarships?",
      content: "Scholarships are evaluated automatically upon submission of your Form A-01 registration and academic transcripts. Candidates with outstanding academic records in Class 12 board examinations or national entrance trials receive merit fee waivers ranging from 25% up to 100% of tuition."
    },
    {
      id: "faq-3",
      badge: "Campus Life",
      title: "What residential accommodations and facilities are provided on campus?",
      content: "CIS Jodhpur operates as a secure, comprehensive residential campus. Student accommodations feature air-conditioned suites, high-speed fiber connectivity, multi-cuisine dining facilities, and 24/7 access to library archives, computation nodes, and sports arenas."
    },
    {
      id: "faq-4",
      badge: "Admissions",
      title: "Can international students or NRI candidates apply through Form A-01?",
      content: "Yes. Our International Admissions Desk guides NRI and foreign national students through Form A-01 using international equivalency records (IB Diplomas, Cambridge A-Levels, SAT scores). Our team assists with visa documentation and institutional onboarding."
    },
    {
      id: "faq-5",
      badge: "Supercomputing",
      title: "Who has access to the NVIDIA DGX Computational Nodes?",
      content: "All undergraduate and post-graduate students enrolled in relevant engineering, artificial intelligence, and urban risk programs gain structured laboratory access for curriculum projects, research grants, and hackathon simulations."
    },
    {
      id: "faq-6",
      badge: "Placement Co-op",
      title: "How does the Semester 8 Industry Co-op immersion work?",
      content: "During their final semester, candidates participate in structured 12-week embedded corporate residencies across top-tier consulting firms, investment banks, and technology organizations, directly bridging academic theory with professional practice."
    },
  ];

  return (
    <div className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors ${
      mode === "v2" ? "bg-[#0A0A0A] text-[#EDEDED]" : "bg-[#F9F6F0] text-[#111827]"
    }`}>
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header (`Exact Figma Content & Structure`) */}
        <div className="text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block">
            INSTITUTIONAL DIRECTORY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
            Clear, transparent answers regarding admissions criteria, academic pathways, residential life, and institutional policies.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all ${
                  mode === "v2"
                    ? "bg-[#111827] border-white/10"
                    : "bg-white border-[#E6DED1] shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#2563EB]/10 text-[#2563EB]">
                      {item.badge}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <div className={`p-2 rounded-md border shrink-0 transition-transform ${
                    isOpen ? "bg-[#2563EB] text-white border-[#2563EB]" : "border-gray-400/20 opacity-70"
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm opacity-80 leading-relaxed border-t border-gray-400/10">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA (`Exact Figma CTA: Submit Form A-01 or Contact Admissions`) */}
        <div className={`p-10 rounded-3xl border text-center space-y-6 ${
          mode === "v2" ? "bg-[#111827] border-white/10" : "bg-white border-[#E6DED1] shadow-md"
        }`}>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Have an Inquiry Not Listed Here?
          </h2>
          <p className="text-sm opacity-80 max-w-xl mx-auto leading-relaxed">
            Our admissions office is ready to provide personalized guidance regarding curriculum structure, international transfers, and scholarship reviews.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/apply"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              APPLY NOW (`Form A-01`) <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm border transition-all flex items-center justify-center gap-2 uppercase tracking-wider ${
                mode === "v2"
                  ? "border-white/20 hover:bg-white/10 text-white"
                  : "border-[#111827]/20 hover:bg-[#111827]/5 text-[#111827]"
              }`}
            >
              CONTACT ADMISSIONS
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
