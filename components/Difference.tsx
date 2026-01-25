"use client";

import { motion } from "framer-motion";
import { Target, Layers, Cpu, HeartHandshake } from "lucide-react";

const differentiators = [
  {
    title: "Business-first engineering",
    description: "We start from business outcomes, not just technology requirements.",
    icon: Target,
  },
  {
    title: "End-to-end delivery",
    description: "From architecture and design to implementation and long-term support.",
    icon: Layers,
  },
  {
    title: "Modern, proven stack",
    description: "We leverage proven cloud, data, and AI technologies that scale.",
    icon: Cpu,
  },
  {
    title: "Embedded partnership",
    description: "We work as an extended part of your team, not just an external vendor.",
    icon: HeartHandshake,
  },
];

export function Difference() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] overflow-hidden">
      {/* Reduced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-[#D4AF37]/8 via-[#D4AF37]/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-gradient-to-tl from-[#A61C26]/6 via-[#A61C26]/2 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header - Premium */}
        <div className="text-center mb-16 md:mb-20 space-y-5 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border-2 border-[#D4AF37]/25 bg-gradient-to-r from-white/8 via-white/4 to-white/8 backdrop-blur-xl shadow-[0_4px_20px_rgba(212,175,55,0.15)]"
          >
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="font-body text-[11px] font-semibold tracking-[0.25em] text-[#D4AF37] uppercase">
              Why Choose Us
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1.05]"
          >
            <span className="text-white">The Capital </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#D4AF37]">
              V
            </span>
            <span className="text-white"> Difference</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-gray-400 leading-[1.75] font-light max-w-2xl mx-auto"
          >
            We don't just build technology—we create transformative solutions that drive real business value.
          </motion.p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-8 hover:border-[#D4AF37]/25 hover:bg-gradient-to-br hover:from-white/[0.11] hover:to-white/[0.05] hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden">
                
                {/* Decorative corner gradient - reduced */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#D4AF37]/10 via-[#D4AF37]/3 to-transparent rounded-bl-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon - reduced glow */}
                <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/15 to-[#C9A032]/8 border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/35 group-hover:scale-105 group-hover:shadow-[0_6px_20px_rgba(212,175,55,0.2)] transition-all duration-500">
                  <item.icon className="w-6 h-6 text-[#D4AF37] group-hover:text-[#FCF6BA] transition-colors duration-500" strokeWidth={2} />
                </div>
                
                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-white mb-4 transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  {item.description}
                </p>

                {/* Decorative bottom accent - reduced */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/0 to-transparent group-hover:via-[#D4AF37]/40 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
