"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Database, BrainCircuit } from "lucide-react";

const pillars = [
  {
    title: "Operational Backbone",
    description:
      "We build solid, scalable platforms and integrations that keep the business running reliably.",
    icon: Server,
    bullets: [
      "Core platforms & microservices",
      "Systems integration & APIs",
      "Reliability & performance",
    ],
  },
  {
    title: "Data Advantage",
    description:
      "We help companies unlock and structure their data for analytics and decision-making.",
    icon: Database,
    bullets: [
      "Data platforms & warehouses",
      "Analytics & BI foundations",
      "Self-service data access",
    ],
  },
  {
    title: "Intelligent Efficiency",
    description:
      "We apply AI and automation to reduce manual work and drive efficiency.",
    icon: BrainCircuit,
    bullets: [
      "AI/ML solutions",
      "Automation & workflows",
      "Intelligent decision support",
    ],
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="min-h-screen flex items-center py-20 md:py-24 bg-gradient-to-b from-[#FAF9F6] via-[#F5F3ED] to-[#FAF9F6] relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary gradient orb */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#D4AF37]/8 via-[#D4AF37]/4 to-transparent rounded-full blur-3xl" />
        {/* Secondary accent orb */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#B22222]/5 via-[#B22222]/2 to-transparent rounded-full blur-3xl" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,15,15,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,15,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        {/* Section Header - Enhanced */}
        <div className="text-center mb-12 md:mb-16 space-y-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border-2 border-[#D4AF37]/40 bg-gradient-to-r from-[#FFFEF9]/90 to-[#FFF9F0]/70 backdrop-blur-sm shadow-[0_4px_20px_rgba(212,175,55,0.1)]"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C9A032] animate-pulse" />
            <span className="font-body text-[11px] font-semibold tracking-[0.25em] text-[#0F0F0F]/70 uppercase">
              Our Foundation
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-[#0F0F0F] leading-[1.05]"
          >
            Our Pillars
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-[#0F0F0F]/65 max-w-3xl mx-auto leading-[1.7] font-light"
          >
            We focus on the three critical layers of modern enterprise technology.
          </motion.p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-b from-white to-[#FAFAFA] border-2 border-[#0F0F0F]/8 rounded-3xl p-6 lg:p-8 transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_24px_80px_rgba(0,0,0,0.12),0_0_0_1px_rgba(212,175,55,0.1)] hover:-translate-y-2 backdrop-blur-sm">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Container - Premium */}
                <div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-[#0F0F0F] to-[#2A2A2A] flex items-center justify-center mb-6 shadow-[0_8px_32px_rgba(15,15,15,0.2)] group-hover:shadow-[0_12px_40px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#C9A032]">
                  <pillar.icon className="h-6 w-6 lg:h-7 lg:w-7 text-white relative z-10" />
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/20 group-hover:to-[#C9A032]/20 blur-xl transition-all duration-500" />
                </div>

                {/* Title - Enhanced Typography */}
                <h3 className="font-heading text-2xl lg:text-3xl font-bold tracking-[-0.02em] text-[#0F0F0F] mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0F0F0F] group-hover:to-[#0F0F0F]/70 transition-all duration-500">
                  {pillar.title}
                </h3>

                {/* Description - Premium Typography */}
                <p className="font-body text-sm lg:text-base text-[#0F0F0F]/65 leading-[1.7] mb-6 font-light">
                  {pillar.description}
                </p>

                {/* Bullets - Enhanced with Premium Styling */}
                <div className="space-y-2.5 lg:space-y-3">
                  {pillar.bullets.map((bullet, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + i * 0.1 }}
                      className="flex items-start gap-3 font-body text-sm lg:text-base text-[#0F0F0F]/60 group/item"
                    >
                      <div className="relative flex-shrink-0 mt-1.5">
                        {/* Premium bullet point */}
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C9A032] shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                        {/* Hover glow */}
                        <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover/item:opacity-50 blur-sm transition-opacity" />
                      </div>
                      <span className="flex-1 group-hover/item:text-[#0F0F0F]/80 transition-colors">{bullet}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Premium accent line with gradient */}
                <div className="absolute bottom-0 left-6 right-6 lg:left-8 lg:right-8 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent group-hover:via-[#D4AF37]/60 transition-all duration-500">
                  <div className="h-full w-1/3 bg-gradient-to-r from-[#D4AF37] to-transparent animate-shimmer" />
                </div>

                {/* Card number indicator */}
                <div className="absolute top-6 right-6 font-heading text-6xl font-bold text-[#0F0F0F]/[0.15] group-hover:text-[#D4AF37]/[0.25] transition-all duration-500 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
