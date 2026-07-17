"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/MotionSystem";
import { 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  ChevronDown,
  FileText,
  UploadCloud,
  Award,
  MessageSquare,
  HelpCircle,
  GraduationCap,
  CheckCheck,
  Calendar,
  FileCheck,
  Globe,
  Home,
  Clock
} from "lucide-react";

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Is the entrance exam mandatory if I hold high scores in JEE/NATA?",
      a: "Yes. While JEE and NATA scores are heavily weighted, every applicant must clear the CIS Entrance Evaluation to verify specialized architectural aptitude."
    },
    {
      q: "What options exist for academic fee payment plans?",
      a: "Tuition is split into equal semester payments due at commencement. Candidates can also seek customized bank-tied EMI structures via our partnered desks."
    },
    {
      q: "What is the policy on transfer credentials from accredited universities?",
      a: "Academic migration transfers are eligible during the commencement of Semester 3. A rigorous verification check of academic credits is required."
    },
    {
      q: "Can I apply if my final Class 12 or senior secondary results are still awaited?",
      a: "Yes. Applicants taking their final board examinations in 2026 can apply using predicted grades or Class 10/11 academic transcripts. Provisional admission offers will be issued pending final result declaration."
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-white dark:bg-[#0A0A0A] text-[#1E293B] dark:text-gray-100 selection:bg-[#2563EB] selection:text-white transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <ScrollReveal animation="fadeUp">
        <section className="pt-16 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left w-full">
        <div className="inline-flex items-center gap-2.5 bg-[#EFF6FF]/70 border border-[#3B82F6]/30 text-[#2563EB] font-mono text-xs sm:text-sm px-4 py-2 rounded-md font-bold uppercase tracking-wider mb-6 shadow-sm">
          <Calendar className="w-4 h-4 text-[#2563EB] shrink-0" /> APPLICATION DEADLINE: MARCH 31, 2026
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#111827] leading-tight">
          Your Journey <span className="text-[#C58940]">Begins Here</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-500 font-sans max-w-2xl font-normal leading-relaxed mt-5">
          Admissions are officially open for the academic cohort of 2026-27. Step into a world where modern sciences converge with timeless architectural discipline.
        </p>
        <div className="mt-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 max-w-7xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=75" 
            alt="CIS Jodhpur Heritage Arches" 
            fetchPriority="high"
            decoding="async"
            className="w-full h-[360px] sm:h-[440px] object-cover"
          />
        </div>
      </section>
      </ScrollReveal>

      {/* 2. THE ADMISSION JOURNEY (— FIVE STEPS TO EXCELLENCE) */}
      <ScrollReveal animation="fadeUp">
      <section className="w-full bg-[#EFF6FF]/60 dark:bg-white/5 py-24 px-4 sm:px-6 lg:px-8 border-y border-blue-100/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              — FIVE STEPS TO EXCELLENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] tracking-tight">
              The Admission Journey
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mt-3 leading-relaxed">
              A meticulous selection framework tailored for identifying forward-thinking minds prepared to master dynamic challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {[
              {
                num: "01",
                icon: <FileText className="w-5 h-5 text-[#2563EB]" />,
                title: "Online Application",
                desc: "Create your candidate profile on our secure portal and pay the standard ₹1,500 registration fee.",
                isSolid: false
              },
              {
                num: "02",
                icon: <UploadCloud className="w-5 h-5 text-[#2563EB]" />,
                title: "Docs Submission",
                desc: "Upload verified high school transcripts, score sheets, identity credentials and certificates.",
                isSolid: false
              },
              {
                num: "03",
                icon: <Award className="w-5 h-5 text-[#2563EB]" />,
                title: "Entrance Exam",
                desc: "Sit for our comprehensive entrance evaluation evaluating analytical and logical competencies.",
                isSolid: false
              },
              {
                num: "04",
                icon: <MessageSquare className="w-5 h-5 text-[#2563EB]" />,
                title: "Personal Interview",
                desc: "A critical face-to-face interaction to explore your passions, background, and cultural fit.",
                isSolid: false
              },
              {
                num: "05",
                icon: <CheckCheck className="w-5 h-5 text-white" />,
                title: "Admission Offer",
                desc: "Successful candidates will receive standard formal offer letters outlining confirmation dues.",
                isSolid: true
              }
            ].map((st, idx) => (
              <div key={idx} className="flex flex-col relative group">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-lg font-mono font-bold text-sm flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                    st.isSolid 
                      ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/20" 
                      : "bg-white border-2 border-[#2563EB] text-[#2563EB] shadow-sm"
                  }`}>
                    {st.num}
                  </div>
                  {idx < 4 && (
                    <div className="hidden lg:block flex-1 border-t border-dashed border-blue-200 ml-4 mr-2" />
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center ${st.isSolid ? "bg-[#2563EB] text-white" : "bg-blue-50 text-[#2563EB]"}`}>
                    {st.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1E293B]">{st.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed pr-2">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ELIGIBILITY CRITERIA (— ADMISSIONS STANDARDS) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
            — ADMISSIONS STANDARDS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] tracking-tight">
            Eligibility Criteria
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mt-3 leading-relaxed">
            Review academic guidelines, minimum prerequisites, and designated mandatory examination guidelines for our premium faculties.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#EFF6FF] border-b border-blue-100 text-[#2563EB] font-mono text-xs uppercase tracking-wider font-bold">
                  <th className="py-5 px-6 sm:px-8">PROGRAM NAME</th>
                  <th className="py-5 px-6 sm:px-8">MIN QUALIFICATION</th>
                  <th className="py-5 px-6 sm:px-8">MIN PERCENTAGE</th>
                  <th className="py-5 px-6 sm:px-8">ENTRANCE EXAM REQUIRED</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/70">
                {[
                  {
                    name: "B.Sc. Architecture & Environmental Design",
                    qual: "10+2 with Physics, Chem, Math",
                    perc: "60% Aggregate",
                    exam: "NATA / CIS Entrance Evaluation",
                    icon: <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  },
                  {
                    name: "B.Tech Computational Engineering",
                    qual: "10+2 with Mathematics",
                    perc: "65% Aggregate",
                    exam: "JEE Main / CIS Entrance Evaluation",
                    icon: <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  },
                  {
                    name: "M.Sc. Urban Planning & AI Systems",
                    qual: "B.Sc / B.Tech degree in relevant field",
                    perc: "55% Aggregate",
                    exam: "GATE / CIS Post-Grad Merit Exam",
                    icon: <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  },
                  {
                    name: "Executive Post-Grad in Digital Craft",
                    qual: "Graduation + 2 Years Work Experience",
                    perc: "Portfolio Review",
                    exam: "Direct Interview Assessment",
                    icon: <HelpCircle className="w-4 h-4 text-[#2563EB] shrink-0" />
                  }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-5 px-6 sm:px-8 font-serif text-base sm:text-lg text-[#1E293B] font-medium">{row.name}</td>
                    <td className="py-5 px-6 sm:px-8 text-[#64748B] text-sm">{row.qual}</td>
                    <td className="py-5 px-6 sm:px-8 text-[#64748B] text-sm">{row.perc}</td>
                    <td className="py-5 px-6 sm:px-8">
                      <div className="flex items-center gap-2 text-sm text-[#1E293B] font-medium">
                        {row.icon}
                        <span>{row.exam}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3.5 IMPORTANT SCHEDULES (— ACADEMIC TIMELINE) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
            — ACADEMIC TIMELINE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] tracking-tight">
            Important Schedules
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mt-3 leading-relaxed">
            Important dates for the 2026-27 admission cycle. We recommend submitting early as assessments operate on rolling rounds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              date: "JAN 15",
              title: "Applications Open",
              desc: "Portal opens for online registration, Form A-01 submission, and initial document uploads."
            },
            {
              date: "MAR 31",
              title: "Form Submission",
              desc: "Deadline for standard Form A-01 submissions and uploading Class 12 / transcript records."
            },
            {
              date: "APR 15",
              title: "Entrance Exam",
              desc: "Online and campus assessment slots conducted for specialized architectural and analytical aptitude."
            },
            {
              date: "APR 30",
              title: "Interview & Offers",
              desc: "Personal interviews conducted with faculty panels followed by formal admission offer notifications."
            },
            {
              date: "JUL 01",
              title: "Semester Commencement",
              desc: "Official campus orientation, hostel check-ins, and commencement of Semester 1 academic lectures."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50/80 border border-blue-100/80 px-3 py-1.5 rounded-md inline-block mb-4">
                  {item.date}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-2.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-100/80 flex items-center gap-1.5 text-xs font-mono font-medium text-gray-400 group-hover:text-[#2563EB] transition-colors">
                <Clock className="w-3.5 h-3.5" /> <span>Rolling Assessment</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TUITION & FEES (— FINANCIAL ARCHITECTURE) */}
      <section className="w-full bg-[#EFF6FF]/40 py-24 px-4 sm:px-6 lg:px-8 border-y border-blue-100/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              — FINANCIAL ARCHITECTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] tracking-tight">
              Tuition & Fees
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mt-3 leading-relaxed">
              Our institutional pricing is built transparently. Below are the basic costs corresponding to our core programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Card 1: Undergraduate Programs */}
            <div className="bg-white rounded-2xl border border-gray-200/80 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 block">
                    UNDERGRADUATE PROGRAMS
                  </span>
                  <div className="text-right">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1E293B] block">₹3,50,000</span>
                    <span className="font-serif italic text-sm text-[#C58940]">/ per year</span>
                  </div>
                </div>

                <div className="mt-10">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-5">
                    WHAT&apos;S INCLUDED
                  </span>
                  <ul className="space-y-4 text-sm text-[#64748B]">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> Core Studio Tuition & Lectures
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> Digital & Craft Library Access
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> Advanced Tech Lab Access
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> State-of-the-Art Sports Arena
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-10 leading-relaxed">
                * Installment Payment: Payable in two blocks of 50% each at the beginning of each semester.
              </p>
            </div>

            {/* Card 2: Postgraduate Programs (POPULAR) */}
            <div className="bg-white rounded-2xl border-2 border-[#2563EB] p-8 sm:p-10 shadow-lg flex flex-col justify-between relative">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block">
                      POSTGRADUATE PROGRAMS
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="bg-[#2563EB] text-white font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-sm">
                      POPULAR
                    </span>
                    <div className="text-right">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1E293B] block">₹2,20,000</span>
                      <span className="font-serif italic text-sm text-[#C58940]">/ per year</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-5">
                    WHAT&apos;S INCLUDED
                  </span>
                  <ul className="space-y-4 text-sm text-[#64748B]">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> Seminars & Masterclasses
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> Premium Reference Repositories
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> AI Research Lab Credentials
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> Sports Facility Access
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> International Lecture Forums
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-10 leading-relaxed">
                * Semester installments supported. Early-bird confirmees get 5% discount on the direct fee block.
              </p>
            </div>

            {/* Card 3: Professional Diplomas */}
            <div className="bg-white rounded-2xl border border-gray-200/80 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 block">
                    PROFESSIONAL DIPLOMAS
                  </span>
                  <div className="text-right">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1E293B] block">₹1,80,000</span>
                    <span className="font-serif italic text-sm text-[#C58940]">/ per year</span>
                  </div>
                </div>

                <div className="mt-10">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-5">
                    WHAT&apos;S INCLUDED
                  </span>
                  <ul className="space-y-4 text-sm text-[#64748B]">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> Executive Studio Workspace
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> Comprehensive Digital Suite
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> Incubation & Startup Labs
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> Sports Complex Membership
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-10 leading-relaxed">
                * Enterprise-sponsored billing programs and structured corporate plan variants available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 FINANCIAL AID & SCHOLARSHIPS (— MERIT & NEED-BASED SUPPORT) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
            — MERIT & NEED-BASED SUPPORT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] tracking-tight">
            Financial Aid & Scholarships
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mt-3 leading-relaxed">
            We reward academic grit and secure equity. A broad portfolio of scholarships matches outstanding applicants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Merit-Based Scholarship */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-8 sm:p-10 shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">
                Merit-Based Scholarship
              </h3>
              <span className="font-sans font-bold text-sm sm:text-base text-[#2563EB] mt-2 block">
                Up to 100% Tuition Waiver
              </span>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 block mb-2">
                  ELIGIBILITY OUTLINE
                </span>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Top 5% scorers in JEE/NATA, or CIS Entrance Evaluation toppers with exemplary Class 12 board examination records (95%+ aggregate).
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] hover:text-blue-700 transition-colors"
              >
                CHECK ELIGIBILITY <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Need-Based Financial Aid */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-8 sm:p-10 shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">
                Need-Based Financial Aid
              </h3>
              <span className="font-sans font-bold text-sm sm:text-base text-[#2563EB] mt-2 block">
                Variable 25% - 75% Support
              </span>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 block mb-2">
                  ELIGIBILITY OUTLINE
                </span>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  For promising candidates with household income limitations. Requires verified income certificates, tax filings, and a direct counseling assessment.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] hover:text-blue-700 transition-colors"
              >
                APPLY FOR GRANT <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Sports Excellence Award */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-8 sm:p-10 shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">
                Sports Excellence Award
              </h3>
              <span className="font-sans font-bold text-sm sm:text-base text-[#2563EB] mt-2 block">
                Up to 50% Tuition Waiver
              </span>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 block mb-2">
                  ELIGIBILITY OUTLINE
                </span>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Applicants who have represented at state or national divisions with certified athletic records and active sports council participation.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] hover:text-blue-700 transition-colors"
              >
                SUBMIT RECORDS <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Scholarship Note Box */}
        <div className="mt-12 bg-gradient-to-br from-[#EFF6FF] to-white border border-blue-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1E293B]">
                Wondering Which Scholarship Fits Your Profile?
              </h4>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                Our admissions committee automatically reviews every applicant for merit waivers during Form A-01 evaluation. You can also request a one-on-one fee consultation.
              </p>
            </div>
          </div>
          <Link
            href="/scholarships"
            className="bg-[#1E293B] hover:bg-[#0A0A0A] text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-sm shrink-0 inline-flex items-center gap-2"
          >
            SCHEDULE FEE COUNSELING <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. REQUIRED DOCUMENTS (— CANDIDATE CHECKLIST) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block">
              — CANDIDATE CHECKLIST
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] tracking-tight">
              Required Documents
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed pt-1">
              Keep digital, clear scans of these certificates ready during document submission stages. All files should be securely loaded in PDF formats under 5MB.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col sm:flex-row gap-4 overflow-x-auto pb-3">
              <div className="bg-white rounded-xl border border-gray-200/90 p-5 shadow-sm flex items-center gap-4 shrink-0 sm:min-w-[340px]">
                <div className="w-9 h-9 rounded-md bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-[#1E293B]">
                  Official Institutional Transfer & Conduct Certificate
                </span>
              </div>

              <div className="bg-white rounded-xl border border-gray-200/90 p-5 shadow-sm flex items-center gap-4 shrink-0 sm:min-w-[340px]">
                <div className="w-9 h-9 rounded-md bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-[#1E293B]">
                  Government Issued Identification (Aadhaar, Passport, or Voter Card)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[
                "Class 10 & 12 Academic Marksheets (Official Board Copy)",
                "Standardized Scorecard (JEE Main, NATA, or GATE)",
                "Recent Passport-Size Digital Photograph (White Background)",
                "Statement of Purpose (SOP) & Research Goals"
              ].map((doc, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200/70 p-4.5 sm:p-5 shadow-sm flex items-center gap-3.5 hover:border-blue-300 transition-colors">
                  <div className="w-8 h-8 rounded-md bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#1E293B]">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 INTERNATIONAL APPLICANTS (— GLOBAL ADMISSIONS HUB) */}
      <section className="w-full bg-[#EFF6FF]/60 py-24 px-4 sm:px-6 lg:px-8 border-y border-blue-100/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                  — GLOBAL ADMISSIONS HUB
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] tracking-tight">
                  International Applicants
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                CIS Jodhpur welcomes candidates from over 15 countries. We embrace global paradigms and support foreign candidates with holistic procedural routing, documentation advice, and comfortable transitioning frameworks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#2563EB] flex items-center justify-center shrink-0">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#1E293B]">
                      Visa &amp; Immigration Support
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed pl-9">
                    Get assistance with official Student Visa (F-1 analogous equivalents) verification, document verification letters, and compliance.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#2563EB] flex items-center justify-center shrink-0">
                      <Home className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#1E293B]">
                      Premium Accommodation
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed pl-9">
                    Access fully-serviced elite campus suite residencies with catering options tailored for global preferences.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 aspect-[16/10] bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"
                  alt="CIS Jodhpur Sandstone Courtyard for International Students"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS (— CLEAR QUERIES) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full border-t border-gray-100">
        <div className="space-y-2 mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block">
            — CLEAR QUERIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] pt-1">
            Need immediate insights? Explore rapid answers mapped to standard entry workflows.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-xl border transition-all ${
                openFaq === idx ? "border-blue-200 shadow-md shadow-blue-500/5" : "border-gray-200/80 shadow-sm"
              }`}
            >
              <button 
                type="button" 
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 sm:p-7 flex items-center justify-between text-left font-serif text-lg sm:text-xl font-bold text-[#1E293B] group focus:outline-none"
              >
                <span className="group-hover:text-[#2563EB] transition-colors pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#2563EB] shrink-0 transition-transform duration-200 ${openFaq === idx ? "transform rotate-180" : ""}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 sm:px-7 pb-6 text-sm sm:text-base text-[#64748B] leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. FINAL CTA BANNER (— BEGIN TODAY —) */}
      <section className="w-full bg-[#EFF6FF]/60 py-24 px-4 sm:px-6 lg:px-8 text-center border-t border-blue-100/80">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block">
            — BEGIN TODAY —
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] tracking-tight">
            Your Architectural Legacy Awaits
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Admissions are competitive and seats for the 2026-2027 academic batch are strictly limited. Ensure your profile is registered early to secure assessment slots.
          </p>
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/apply" 
              className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all inline-flex items-center gap-2 text-sm sm:text-base"
            >
              APPLY ONLINE NOW <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/resources/prospectus.pdf" 
              className="bg-white/90 hover:bg-white text-[#1E293B] border border-gray-200/90 font-semibold px-8 py-4 rounded-xl shadow-sm transition-all inline-flex items-center gap-2.5 text-sm sm:text-base"
            >
              <Download className="w-4 h-4 text-[#64748B]" /> DOWNLOAD PROSPECTUS
            </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
