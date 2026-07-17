"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Award, Calculator, CheckCircle2, Sparkles, HelpCircle, ArrowRight } from "lucide-react";

export function ScholarshipCalculator() {
  const [program, setProgram] = useState<"actuarial" | "insurtech" | "pgdm">("actuarial");
  const [scorePercentile, setScorePercentile] = useState<number>(88);
  const [hostelSelected, setHostelSelected] = useState<boolean>(true);
  const [hostelType, setHostelType] = useState<"single" | "twin">("twin");

  // Base program annual tuition fees in INR
  const baseFees = {
    actuarial: 280000, // B.Sc. / M.Sc. Actuarial Sciences
    insurtech: 340000, // M.Sc. InsurTech & Clinical Risk
    pgdm: 420000,      // PGDM Corporate Leadership / MIB
  };

  // Calculate scholarship waiver percentage based on score percentile
  const getMeritWaiver = (score: number) => {
    if (score >= 98) return { percent: 100, label: "Dean's Full Merit Scholarship (100% Tuition Waiver)" };
    if (score >= 92) return { percent: 75, label: "Institutional Excellence Scholarship (75% Tuition Waiver)" };
    if (score >= 85) return { percent: 50, label: "Academic Achiever Scholarship (50% Tuition Waiver)" };
    if (score >= 75) return { percent: 25, label: "Foundation Scholarship (25% Tuition Waiver)" };
    return { percent: 0, label: "Standard Admission Fee Schedule" };
  };

  const waiver = getMeritWaiver(scorePercentile);
  const annualBase = baseFees[program];
  const tuitionWaiverAmount = Math.round((annualBase * waiver.percent) / 100);
  const netAnnualTuition = annualBase - tuitionWaiverAmount;

  const hostelAnnualFee = hostelSelected ? (hostelType === "single" ? 180000 : 120000) : 0;
  const totalAnnualInvestment = netAnnualTuition + hostelAnnualFee;

  return (
    <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-3xl p-6 sm:p-10 border border-blue-500/20 shadow-2xl relative overflow-hidden">
      {/* Background Architectural Glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Form Panel */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5 text-[#60A5FA]" /> Interactive Calculator
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Instant Scholarship & Tuition Estimator
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mt-2">
              Select your academic track and adjust your entrance exam score (CAT / CIS-SAT / Merit Index) to instantly calculate your eligible tuition waiver.
            </p>
          </div>

          {/* Program Selector */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-2.5">
              1. Select Academic Track
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "actuarial", name: "Actuarial Sciences", desc: "₹2.80L / year base" },
                { id: "insurtech", name: "InsurTech & Clinical AI", desc: "₹3.40L / year base" },
                { id: "pgdm", name: "PGDM / MIB Leadership", desc: "₹4.20L / year base" },
              ].map((trk) => (
                <button
                  key={trk.id}
                  type="button"
                  onClick={() => setProgram(trk.id as any)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    program === trk.id
                      ? "bg-[#2563EB] border-blue-400 text-white shadow-md shadow-blue-600/30 font-semibold"
                      : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="text-sm font-bold block">{trk.name}</div>
                  <div className={`text-[11px] font-mono mt-0.5 ${program === trk.id ? "text-blue-100" : "text-gray-400"}`}>
                    {trk.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Entrance Exam Percentile Slider */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-blue-300 block">
                  2. Entrance Exam Score / Merit Percentile
                </label>
                <span className="text-[11px] text-gray-400">
                  Applicable for CAT, XAT, CIS-SAT, or Academic Merit Index
                </span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-[#2563EB] text-white font-serif text-2xl font-bold shadow-inner">
                {scorePercentile}%
              </div>
            </div>

            <input
              type="range"
              min="60"
              max="100"
              step="1"
              value={scorePercentile}
              onChange={(e) => setScorePercentile(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#60A5FA] mt-2"
            />

            <div className="flex justify-between text-[10px] font-mono text-gray-400 mt-2">
              <span>60% (Base Entry)</span>
              <span>75% (25% Waiver)</span>
              <span>85% (50% Waiver)</span>
              <span>92% (75% Waiver)</span>
              <span>98%+ (100% Full Waiver)</span>
            </div>
          </div>

          {/* Hostel Options */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
                3. Campus Residence & Hostel Suite
              </label>
              <input
                type="checkbox"
                checked={hostelSelected}
                onChange={(e) => setHostelSelected(e.target.checked)}
                className="w-4 h-4 rounded text-[#2563EB] focus:ring-[#2563EB] bg-gray-800 border-gray-600"
              />
            </div>

            {hostelSelected && (
              <div className="grid grid-cols-2 gap-3 mt-3 animate-in fade-in duration-200">
                <button
                  type="button"
                  onClick={() => setHostelType("twin")}
                  className={`p-3 rounded-xl border text-left text-xs ${
                    hostelType === "twin"
                      ? "bg-blue-500/20 border-blue-400 text-white font-semibold"
                      : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  <div className="font-bold">Twin Shared Sandstone Suite</div>
                  <div className="font-mono text-[11px] mt-0.5 text-blue-300">₹1,20,000 / year</div>
                </button>
                <button
                  type="button"
                  onClick={() => setHostelType("single")}
                  className={`p-3 rounded-xl border text-left text-xs ${
                    hostelType === "single"
                      ? "bg-blue-500/20 border-blue-400 text-white font-semibold"
                      : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  <div className="font-bold">Executive Single Air-Con Suite</div>
                  <div className="font-mono text-[11px] mt-0.5 text-blue-300">₹1,80,000 / year</div>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Output Dashboard */}
        <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 flex flex-col justify-between h-full min-h-[420px]">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/15">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-300 font-bold">
                ESTIMATED ANNUAL INVESTMENT
              </span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>

            <div className="py-6 space-y-4 border-b border-white/15">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-300">Annual Base Tuition:</span>
                <span className="font-mono font-semibold">₹{annualBase.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-emerald-300 flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Merit Waiver ({waiver.percent}%):
                </span>
                <span className="font-mono font-bold text-emerald-400">-₹{tuitionWaiverAmount.toLocaleString()}</span>
              </div>

              {hostelSelected && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Hostel & Dining ({hostelType === "single" ? "Single" : "Twin"}):</span>
                  <span className="font-mono font-semibold">+₹{hostelAnnualFee.toLocaleString()}</span>
                </div>
              )}
            </div>

            {/* Total Section */}
            <div className="py-6">
              <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">
                Net Payable Tuition & Fee (INR / Year)
              </div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
                ₹{totalAnnualInvestment.toLocaleString()}
              </div>
              <div className="mt-3 p-3 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-200 text-xs leading-relaxed">
                <strong>{waiver.label}</strong>
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-3">
            <Link
              href="/apply"
              className="w-full py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-mono font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all group"
            >
              Lock in {waiver.percent}% Scholarship Rate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-[11px] text-gray-400 text-center font-mono">
              *Scholarships are guaranteed upon verifying official scorecards at admissions desk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
