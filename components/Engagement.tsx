"use client";

import { motion } from "framer-motion";
import { Search, Pencil, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover & Diagnose",
    description: "Understand business goals, current systems, and constraints.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design & Architect",
    description: "Propose a modern blueprint for platforms, data, and automation.",
    icon: Pencil,
  },
  {
    number: "03",
    title: "Build, Integrate & Scale",
    description: "Implement solutions, integrate systems, and iterate for growth.",
    icon: Rocket,
  },
];

export function Engagement() {
  return (
    <section id="approach" className="min-h-screen flex items-center py-24 md:py-32 bg-gradient-to-b from-[#F0EDE5] via-[#EBE7DD] to-[#F0EDE5] relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary gradient orb */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#B22222]/10 via-[#B22222]/5 to-transparent rounded-full blur-3xl" />
        {/* Secondary accent orb */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#D4AF37]/8 via-[#D4AF37]/4 to-transparent rounded-full blur-3xl" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,15,15,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,15,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        {/* Section Header - Premium */}
        <div className="text-center mb-16 md:mb-20 space-y-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border-2 border-[#B22222]/30 bg-gradient-to-r from-[#FFFEF9]/95 to-[#FFF9F0]/80 backdrop-blur-sm shadow-[0_4px_20px_rgba(178,34,34,0.1)]"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#B22222] to-[#C1121F] animate-pulse" />
            <span className="font-body text-[11px] font-semibold tracking-[0.25em] text-[#0F0F0F]/70 uppercase">
              Our Process
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-[#0F0F0F] leading-[1.05]"
          >
            How We Work With You
          </motion.h2>
        </div>

        {/* Premium Process Steps */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Premium Step Container */}
              <div className="relative mb-8">
                {/* Main icon container with premium styling */}
                <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-3xl bg-gradient-to-br from-[#FFFEF9] to-[#FAF9F6] border-2 border-[#0F0F0F]/10 flex items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.12),0_0_0_1px_rgba(212,175,55,0.15)] group-hover:border-[#D4AF37]/30 transition-all duration-500 group-hover:scale-105">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-[#C9A032]/5 transition-all duration-500" />
                  
                  {/* Icon */}
                  <step.icon className="w-9 h-9 lg:w-10 lg:h-10 text-[#0F0F0F] group-hover:text-[#D4AF37] transition-all duration-500 relative z-10" strokeWidth={1.5} />
                  
                  {/* Decorative corner elements */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 rounded-tl-lg transition-all duration-500" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 rounded-br-lg transition-all duration-500" />
                </div>

                {/* Premium number badge */}
                <div className="absolute -top-2 -right-2 w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C9A032] flex items-center justify-center shadow-[0_8px_24px_rgba(212,175,55,0.4)] group-hover:shadow-[0_12px_32px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-all duration-500">
                  <span className="font-heading text-sm lg:text-base font-bold text-white tracking-tight">
                    {step.number}
                  </span>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C9A032] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500" />
                </div>

                {/* Step indicator line (subtle) */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-b from-[#D4AF37]/30 to-transparent" />
              </div>

              {/* Title - Premium Typography */}
              <h3 className="font-heading text-2xl lg:text-3xl font-bold tracking-[-0.02em] text-[#0F0F0F] mb-4 leading-tight px-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0F0F0F] group-hover:to-[#0F0F0F]/70 transition-all duration-500">
                {step.title}
              </h3>

              {/* Description - Enhanced Typography */}
              <p className="font-body text-sm lg:text-base text-[#0F0F0F]/65 leading-[1.7] max-w-sm px-4 font-light">
                {step.description}
              </p>

              {/* Premium Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 lg:top-14 left-[60%] w-[calc(100%+2.5rem)] lg:w-[calc(100%+3rem)] h-[2px] pointer-events-none">
                  {/* Base gradient line */}
                  <div className="w-full h-full bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent" />
                  {/* Animated shimmer overlay */}
                  <motion.div
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Decorative arrow */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-r-2 border-t-2 border-[#D4AF37]/30 rotate-45 -mr-1" />
                </div>
              )}

              {/* Bottom accent (mobile) */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  className="md:hidden mt-12 w-16 h-[2px] bg-gradient-to-r from-[#D4AF37]/40 to-transparent origin-left"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
