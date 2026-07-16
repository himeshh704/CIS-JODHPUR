"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Calendar, 
  ExternalLink,
  Navigation
} from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "Admissions Inquiry",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // reset after showing success state
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] selection:bg-blue-600 selection:text-white pt-24 pb-0 overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION (input_file_4.png) */}
      <section className="py-16 sm:py-24 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="inline-block bg-blue-50 text-[#2563EB] font-mono text-xs font-semibold px-3 py-1.5 rounded-md uppercase tracking-widest mb-6">
          CONTACT US
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#1E293B] tracking-tight mb-6">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Have questions about our programs or campus? Our team is here to provide the support and information you need.
        </p>
      </section>

      {/* 2. CONTACT FORM & INFO CARDS SECTION (input_file_3.png) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200/80 shadow-sm relative">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1E293B] mb-2">
              Send us a Message
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Fill out the form below and a representative will get back to you within 24 business hours.
            </p>

            {formSubmitted ? (
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center my-8 animate-form-success shadow-md">
                <div className="w-16 h-16 bg-blue-100 text-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#1E293B] mb-2">Message Received</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you for contacting CIS Jodhpur. We have routed your inquiry regarding <span className="font-semibold text-[#2563EB]">{formData.subject}</span> to the appropriate department.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ fullName: "", email: "", phone: "", subject: "Admissions Inquiry", message: "" });
                  }}
                  className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 active:scale-95 transition-all duration-300 shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full bg-[#F8FAFC] border rounded-xl px-4 py-3.5 text-sm text-[#1E293B] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-300 ${
                        formData.fullName.length > 2
                          ? "border-emerald-500 bg-emerald-50/10 input-valid-animated"
                          : "border-gray-200 focus:border-[#2563EB]"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-[#F8FAFC] border rounded-xl px-4 py-3.5 text-sm text-[#1E293B] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-300 ${
                        formData.email.includes("@") && formData.email.includes(".")
                          ? "border-emerald-500 bg-emerald-50/10 input-valid-animated"
                          : "border-gray-200 focus:border-[#2563EB]"
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-[#F8FAFC] border rounded-xl px-4 py-3.5 text-sm text-[#1E293B] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-300 ${
                        formData.phone.length >= 10
                          ? "border-emerald-500 bg-emerald-50/10 input-valid-animated"
                          : "border-gray-200 focus:border-[#2563EB]"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                      SUBJECT
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#1E293B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all duration-300"
                    >
                      <option value="Admissions Inquiry">Admissions Inquiry</option>
                      <option value="Academic Programs">Academic Programs</option>
                      <option value="Placement Cell">Placement Cell</option>
                      <option value="Research Collaboration">Research Collaboration</option>
                      <option value="Campus Tour">Campus Tour</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-4 text-sm text-[#1E293B] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2563EB] hover:bg-blue-700 active:scale-[0.98] text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm uppercase tracking-wider group"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: 4 Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Campus Location */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-sm hover:border-[#2563EB]/30 transition-all group">
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
                  CAMPUS LOCATION
                </span>
                <MapPin className="w-5 h-5 text-gray-400 group-hover:text-[#2563EB] transition-colors" />
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                NH-62, Nagaur Road, Jodhpur, Rajasthan 342037, India
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2563EB] hover:underline"
              >
                <span>GET DIRECTIONS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 2: Direct Inquiries */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-sm hover:border-[#2563EB]/30 transition-all group">
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
                  DIRECT INQUIRIES
                </span>
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#2563EB] transition-colors" />
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">General:</span>
                  <a href="mailto:info@cisj.edu" className="font-medium text-[#1E293B] hover:text-[#2563EB]">info@cisj.edu</a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Admissions:</span>
                  <a href="mailto:admissions@cisj.edu" className="font-medium text-[#1E293B] hover:text-[#2563EB]">admissions@cisj.edu</a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Phone:</span>
                  <a href="tel:+912912801000" className="font-medium text-[#1E293B] hover:text-[#2563EB]">+91 291 280 1000</a>
                </div>
              </div>
            </div>

            {/* Card 3: Office Hours */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-sm hover:border-[#2563EB]/30 transition-all group">
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
                  OFFICE HOURS
                </span>
                <Clock className="w-5 h-5 text-gray-400 group-hover:text-[#2563EB] transition-colors" />
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span>Monday – Friday:</span>
                  <span className="font-medium text-[#1E293B]">9:00 AM – 5:30 PM IST</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium text-[#1E293B]">9:00 AM – 1:30 PM IST</span>
                </div>
                <div className="flex items-center justify-between text-gray-400">
                  <span>Sunday & Holidays:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Card 4: Visit Planning */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-sm hover:border-[#2563EB]/30 transition-all group">
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
                  VISIT PLANNING
                </span>
                <Compass className="w-5 h-5 text-gray-400 group-hover:text-[#2563EB] transition-colors" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Guided campus tours and faculty interactions can be scheduled in advance for prospective students and parents.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                <a href="#tour" className="inline-flex items-center gap-1.5 hover:underline">
                  <span>SCHEDULE A TOUR</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-gray-300">|</span>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
                  <span>VIEW ON GOOGLE MAPS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. MAP SECTION (input_file_5.png) */}
      <section className="bg-white border-y border-gray-200/80 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-blue-50 text-[#2563EB] font-mono text-xs font-semibold px-3 py-1.5 rounded-md uppercase tracking-widest mb-4">
              OUR LOCATION
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#1E293B] tracking-tight">
              Visit Our Campus
            </h2>
          </div>

          {/* Interactive Map Visual Representation matching input_file_5.png */}
          <div className="bg-[#E2E8F0] rounded-3xl border border-gray-300 overflow-hidden relative shadow-md h-[450px] sm:h-[550px] flex items-center justify-center group">
            
            {/* Simulated Map Background Grid & Roads */}
            <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
            
            {/* Simulated Roads */}
            <div className="absolute w-full h-12 bg-white/70 rotate-6 top-1/3 shadow-sm border-y border-gray-300/60 flex items-center justify-around text-[10px] font-mono text-gray-400 tracking-widest uppercase">
              <span>National Highway 62 (NH-62)</span>
              <span>Nagaur Road Corridor</span>
              <span>Jodhpur Bypass</span>
            </div>
            <div className="absolute w-12 h-full bg-white/70 -rotate-12 left-1/3 shadow-sm border-x border-gray-300/60"></div>
            <div className="absolute w-8 h-full bg-blue-200/50 rotate-45 right-1/4 rounded-full blur-sm"></div>

            {/* Floating Location Card matching input_file_5.png */}
            <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 max-w-md mx-4 transform group-hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/30">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#1E293B] leading-snug">
                    CIS Jodhpur Main Campus
                  </h3>
                  <p className="text-xs font-mono text-blue-600 uppercase tracking-wider font-semibold">
                    INSTITUTE HEADQUARTERS
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 border-b border-gray-100 pb-4">
                NH-62, Nagaur Road, Jodhpur, Rajasthan 342037, India. Approximately 15 minutes from Jodhpur Airport (JDH) and Railway Station.
              </p>

              <div className="flex items-center justify-between">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-sm"
                >
                  <span>CONNECT WITH MAPS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs font-mono text-gray-400">26.28° N, 73.02° E</span>
              </div>
            </div>

            {/* Map Controls Simulation */}
            <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-10">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-2 text-gray-600 font-mono text-xs w-8 h-8 flex items-center justify-center font-bold">+</div>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-2 text-gray-600 font-mono text-xs w-8 h-8 flex items-center justify-center font-bold">-</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEPARTMENTAL CONTACTS (input_file_0.png close-up) */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-block bg-blue-50 text-[#2563EB] font-mono text-xs font-semibold px-3 py-1.5 rounded-md uppercase tracking-widest mb-3">
            INSTITUTE DIRECTORY
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#1E293B] tracking-tight">
            Departmental Contacts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Card 1: Admissions */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group">
            <div>
              <h3 className="font-serif text-2xl text-[#2563EB] font-normal mb-6">
                Admissions
              </h3>
              <div className="space-y-3.5 text-sm text-gray-600 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400 shrink-0 group-hover:text-[#2563EB] transition-colors" />
                  <a href="tel:+919999911111" className="hover:text-[#2563EB] font-medium">+91 99999 11111</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400 shrink-0 group-hover:text-[#2563EB] transition-colors" />
                  <a href="mailto:admissions@cisj.edu" className="hover:text-[#2563EB] font-medium break-all">admissions@cisj.edu</a>
                </div>
              </div>
            </div>
            <a
              href="mailto:admissions@cisj.edu"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2563EB] hover:underline mt-auto pt-4 border-t border-gray-100"
            >
              <span>CONNECT</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Card 2: Academic Affairs */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group">
            <div>
              <h3 className="font-serif text-2xl text-[#2563EB] font-normal mb-6">
                Academic Affairs
              </h3>
              <div className="space-y-3.5 text-sm text-gray-600 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400 shrink-0 group-hover:text-[#2563EB] transition-colors" />
                  <a href="tel:+919999922222" className="hover:text-[#2563EB] font-medium">+91 99999 22222</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400 shrink-0 group-hover:text-[#2563EB] transition-colors" />
                  <a href="mailto:dean.academics@cisj.edu" className="hover:text-[#2563EB] font-medium break-all">dean.academics@cisj.edu</a>
                </div>
              </div>
            </div>
            <a
              href="mailto:dean.academics@cisj.edu"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2563EB] hover:underline mt-auto pt-4 border-t border-gray-100"
            >
              <span>CONNECT</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Card 3: Student Services */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group">
            <div>
              <h3 className="font-serif text-2xl text-[#2563EB] font-normal mb-6">
                Student Services
              </h3>
              <div className="space-y-3.5 text-sm text-gray-600 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400 shrink-0 group-hover:text-[#2563EB] transition-colors" />
                  <a href="tel:+919999933333" className="hover:text-[#2563EB] font-medium">+91 99999 33333</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400 shrink-0 group-hover:text-[#2563EB] transition-colors" />
                  <a href="mailto:student.help@cisj.edu" className="hover:text-[#2563EB] font-medium break-all">student.help@cisj.edu</a>
                </div>
              </div>
            </div>
            <a
              href="mailto:student.help@cisj.edu"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2563EB] hover:underline mt-auto pt-4 border-t border-gray-100"
            >
              <span>CONNECT</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Card 4: Placement Cell */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group">
            <div>
              <h3 className="font-serif text-2xl text-[#2563EB] font-normal mb-6">
                Placement Cell
              </h3>
              <div className="space-y-3.5 text-sm text-gray-600 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400 shrink-0 group-hover:text-[#2563EB] transition-colors" />
                  <a href="tel:+919999944444" className="hover:text-[#2563EB] font-medium">+91 99999 44444</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400 shrink-0 group-hover:text-[#2563EB] transition-colors" />
                  <a href="mailto:placements@cisj.edu" className="hover:text-[#2563EB] font-medium break-all">placements@cisj.edu</a>
                </div>
              </div>
            </div>
            <a
              href="mailto:placements@cisj.edu"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2563EB] hover:underline mt-auto pt-4 border-t border-gray-100"
            >
              <span>CONNECT</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      {/* 5. SOCIAL MEDIA STRIP (input_file_2.png) */}
      <section className="py-16 sm:py-20 border-t border-gray-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <span className="text-sm sm:text-base font-semibold tracking-widest uppercase text-gray-700 font-mono">
              FOLLOW OUR JOURNEY
            </span>
            <div className="flex items-center gap-4 sm:gap-6">
              {[
                { name: "LinkedIn", icon: "in", href: "https://linkedin.com" },
                { name: "Twitter/X", icon: "𝕏", href: "https://twitter.com" },
                { name: "YouTube", icon: "▶", href: "https://youtube.com" },
                { name: "Instagram", icon: "📷", href: "https://instagram.com" },
                { name: "Facebook", icon: "f", href: "https://facebook.com" },
              ].map((platform, idx) => (
                <a
                  key={idx}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-200 bg-[#F8FAFC] flex items-center justify-center text-[#1E293B] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50/50 hover:shadow-md transition-all duration-300 font-semibold text-lg"
                  aria-label={platform.name}
                >
                  {platform.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOM CONTACT FOOTER (input_file_1.png close-up) */}
      <footer className="bg-white border-t border-gray-200 text-[#1E293B] pt-16 sm:pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column matching input_file_1.png */}
            <div className="md:col-span-6 lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-serif font-bold text-lg shadow-sm">
                  C
                </div>
                <span className="font-bold text-xl tracking-tight text-[#0F172A]">
                  CIS JODHPUR
                </span>
              </div>
              <p className="text-gray-500 text-sm max-w-sm leading-relaxed pt-1">
                Empowering the next generation of scientists and technologists through rigorous research, innovative learning, and a commitment to excellence.
              </p>
            </div>

            {/* STUDENT LIFE & ARCHIVES */}
            <div className="md:col-span-2 lg:col-span-2 space-y-4">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1E293B]">
                STUDENT LIFE
              </h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link href="/campus-life" className="hover:text-[#2563EB] transition-colors font-semibold text-gray-700">Campus Life</Link></li>
                <li><Link href="/gallery" className="hover:text-[#2563EB] transition-colors font-semibold text-[#2563EB]">Visual Gallery</Link></li>
                <li><Link href="/events" className="hover:text-[#2563EB] transition-colors">Events Calendar</Link></li>
                <li><Link href="/campus-life#clubs" className="hover:text-[#2563EB] transition-colors">Societies & Clubs</Link></li>
              </ul>
            </div>

            {/* PORTALS */}
            <div className="md:col-span-2 lg:col-span-3 space-y-4">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1E293B]">
                PORTALS
              </h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link href="/admissions" className="hover:text-[#2563EB] transition-colors">Admissions</Link></li>
                <li><Link href="/academics" className="hover:text-[#2563EB] transition-colors">Academics Hub</Link></li>
                <li><Link href="/placements" className="hover:text-[#2563EB] transition-colors">Placements Hub</Link></li>
                <li><Link href="/research" className="hover:text-[#2563EB] transition-colors">Research Labs</Link></li>
              </ul>
            </div>

            {/* SUPPORT & RESOURCES */}
            <div className="md:col-span-2 lg:col-span-2 space-y-4">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1E293B]">
                SUPPORT
              </h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link href="/faq" className="hover:text-[#2563EB] transition-colors">Helpdesk & FAQ</Link></li>
                <li><Link href="/resources" className="hover:text-[#2563EB] transition-colors">Library & Media</Link></li>
                <li><Link href="/apply" className="hover:text-[#2563EB] transition-colors">Apply Online</Link></li>
                <li><Link href="/about" className="hover:text-[#2563EB] transition-colors">About CIS Jodhpur</Link></li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar matching input_file_1.png */}
          <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
            <p>
              © 2024 Cambridge Institute of Science, Jodhpur. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
