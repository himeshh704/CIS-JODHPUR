import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CIS Jodhpur | Centre for International Studies",
  description: "Centre for International Studies, Jodhpur. Premier higher education institution offering world-class international programs, breakthrough research, and rigorous industry immersion in Jodhpur, Rajasthan.",
};

import { BottomTabBar } from "@/components/BottomTabBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 flex flex-col pb-16 lg:pb-0">{children}</main>
          <Footer />
          <BottomTabBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
