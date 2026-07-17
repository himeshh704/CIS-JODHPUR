"use client";

import React from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/MotionSystem";
import { 
  MessageSquare, 
  Code, 
  Music, 
  Activity, 
  TrendingUp, 
  Heart,
  CheckCircle2,
  Award
} from "lucide-react";

export default function CampusLifePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-[#111827] dark:text-gray-100 flex flex-col font-sans selection:bg-[#2563EB]/10 selection:text-[#2563EB] transition-colors duration-300">
      <ScrollReveal animation="fadeUp">
      {/* 1. Sticky Sub-Navigation matching uploaded_media_0_1784223337133.png */}
      <div className="sticky top-[56px] sm:top-[64px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3.5 px-4 sm:px-8 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-serif text-2xl text-[#1E293B] font-normal tracking-tight">
              CIS JODHPUR
            </span>
            <span className="font-mono text-[11px] font-bold text-[#2563EB] uppercase tracking-wider ml-3 bg-blue-50 px-2.5 py-1 rounded border border-blue-200/60">
              STUDENT LIFE
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-medium text-gray-400">
            <a href="#overview" className="hover:text-[#2563EB] transition-colors">Overview</a>
            <a href="#clubs" className="hover:text-[#2563EB] transition-colors">Clubs</a>
            <a href="#residences" className="hover:text-[#2563EB] transition-colors">Residences</a>
            <a href="#governance" className="hover:text-[#2563EB] transition-colors">Governance</a>
            <a href="#timeline" className="hover:text-[#2563EB] transition-colors">Timeline</a>
          </div>

          <Link
            href="/contact"
            className="border border-[#2563EB] text-[#2563EB] font-mono text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-lg hover:bg-blue-50 transition-all shadow-2xs"
          >
            CAMPUS VISIT
          </Link>
        </div>
      </div>

      {/* 2. Hero Section matching uploaded_media_4_1784223337133.png */}
      <section id="overview" className="pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#1E293B] font-normal tracking-tight leading-tight">
            More Than a Degree — <span className="text-[#D97706]">A Way of Life</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-4 leading-relaxed font-normal">
            Welcome to the cultural heart of CIS Jodhpur. Here, critical thinking meets creative expression, and lifelong bonds are forged in the pursuit of intellectual and personal transcendence.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 rounded-3xl overflow-hidden shadow-xl relative aspect-[16/9] sm:aspect-[21/9] bg-gray-900 group border border-gray-100">
          <img 
            src="/about-hero.jpg" 
            alt="Central Courtyard" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/campus-hero.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight">
                The Central Courtyard
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 font-normal">
                Hub of exchange, debate, and spontaneous creation.
              </p>
            </div>
            <a
              href="#clubs"
              className="bg-[#2563EB] text-white font-mono text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-md hover:bg-blue-700 transition-all shrink-0"
            >
              EXPLORE SPACES
            </a>
          </div>
        </div>
      </section>

      {/* 3. Student-Led Communities Grid matching input_file_5.png */}
      <section id="clubs" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            <span className="w-6 h-0.5 bg-[#2563EB] inline-block" />
            GUILDS & FORUMS
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1E293B] font-normal tracking-tight mt-3">
            Student-Led Communities
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-3xl leading-relaxed font-normal">
            With over 20 active forums, find peers who challenge your perspectives, scale your technical skills, and share your obsessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {/* Card 1: Debate & Oratory */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-100/60 flex items-center justify-center text-[#2563EB] group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full border border-blue-200/80 text-[#2563EB] bg-blue-50/50">
                  120+ Active
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#1E293B] mt-6 font-normal tracking-tight">
                Debate & Oratory
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2.5 leading-relaxed font-normal">
                Sharpening critical rhetoric, exploring complex global policy issues, and hosting the prestigious annual Jodhpur LitFest.
              </p>
            </div>
          </div>

          {/* Card 2: Sanket: Coding & Dev */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-100/60 flex items-center justify-center text-[#2563EB] group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full border border-blue-200/80 text-[#2563EB] bg-blue-50/50">
                  250+ Active
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#1E293B] mt-6 font-normal tracking-tight">
                Sanket: Coding & Dev
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2.5 leading-relaxed font-normal">
                Tackling algorithmic complex challenges, open-source contribution, hackathons, and constructing digital infrastructures.
              </p>
            </div>
          </div>

          {/* Card 3: Spic Macay Chapter */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-100/60 flex items-center justify-center text-[#2563EB] group-hover:scale-110 transition-transform">
                  <Music className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full border border-blue-200/80 text-[#2563EB] bg-blue-50/50">
                  180+ Active
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#1E293B] mt-6 font-normal tracking-tight">
                Spic Macay Chapter
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2.5 leading-relaxed font-normal">
                Promoting Indian classical music and world heritage, welcoming legendary maestros to perform under twilight courts.
              </p>
            </div>
          </div>

          {/* Card 4: Spartans: Athletic Corp */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-100/60 flex items-center justify-center text-[#2563EB] group-hover:scale-110 transition-transform">
                  <Activity className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full border border-blue-200/80 text-[#2563EB] bg-blue-50/50">
                  300+ Active
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#1E293B] mt-6 font-normal tracking-tight">
                Spartans: Athletic Corp
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2.5 leading-relaxed font-normal">
                The competitive vanguard representing CIS across regional and national tourneys in cricket, football, and field sports.
              </p>
            </div>
          </div>

          {/* Card 5: E-Cell: Incubator */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-100/60 flex items-center justify-center text-[#2563EB] group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full border border-blue-200/80 text-[#2563EB] bg-blue-50/50">
                  90+ Active
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#1E293B] mt-6 font-normal tracking-tight">
                E-Cell: Incubator
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2.5 leading-relaxed font-normal">
                Fostering venture capital pathways, modeling unit economics, and supporting student start-up launches from ground-zero.
              </p>
            </div>
          </div>

          {/* Card 6: Sahyog: Social Mission */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-100/60 flex items-center justify-center text-[#2563EB] group-hover:scale-110 transition-transform">
                  <Heart className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full border border-blue-200/80 text-[#2563EB] bg-blue-50/50">
                  150+ Active
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#1E293B] mt-6 font-normal tracking-tight">
                Sahyog: Social Mission
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2.5 leading-relaxed font-normal">
                Stewardship focused on rural Jodhpur literacy programs, water-conservation workshops, and healthcare accessibility campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Campus Culture & Global Perspectives matching input_file_1.png */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              <span className="w-6 h-0.5 bg-[#2563EB] inline-block" />
              MAVERICK ETHOS
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1E293B] font-normal tracking-tight">
              Campus Culture & Global Perspectives
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
              <p>
                We believe that learning extends past the lecture halls. At CIS, our student body represents a complex, multi-layered tapestry of diverse traditions, academic interests, and individual narratives.
              </p>
              <p>
                From cultural dinners celebrating global cuisines to intellectual salons exploring post-modern sociology, the campus is alive with discourse and collaboration.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-2xs flex flex-col justify-between">
              <span className="font-serif text-4xl sm:text-5xl text-[#2563EB] font-normal">
                22+ States
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-400 mt-3">
                Vibrant Representation
              </span>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-2xs flex flex-col justify-between">
              <span className="font-serif text-4xl sm:text-5xl text-[#2563EB] font-normal">
                10:1
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-400 mt-3">
                Peer-to-Faculty Ratio
              </span>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-2xs flex flex-col justify-between">
              <span className="font-serif text-4xl sm:text-5xl text-[#2563EB] font-normal">
                15% Intake
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-400 mt-3">
                Global Exchanges
              </span>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-2xs flex flex-col justify-between">
              <span className="font-serif text-4xl sm:text-5xl text-[#2563EB] font-normal">
                10k+ / Yr
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-400 mt-3">
                Community Service Hours
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Your Home on Campus (Residences) matching uploaded_media_3_1784223337133.png */}
      <section id="residences" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            <span className="w-6 h-0.5 bg-[#2563EB] inline-block" />
            RESIDENTIAL LIFE
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1E293B] font-normal tracking-tight mt-3">
            Your Home on Campus
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-2xl leading-relaxed font-normal">
            Premium residences designed to offer personal space, seamless study areas, and modern amenities to make campus life feel like home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mt-12">
          {/* Card 1: Boys Residential Block */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-2xs overflow-hidden flex flex-col group">
            <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
              <img 
                src="/library-hero.jpg" 
                alt="Boys Residential Block" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/about-hero.jpg";
                }}
              />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl text-[#1E293B] font-normal tracking-tight">
                  Boys Residential Block
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed font-normal">
                  A community constructed on camaraderie, active living, and dynamic research space.
                </p>

                <div className="space-y-3 mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>Ultra-Speed Fiber Internet</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>Air-Conditioned Rooms</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>Indoor Squash Courts</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>24/7 Pantry Service</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>Modern Gymnasium Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Girls Residential Block */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-2xs overflow-hidden flex flex-col group">
            <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
              <img 
                src="/about-hero.jpg" 
                alt="Girls Residential Block" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/library-hero.jpg";
                }}
              />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl text-[#1E293B] font-normal tracking-tight">
                  Girls Residential Block
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed font-normal">
                  A secure, vibrant space promoting wellness, creativity, and focused intellectual endeavors.
                </p>

                <div className="space-y-3 mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>Fully Monitored Security</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>In-House Medical Center</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>Yoga & Meditation Studio</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>Private Balconies</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>Reading Rooms & Lounges</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Championship Facilities & Fitness matching uploaded_media_2_1784223337133.png */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB]">
                <span className="w-6 h-0.5 bg-[#2563EB] inline-block" />
                ATHLETICS
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#1E293B] font-normal tracking-tight mt-3">
                Championship Facilities & Fitness
              </h2>
              <p className="text-sm sm:text-base text-gray-400 mt-2.5 max-w-2xl leading-relaxed font-normal">
                At CIS Jodhpur, physical endurance and tactical focus are cultivated side-by-side with scientific spaces host both competitive champions and weekend warriors.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-md flex items-center justify-center text-[#2563EB] shrink-0 mt-0.5">
                  <Award className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif text-lg sm:text-xl text-[#1E293B] font-normal">
                    Olympic-Standard Track & Field
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5 font-normal">
                    Professional athletic surfaces with night lighting systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-md flex items-center justify-center text-[#2563EB] shrink-0 mt-0.5">
                  <Award className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif text-lg sm:text-xl text-[#1E293B] font-normal">
                    Indoor Sports Complex
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5 font-normal">
                    Equipped for badminton, table tennis, and national championship basketball games.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-md flex items-center justify-center text-[#2563EB] shrink-0 mt-0.5">
                  <Award className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif text-lg sm:text-xl text-[#1E293B] font-normal">
                    Advanced Conditioning Gym
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5 font-normal">
                    Equipped with specialized weight-training rigs and expert athletic physical trainers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-md flex items-center justify-center text-[#2563EB] shrink-0 mt-0.5">
                  <Award className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif text-lg sm:text-xl text-[#1E293B] font-normal">
                    Semi-Olympic Swimming Pool
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5 font-normal">
                    Temperature-regulated year-round lap facility with on-site lifeguards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/3] bg-gray-900">
              <img 
                src="/research-hero.jpg" 
                alt="Championship Athletics" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/campus-hero.jpg";
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* 7. Student Council & Democracy matching uploaded_media_1_1784223337133.png */}
      <section id="governance" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            <span className="w-6 h-0.5 bg-[#2563EB] inline-block" />
            LEADERSHIP
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1E293B] font-normal tracking-tight mt-3">
            Student Council & Democracy
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-3xl leading-relaxed font-normal">
            The voice of the community. Our Student Council works alongside university leadership to manage budgets, direct cultural chapters, and spearhead local outreach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {/* Card 1: President */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                PRESIDENT
              </span>
              <h3 className="font-serif text-2xl text-[#1E293B] mt-2 font-normal tracking-tight">
                Rishabh Singh
              </h3>
              <p className="text-xs text-gray-400 mt-1 font-normal">
                B.Tech Computer Science
              </p>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <span className="font-mono text-[10px] font-bold uppercase text-gray-400 tracking-wider block">
                  VISION FOCUS
                </span>
                <p className="text-xs sm:text-sm text-gray-400 mt-2 italic leading-relaxed">
                  &ldquo;To digitize our community resources, ensuring open-source transparency in all student council spending and event management.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Vice President */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                VICE PRESIDENT
              </span>
              <h3 className="font-serif text-2xl text-[#1E293B] mt-2 font-normal tracking-tight">
                Aanya Mathur
              </h3>
              <p className="text-xs text-gray-400 mt-1 font-normal">
                B.A. Economics & Policy
              </p>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <span className="font-mono text-[10px] font-bold uppercase text-gray-400 tracking-wider block">
                  VISION FOCUS
                </span>
                <p className="text-xs sm:text-sm text-gray-400 mt-2 italic leading-relaxed">
                  &ldquo;Fostering partnerships with local Jodhpur hand-loomers and water management systems to drive immediate impact.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Cultural Secretary */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                CULTURAL SECRETARY
              </span>
              <h3 className="font-serif text-2xl text-[#1E293B] mt-2 font-normal tracking-tight">
                Devendra Rathore
              </h3>
              <p className="text-xs text-gray-400 mt-1 font-normal">
                B.Des Industrial Design
              </p>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <span className="font-mono text-[10px] font-bold uppercase text-gray-400 tracking-wider block">
                  VISION FOCUS
                </span>
                <p className="text-xs sm:text-sm text-gray-400 mt-2 italic leading-relaxed">
                  &ldquo;Expanding independent student publications, local art salons, and cross-chapter music collaborations throughout the year.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 24 Hours Inside CIS Timeline matching input_file_4.png */}
      <section id="timeline" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            <span className="w-6 h-0.5 bg-[#2563EB] inline-block" />
            RHYTHM OF THE CAMPUS
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1E293B] font-normal tracking-tight mt-3">
            24 Hours Inside CIS
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-2xl leading-relaxed font-normal">
            A look at the daily cycle of research, community service, artistic collaboration, and deep-focused study.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 mt-12">
          {/* Slot 1 */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl text-[#2563EB] font-normal">
                06:00 AM
              </span>
              <h4 className="font-bold text-sm text-[#1E293B] mt-6 leading-snug">
                Morning Run & Meditation
              </h4>
              <p className="text-xs text-gray-400 mt-1 font-normal leading-relaxed">
                Courtyard and Athletic Track
              </p>
            </div>
          </div>

          {/* Slot 2 */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl text-[#2563EB] font-normal">
                09:00 AM
              </span>
              <h4 className="font-bold text-sm text-[#1E293B] mt-6 leading-snug">
                Foundational Lectures
              </h4>
              <p className="text-xs text-gray-400 mt-1 font-normal leading-relaxed">
                The Great Hall & Classrooms
              </p>
            </div>
          </div>

          {/* Slot 3 */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl text-[#2563EB] font-normal">
                01:00 PM
              </span>
              <h4 className="font-bold text-sm text-[#1E293B] mt-6 leading-snug">
                Incubation Workshops
              </h4>
              <p className="text-xs text-gray-400 mt-1 font-normal leading-relaxed">
                E-Cell Hub & Collaborative Cafe
              </p>
            </div>
          </div>

          {/* Slot 4 */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl text-[#2563EB] font-normal">
                04:30 PM
              </span>
              <h4 className="font-bold text-sm text-[#1E293B] mt-6 leading-snug">
                Society Chapters & Athletic Drill
              </h4>
              <p className="text-xs text-gray-400 mt-1 font-normal leading-relaxed">
                Club Rooms and Grounds
              </p>
            </div>
          </div>

          {/* Slot 5 */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl text-[#2563EB] font-normal">
                08:00 PM
              </span>
              <h4 className="font-bold text-sm text-[#1E293B] mt-6 leading-snug">
                Dinner & Discourse
              </h4>
              <p className="text-xs text-gray-400 mt-1 font-normal leading-relaxed">
                The Mess and Residence Gardens
              </p>
            </div>
          </div>

          {/* Slot 6 */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl text-[#2563EB] font-normal">
                10:00 PM
              </span>
              <h4 className="font-bold text-sm text-[#1E293B] mt-6 leading-snug">
                Night Lab Hack & Library study
              </h4>
              <p className="text-xs text-gray-400 mt-1 font-normal leading-relaxed">
                Computer Labs and Academic Library
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Student Testimonials matching uploaded_media_0_1784223344606.png */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            <span className="w-6 h-0.5 bg-[#2563EB] inline-block" />
            VOICES
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1E293B] font-normal tracking-tight mt-3">
            Student Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {/* Quote 1 */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="text-4xl font-serif text-[#2563EB] leading-none block">
                &ldquo;
              </span>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-4 font-normal">
                At CIS Jodhpur, I didn&apos;t just learn systems engineering; I learned how to build community. Running E-Cell taught me resilience.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-serif text-lg text-[#1E293B] font-normal tracking-tight">
                Aditi Vardhan
              </h4>
              <p className="text-[11px] text-gray-400 mt-0.5 font-normal">
                Class of 2024 &middot; Founder, BlueSoil
              </p>
            </div>
          </div>

          {/* Quote 2 */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="text-4xl font-serif text-[#2563EB] leading-none block">
                &ldquo;
              </span>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-4 font-normal">
                The classical performances we host and coordinate under Spic Macay have shaped my cultural perspective and global world view deeply.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-serif text-lg text-[#1E293B] font-normal tracking-tight">
                Kabir Mehta
              </h4>
              <p className="text-[11px] text-gray-400 mt-0.5 font-normal">
                Class of 2025 &middot; Literature Major
              </p>
            </div>
          </div>

          {/* Quote 3 */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="text-4xl font-serif text-[#2563EB] leading-none block">
                &ldquo;
              </span>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-4 font-normal">
                In the coding labs at CIS, you&apos;ll find teammates collaborating at 2 AM on open-source solutions. The collective energy here is unmatched.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-serif text-lg text-[#1E293B] font-normal tracking-tight">
                Suresh Pillai
              </h4>
              <p className="text-[11px] text-gray-400 mt-0.5 font-normal">
                Class of 2024 &middot; Senior Software Architect
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. The Spirit CTA Banner matching input_file_3.png */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="rounded-3xl border border-blue-200/80 bg-white p-10 sm:p-16 text-center shadow-sm">
          <h2 className="font-serif text-6xl sm:text-7xl text-[#D97706] tracking-tight font-normal">
            the Spirit
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            Join us for a personalized campus tour. Walk the quads, visit the labs, observe an active workshop, and engage directly with the Student Council.
          </p>
          <Link
            href="/contact"
            className="mt-8 bg-[#2563EB] text-white font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg inline-block"
          >
            SCHEDULE A CAMPUS VISIT
          </Link>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
