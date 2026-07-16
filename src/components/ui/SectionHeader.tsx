"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";

interface SectionHeaderProps {
  overtitle?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  overtitle,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const { mode } = useTheme();

  return (
    <div className={`mb-12 ${align === "center" ? "text-center max-w-3xl mx-auto" : ""} ${className}`}>
      {overtitle && (
        <span className="text-xs font-semibold uppercase tracking-widest text-[#D97706] block mb-2 font-mono">
          {overtitle}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg mt-3 leading-relaxed ${
          mode === "v2" ? "text-gray-300" : "text-gray-600"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
