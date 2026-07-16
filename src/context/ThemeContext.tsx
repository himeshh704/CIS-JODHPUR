"use client";

import React, { createContext, useContext, useState } from "react";

type ThemeMode = "v1" | "v2";

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "v1",
  setMode: () => {},
  toggleMode: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mode: ThemeMode = "v1";
  const setMode = () => {};
  const toggleMode = () => {};

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
      <div className="bg-[#FFFFFF] text-[#111827] min-h-screen">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
