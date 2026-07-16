"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Filter, 
  Search, 
  CheckCircle2, 
  Mail, 
  Sparkles,
  Users,
  Award,
  Music,
  BookOpen,
  Trophy
} from "lucide-react";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [selectedDate, setSelectedDate] = useState<number | null>(18);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const tabs = ["ALL", "ACADEMIC", "CULTURAL", "SPORTS", "WORKSHOPS", "GUEST LECTURES"];

  // Calendar dates with dots and details
  const eventDays: Record<number, { title: string; category: string; time: string; color: string }> = {
    2: { title: "Robotics Workshop & AI Bootcamp", category: "WORKSHOPS", time: "10:00 AM - 04:00 PM", color: "#2563EB" },
    8: { title: "Guest Lecture: Dr. A. K. Sharma on Quantum Computing", category: "GUEST LECTURES", time: "11:30 AM - 01:00 PM", color: "#2563EB" },
    18: { title: "National Tech & Design Forum 2024", category: "ACADEMIC", time: "09:00 AM - 05:00 PM", color: "#D97706" },
    22: { title: "Acoustic Harmony: Inter-College Music Fest", category: "CULTURAL", time: "06:00 PM - 09:30 PM", color: "#2563EB" },
    29: { title: "Annual CIS Athletics & Sports Meet", category: "SPORTS", time: "08:00 AM - 06:00 PM", color: "#2563EB" }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1E293B] font-sans selection:bg-[#2563EB]/10 selection:text-[#2563EB]">
      
      {/* SECTION 1: HERO BANNER (input_file_3.png) */}
      <section className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center bg-[#1E293B] overflow-hidden">
        {/* Background architectural image with gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity scale-105 transform transition-transform duration-1000 ease-out"
          style={{ backgroundImage: `url('/about-hero.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/70 to-[#1E293B]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center flex flex-col items-center">
          {/* Tag matching input_file_3.png exactly */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 backdrop-blur-md mb-6">
            <span className="w-8 h-[2px] bg-[#60A5FA]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#60A5FA]">
              CIS JODHPUR EVENTS PORTAL
            </span>
          </div>

          {/* Title matching input_file_3.png */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight font-normal max-w-4xl leading-[1.1]">
            Campus Life in Motion
          </h1>

          {/* Subtitle matching input_file_3.png */}
          <p className="mt-6 text-[#94A3B8] text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-light">
            Discover a curated calendar of academic forums, rich cultural spectacles, athletic duels, and innovative workshops shaping the future leaders at CIS Jodhpur.
          </p>
        </div>
      </section>

      {/* SECTION 2: CATEGORY FILTER TABS PILL STRIP (input_file_1.png) */}
      <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="bg-white border border-[#E2E8F0] rounded-full p-1.5 shadow-md flex flex-wrap items-center justify-center gap-1 sm:gap-1.5">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 sm:px-6 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-[#2563EB] text-white font-bold shadow-sm"
                    : "text-[#64748B] hover:text-[#1E293B] hover:bg-slate-50 font-medium"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: UPCOMING EVENTS GRID */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#2563EB]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB]">
                MARK YOUR CALENDAR
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E293B] font-normal tracking-tight">
              Upcoming Events
            </h2>
          </div>

          <Link
            href="#calendar-section"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] hover:text-[#1d4ed8] group transition-colors"
          >
            <span>VIEW ALL CALENDAR</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-Card Layout matching design overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Featured Left Card (7 cols) */}
          <div className="lg:col-span-7 group bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="relative h-64 sm:h-80 bg-slate-100 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('/research-hero.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-[#2563EB] text-white text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  ACADEMIC
                </span>
                <span className="bg-white/90 backdrop-blur-md text-[#1E293B] text-[11px] font-mono font-bold px-3 py-1 rounded-full shadow-sm">
                  FEATURED
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
                  <Clock className="w-4 h-4 text-[#60A5FA]" />
                  <span className="text-xs font-mono tracking-wide">09:00 AM - 05:00 PM</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
                  <MapPin className="w-4 h-4 text-[#60A5FA]" />
                  <span className="text-xs font-mono tracking-wide">Main Auditorium, Block A</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-[#D97706] font-bold mb-3">
                  <CalendarIcon className="w-4 h-4" />
                  <span>NOVEMBER 18, 2024</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1E293B] font-normal tracking-tight group-hover:text-[#2563EB] transition-colors">
                  National Tech & Design Forum 2024
                </h3>
                <p className="mt-3 text-[#64748B] text-sm sm:text-base leading-relaxed">
                  Annual flagship symposium bringing together industry visionaries, student innovators, and design architects for keynote panels and prototype exhibitions. Experience groundbreaking discussions on AI, sustainable infrastructure, and interactive media.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F1F5F9] flex items-center justify-between">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold font-mono">AS</div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#0F172A] text-white flex items-center justify-center text-xs font-bold font-mono">VK</div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#3B82F6] text-white flex items-center justify-center text-xs font-bold font-mono">+120</div>
                </div>

                <button className="inline-flex items-center gap-2 bg-[#1E293B] hover:bg-[#2563EB] text-white px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow">
                  <span>REGISTER NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column Stack (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Right Card 1 (Cultural) */}
            <div className="group bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="bg-[#2563EB]/10 text-[#2563EB] text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    CULTURAL
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#64748B] font-medium">
                    <CalendarIcon className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>NOV 22, 2024</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#1E293B] font-normal tracking-tight group-hover:text-[#2563EB] transition-colors">
                  Acoustic Harmony: Inter-College Music Fest
                </h3>
                <p className="mt-2 text-[#64748B] text-sm leading-relaxed">
                  A celebration of classical, fusion, and contemporary musical traditions featuring performances by top student ensembles across Rajasthan.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#64748B]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>06:00 PM - 09:30 PM</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Open Air Theatre (OAT)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#F1F5F9] flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded">
                  FREE FOR STUDENTS
                </span>
                <button className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] hover:text-[#1d4ed8] group-hover:translate-x-1 transition-all">
                  <span>GET TICKETS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Card 2 (Sports) */}
            <div className="group bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D97706]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="bg-[#D97706]/10 text-[#D97706] text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    SPORTS
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#64748B] font-medium">
                    <CalendarIcon className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>NOV 29, 2024</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#1E293B] font-normal tracking-tight group-hover:text-[#2563EB] transition-colors">
                  Annual CIS Athletics & Sports Meet
                </h3>
                <p className="mt-2 text-[#64748B] text-sm leading-relaxed">
                  Three days of intense track and field competitions, team sports tournaments, and athletic excellence at our olympic-standard sports complex.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#64748B]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>08:00 AM - 06:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>CIS Sports Stadium</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#F1F5F9] flex items-center justify-between">
                <span className="text-xs font-mono text-[#64748B]">
                  Registration closes Nov 24
                </span>
                <button className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] hover:text-[#1d4ed8] group-hover:translate-x-1 transition-all">
                  <span>VIEW SCHEDULE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE CALENDAR SECTION (input_file_0.png) */}
      <section id="calendar-section" className="py-20 sm:py-28 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Plan Your Month & Highlights (input_file_0.png) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block mb-2">
                  PLAN YOUR MONTH
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#1E293B] font-normal tracking-tight">
                  November 2024
                </h2>
                <p className="mt-4 text-[#64748B] text-base leading-relaxed">
                  Never miss an opportunity to engage, grow, and lead. Tap any date on the right carrying the gold dot to reveal critical event timelines.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] space-y-4">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  THIS MONTH&apos;S HIGHLIGHTS
                </h3>

                <ul className="space-y-3">
                  <li 
                    onClick={() => setSelectedDate(18)}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                      selectedDate === 18 ? "bg-white shadow-sm border border-[#2563EB]/20" : "hover:bg-white/60"
                    }`}
                  >
                    <span className="text-xs font-mono font-bold text-[#D97706] whitespace-nowrap">
                      • 18 Nov:
                    </span>
                    <span className={`text-sm font-medium ${selectedDate === 18 ? "text-[#1E293B]" : "text-[#64748B]"}`}>
                      National Tech & Design Forum
                    </span>
                  </li>

                  <li 
                    onClick={() => setSelectedDate(22)}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                      selectedDate === 22 ? "bg-white shadow-sm border border-[#2563EB]/20" : "hover:bg-white/60"
                    }`}
                  >
                    <span className="text-xs font-mono font-bold text-[#2563EB] whitespace-nowrap">
                      • 22 Nov:
                    </span>
                    <span className={`text-sm font-medium ${selectedDate === 22 ? "text-[#1E293B]" : "text-[#64748B]"}`}>
                      Acoustic Harmony Show
                    </span>
                  </li>

                  <li 
                    onClick={() => setSelectedDate(29)}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                      selectedDate === 29 ? "bg-white shadow-sm border border-[#2563EB]/20" : "hover:bg-white/60"
                    }`}
                  >
                    <span className="text-xs font-mono font-bold text-[#2563EB] whitespace-nowrap">
                      • 29 Nov:
                    </span>
                    <span className={`text-sm font-medium ${selectedDate === 29 ? "text-[#1E293B]" : "text-[#64748B]"}`}>
                      CIS Athletics Meet
                    </span>
                  </li>
                </ul>
              </div>

              {/* Selected Day Detail preview box */}
              {selectedDate && eventDays[selectedDate] && (
                <div className="bg-white rounded-2xl border border-[#2563EB]/30 p-6 shadow-sm relative overflow-hidden animate-fadeIn">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#2563EB]" />
                  <div className="flex items-center justify-between text-xs font-mono text-[#64748B] mb-2">
                    <span className="font-bold text-[#2563EB]">{eventDays[selectedDate].category}</span>
                    <span>November {selectedDate}, 2024</span>
                  </div>
                  <h4 className="font-serif text-lg font-normal text-[#1E293B]">
                    {eventDays[selectedDate].title}
                  </h4>
                  <div className="mt-3 flex items-center gap-2 text-xs font-mono text-[#64748B]">
                    <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{eventDays[selectedDate].time}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side: Calendar Grid Card (input_file_0.png) */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 sm:p-8 lg:p-10">
              {/* Days of Week Header */}
              <div className="grid grid-cols-7 gap-2 pb-6 border-b border-[#F1F5F9] text-center">
                {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                  <span key={day} className="text-xs font-mono font-medium tracking-wider text-[#94A3B8]">
                    {day}
                  </span>
                ))}
              </div>

              {/* Calendar Days Grid */}
              <div className="grid grid-cols-7 gap-y-6 sm:gap-y-8 pt-6 text-center">
                {/* Row 1: empty slots for Nov 2024 (starts on Friday Nov 1) */}
                <div className="py-2 text-sm text-[#CBD5E1]">-</div>
                <div className="py-2 text-sm text-[#CBD5E1]">-</div>
                <div className="py-2 text-sm text-[#CBD5E1]">-</div>
                <div className="py-2 text-sm text-[#CBD5E1]">-</div>

                {/* Day 1 to 30 */}
                {Array.from({ length: 30 }, (_, i) => i + 1).map((dayNum) => {
                  const hasEvent = dayNum in eventDays;
                  const isSelected = selectedDate === dayNum;

                  return (
                    <div 
                      key={dayNum} 
                      onClick={() => hasEvent && setSelectedDate(dayNum)}
                      className="flex flex-col items-center justify-center relative py-1.5 sm:py-2 group"
                    >
                      <button
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full text-sm font-medium transition-all flex items-center justify-center relative ${
                          isSelected
                            ? "bg-[#2563EB] text-white shadow font-bold"
                            : hasEvent
                            ? "hover:bg-[#2563EB]/10 text-[#1E293B] font-semibold cursor-pointer"
                            : "text-[#1E293B] hover:bg-slate-50 cursor-default"
                        }`}
                      >
                        {dayNum}
                      </button>

                      {/* Dot below number exactly matching input_file_0.png */}
                      {hasEvent && (
                        <span 
                          className={`absolute bottom-0 w-1.5 h-1.5 rounded-full transition-transform ${
                            isSelected ? "bg-[#2563EB] scale-125" : dayNum === 18 ? "bg-[#D97706]" : "bg-[#2563EB]"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}

                {/* Remaining slot for Row 5 */}
                <div className="py-2 text-sm text-[#CBD5E1]">-</div>
              </div>

              <div className="mt-10 pt-6 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between text-xs font-mono text-[#64748B] gap-4">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D97706]" />
                    <span>Flagship Event</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                    <span>Campus Event</span>
                  </div>
                </div>
                <span>All times in IST (UTC+5:30)</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: NEWSLETTER / SUBSCRIPTION BANNER */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E293B] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#60A5FA]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-[#60A5FA] mb-6">
              <Mail className="w-3.5 h-3.5" />
              <span>STAY CONNECTED</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight">
              Gain First Access to Forums, Tickets, &amp; Recaps
            </h2>

            <p className="mt-4 text-[#94A3B8] text-sm sm:text-base leading-relaxed max-w-2xl">
              Subscribe to our weekly campus bulletin and never miss high-priority registration deadlines, guest lecture invites, or major inter-college tournament announcements.
            </p>

            <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your student or personal email..."
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <span>SUBSCRIBE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {subscribed && (
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-[#10B981] bg-[#10B981]/10 px-3 py-1.5 rounded-lg border border-[#10B981]/20">
                <CheckCircle2 className="w-4 h-4" />
                <span>You have successfully subscribed to the CIS Events Bulletin!</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 6: CUSTOM EVENTS FOOTER (input_file_2.png) */}
      <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-16 border-b border-[#E2E8F0]">
            
            {/* Left Col: Brand matching input_file_2.png */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm">
                  C
                </div>
                <span className="font-serif text-2xl text-[#1E293B] font-normal tracking-tight">
                  CIS Jodhpur
                </span>
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed max-w-sm font-sans">
                Chaudhary International School, Jodhpur. Providing holistic world-class education rooted in rich cultural precision and technological competence.
              </p>
            </div>

            {/* Middle Col 1: STUDENT LIFE & ARCHIVES */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                STUDENT LIFE
              </h4>
              <ul className="space-y-2.5 text-xs text-[#64748B]">
                <li><Link href="/campus-life" className="hover:text-[#1E293B] transition-colors font-semibold text-[#1E293B]">Campus Life</Link></li>
                <li><Link href="/gallery" className="hover:text-[#1E293B] transition-colors font-semibold text-[#2563EB]">Visual Gallery</Link></li>
                <li><Link href="/events" className="hover:text-[#1E293B] transition-colors">Events Calendar</Link></li>
                <li><Link href="/campus-life#clubs" className="hover:text-[#1E293B] transition-colors">Societies & Clubs</Link></li>
                <li><Link href="/campus-life#residences" className="hover:text-[#1E293B] transition-colors">Student Residences</Link></li>
              </ul>
            </div>

            {/* Middle Col 2: EVENT GENRES & RESOURCES */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                EVENT GENRES
              </h4>
              <ul className="space-y-2.5 text-xs text-[#64748B]">
                <li><a href="#schedule" className="hover:text-[#1E293B] transition-colors">Academic Symposia</a></li>
                <li><a href="#schedule" className="hover:text-[#1E293B] transition-colors">Cultural Galas</a></li>
                <li><a href="#schedule" className="hover:text-[#1E293B] transition-colors">Athletic Derby</a></li>
                <li><Link href="/blog" className="hover:text-[#1E293B] transition-colors">Press & Digital Archive</Link></li>
                <li><Link href="/resources" className="hover:text-[#1E293B] transition-colors">Venue & Volunteer Portal</Link></li>
              </ul>
            </div>

            {/* PORTALS & ACADEMICS */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                PORTALS
              </h4>
              <ul className="space-y-2.5 text-xs text-[#64748B]">
                <li><Link href="/admissions" className="hover:text-[#1E293B] transition-colors">Admissions Portal</Link></li>
                <li><Link href="/apply" className="hover:text-[#1E293B] transition-colors">Apply Online</Link></li>
                <li><Link href="/scholarships" className="hover:text-[#1E293B] transition-colors">Scholarships & Aid</Link></li>
                <li><Link href="/academics" className="hover:text-[#1E293B] transition-colors">Academic Programs</Link></li>
                <li><Link href="/placements" className="hover:text-[#1E293B] transition-colors">Placements Hub</Link></li>
                <li><Link href="/research" className="hover:text-[#1E293B] transition-colors">Research Labs</Link></li>
              </ul>
            </div>

            {/* CAMPUS ADMIN */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                CAMPUS ADMIN
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                CIS Campus, Sector 9, Chopasni Housing Board, Jodhpur, Rajasthan 342008
              </p>
              <div>
                <a 
                  href="mailto:events@cisjodhpur.edu.in" 
                  className="text-xs font-medium text-[#1E293B] hover:text-[#2563EB] transition-colors font-mono block"
                >
                  events@cisjodhpur.edu.in
                </a>
                <Link href="/contact" className="text-xs text-[#2563EB] hover:underline mt-1.5 inline-block font-medium">
                  Contact Directory →
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Bar matching input_file_2.png exactly */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
            <p>© 2024 Chaudhary International School, Jodhpur. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-[#1E293B] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#1E293B] transition-colors">Terms of Life</Link>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
