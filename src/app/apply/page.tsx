"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/MotionSystem";
import { 
  Calendar, 
  ChevronDown, 
  Phone, 
  Mail, 
  UploadCloud, 
  CheckCircle2, 
  ArrowRight, 
  Plus, 
  FileCheck,
  ShieldCheck
} from "lucide-react";

export default function ApplyPage() {
  const [activeStep, setActiveStep] = useState<number>(1);

  // Form State for interactive simulation
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "Select Gender",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    board: "CBSE",
    yearOfPassing: "2025",
    qualifyingExam: "JEE Main",
    examScore: "",
    firstPref: "B.Tech Architectural Computing (4 Years)",
    secondPref: "B.Arch Sustainable Design & Urbanism (5 Years)",
    scholarshipOptIn: true,
    residency: "Yes — Sandstone Air-conditioned Suite"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white dark:bg-[#0A0A0A] text-[#1E293B] dark:text-gray-100 selection:bg-[#2563EB] selection:text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <ScrollReveal animation="fadeUp">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Top Header & Title */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="w-8 sm:w-12 h-0.5 bg-[#2563EB] inline-block"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
              ADMISSION CYCLE 2025-26
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E293B] tracking-tight pt-1">
            Begin Your Application
          </h1>
          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl font-normal leading-relaxed pt-1">
            Welcome to the Centre of Innovative Studies, Jodhpur. Your journey toward academic excellence starts here. Please complete the following steps to submit your application.
          </p>
        </div>

        {/* Step Progress Indicator */}
        <div className="border-b border-gray-200/80 pb-6 mb-10 mt-8 flex items-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar">
          {[
            { step: 1, label: "PERSONAL INFO" },
            { step: 2, label: "ACADEMIC DETAILS" },
            { step: 3, label: "PROGRAM SELECTION" },
            { step: 4, label: "PAYMENT" }
          ].map((s) => {
            const isActive = activeStep === s.step;
            const isCompleted = activeStep > s.step || isSubmitted;

            return (
              <button
                key={s.step}
                type="button"
                onClick={() => !isSubmitted && setActiveStep(s.step)}
                className={`flex items-center gap-3 shrink-0 group focus:outline-none transition-all ${
                  isActive ? "opacity-100" : isCompleted ? "opacity-80 hover:opacity-100" : "opacity-50 hover:opacity-75"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full font-mono text-xs font-bold flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/20"
                      : isCompleted
                      ? "bg-emerald-600 text-white border border-emerald-600"
                      : "border border-gray-300 text-gray-500 bg-white"
                  }`}
                >
                  {isCompleted && !isActive ? <CheckCircle2 className="w-4 h-4" /> : s.step}
                </div>
                <span
                  className={`font-mono text-xs font-bold uppercase tracking-wider ${
                    isActive
                      ? "text-[#1E293B]"
                      : isCompleted
                      ? "text-emerald-700"
                      : "text-gray-400 font-medium"
                  }`}
                >
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Form Left (8 cols) & Sidebar Right (4 cols) */}
        {isSubmitted ? (
          /* Submission Success State */
          <div className="bg-gradient-to-br from-[#EFF6FF] to-white border border-blue-200/80 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto my-8 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-600/20">
              <FileCheck className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 block mb-2">
              FORM A-01 SUCCESSFULLY LODGED
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E293B]">
              Application Submitted & Registered
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-4 leading-relaxed max-w-xl mx-auto">
              Thank you, <strong className="text-[#1E293B]">{formData.firstName || "Applicant"}</strong>. Your application for <strong className="text-[#2563EB]">{formData.firstPref}</strong> has been received by the Admissions Directorate under Candidate ID <strong className="font-mono text-[#1E293B]">CIS-2026-8492</strong>.
            </p>
            <div className="mt-8 pt-8 border-t border-blue-100 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/admissions"
                className="bg-[#2563EB] hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-md transition-all inline-flex items-center gap-2"
              >
                RETURN TO ADMISSIONS PORTAL <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-white hover:bg-gray-50 text-[#1E293B] border border-gray-300 font-mono text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition-all"
              >
                EDIT OR REVIEW APPLICATION
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: FORM SECTIONS (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Card 1: Personal Information */}
              <div
                onClick={() => activeStep !== 1 && setActiveStep(1)}
                className={`bg-white rounded-2xl transition-all duration-300 border ${
                  activeStep === 1
                    ? "border-gray-200 p-6 sm:p-8 shadow-sm"
                    : "border-gray-200 p-6 sm:p-7 shadow-sm flex items-center justify-between cursor-pointer hover:border-gray-300 opacity-60 hover:opacity-100"
                }`}
              >
                {activeStep === 1 ? (
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#1E293B]">
                      01. Personal Information
                    </h2>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-1 mb-6">
                      Enter the legal details of the applicant as per government records.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* First Name */}
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          FIRST NAME
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Aravind"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="w-full border border-blue-400 rounded-xl px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans transition-all"
                        />
                      </div>

                      {/* Last Name */}
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          LAST NAME
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Singh"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans transition-all"
                        />
                      </div>

                      {/* Date of Birth */}
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          DATE OF BIRTH
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="DD / MM / YYYY"
                            value={formData.dob}
                            onChange={(e) => handleInputChange("dob", e.target.value)}
                            className="w-full border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans transition-all"
                          />
                          <Calendar className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Gender */}
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          GENDER
                        </label>
                        <div className="relative">
                          <select
                            value={formData.gender}
                            onChange={(e) => handleInputChange("gender", e.target.value)}
                            className="w-full border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans appearance-none transition-all cursor-pointer"
                          >
                            <option value="Select Gender" disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans transition-all"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          PHONE NUMBER
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 00000 00000"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans transition-all"
                        />
                      </div>

                      {/* Residential Address (Full Width) */}
                      <div className="sm:col-span-2">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          RESIDENTIAL ADDRESS
                        </label>
                        <input
                          type="text"
                          placeholder="Street name, Apartment, etc."
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans transition-all"
                        />
                      </div>

                      {/* City */}
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          CITY
                        </label>
                        <input
                          type="text"
                          placeholder="Jodhpur"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans transition-all"
                        />
                      </div>

                      {/* State */}
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          STATE
                        </label>
                        <input
                          type="text"
                          placeholder="Rajasthan"
                          value={formData.state}
                          onChange={(e) => handleInputChange("state", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans transition-all"
                        />
                      </div>

                      {/* Pin Code */}
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          PIN CODE
                        </label>
                        <input
                          type="text"
                          placeholder="342001"
                          value={formData.pinCode}
                          onChange={(e) => handleInputChange("pinCode", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans transition-all"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1E293B]/70">
                      01. Personal Information
                    </h2>
                    <Plus className="w-5 h-5 text-gray-400" />
                  </>
                )}
              </div>

              {/* Card 2: Academic Details */}
              <div
                onClick={() => activeStep !== 2 && setActiveStep(2)}
                className={`bg-white rounded-2xl transition-all duration-300 border ${
                  activeStep === 2
                    ? "border-gray-200 p-6 sm:p-8 shadow-sm"
                    : "border-gray-200 p-6 sm:p-7 shadow-sm flex items-center justify-between cursor-pointer hover:border-gray-300 opacity-60 hover:opacity-100"
                }`}
              >
                {activeStep === 2 ? (
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#1E293B]">
                      02. Academic Details
                    </h2>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-1 mb-6">
                      Provide your senior secondary qualifications and standard examination records.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Senior Secondary Board */}
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          SENIOR SECONDARY BOARD (CLASS 12)
                        </label>
                        <div className="relative">
                          <select
                            value={formData.board}
                            onChange={(e) => handleInputChange("board", e.target.value)}
                            className="w-full border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans appearance-none transition-all cursor-pointer"
                          >
                            <option value="CBSE">CBSE (Central Board of Secondary Education)</option>
                            <option value="ICSE / ISC">ICSE / ISC</option>
                            <option value="State Board">State Board</option>
                            <option value="Cambridge A-Levels">Cambridge A-Levels</option>
                            <option value="IB Diploma">IB Diploma</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Year of Passing */}
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          YEAR OF PASSING
                        </label>
                        <div className="relative">
                          <select
                            value={formData.yearOfPassing}
                            onChange={(e) => handleInputChange("yearOfPassing", e.target.value)}
                            className="w-full border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans appearance-none transition-all cursor-pointer"
                          >
                            <option value="2025">2025</option>
                            <option value="2026 (Awaited)">2026 (Awaited)</option>
                            <option value="2024">2024</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Qualifying Exam */}
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          QUALIFYING ENTRANCE EXAM
                        </label>
                        <div className="relative">
                          <select
                            value={formData.qualifyingExam}
                            onChange={(e) => handleInputChange("qualifyingExam", e.target.value)}
                            className="w-full border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans appearance-none transition-all cursor-pointer"
                          >
                            <option value="JEE Main">JEE Main</option>
                            <option value="JEE Advanced">JEE Advanced</option>
                            <option value="NATA">NATA (National Aptitude Test in Architecture)</option>
                            <option value="SAT / ACT">SAT / ACT (International Equivalency)</option>
                            <option value="Direct Merit Assessment">Direct Institutional Aptitude Assessment</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Exam Score */}
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          EXAM SCORE OR PERCENTILE
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 98.4 Percentile or Score"
                          value={formData.examScore}
                          onChange={(e) => handleInputChange("examScore", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans transition-all"
                        />
                      </div>

                      {/* Upload Box */}
                      <div className="sm:col-span-2 pt-2">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          UPLOAD MARKSHEET / TRANSCRIPT (PDF OR JPG)
                        </label>
                        <div className="border-2 border-dashed border-blue-300 rounded-2xl p-6 text-center bg-[#EFF6FF]/30 hover:bg-[#EFF6FF]/60 transition-all cursor-pointer">
                          <UploadCloud className="w-8 h-8 text-[#2563EB] mx-auto mb-2" />
                          <span className="text-sm font-semibold text-[#1E293B] block">
                            Drag and drop verified academic credentials or browse
                          </span>
                          <span className="text-xs text-[#64748B] block mt-1">
                            Maximum file limit: 5 MB per upload. Accepted formats: PDF, JPEG, PNG.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1E293B]/70">
                      02. Academic Details
                    </h2>
                    <Plus className="w-5 h-5 text-gray-400" />
                  </>
                )}
              </div>

              {/* Card 3: Program Selection */}
              <div
                onClick={() => activeStep !== 3 && setActiveStep(3)}
                className={`bg-white rounded-2xl transition-all duration-300 border ${
                  activeStep === 3
                    ? "border-gray-200 p-6 sm:p-8 shadow-sm"
                    : "border-gray-200 p-6 sm:p-7 shadow-sm flex items-center justify-between cursor-pointer hover:border-gray-300 opacity-60 hover:opacity-100"
                }`}
              >
                {activeStep === 3 ? (
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#1E293B]">
                      03. Program Selection
                    </h2>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-1 mb-6">
                      Choose your desired architectural or computational degree program.
                    </p>

                    <div className="space-y-5">
                      {/* First Preference */}
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          FIRST PREFERENCE DEGREE PROGRAM
                        </label>
                        <div className="relative">
                          <select
                            value={formData.firstPref}
                            onChange={(e) => handleInputChange("firstPref", e.target.value)}
                            className="w-full border border-gray-200 rounded-xl pl-4 pr-10 py-3.5 text-sm font-medium text-[#1E293B] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans appearance-none transition-all cursor-pointer"
                          >
                            <option value="B.Tech Architectural Computing (4 Years)">B.Tech Architectural Computing (4 Years)</option>
                            <option value="B.Arch Sustainable Design & Urbanism (5 Years)">B.Arch Sustainable Design & Urbanism (5 Years)</option>
                            <option value="Integrated B.Tech + M.Tech Spatial AI (5 Years)">Integrated B.Tech + M.Tech Spatial AI (5 Years)</option>
                            <option value="M.Tech Computational Morphology (2 Years)">M.Tech Computational Morphology (2 Years)</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Second Preference */}
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          SECOND PREFERENCE DEGREE PROGRAM
                        </label>
                        <div className="relative">
                          <select
                            value={formData.secondPref}
                            onChange={(e) => handleInputChange("secondPref", e.target.value)}
                            className="w-full border border-gray-200 rounded-xl pl-4 pr-10 py-3.5 text-sm font-medium text-[#1E293B] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans appearance-none transition-all cursor-pointer"
                          >
                            <option value="B.Arch Sustainable Design & Urbanism (5 Years)">B.Arch Sustainable Design & Urbanism (5 Years)</option>
                            <option value="B.Tech Architectural Computing (4 Years)">B.Tech Architectural Computing (4 Years)</option>
                            <option value="Integrated B.Tech + M.Tech Spatial AI (5 Years)">Integrated B.Tech + M.Tech Spatial AI (5 Years)</option>
                            <option value="M.Tech Computational Morphology (2 Years)">M.Tech Computational Morphology (2 Years)</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Scholarship Checkbox */}
                      <div className="pt-2">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.scholarshipOptIn}
                            onChange={(e) => handleInputChange("scholarshipOptIn", e.target.checked)}
                            className="mt-1 w-4 h-4 rounded text-[#2563EB] focus:ring-[#2563EB] border-gray-300"
                          />
                          <div>
                            <span className="text-sm font-semibold text-[#1E293B] block">
                              Automatic Merit & Need-Based Scholarship Evaluation
                            </span>
                            <span className="text-xs text-[#64748B] block mt-0.5">
                              Yes, evaluate my submitted Class 12 / entrance scores for institutional tuition waivers up to 100%.
                            </span>
                          </div>
                        </label>
                      </div>

                      {/* Campus Residency */}
                      <div className="pt-2">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-2">
                          CAMPUS RESIDENCY REQUIREMENTS
                        </label>
                        <div className="relative">
                          <select
                            value={formData.residency}
                            onChange={(e) => handleInputChange("residency", e.target.value)}
                            className="w-full border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm text-[#1E293B] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-sm bg-white font-sans appearance-none transition-all cursor-pointer"
                          >
                            <option value="Yes — Sandstone Air-conditioned Suite">Yes — Sandstone Air-conditioned Residential Suite</option>
                            <option value="No — Day Scholar (Local Jodhpur Residency)">No — Day Scholar (Local Jodhpur Residency)</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1E293B]/70">
                      03. Program Selection
                    </h2>
                    <Plus className="w-5 h-5 text-gray-400" />
                  </>
                )}
              </div>

              {/* Card 4: Payment & Submission (Active when Step 4) */}
              {activeStep === 4 && (
                <div className="bg-white rounded-2xl border border-blue-400/80 p-6 sm:p-8 shadow-sm">
                  <h2 className="font-serif text-2xl font-bold text-[#1E293B]">
                    04. Application Fee & Final Submission
                  </h2>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 mb-6">
                    Review your application summary and complete the standard ₹1,500 registration processing fee.
                  </p>

                  <div className="bg-[#EFF6FF]/60 border border-blue-200/80 rounded-2xl p-5 mb-6 space-y-3 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">APPLICANT NAME:</span>
                      <span className="font-bold text-[#1E293B]">{formData.firstName || "Aravind"} {formData.lastName || "Singh"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">FIRST PREFERENCE:</span>
                      <span className="font-bold text-[#2563EB] text-right">{formData.firstPref}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">QUALIFYING EXAM:</span>
                      <span className="font-bold text-[#1E293B]">{formData.qualifyingExam} ({formData.examScore || "Pending Upload"})</span>
                    </div>
                    <div className="border-t border-blue-200 pt-3 flex justify-between text-sm">
                      <span className="font-bold text-[#1E293B]">TOTAL APPLICATION FEE:</span>
                      <span className="font-bold text-[#2563EB]">₹1,500.00 INR</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={handleSubmitApplication}
                      className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-mono text-sm font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                    >
                      <ShieldCheck className="w-5 h-5" /> PAY ₹1,500 & SUBMIT FORM A-01
                    </button>
                    <p className="text-[11px] text-center text-gray-500 font-sans">
                      Encrypted 256-bit institutional payment gateway. Instant receipt and confirmation SMS sent upon clearance.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Footer Buttons */}
              <div className="flex items-center justify-between pt-6">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  disabled={activeStep === 1}
                  className={`bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-sm ${
                    activeStep === 1 ? "opacity-40 cursor-not-allowed" : ""
                  }`}
                >
                  PREVIOUS
                </button>

                {activeStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-[#2563EB] hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase tracking-wider px-6 sm:px-8 py-3.5 rounded-xl shadow-sm transition-all"
                  >
                    SAVE & CONTINUE
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmitApplication}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider px-6 sm:px-8 py-3.5 rounded-xl shadow-sm transition-all"
                  >
                    SUBMIT NOW
                  </button>
                )}
              </div>

            </div>

            {/* RIGHT COLUMN: SIDEBAR CARDS (4 cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* Card 1: Application Notes */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2563EB]">
                  Application Notes
                </h3>

                <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-bold block mt-4">
                  DEADLINE
                </span>
                <span className="font-bold text-[#1E293B] text-sm sm:text-base block mt-0.5">
                  August 15, 2025
                </span>

                <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-bold block mt-6">
                  REQUIRED DOCUMENTS
                </span>
                <ul className="space-y-2 mt-2.5 text-xs sm:text-sm text-[#64748B]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                    <span>Class 10th Marksheet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                    <span>Class 12th Marksheet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                    <span>Valid ID Proof (Aadhaar/Passport)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                    <span>Recent Passport Photo</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Need Help? */}
              <div className="bg-[#EFF6FF]/60 border border-blue-400/80 rounded-2xl p-6 sm:p-8 shadow-sm">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E293B]">
                  Need Help?
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                  Our admissions team is available from 9 AM to 6 PM (Mon-Sat) to assist you.
                </p>
                <div className="space-y-3 mt-5 text-xs sm:text-sm font-semibold text-[#1E293B]">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>+91 291 2740000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>admissions@cisj.edu.in</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Sandstone Arch Image */}
              <div className="rounded-2xl overflow-hidden shadow-sm aspect-[16/10] border border-gray-200/80 grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80"
                  alt="CIS Jodhpur Sandstone Archway"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>
        )}

      </div>
      </ScrollReveal>
    </div>
  );
}
