import React from "react";
import NextLink from "next/link";
import { ScrollReveal } from "@/components/motion/MotionSystem";
import {
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Compass,
  CheckCircle2,
  Building2,
  Briefcase,
  GraduationCap,
  Globe,
  TrendingUp,
  MapPin,
  Calendar,
  FileText,
  ChevronRight,
  Play
} from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=75";
const CAMPUS_SPLENDOR = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=75";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-[#111827] dark:text-gray-100 font-sans selection:bg-[#2563EB] selection:text-white transition-colors duration-300">
      <ScrollReveal animation="fadeUp">
      {/* 1. HERO SECTION (matching input_file_4.png) */}
      <section className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#111827]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_BG}
            alt="CIS Jodhpur Campus Sandstone Architecture"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32 flex-1 flex flex-col justify-center text-left">
          <div className="max-w-4xl">
            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-wider uppercase mb-8 backdrop-blur-md shadow-sm">
              <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
              <span>APPLICATION DEADLINE: MARCH 31, 2026</span>
            </div>

            {/* Main Title */}
            <h1 className="text-white font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.05]">
              Where Ambition <br className="hidden sm:inline" />
              Meets Excellence
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mt-6 leading-relaxed font-normal">
              CIS Jodhpur is India&apos;s premier institution for global business leadership, policy research, and technological innovation. Built on a foundation of rigorous scholarship and real-world impact.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <NextLink
                href="/admissions"
                className="px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-blue-600/30 transition-all flex items-center gap-2 group"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </NextLink>
              
              <NextLink
                href="/campus-life"
                className="px-8 py-4 rounded-xl bg-black/40 hover:bg-black/60 border border-white/30 text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2.5"
              >
                <Play className="w-3.5 h-3.5 fill-current text-blue-400" />
                Virtual Tour
              </NextLink>
            </div>
          </div>
        </div>

        {/* Overlapping Stat Bar at Bottom (matching input_file_4.png) */}
        <div className="relative z-20 -mt-16 sm:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/60 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="border-r border-gray-200/60 last:border-r-0 pr-4">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827]">25+</div>
              <div className="text-xs font-mono font-bold uppercase text-[#2563EB] tracking-wider mt-1">Academic Programs</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Undergraduate & Postgraduate</div>
            </div>

            <div className="lg:border-r border-gray-200/60 pr-4">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827]">95%</div>
              <div className="text-xs font-mono font-bold uppercase text-[#2563EB] tracking-wider mt-1">Placement Success</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Top-Tier Global Firms</div>
            </div>

            <div className="border-r border-gray-200/60 last:border-r-0 pr-4">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827]">500+</div>
              <div className="text-xs font-mono font-bold uppercase text-[#2563EB] tracking-wider mt-1">Global Recruiters</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Fortune 500 & Startups</div>
            </div>

            <div>
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827]">15:1</div>
              <div className="text-xs font-mono font-bold uppercase text-[#2563EB] tracking-wider mt-1">Student-Faculty Ratio</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Personalized Mentorship</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE CIS JODHPUR — THE CIS EDGE (matching input_file_1.png) */}
      <section id="why-cis" className="bg-[#EFF6FF] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-left max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block mb-3">
              — THE CIS EDGE
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#111827] tracking-tight">
              Why Choose CIS Jodhpur
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-14">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#2563EB] font-mono text-base font-bold flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  01
                </div>
                <h3 className="font-serif text-xl font-bold text-[#111827] mb-3">
                  Global Curriculum
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Benchmarked against Ivy League frameworks with dual-degree pathways, exchange semesters, and international credits.
                </p>
              </div>
              <NextLink href="/programs" className="text-xs font-mono font-bold text-[#2563EB] mt-8 flex items-center gap-1.5 uppercase group-hover:gap-2.5 transition-all">
                Explore Pillar <ArrowRight className="w-3.5 h-3.5" />
              </NextLink>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#2563EB] font-mono text-base font-bold flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  02
                </div>
                <h3 className="font-serif text-xl font-bold text-[#111827] mb-3">
                  Industry-First Pedagogy
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Immersive case studies, corporate apprenticeships, and live consulting projects built directly into the academic core.
                </p>
              </div>
              <NextLink href="/programs" className="text-xs font-mono font-bold text-[#2563EB] mt-8 flex items-center gap-1.5 uppercase group-hover:gap-2.5 transition-all">
                Explore Pillar <ArrowRight className="w-3.5 h-3.5" />
              </NextLink>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#2563EB] font-mono text-base font-bold flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  03
                </div>
                <h3 className="font-serif text-xl font-bold text-[#111827] mb-3">
                  Research Powerhouse
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dedicated centers of excellence in AI, sustainable governance, financial engineering, and Thar regional development.
                </p>
              </div>
              <NextLink href="/research" className="text-xs font-mono font-bold text-[#2563EB] mt-8 flex items-center gap-1.5 uppercase group-hover:gap-2.5 transition-all">
                Explore Pillar <ArrowRight className="w-3.5 h-3.5" />
              </NextLink>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#2563EB] font-mono text-base font-bold flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  04
                </div>
                <h3 className="font-serif text-xl font-bold text-[#111827] mb-3">
                  Sandstone Architecture
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A majestic 100-acre residential campus blending traditional Rajput heritage stone with cutting-edge gigabit facilities.
                </p>
              </div>
              <NextLink href="/campus-life" className="text-xs font-mono font-bold text-[#2563EB] mt-8 flex items-center gap-1.5 uppercase group-hover:gap-2.5 transition-all">
                Explore Pillar <ArrowRight className="w-3.5 h-3.5" />
              </NextLink>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACADEMIC EXCELLENCE — SCHOLASTIC PATHS */}
      <section id="programs" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block mb-3">
                — SCHOLASTIC PATHS
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#111827] tracking-tight">
                Academic Excellence
              </h2>
            </div>
            <NextLink
              href="/programs"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
            >
              View All 25+ Programs <ArrowRight className="w-4 h-4" />
            </NextLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {/* Program 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group">
              <div className="h-52 w-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=75"
                  alt="BBA Program"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded font-mono text-xs font-bold text-[#2563EB] uppercase">
                  3 YEARS
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#2563EB] transition-colors">
                    Bachelor of Business Administration (BBA)
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Comprehensive undergraduate management program focusing on corporate strategy, digital leadership, and financial modeling.
                  </p>
                </div>
                <NextLink
                  href="/programs"
                  className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono font-bold text-[#2563EB] uppercase group-hover:translate-x-1 transition-transform"
                >
                  <span>Program Details</span>
                  <ArrowRight className="w-4 h-4" />
                </NextLink>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group">
              <div className="h-52 w-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=75"
                  alt="MBA Program"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded font-mono text-xs font-bold text-[#2563EB] uppercase">
                  2 YEARS
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#2563EB] transition-colors">
                    Master of Business Administration (MBA)
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Flagship postgraduate leadership track featuring global immersion modules, executive mentorship, and deep specialized majors.
                  </p>
                </div>
                <NextLink
                  href="/programs"
                  className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono font-bold text-[#2563EB] uppercase group-hover:translate-x-1 transition-transform"
                >
                  <span>Program Details</span>
                  <ArrowRight className="w-4 h-4" />
                </NextLink>
              </div>
            </div>

            {/* Program 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group">
              <div className="h-52 w-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=75"
                  alt="B.Com Analytics"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded font-mono text-xs font-bold text-[#2563EB] uppercase">
                  3 YEARS
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#2563EB] transition-colors">
                    B.Com (Hons.) in Financial Analytics
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Advanced commerce degree integrated with data science, econometrics, algorithmic trading, and international taxation.
                  </p>
                </div>
                <NextLink
                  href="/programs"
                  className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono font-bold text-[#2563EB] uppercase group-hover:translate-x-1 transition-transform"
                >
                  <span>Program Details</span>
                  <ArrowRight className="w-4 h-4" />
                </NextLink>
              </div>
            </div>

            {/* Program 4 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group">
              <div className="h-52 w-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=75"
                  alt="BCA Architecture"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded font-mono text-xs font-bold text-[#2563EB] uppercase">
                  3 YEARS
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#2563EB] transition-colors">
                    BCA in AI & Cloud Systems
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Next-generation computing track mastering machine learning architectures, cloud computing, and full-stack engineering.
                  </p>
                </div>
                <NextLink
                  href="/programs"
                  className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono font-bold text-[#2563EB] uppercase group-hover:translate-x-1 transition-transform"
                >
                  <span>Program Details</span>
                  <ArrowRight className="w-4 h-4" />
                </NextLink>
              </div>
            </div>

            {/* Program 5 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group">
              <div className="h-52 w-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=75"
                  alt="M.A. Diplomacy"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded font-mono text-xs font-bold text-[#2563EB] uppercase">
                  2 YEARS
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#2563EB] transition-colors">
                    M.A. in Public Policy & Diplomacy
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Elite governance track preparing scholars for diplomatic corps, think tanks, economic corridors, and policy formulation.
                  </p>
                </div>
                <NextLink
                  href="/programs"
                  className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono font-bold text-[#2563EB] uppercase group-hover:translate-x-1 transition-transform"
                >
                  <span>Program Details</span>
                  <ArrowRight className="w-4 h-4" />
                </NextLink>
              </div>
            </div>

            {/* Program 6 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group">
              <div className="h-52 w-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=75"
                  alt="B.Ed Pedagogy"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded font-mono text-xs font-bold text-[#2563EB] uppercase">
                  2 YEARS
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#2563EB] transition-colors">
                    B.Ed. in Modern Pedagogy
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Empowering educators with educational psychology, ed-tech integration, curriculum innovation, and classroom leadership.
                  </p>
                </div>
                <NextLink
                  href="/programs"
                  className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono font-bold text-[#2563EB] uppercase group-hover:translate-x-1 transition-transform"
                >
                  <span>Program Details</span>
                  <ArrowRight className="w-4 h-4" />
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUSTED BY INDUSTRY LEADERS & MCKINSEY QUOTE (matching input_file_2.png) */}
      <section className="bg-[#EFF6FF] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block mb-3">
            — GLOBAL ECOSYSTEM
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#111827] tracking-tight">
            Trusted by Industry Leaders
          </h2>

          {/* 12 Company Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12 max-w-6xl mx-auto">
            {[
              "MCKINSEY & CO.",
              "GOLDMAN SACHS",
              "MICROSOFT",
              "UNILEVER",
              "DELOITTE",
              "BCG",
              "AMAZON",
              "HDFC BANK",
              "TATA SONS",
              "INFOSYS",
              "BAIN & CO.",
              "GOOGLE"
            ].map((company, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-blue-100 py-6 px-4 flex items-center justify-center font-mono text-xs font-bold text-gray-400 hover:text-[#111827] hover:border-[#2563EB]/40 transition-all shadow-2xs"
              >
                {company}
              </div>
            ))}
          </div>

          {/* Large McKinsey Testimonial Card */}
          <div className="mt-14 max-w-5xl mx-auto bg-white rounded-2xl p-8 sm:p-14 border border-blue-100 shadow-sm text-center relative">
            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#111827] leading-relaxed max-w-4xl mx-auto">
              &ldquo;The graduates from CIS Jodhpur possess a rare combination of structural business insight and raw entrepreneurial drive that makes them immediately effective in top-tier roles.&rdquo;
            </p>
            <div className="w-12 h-0.5 bg-[#2563EB] mx-auto my-6" />
            <div>
              <span className="font-bold text-base text-[#111827] block">Rajiv Singhania</span>
              <span className="text-xs font-mono text-gray-400 font-bold uppercase tracking-wider block mt-1">
                MANAGING DIRECTOR OF RECRUITMENT, MCKINSEY & CO.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CAREER OUTCOMES THAT SPEAK (matching input_file_1.png) */}
      <section className="bg-[#EFF6FF] pb-24 pt-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block mb-3">
              — PROVEN IMPACT
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#111827] tracking-tight">
              Career Outcomes That Speak
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
              The ultimate validation of our academic model is the stellar career trajectory of our scholars.
            </p>
          </div>

          {/* Stats Box */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 sm:p-12 border border-blue-100 shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-12">
            <div className="border-r border-gray-100 last:border-r-0 pr-4">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2563EB]">95%</div>
              <div className="text-xs font-mono font-bold uppercase text-[#111827] tracking-wider mt-2">Placement Rate</div>
              <div className="text-[11px] text-gray-400 mt-0.5 uppercase">Across All Courses</div>
            </div>

            <div className="lg:border-r border-gray-100 pr-4">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2563EB]">₹12.4 L</div>
              <div className="text-xs font-mono font-bold uppercase text-[#111827] tracking-wider mt-2">Average CTC</div>
              <div className="text-[11px] text-gray-400 mt-0.5 uppercase">2024 Graduating Cohort</div>
            </div>

            <div className="border-r border-gray-100 last:border-r-0 pr-4">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2563EB]">500+</div>
              <div className="text-xs font-mono font-bold uppercase text-[#111827] tracking-wider mt-2">Global Recruiters</div>
              <div className="text-[11px] text-gray-400 mt-0.5 uppercase">Partner Companies</div>
            </div>

            <div>
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2563EB]">200+</div>
              <div className="text-xs font-mono font-bold uppercase text-[#111827] tracking-wider mt-2">Campus Offers</div>
              <div className="text-[11px] text-gray-400 mt-0.5 uppercase">Pre-Placement Offers</div>
            </div>
          </div>

          {/* Placement & Mentorship Journey Box */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 sm:p-12 border border-blue-100 shadow-sm mt-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] mb-8 block">
              THE PLACEMENT & MENTORSHIP JOURNEY
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-md bg-[#2563EB] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  01
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#111827] mb-1">Profile Building</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Personalized career mapping and portfolio audit from semester one.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-md bg-[#2563EB] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  02
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#111827] mb-1">Mock Interviews</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Rigorous technical & behavioral simulations led by industry directors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-md bg-[#2563EB] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  03
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#111827] mb-1">Campus Drives</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Direct access to exclusive placement drives with premier global firms.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-md bg-[#2563EB] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  04
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#111827] mb-1">Stellar Offers</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Negotiation support and structured transition into corporate leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STORIES OF EXCELLENCE — SCHOLARS OF CIS (matching input_file_3.png) */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block mb-3">
              — SCHOLARS OF CIS
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#111827] tracking-tight">
              Stories of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">
            {/* Alumni 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group">
              <div className="h-80 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=75"
                  alt="Aarav Sharma"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 bg-gray-50 flex flex-col flex-1 justify-between">
                <p className="text-gray-600 text-sm leading-relaxed italic mb-6">
                  &ldquo;The interdisciplinary curriculum at CIS gave me the exact analytical rigor needed to thrive in strategy consulting right after graduation.&rdquo;
                </p>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#111827]">Aarav Sharma</h3>
                  <span className="text-xs font-mono text-[#2563EB] font-bold uppercase tracking-wider block mt-1">
                    BBA &apos;22 • STRATEGY ANALYST AT BCG
                  </span>
                </div>
              </div>
            </div>

            {/* Alumni 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group">
              <div className="h-80 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=75"
                  alt="Rhea Singhal"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 bg-gray-50 flex flex-col flex-1 justify-between">
                <p className="text-gray-600 text-sm leading-relaxed italic mb-6">
                  &ldquo;Leading live product sprints during my MBA prepared me directly for managing high-scale AI engineering teams across global markets.&rdquo;
                </p>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#111827]">Rhea Singhal</h3>
                  <span className="text-xs font-mono text-[#2563EB] font-bold uppercase tracking-wider block mt-1">
                    MBA &apos;23 • PRODUCT LEADER AT MICROSOFT
                  </span>
                </div>
              </div>
            </div>

            {/* Alumni 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group">
              <div className="h-80 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=75"
                  alt="Kabir Rathore"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 bg-gray-50 flex flex-col flex-1 justify-between">
                <p className="text-gray-600 text-sm leading-relaxed italic mb-6">
                  &ldquo;The faculty mentorship and incubation labs empowered me to build and scale a venture-backed fintech platform right from our campus.&rdquo;
                </p>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#111827]">Kabir Rathore</h3>
                  <span className="text-xs font-mono text-[#2563EB] font-bold uppercase tracking-wider block mt-1">
                    B.COM &apos;21 • FOUNDER, MARWAR FINTECH
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LEARN FROM THE BEST — DISTINGUISHED MINDS (matching input_file_3.png) */}
      <section id="faculty" className="bg-[#EFF6FF] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block mb-3">
              — DISTINGUISHED MINDS
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#111827] tracking-tight">
              Learn from the Best
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
              Our mentors are distinguished industry practitioners, celebrated researchers, and global scholars.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {/* Faculty 1 */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group">
              <div className="h-72 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=75"
                  alt="Dr. Vikramaditya Dev"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#111827]">Dr. Vikramaditya Dev</h3>
                  <span className="text-xs font-mono text-[#2563EB] font-bold uppercase tracking-wider block mt-1">
                    PROFESSOR & DEAN
                  </span>
                  <p className="text-xs font-mono text-gray-400 mt-0.5">PH.D. STANFORD UNIVERSITY</p>
                  <p className="text-gray-600 text-xs mt-3 leading-relaxed border-t border-gray-100 pt-3">
                    Strategic Management & Global Macroeconomics
                  </p>
                </div>
              </div>
            </div>

            {/* Faculty 2 */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group">
              <div className="h-72 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=75"
                  alt="Prof. Ananya Sen"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#111827]">Prof. Ananya Sen</h3>
                  <span className="text-xs font-mono text-[#2563EB] font-bold uppercase tracking-wider block mt-1">
                    HEAD OF ANALYTICS
                  </span>
                  <p className="text-xs font-mono text-gray-400 mt-0.5">M.S. MIT SLOAN</p>
                  <p className="text-gray-600 text-xs mt-3 leading-relaxed border-t border-gray-100 pt-3">
                    Behavioral Economics & Quantitative Finance
                  </p>
                </div>
              </div>
            </div>

            {/* Faculty 3 */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group">
              <div className="h-72 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=75"
                  alt="Dr. Raghavendra Singhal"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#111827]">Dr. Raghavendra Singhal</h3>
                  <span className="text-xs font-mono text-[#2563EB] font-bold uppercase tracking-wider block mt-1">
                    CHAIR OF LAW & POLICY
                  </span>
                  <p className="text-xs font-mono text-gray-400 mt-0.5">LL.D. HARVARD LAW</p>
                  <p className="text-gray-600 text-xs mt-3 leading-relaxed border-t border-gray-100 pt-3">
                    International Trade Law & Constitutional Policy
                  </p>
                </div>
              </div>
            </div>

            {/* Faculty 4 */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group">
              <div className="h-72 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=75"
                  alt="Dr. Katherine Vance"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#111827]">Dr. Katherine Vance</h3>
                  <span className="text-xs font-mono text-[#2563EB] font-bold uppercase tracking-wider block mt-1">
                    DISTINGUISHED SCHOLAR
                  </span>
                  <p className="text-xs font-mono text-gray-400 mt-0.5">PH.D. CAMBRIDGE</p>
                  <p className="text-gray-600 text-xs mt-3 leading-relaxed border-t border-gray-100 pt-3">
                    Sustainable Architecture & Urban Heritage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. A CAMPUS DESIGNED FOR TOMORROW — ARCHITECTURAL SPLENDOR (matching input_file_4.png) */}
      <section id="campus" className="bg-[#EFF6FF] pb-24 pt-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block mb-3">
              — ARCHITECTURAL SPLENDOR
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#111827] tracking-tight">
              A Campus Designed for Tomorrow
            </h2>
          </div>

          {/* Large Hero Showcase Card */}
          <div className="max-w-7xl mx-auto relative rounded-2xl overflow-hidden shadow-lg mt-12 group">
            <img
              src={CAMPUS_SPLENDOR}
              alt="CIS Jodhpur Architectural Splendor"
              loading="lazy"
              decoding="async"
              className="h-[420px] sm:h-[480px] w-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white shadow-xl text-left">
              <h3 className="text-2xl font-serif font-bold text-[#111827] mb-2">
                CIS Jodhpur Campus
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Where 15th-century Rajput heritage architecture meets state-of-the-art gigabit research infrastructure.
              </p>
            </div>
          </div>

          {/* 4 Facility Cards Below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-all">
              <h4 className="font-serif text-lg font-bold text-[#111827] mb-2">The Grand Library</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                100,000+ physical volumes & digital databases housed in a climate-controlled heritage sanctuary.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-all">
              <h4 className="font-serif text-lg font-bold text-[#111827] mb-2">Advanced Computing Labs</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                High-performance GPU clusters for artificial intelligence, financial modeling, and data science.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-all">
              <h4 className="font-serif text-lg font-bold text-[#111827] mb-2">Sports Complex</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Olympic-standard swimming facilities, tennis courts, and indoor sports arena for holistic growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-all">
              <h4 className="font-serif text-lg font-bold text-[#111827] mb-2">Monumental Auditorium</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                1,200-seat acoustically perfected amphitheater for global symposia and cultural summits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PUSHING BOUNDARIES OF KNOWLEDGE — SCHOLASTIC FRONTIERS */}
      <section id="research" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block mb-3">
              — SCHOLASTIC FRONTIERS
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#111827] tracking-tight">
              Pushing Boundaries of Knowledge
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block mb-3">
                  SUSTAINABLE SYSTEMS
                </span>
                <h3 className="font-serif text-xl font-bold text-[#111827] mb-3 group-hover:text-[#2563EB] transition-colors">
                  Solar Grid Adaptation in Arid Desert Ecosystems
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Developing self-cleaning photovoltaic coatings and micro-grid storage architectures specifically optimized for high-temperature desert conditions.
                </p>
              </div>
              <div>
                <span className="text-[11px] font-mono text-gray-400 font-bold uppercase tracking-wider block mb-4">
                  LEAD SCIENTIST: DR. ANIRUDH RATHORE
                </span>
                <NextLink href="/research" className="text-xs font-mono font-bold text-[#2563EB] flex items-center gap-1.5 uppercase group-hover:gap-2.5 transition-all pt-4 border-t border-gray-100">
                  Read Research Paper <ArrowRight className="w-3.5 h-3.5" />
                </NextLink>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block mb-3">
                  GLOBAL POLICY & TRADE
                </span>
                <h3 className="font-serif text-xl font-bold text-[#111827] mb-3 group-hover:text-[#2563EB] transition-colors">
                  Geopolitical Corridors & Silk Route Economics
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Comprehensive econometric assessment of cross-border trade networks connecting South Asia, the Middle East, and Mediterranean markets.
                </p>
              </div>
              <div>
                <span className="text-[11px] font-mono text-gray-400 font-bold uppercase tracking-wider block mb-4">
                  LEAD SCIENTIST: PROF. ANANYA SEN
                </span>
                <NextLink href="/research" className="text-xs font-mono font-bold text-[#2563EB] flex items-center gap-1.5 uppercase group-hover:gap-2.5 transition-all pt-4 border-t border-gray-100">
                  Read Research Paper <ArrowRight className="w-3.5 h-3.5" />
                </NextLink>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block mb-3">
                  CYBER & FINTECH
                </span>
                <h3 className="font-serif text-xl font-bold text-[#111827] mb-3 group-hover:text-[#2563EB] transition-colors">
                  Distributed Cryptographic Ledgers for Public Governance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Designing tamper-proof smart contract protocols for municipal records, land registry transparency, and sovereign digital currencies.
                </p>
              </div>
              <div>
                <span className="text-[11px] font-mono text-gray-400 font-bold uppercase tracking-wider block mb-4">
                  LEAD SCIENTIST: DR. RAGHAVENDRA SINGHAL
                </span>
                <NextLink href="/research" className="text-xs font-mono font-bold text-[#2563EB] flex items-center gap-1.5 uppercase group-hover:gap-2.5 transition-all pt-4 border-t border-gray-100">
                  Read Research Paper <ArrowRight className="w-3.5 h-3.5" />
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. YOUR JOURNEY BEGINS HERE — ADMISSIONS OPEN 2026-27 (matching input_file_0.png) */}
      <section id="admissions-process" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block mb-3">
              — ADMISSIONS OPEN 2026-27
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#111827] tracking-tight">
              Your Journey Begins Here
            </h2>
          </div>

          {/* 4 Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563EB] font-mono text-sm font-bold flex items-center justify-center mb-6">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111827] mb-3">Apply Online</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Submit academic transcripts, standardized test scores, and personal statement via our online portal.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563EB] font-mono text-sm font-bold flex items-center justify-center mb-6">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111827] mb-3">Entrance Exam</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Participate in the CIS Aptitude & Strategy Assessment or submit qualified CAT/GMAT/SAT percentiles.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563EB] font-mono text-sm font-bold flex items-center justify-center mb-6">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111827] mb-3">Personal Interview</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Engage in a 1-on-1 intellectual colloquium with our faculty board and distinguished alumni mentors.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563EB] font-mono text-sm font-bold flex items-center justify-center mb-6">
                04
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111827] mb-3">Secure Offer</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Receive admission decision and merit scholarship award, followed by residential onboarding.
              </p>
            </div>
          </div>

          {/* Bottom Strip Banner */}
          <div className="mt-12 bg-white rounded-2xl p-8 sm:p-10 border border-[#2563EB]/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#111827]">
                Spring Admissions Closing Soon
              </h3>
              <span className="text-xs font-mono font-bold text-[#2563EB] uppercase mt-1 block">
                DEADLINE: APRIL 30, 2026
              </span>
            </div>
            <NextLink
              href="/admissions"
              className="bg-[#2563EB] text-white font-mono font-bold text-xs px-8 py-4 rounded-xl hover:bg-[#1D4ED8] transition-all shadow-sm uppercase tracking-wider shrink-0"
            >
              APPLY NOW
            </NextLink>
          </div>
        </div>
      </section>

      {/* 11. VOICES OF CIS — THE STUDENT VOICE */}
      <section className="bg-[#EFF6FF] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block mb-3">
            — THE STUDENT VOICE
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#111827] tracking-tight">
            Voices of CIS
          </h2>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-14 border border-blue-100 shadow-md mt-14">
            <p className="font-serif italic text-xl sm:text-2xl text-[#111827] leading-relaxed">
              &ldquo;CIS Jodhpur didn&apos;t just give me a degree; it completely reprogrammed how I analyze business problems. The faculty access and rigorous case-study method prepared me for Wall Street right from day one.&rdquo;
            </p>
            <div className="mt-8">
              <span className="font-bold text-base text-[#111827] block">Devendra Singh Bhati</span>
              <span className="text-xs font-mono text-[#2563EB] font-bold uppercase tracking-wider block mt-1">
                BBA SCHOLAR, CLASS OF 2024
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 12. WHAT'S HAPPENING AT CIS — ON CAMPUS (matching input_file_1.png) */}
      <section id="events" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] block mb-3">
              — ON CAMPUS
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#111827] tracking-tight">
              What&apos;s Happening at CIS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14">
            {/* Left Big Dark Featured Event */}
            <div className="lg:col-span-7 bg-[#111827] rounded-3xl p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden shadow-lg min-h-[380px] group">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-[#60A5FA] font-bold block mb-4">
                  FEATURED SUMMIT • OCT 12, 2026
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white group-hover:text-[#60A5FA] transition-colors">
                  Global Business Diplomacy & Economic Corridors Summit 2026
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed">
                  Keynote addresses from ambassadorial delegations and Fortune 500 CEOs on emerging global trade networks and strategic geo-economic corridors.
                </p>
              </div>
              <NextLink
                href="/events"
                className="mt-8 inline-flex items-center gap-2 text-xs font-mono font-bold text-[#60A5FA] uppercase tracking-wider group-hover:gap-3 transition-all"
              >
                <span>Register for Summit</span>
                <ArrowRight className="w-4 h-4" />
              </NextLink>
            </div>

            {/* Right Stacked Events */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              {/* Event Card 1 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex gap-6 items-start hover:border-[#2563EB]/40 transition-all group flex-1 justify-center flex-col">
                <div className="flex items-start gap-6">
                  <div className="w-16 shrink-0 bg-blue-50 text-[#2563EB] rounded-xl p-3 text-center font-mono">
                    <span className="text-xl font-bold block leading-none">18</span>
                    <span className="text-[10px] font-bold uppercase mt-1 block">JUN</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors">
                      Next-Gen Artificial Intelligence & Governance Workshop
                    </h4>
                    <span className="text-xs font-mono text-gray-500 block mt-2">
                      10:00 AM • AUDITORIUM HALL A
                    </span>
                    <NextLink
                      href="/events"
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mt-4 group-hover:gap-2 transition-all"
                    >
                      <span>Explore Event</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </NextLink>
                  </div>
                </div>
              </div>

              {/* Event Card 2 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex gap-6 items-start hover:border-[#2563EB]/40 transition-all group flex-1 justify-center flex-col">
                <div className="flex items-start gap-6">
                  <div className="w-16 shrink-0 bg-blue-50 text-[#2563EB] rounded-xl p-3 text-center font-mono">
                    <span className="text-xl font-bold block leading-none">04</span>
                    <span className="text-[10px] font-bold uppercase mt-1 block">JUL</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors">
                      Sandstone Startup Summit: Pitching to Tier-1 VCs
                    </h4>
                    <span className="text-xs font-mono text-gray-500 block mt-2">
                      02:00 PM • INNOVATION INCUBATOR
                    </span>
                    <NextLink
                      href="/events"
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mt-4 group-hover:gap-2 transition-all"
                    >
                      <span>Explore Event</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </NextLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. READY TO SHAPE YOUR FUTURE? (matching input_file_2.png) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#111827] text-white text-center">
        <img
          src={HERO_BG}
          alt="Sandstone Campus Background"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 z-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Ready to Shape Your Future?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Apply to our elite academic pipelines today. Experience world-class faculty, unparalleled placement rates, and a heritage campus built for leaders.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <NextLink
              href="/admissions"
              className="px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-blue-600/30 transition-all"
            >
              Apply Now
            </NextLink>

            <NextLink
              href="/admissions"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all"
            >
              Download Brochure ↓
            </NextLink>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
