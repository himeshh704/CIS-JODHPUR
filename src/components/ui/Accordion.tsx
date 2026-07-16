"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  badge?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

export function Accordion({ items, defaultOpenId, className = "" }: AccordionProps) {
  const { mode } = useTheme();
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-colors overflow-hidden ${
              mode === "v2"
                ? `bg-[#0A0A0A] ${isOpen ? "border-[#D97706]" : "border-white/10"}`
                : `bg-white ${isOpen ? "border-[#D97706] shadow-sm" : "border-[#E6DED1]"}`
            }`}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold focus:outline-none"
            >
              <div className="flex items-center gap-3">
                {item.badge && (
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D97706]/15 text-[#D97706]">
                    {item.badge}
                  </span>
                )}
                <span>{item.title}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-[#D97706] transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className={`px-6 pb-6 pt-2 text-sm leading-relaxed border-t ${
                mode === "v2" ? "text-gray-300 border-white/5" : "text-gray-600 border-[#E6DED1]/50"
              }`}>
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
