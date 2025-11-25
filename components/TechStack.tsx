"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Brain, Plug, Workflow } from "lucide-react";

export function TechStack() {
  const categories = [
    { name: "Cloud & Platforms", icon: Cloud },
    { name: "Data & Analytics", icon: Database },
    { name: "AI & Machine Learning", icon: Brain },
    { name: "Integration & APIs", icon: Plug },
    { name: "Automation & Orchestration", icon: Workflow },
  ];

  return (
    <section id="tech" className="min-h-screen flex items-center py-24 md:py-32 bg-gradient-to-b from-[#FAF9F6] via-[#FFFEF9] to-[#FAF9F6] relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary gradient orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#D4AF37]/8 via-[#D4AF37]/4 to-transparent rounded-full blur-3xl" />
        {/* Secondary accent orb */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#B22222]/5 via-[#B22222]/2 to-transparent rounded-full blur-3xl" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,15,15,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,15,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 w-full">
        {/* Section Header - Premium */}
        <div className="mb-16 md:mb-20 space-y-5 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border-2 border-[#D4AF37]/40 bg-gradient-to-r from-[#FFFEF9]/90 to-[#FFF9F0]/70 backdrop-blur-sm shadow-[0_4px_20px_rgba(212,175,55,0.1)]"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C9A032] animate-pulse" />
            <span className="font-body text-[11px] font-semibold tracking-[0.25em] text-[#0F0F0F]/70 uppercase">
              Technology
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-[#0F0F0F] leading-[1.05]"
          >
            Our Technical Foundations
          </motion.h2>
        </div>
        
        {/* Premium Tech Categories */}
        <div className="flex flex-wrap justify-center gap-3.5 lg:gap-4">
          {categories.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="relative px-7 py-4 lg:px-8 lg:py-5 rounded-2xl bg-gradient-to-b from-[#FFFEF9] to-[#F5F3ED] border-2 border-[#0F0F0F]/8 text-[#0F0F0F] font-body text-sm lg:text-base font-medium shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12),0_0_0_1px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/30 hover:-translate-y-1 transition-all duration-500 cursor-default flex items-center gap-3">
                {/* Premium icon container */}
                <div className="relative w-7 h-7 lg:w-8 lg:h-8 rounded-xl bg-gradient-to-br from-[#0F0F0F] to-[#2A2A2A] flex items-center justify-center shadow-[0_4px_16px_rgba(15,15,15,0.2)] group-hover:shadow-[0_6px_24px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#C9A032]">
                  <tech.icon className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white relative z-10" strokeWidth={2} />
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/20 group-hover:to-[#C9A032]/20 blur-lg transition-all duration-500" />
                </div>
                
                {/* Text with gradient hover */}
                <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0F0F0F] group-hover:to-[#0F0F0F]/70 transition-all duration-500">
                  {tech.name}
                </span>

                {/* Decorative corner accents */}
                <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 rounded-tl-lg transition-all duration-500" />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 rounded-br-lg transition-all duration-500" />
                
                {/* Background glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-[#C9A032]/5 transition-all duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
