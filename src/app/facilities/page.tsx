"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { ScrollReveal } from "@/components/motion/MotionSystem";
import { CampusMap } from "@/components/CampusMap";
import { 
  Cpu, 
  ShieldAlert, 
  BookOpen, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Wifi, 
  Database,
  Terminal,
  Zap
} from "lucide-react";

export default function FacilitiesPage() {
  const { mode } = useTheme();

  const majorLabs = [
    {
      title: "NVIDIA DGX Supercomputing & AI Research Hub",
      category: "High-Performance Computing (HPC)",
      specs: "128x NVIDIA H100 Tensor Core GPUs • 32 TB High-Speed HBM3 Memory • 800 Gbps Quantum InfiniBand",
      desc: "Our flagship artificial intelligence laboratory dedicated to training multi-billion parameter large language models, quantum circuit simulation, and autonomous computer vision. Available 24/7 to undergraduate and postgraduate researchers.",
      icon: Cpu,
      badge: "Silicon Centerpiece",
    },
    {
      title: "Air-Gapped Cybersecurity Sandbox & Defense Lab",
      category: "Network Defense & Forensics",
      specs: "Isolated Virtualization Clusters • SCADA & Industrial Control Emulators • Hardware Reverse Engineering Bench",
      desc: "Designed in collaboration with defense cyber experts, this isolated air-gapped network enables students to safely analyze zero-day malware, execute offensive penetration testing, and secure critical infrastructure protocols.",
      icon: ShieldAlert,
      badge: "Security Sandbox",
    },
    {
      title: "Central Library & Digital Archives",
      category: "Institutional Knowledge Hub",
      specs: "2,50,000+ Physical Volumes • IEEE/ACM/Cambridge Digital Subscriptions • 400 Individual Study Cubicles",
      desc: "A breathtaking institutional library featuring silent high-speed digital research terminals. Houses rare manuscript archives alongside real-time Bloomberg financial terminals.",
      icon: BookOpen,
      badge: "Heritage Archive",
    },
    {
      title: "Autonomous Robotics & IoT Fabrication Arena",
      category: "Hardware & Mechatronics",
      specs: "Industrial 5-Axis CNC Milling • Direct Metal Laser Sintering (DMLS) 3D Printers • ROS 2 Drone Flight Cage",
      desc: "Where digital code becomes tangible hardware. Students prototype custom PCB controllers, fabricate carbon-fiber drone frames, and program industrial robotic arms for smart agriculture and defense applications.",
      icon: Bot,
      badge: "Robotics Arena",
    },
  ];

  const infrastructureStats = [
    { label: "Optical Backbone", value: "100 Gbps Tier-1 Fiber Redundancy" },
    { label: "Cloud Compute Nodes", value: "2,400+ Virtualized Server Cores" },
    { label: "Solar Microgrid", value: "2.4 Megawatts On-Campus Clean Power" },
    { label: "Lab Availability", value: "24 Hours / 365 Days (Biometric Access)" },
  ];

  return (
    <div className="flex flex-col w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* 1. HERO */}
      <ScrollReveal animation="fadeUp">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest font-bold bg-[#2563EB]/15 text-[#2563EB] border border-[#2563EB]/30">
              High-Tech Infrastructure
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-gray-900 dark:text-white">
              {mode === "v2" ? (
                <>State-of-the-Art <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-blue-400">Computing Labs</span> & Centers.</>
              ) : (
                <>Research Facilities: <span className="text-[#2563EB]">High-Performance Computing</span> & Architecture.</>
              )}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              From our multi-petaflop NVIDIA GPU supercomputing cluster to our air-gapped cybersecurity penetration testing sandbox, CIS Jodhpur gives undergraduate students unhindered access to equipment typically reserved for national research laboratories.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#major-labs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/20"
              >
                Explore Research Labs <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-[#2563EB] text-gray-800 dark:text-gray-200 font-semibold text-sm transition-all"
              >
                View Faculty Research Projects
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className={`p-8 rounded-3xl border space-y-6 ${
              mode === "v2"
                ? "bg-[#0A0A0A] border-white/10 shadow-2xl"
                : "bg-white border-[#E6DED1] shadow-xl"
            }`}>
              <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] block font-bold">
                System Telemetry (Active Nodes)
              </span>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                {infrastructureStats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col border-b border-gray-200 dark:border-gray-800 pb-3 last:border-b-0 last:pb-0">
                    <span className="text-xs uppercase tracking-wider opacity-70 mb-1">{stat.label}</span>
                    <span className="font-mono font-bold text-base text-[#2563EB]">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 2. MAJOR LABS & CENTERS */}
      <ScrollReveal animation="fadeUp">
        <div id="major-labs" className="scroll-mt-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D97706] font-bold">
              Flagship Facilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              World-Class Academic Laboratories
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Discover the four cornerstone laboratories that drive our institutional research index and student innovations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {majorLabs.map((lab, idx) => {
              const IconComp = lab.icon;
              return (
                <div
                  key={idx}
                  className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-6 ${
                    mode === "v2"
                      ? "bg-[#0A0A0A] border-white/10 hover:border-[#D97706] shadow-xl"
                      : "bg-white border-[#E6DED1] hover:border-[#D97706] shadow-lg"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#D97706]/15 text-[#D97706] flex items-center justify-center">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="inline-block px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                        {lab.badge}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">{lab.category}</span>
                      <h3 className="font-serif text-2xl font-bold mb-2 text-[#D97706]">{lab.title}</h3>
                      <p className="text-xs font-mono text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-white/5 p-3 rounded-lg border border-gray-200 dark:border-white/10 mb-4">
                        {lab.specs}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{lab.desc}</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="/apply"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#D97706] hover:underline"
                    >
                      Reserve Lab Access via Form A-01 <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Interactive Campus Blueprint Map */}
      <div className="my-12">
        <CampusMap />
      </div>

      {/* 3. SUSTAINABLE GREEN CAMPUS INFRASTRUCTURE */}
      <ScrollReveal animation="fadeUp">
        <div className={`p-10 rounded-3xl border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
          mode === "v2" ? "bg-[#0A0A0A] border-white/10 shadow-2xl" : "bg-white border-[#E6DED1] shadow-xl"
        }`}>
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest font-bold bg-[#D97706]/15 text-[#D97706] border border-[#D97706]/30">
              Zero Carbon Commitment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">2.4 MW Solar Array & Desert Water Grid</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              High-performance computing requires clean, reliable power. Our campus is powered by a dedicated 2.4 Megawatt rooftop solar microgrid coupled with battery storage, making our NVIDIA GPU clusters completely carbon-neutral during daylight hours. Furthermore, our closed-loop sewage treatment and rainwater harvesting systems conserve over 10 million liters of desert groundwater annually.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start sm:items-end justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm transition-all shadow-xl shadow-[#D97706]/20"
            >
              Read Institutional ESG Report <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
