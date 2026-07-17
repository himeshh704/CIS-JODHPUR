"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { ScrollReveal } from "@/components/motion/MotionSystem";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function BlogPage() {
  const { mode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const categories = [
    "All",
    "Campus Life",
    "Academics",
    "Research",
    "Alumni Stories",
    "Career Tips",
    "Student Voices"
  ];

  const gridArticles = [
    {
      title: "Resonance 2025: A Symphony of Desert and Technology",
      category: "Campus Life",
      date: "Oct 18, 2025",
      author: "Aditya Vardhan",
      excerpt: "Reliving the most prestigious annual cultural symposium, where legacy stone facades met neon laser mapping projections.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Quantum Information Theory: New Curriculum Horizons",
      category: "Academics",
      date: "Oct 15, 2025",
      author: "Prof. Mira Nair",
      excerpt: "CIS announces collaborative post-graduate tracks with international quantum computing consortiums.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Algorithmic Heritage: Archiving the Blue City",
      category: "Research",
      date: "Oct 08, 2025",
      author: "Rahul Mehta",
      excerpt: "Leveraging UAV photography and semantic neural segmentation to catalog the blue facades of Old Jodhpur.",
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "From Jodhpur to Silicon Valley: Path of Perseverance",
      category: "Alumni Stories",
      date: "Sep 30, 2025",
      author: "Vikram Rathore",
      excerpt: "Alumni class of 2018 discusses launching neural safety infrastructure startups in California.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Strategic Preparation for Tier-1 Quant Placements",
      category: "Career Tips",
      date: "Sep 25, 2025",
      author: "Career Cell",
      excerpt: "Key metrics, mock interviews, and advanced probability architectures requested by top computational funds.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Stewardship of the Sun: Student-Run Solar Initiative",
      category: "Student Voices",
      date: "Sep 12, 2025",
      author: "Siddharth Singh",
      excerpt: "How a peer-led group designed and implemented a microgrid system for the regional campus hostels.",
      image: "https://images.unsplash.com/photo-1509391365368-fabff8159b3d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredArticles = gridArticles.filter(
    (a) => selectedCategory === "All" || a.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  return (
    <div className="flex flex-col w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-20">
      {/* 1. CATEGORY FILTER BAR (input_file_0.png) */}
      <ScrollReveal animation="fadeUp">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
          {categories.map((cat, idx) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm transition-all font-medium ${
                  isSelected
                    ? "bg-blue-600 text-white font-semibold shadow-sm"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* 2. HERO FEATURED ARTICLE (input_file_2.png) */}
      <ScrollReveal animation="fadeUp">
        <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm sm:shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all hover:shadow-lg">
          {/* Left Image Section */}
          <div className="lg:col-span-6 h-72 sm:h-96 lg:h-auto relative overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
              alt="The Dawn of Neural Architecture in Desert Cities"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right Content Section */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3.5 py-1.5 rounded-md bg-blue-600 text-white text-xs font-bold uppercase tracking-wider">
                  RESEARCH & TECH
                </span>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                  12 Min Read
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.18] text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                The Dawn of Neural Architecture in Desert Cities
              </h1>

              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mt-4 sm:mt-6">
                How our research teams at CIS Jodhpur are using generative intelligence to model structural temperature regulation in historic sandstone monuments.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                  alt="Dr. Aranya Sen"
                  className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-gray-700 shadow-sm"
                />
                <div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">
                    Dr. Aranya Sen
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Oct 24, 2025
                  </div>
                </div>
              </div>

              <a
                href="/research"
                className="text-blue-600 dark:text-blue-400 font-bold text-sm sm:text-base flex items-center gap-1.5 hover:gap-2.5 transition-all group"
              >
                READ ARTICLE <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 3. 6-CARD BLOG GRID (input_file_3.png) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((art, idx) => (
          <ScrollReveal key={idx} animation="scaleReveal" delayMs={idx * 100}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300 group h-full">
              {/* Top Image */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded border border-blue-600/80 text-blue-600 dark:text-blue-400 text-[11px] font-bold uppercase tracking-wider bg-blue-50/50 dark:bg-blue-950/20">
                      {art.category.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                      {art.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">
                    {art.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                    {art.excerpt}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">
                    By {art.author}
                  </span>
                  <a
                    href="/research"
                    className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    READ <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* 4. PAGINATION BAR (input_file_4.png) */}
      <ScrollReveal animation="fadeUp">
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            disabled
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> PREVIOUS
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg font-bold flex items-center justify-center text-sm transition-all ${
                currentPage === page
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, 3))}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-blue-500 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            NEXT <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </ScrollReveal>

      {/* 5. NEWSLETTER SUBSCRIPTION SECTION (input_file_5.png) */}
      <ScrollReveal animation="fadeUp">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-14 text-center max-w-5xl mx-auto space-y-6 shadow-xl border border-blue-900/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Stay Connected with CIS Jodhpur
            </h2>
            <p className="text-blue-100/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
              Subscribe to our monthly research digest and campus chronicles delivered directly to your inbox.
            </p>

            {subscribed ? (
              <div className="max-w-lg mx-auto mt-6 py-4 px-6 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 font-medium text-sm sm:text-base animate-fadeIn">
                ✓ Thank you for subscribing! We have added you to our monthly research digest.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mt-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base tracking-wide transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

