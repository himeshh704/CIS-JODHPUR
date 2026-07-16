"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";

interface BadgeProps {
  variant?: "amber" | "royal" | "midnight" | "success" | "outline";
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "amber", children, className = "" }: BadgeProps) {
  const { mode } = useTheme();

  const getStyles = () => {
    switch (variant) {
      case "amber":
        return "bg-[#D97706]/15 text-[#D97706] border border-[#D97706]/30";
      case "royal":
        return "bg-[#1E3A8A]/15 text-[#1E3A8A] border border-[#1E3A8A]/30 dark:text-blue-300";
      case "midnight":
        return mode === "v2"
          ? "bg-white/10 text-white border border-white/20"
          : "bg-[#0A0A0A] text-white border border-[#0A0A0A]";
      case "success":
        return "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30";
      case "outline":
        return mode === "v2"
          ? "border border-white/20 text-white/80"
          : "border border-[#E6DED1] text-[#262626]/80 bg-white";
      default:
        return "";
    }
  };

  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-md font-mono text-xs font-bold uppercase tracking-wider ${getStyles()} ${className}`}>
      {children}
    </span>
  );
}
