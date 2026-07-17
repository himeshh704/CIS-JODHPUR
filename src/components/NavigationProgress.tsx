"use client";

import React, { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function NavigationProgressInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // When pathname changes, start progress bar and quickly complete it
    setIsNavigating(true);
    setProgress(30);

    const midTimer = setTimeout(() => setProgress(75), 150);
    const completeTimer = setTimeout(() => {
      setProgress(100);
      const hideTimer = setTimeout(() => {
        setIsNavigating(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(hideTimer);
    }, 350);

    return () => {
      clearTimeout(midTimer);
      clearTimeout(completeTimer);
    };
  }, [pathname, searchParams]);

  if (!isNavigating && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[120] h-1 bg-transparent pointer-events-none overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#1D4ED8] shadow-[0_0_10px_#2563EB] transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
        }}
      />
    </div>
  );
}

export function NavigationProgress() {
  return (
    <Suspense fallback={null}>
      <NavigationProgressInner />
    </Suspense>
  );
}
