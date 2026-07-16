"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Home,
  Activity,
  ArrowRight,
  Quote,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function ScholarshipPage() {
  // Interactive Financial Aid Predictor State
  const [income, setIncome] = useState<number>(4.5); // Lakhs
  const [score, setScore] = useState<number>(96); // Percentage

  // Calculate dynamic scholarship prediction based on sliders
  const calculateProjection = () => {
    if (score >= 97 || (score >= 95 && income <= 3)) {
      return {
        percent: "100%",
        grantName: "Chanakya Merit Fellowship",
        description:
          "This estimate corresponds to our highest academic award, covering full tuition for elite board performers or entrance rankers. Fully compatible with other student benefits."
      };
    } else if (score >= 90 || income <= 6) {
      return {
        percent: "75%",
        grantName: "Marwar Opportunity Grant",
        description:
          "This estimate corresponds to the Marwar Opportunity Grant tier based on your family profile. Fully compatible with other student benefits."
      };
    } else if (score >= 80 || income <= 8) {
      return {
        percent: "50%",
        grantName: "Mehrangarh Honor & Aid Tier",
        description:
          "This estimate corresponds to our dual merit-and-need grant tier designed to assist hardworking families and rising academic talents."
      };
    } else {
      return {
        percent: "30%",
        grantName: "Global Scholars Initiative",
        description:
          "This baseline estimate recognizes strong academic foundation and portfolio versatility. Additional financial hardship appeals may be submitted during interview rounds."
      };
    }
  };

  const projection = calculateProjection();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#2563EB] selection:text-white font-sans flex flex-col">
      {/* 1. PORTAL SPECIFIC HEADER (Image 1) */}
      <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] flex items-center justify-center font-serif text-2xl font-bold shadow-sm group-hover:bg-[#1E3A8A] group-hover:text-white transition-all">
              C
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-[#0F172A] leading-tight">
                CIS JODHPUR
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] leading-none mt-0.5">
                SCHOLARSHIP PORTAL
              </span>
            </div>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#475569]">
            <a href="#overview" className="hover:text-[#2563EB] transition-colors">
              Overview
            </a>
            <a href="#tiers" className="hover:text-[#2563EB] transition-colors">
              Scholarships
            </a>
            <a href="#matrix" className="hover:text-[#2563EB] transition-colors">
              Eligibility
            </a>
            <a href="#calculator" className="hover:text-[#2563EB] transition-colors">
              Calculator
            </a>
            <a href="#stories" className="hover:text-[#2563EB] transition-colors">
              Stories
            </a>
          </nav>

          {/* Right CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/apply"
              className="px-5 py-2.5 bg-white border-2 border-[#2563EB] text-[#2563EB] font-bold text-xs uppercase tracking-wider hover:bg-[#2563EB] hover:text-white transition-all shadow-sm flex items-center gap-1.5"
            >
              PORTAL LOGIN →
            </Link>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION (Image 5) */}
      <section id="overview" className="bg-white border-b border-[#E2E8F0] py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#2563EB]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
                  EMPOWERING BRILLIANCE
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0F172A] tracking-tight leading-[1.15]">
                Investing in Your <br className="hidden sm:inline" />
                <span className="italic text-[#0F172A] font-serif">Potential</span>
              </h1>

              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl font-normal">
                CIS Jodhpur believes that financial boundaries should never limit exceptional minds. Our elite scholarship program offers up to 100% tuition coverage to recognize excellence, promote equity, and champion raw athletic vigor.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/apply"
                  className="px-7 py-4 bg-[#2563EB] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1D4ED8] transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  APPLY NOW →
                </Link>
                <a
                  href="#tiers"
                  className="px-7 py-4 bg-white border border-[#BFDBFE] text-[#2563EB] font-bold text-xs uppercase tracking-wider hover:bg-[#EFF6FF] transition-all flex items-center gap-2"
                >
                  EXPLORE AID OPTIONS →
                </a>
              </div>
            </div>

            {/* Right Image Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none bg-[#F1F5F9] border border-[#E2E8F0] shadow-xl overflow-hidden p-3">
                <div className="relative w-full h-full overflow-hidden border border-[#CBD5E1]">
                  <Image
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
                    alt="CIS Jodhpur Campus Architecture & Scholars"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <p className="text-xs uppercase font-bold tracking-widest text-[#93C5FD] mb-1">
                        Mehrangarh Campus Arch
                      </p>
                      <p className="font-serif text-lg leading-snug">
                        Where heritage Rajasthani architecture meets future-ready global scholarship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DISTINGUISHED SCHOLARSHIP TIERS (Image 4) */}
      <section id="tiers" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              <span className="text-[#2563EB] text-sm leading-none">◆</span>
              PATHWAYS OF SUPPORT
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight">
              Distinguished Scholarship Tiers
            </h2>
            <p className="text-base sm:text-lg text-[#64748B]">
              Tailored opportunities designed to foster academic pioneers, assist families in need, and elevate peak physical talents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Merit Excellence */}
            <div className="bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between p-8 relative group">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-bold uppercase tracking-wider">
                    98th Percentile
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#0F172A] mb-3">
                  Merit Excellence
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Top 2% in entrance examinations or high boards, with outstanding extra-curricular portfolios.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F1F5F9] flex items-center justify-between text-xs sm:text-sm">
                <span className="text-[#64748B] font-medium">Coverage</span>
                <span className="font-bold text-[#0F172A]">Up to 100% Tuition</span>
              </div>
            </div>

            {/* Card 2: Need-Based Aid */}
            <div className="bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between p-8 relative group">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
                    <Home className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-bold uppercase tracking-wider">
                    &lt; 5L Income
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#0F172A] mb-3">
                  Need-Based Aid
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Demonstrated financial hardship with family annual income verification below standard thresholds.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F1F5F9] flex items-center justify-between text-xs sm:text-sm">
                <span className="text-[#64748B] font-medium">Coverage</span>
                <span className="font-bold text-[#0F172A]">Up to 75% Tuition</span>
              </div>
            </div>

            {/* Card 3: Sports & Arts Vigor */}
            <div className="bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between p-8 relative group">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
                    <Activity className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-bold uppercase tracking-wider">
                    State/National Level
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#0F172A] mb-3">
                  Sports &amp; Arts Vigor
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  State or National level representation in recognized athletic disciplines or performance arts.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F1F5F9] flex items-center justify-between text-xs sm:text-sm">
                <span className="text-[#64748B] font-medium">Coverage</span>
                <span className="font-bold text-[#0F172A]">Up to 50% Tuition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SCHOLARSHIP ELIGIBILITY MATRIX (Image 10) */}
      <section id="matrix" className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              <span className="text-[#2563EB] text-sm leading-none">◆</span>
              DETAILED CRITERIA
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight">
              Scholarship Eligibility Matrix
            </h2>
            <p className="text-base sm:text-lg text-[#64748B]">
              Review critical thresholds, renewal terms, and institutional deadlines to plan your application timeline.
            </p>
          </div>

          {/* Matrix Table */}
          <div className="bg-white border border-[#E2E8F0] shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                    SCHOLARSHIP
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                    COVERAGE
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                    ELIGIBILITY CRITERIA
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                    RENEWAL CONDITION
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                    DEADLINE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-sm">
                <tr className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-5 px-6 font-serif text-lg text-[#0F172A]">
                    Chanakya Merit Fellowship
                  </td>
                  <td className="py-5 px-6 font-bold text-[#0F172A]">100% Tuition</td>
                  <td className="py-5 px-6 text-[#64748B]">
                    Class 12 Boards &gt;97% or CIS Entrance rank &lt; 50
                  </td>
                  <td className="py-5 px-6 text-[#64748B]">Maintain GPA 8.5/10</td>
                  <td className="py-5 px-6 font-medium text-[#2563EB]">
                    June 15, 2025
                  </td>
                </tr>

                <tr className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-5 px-6 font-serif text-lg text-[#0F172A]">
                    Marwar Opportunity Grant
                  </td>
                  <td className="py-5 px-6 font-bold text-[#0F172A]">50% - 75% Tuition</td>
                  <td className="py-5 px-6 text-[#64748B]">
                    Family Income &lt; ₹6 LPA + high academic standing
                  </td>
                  <td className="py-5 px-6 text-[#64748B]">Maintain GPA 7.0/10</td>
                  <td className="py-5 px-6 font-medium text-[#2563EB]">
                    June 30, 2025
                  </td>
                </tr>

                <tr className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-5 px-6 font-serif text-lg text-[#0F172A]">
                    Mehrangarh Athletic Honor
                  </td>
                  <td className="py-5 px-6 font-bold text-[#0F172A]">30% - 50% Tuition</td>
                  <td className="py-5 px-6 text-[#64748B]">
                    National level medal or State representation
                  </td>
                  <td className="py-5 px-6 text-[#64748B]">
                    Active sports team participation
                  </td>
                  <td className="py-5 px-6 font-medium text-[#2563EB]">
                    May 30, 2025
                  </td>
                </tr>

                <tr className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-5 px-6 font-serif text-lg text-[#0F172A]">
                    Global Scholars Initiative
                  </td>
                  <td className="py-5 px-6 font-bold text-[#0F172A]">40% Tuition + Travel</td>
                  <td className="py-5 px-6 text-[#64748B]">
                    Exceptional creative or scientific portfolio
                  </td>
                  <td className="py-5 px-6 text-[#64748B]">
                    Project showcase per semester
                  </td>
                  <td className="py-5 px-6 font-medium text-[#2563EB]">
                    July 10, 2025
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. THREE-STEP APPLICATION BLUEPRINT (Image 6) */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              <span className="text-[#2563EB] text-sm leading-none">◆</span>
              SIMPLIFIED JOURNEY
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight">
              Three-Step Application Blueprint
            </h2>
            <p className="text-base sm:text-lg text-[#64748B]">
              A structured, transparent pathway ensuring highly qualified candidates receive decisions in optimal time frames.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 01 */}
            <div className="bg-white border border-[#E2E8F0] p-8 sm:p-10 shadow-sm hover:border-[#BFDBFE] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-4xl sm:text-5xl font-normal text-[#2563EB]">
                    01
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#93C5FD]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0F172A] mb-3">
                  Create Aid Profile
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Access our admission portal and complete the dedicated financial aid profile, uploading required educational &amp; income credentials.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="bg-white border border-[#E2E8F0] p-8 sm:p-10 shadow-sm hover:border-[#BFDBFE] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-4xl sm:text-5xl font-normal text-[#2563EB]">
                    02
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#93C5FD]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0F172A] mb-3">
                  Submit Portfolio
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Furnish academic recommendations, personal essays, or athletic certifications directly evaluated by the CIS Dean Council.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="bg-white border border-[#E2E8F0] p-8 sm:p-10 shadow-sm hover:border-[#BFDBFE] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-4xl sm:text-5xl font-normal text-[#2563EB]">
                    03
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0F172A] mb-3">
                  Review &amp; Interview
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Shortlisted candidates undergo a personal interview with our scholarship board. Final allocations are published on July 30.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SCHOLARS OF CIS JODHPUR (Image 3) */}
      <section id="stories" className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              <span className="text-[#2563EB] text-sm leading-none">◆</span>
              TRIUMPHANT VOICES
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight">
              Scholars of CIS Jodhpur
            </h2>
            <p className="text-base sm:text-lg text-[#64748B]">
              Hear from our distinguished scholarship alumni who are redefining innovation, technology, and governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quote 1: Aditya Vardhan */}
            <div className="bg-[#EFF6FF]/60 border border-[#BFDBFE]/60 p-8 sm:p-10 shadow-sm flex flex-col justify-between relative">
              <Quote className="w-10 h-10 text-[#60A5FA] mb-6" />
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-8 font-normal italic">
                &ldquo;The Chanakya Fellowship changed my entire family&apos;s trajectory. CIS Jodhpur didn&apos;t just fund my education; they empowered me to pursue research in computer vision without holding back.&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-[#BFDBFE]/60">
                <div className="w-12 h-12 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                    alt="Aditya Vardhan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0F172A]">Aditya Vardhan</h4>
                  <p className="text-xs font-bold text-[#2563EB]">B.Tech CSE &apos;24</p>
                </div>
              </div>
            </div>

            {/* Quote 2: Meera Rathore */}
            <div className="bg-[#EFF6FF]/60 border border-[#BFDBFE]/60 p-8 sm:p-10 shadow-sm flex flex-col justify-between relative">
              <Quote className="w-10 h-10 text-[#60A5FA] mb-6" />
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-8 font-normal italic">
                &ldquo;As a state tennis player, balancing rigorous high school with elite training is demanding. The sports scholarship covered 50% tuition and gave me access to state-of-the-art facilities.&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-[#BFDBFE]/60">
                <div className="w-12 h-12 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
                    alt="Meera Rathore"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0F172A]">Meera Rathore</h4>
                  <p className="text-xs font-bold text-[#2563EB]">Liberal Arts &apos;25</p>
                </div>
              </div>
            </div>

            {/* Quote 3: Rahul Purohit */}
            <div className="bg-[#EFF6FF]/60 border border-[#BFDBFE]/60 p-8 sm:p-10 shadow-sm flex flex-col justify-between relative">
              <Quote className="w-10 h-10 text-[#60A5FA] mb-6" />
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-8 font-normal italic">
                &ldquo;My father passed away right before board exams. Without the Opportunity Grant, I couldn&apos;t have dreamt of joining an elite institution. CIS is a true sanctuary of hope.&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-[#BFDBFE]/60">
                <div className="w-12 h-12 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt="Rahul Purohit"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0F172A]">Rahul Purohit</h4>
                  <p className="text-xs font-bold text-[#2563EB]">Data Science &apos;26</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINANCIAL AID PREDICTOR (Image 7) */}
      <section id="calculator" className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              <span className="text-[#2563EB] text-sm leading-none">◆</span>
              EMPIRICAL ESTIMATION
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight">
              Financial Aid Predictor
            </h2>
            <p className="text-base sm:text-lg text-[#64748B]">
              Receive an instant, automated assessment of your prospective tuition coverage by adjusting family metrics below.
            </p>
          </div>

          {/* Interactive Calculator Wrapper */}
          <div className="bg-white border border-[#DBEAFE] shadow-lg max-w-5xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Side: Sliders */}
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-10">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0F172A]">
                  Estimate Your Aid Tiers
                </h3>

                {/* Slider 1: Annual Family Income */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-[#334155]">Annual Family Income</span>
                    <span className="text-[#2563EB] font-bold text-base">
                      ₹ {income.toFixed(1)} Lakhs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="15"
                    step="0.5"
                    value={income}
                    onChange={(e) => setIncome(parseFloat(e.target.value))}
                    className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                  />
                  <div className="flex justify-between text-xs text-[#64748B]">
                    <span>₹ 2 Lakhs</span>
                    <span>₹ 12 Lakhs+</span>
                  </div>
                </div>

                {/* Slider 2: Academic Grade / Board Score */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-[#334155]">Academic Grade / Board Score</span>
                    <span className="text-[#2563EB] font-bold text-base">{score} %</span>
                  </div>
                  <input
                    type="range"
                    min="75"
                    max="100"
                    step="1"
                    value={score}
                    onChange={(e) => setScore(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                  />
                  <div className="flex justify-between text-xs text-[#64748B]">
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Estimated Projection */}
              <div className="lg:col-span-5 bg-[#F8FAFC] border-t lg:border-t-0 lg:border-l border-[#E2E8F0] p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#2563EB] block mb-3">
                    ESTIMATED PROJECTION
                  </span>
                  <div className="font-serif text-6xl sm:text-7xl font-normal text-[#2563EB] tracking-tight leading-none mb-3">
                    {projection.percent}
                  </div>
                  <h4 className="font-bold text-lg text-[#0F172A] mb-4">
                    Tuition Fee Waiver
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                    {projection.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  <Link
                    href={`/apply?aid=${projection.percent}`}
                    className="w-full py-4 bg-[#2563EB] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1D4ED8] transition-all text-center block shadow-md hover:shadow-lg"
                  >
                    APPLY WITH THESE SCORES →
                  </Link>
                  <p className="text-[10px] text-[#64748B] text-center leading-tight">
                    *T&amp;C apply. Final award relies on comprehensive interview board appraisal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLAIM YOUR DESERVED FUTURE TODAY - BOTTOM CTA BANNER (Image 8 & 9) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#BFDBFE] p-12 sm:p-16 shadow-sm text-center max-w-4xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight">
              Claim Your Deserved Future Today
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
              Join a class of elite scholars at Jodhpur&apos;s premier landmark educational campus. Scholarships are strictly limited and assessed in rounds.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/apply"
                className="px-8 py-4 bg-[#2563EB] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1D4ED8] transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                APPLY FOR SCHOLARSHIP →
              </Link>
              <a
                href="/resources"
                className="px-8 py-4 bg-white border border-[#BFDBFE] text-[#2563EB] font-bold text-xs uppercase tracking-wider hover:bg-[#EFF6FF] transition-all flex items-center gap-2"
              >
                DOWNLOAD GUIDE PDF →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
