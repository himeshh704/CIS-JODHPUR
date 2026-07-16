"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";

interface CardProps {
  variant?: "sandstone" | "midnight-glass" | "bordered-interactive";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({
  variant = "bordered-interactive",
  children,
  className = "",
  onClick,
}: CardProps) {
  const { mode } = useTheme();

  const getVariantClasses = () => {
    switch (variant) {
      case "sandstone":
        return mode === "v2"
          ? "bg-[#111827] border border-white/10 text-white shadow-lg"
          : "bg-[#F9F6F0] border border-[#E6DED1] text-[#262626] shadow-sm";
      case "midnight-glass":
        return mode === "v2"
          ? "bg-[#0A0A0A]/90 border border-white/15 text-white backdrop-blur-xl shadow-2xl"
          : "bg-[#0A0A0A] border border-[#0A0A0A] text-[#F9F6F0] shadow-xl";
      case "bordered-interactive":
      default:
        return mode === "v2"
          ? "bg-[#0A0A0A] border border-white/10 text-white hover:border-[#D97706] hover:shadow-[0_0_25px_rgba(217,119,6,0.15)] transition-all duration-300"
          : "bg-white border border-[#E6DED1] text-[#262626] hover:border-[#D97706] hover:shadow-md transition-all duration-300";
    }
  };

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl p-6 ${getVariantClasses()} ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
