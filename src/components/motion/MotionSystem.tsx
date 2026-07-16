"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * 1. ScrollReveal Component (Sheet 02 - Section 01 Scroll-Triggered Animations)
 * Triggers entrance animation when element crosses 20% viewport threshold (threshold: 0.2).
 */
export interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fadeUp" | "staggerCard" | "slideInLeft" | "scaleReveal" | "clipReveal";
  delayMs?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  animation = "fadeUp",
  delayMs = 0,
  className = "",
  threshold = 0.2,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const animationClassMap = {
    fadeUp: "animate-fade-up",
    staggerCard: "animate-stagger-card",
    slideInLeft: "animate-slide-in-left",
    scaleReveal: "animate-scale-reveal",
    clipReveal: "animate-clip-reveal",
  };

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? animationClassMap[animation] : "opacity-0"}`}
      style={{
        animationDelay: `${delayMs}ms`,
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * 2. AnimatedCounter Component (Sheet 01 - 02/Statistics Counter Animation)
 * High-fidelity counter modules featuring active circular progress tracks.
 * Numbers interpolate fluidly from zero using regional formatting (`toLocaleString()`), with synchronized radial mask progressions.
 */
export interface AnimatedCounterProps {
  endValue: number;
  suffix?: string;
  prefix?: string;
  label: string;
  durationMs?: number;
  percentage?: number; // For radial arc progression (0 to 100)
  className?: string;
}

export function AnimatedCounter({
  endValue,
  suffix = "",
  prefix = "",
  label,
  durationMs = 2000,
  percentage = 100,
  className = "",
}: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      
      // EASE-OUT DECEL interpolation curve: cubic-bezier(0.05, 0.7, 0.1, 1) approx: 1 - Math.pow(1 - progress, 3)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.floor(easeProgress * endValue);
      
      setCurrentValue(nextValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCurrentValue(endValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, endValue, durationMs]);

  // Calculate circular progress SVG values
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - ((hasStarted ? percentage : 0) / 100) * circumference;

  return (
    <div
      ref={counterRef}
      className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-between transition-all duration-300 hover:shadow-lg ${className}`}
    >
      <div className="relative w-24 h-24 flex items-center justify-center mb-4">
        {/* Background track */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
            className="text-slate-100 dark:text-slate-800"
          />
          {/* Active progress arc */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#2563EB"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-2000 ease-out"
          />
        </svg>
        {/* Value displayed inside circle */}
        <div className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-white">
          {prefix}
          {currentValue.toLocaleString()}
          {suffix}
        </div>
      </div>

      <div className="text-center font-semibold text-sm sm:text-base text-slate-700 dark:text-slate-300">
        {label}
      </div>

      <div className="w-full mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between text-[10px] uppercase font-mono text-slate-400">
        <span>INTERPOLATION</span>
        <span className="text-[#2563EB] font-bold">{hasStarted ? "100%" : "0%"}</span>
      </div>
    </div>
  );
}

/**
 * 3. TimelineTrace Component (Sheet 01 - 01/Timeline Reveal Animation)
 * Interactive vertical milestone trace designed for the heritage presentation.
 * As user scrolls, gold trace draws down, triggering nodes and alternating cards.
 */
export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  tag?: string;
}

export function TimelineTrace({ milestones }: { milestones: MilestoneItem[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate active progress relative to viewport center
      if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
        const scrolled = (windowHeight * 0.75 - rect.top) / rect.height;
        const index = Math.min(
          Math.max(Math.floor(scrolled * milestones.length), 0),
          milestones.length - 1
        );
        setActiveIdx(index);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [milestones.length]);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto py-12 px-4 sm:px-6">
      {/* Central Gold Trace Path */}
      <div className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 top-12 bottom-12 w-0.5 bg-slate-200 dark:bg-slate-800">
        <div
          className="w-full bg-[#C58940] transition-all duration-700 ease-out"
          style={{
            height: `${((activeIdx + 1) / milestones.length) * 100}%`,
          }}
        />
      </div>

      <div className="space-y-16">
        {milestones.map((item, index) => {
          const isTriggered = index <= activeIdx;
          const isLeft = index % 2 === 0;

          return (
            <div
              key={item.year}
              className={`relative flex flex-col sm:flex-row items-start ${
                isLeft ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Card content */}
              <div
                className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                  isLeft ? "sm:pr-10 sm:text-right" : "sm:pl-10 text-left"
                } transition-all duration-500 transform ${
                  isTriggered
                    ? "opacity-100 translate-y-0"
                    : "opacity-30 translate-y-8"
                }`}
              >
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between sm:justify-start gap-3 mb-2">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-[#C58940]">
                      {item.year}
                    </span>
                    {item.tag && (
                      <span className="px-2 py-0.5 text-xs font-mono font-semibold rounded bg-[#C58940]/10 text-[#C58940] border border-[#C58940]/20">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Circle Node on Timeline */}
              <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 top-6 w-5 h-5 flex items-center justify-center z-10">
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 transform ${
                    isTriggered
                      ? "bg-[#C58940] border-white dark:border-slate-900 scale-125 shadow-md"
                      : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 scale-100"
                  }`}
                />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
