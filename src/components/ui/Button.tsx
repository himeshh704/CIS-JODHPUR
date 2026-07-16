"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const { mode } = useTheme();

  const sizeClasses = {
    sm: "px-4 py-2 text-xs rounded-lg gap-1.5",
    md: "px-6 py-3 text-sm rounded-xl gap-2",
    lg: "px-8 py-4 text-base rounded-2xl gap-2.5",
  };

  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D97706]/50";

  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-[#D97706] text-white hover:bg-[#B45309] shadow-md hover:shadow-[0_0_20px_rgba(217,119,6,0.4)]";
      case "secondary":
        return mode === "v2"
          ? "bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/80 shadow-md"
          : "bg-[#1E3A8A] text-white hover:bg-[#172E6D] shadow-md";
      case "outline":
        return mode === "v2"
          ? "border border-white/20 hover:bg-white/10 text-white"
          : "border border-[#E6DED1] hover:border-[#D97706] bg-white text-[#262626] shadow-sm";
      case "ghost":
        return mode === "v2"
          ? "hover:bg-white/10 text-white"
          : "hover:bg-[#E6DED1]/40 text-[#262626]";
      default:
        return "";
    }
  };

  const combinedClasses = `${baseStyles} ${sizeClasses[size]} ${getVariantClasses()} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
        {icon && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
