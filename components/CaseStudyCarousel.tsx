"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const caseStudies = [
  {
    title: "Legacy System Migration",
    badge: "Digital Foundations",
    description: "Replaced outdated software with a cloud-native Azure architecture.",
    impact: "50% faster deployment cycles",
    color: "from-[#D4AF37]/10 to-[#D4AF37]/5",
  },
  {
    title: "Predictive Sales AI",
    badge: "Data & Intelligence",
    description: "Deployed a custom Machine Learning model to forecast inventory needs.",
    impact: "30% reduction in overstock",
    color: "from-[#B22222]/10 to-[#B22222]/5",
  },
  {
    title: "Workflow Automation",
    badge: "Efficiency",
    description: "Automated document handling using Power Automate, reducing manual drag by 40%.",
    impact: "40% time savings",
    color: "from-[#D4AF37]/10 to-[#C9A032]/5",
  },
];

export function CaseStudyCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#FAF9F6] via-[#FFFEF9] to-[#FAF9F6] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#D4AF37]/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#B22222]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border-2 border-[#D4AF37]/40 bg-gradient-to-r from-[#FFFEF9]/90 to-[#FFF9F0]/70 backdrop-blur-sm shadow-[0_4px_20px_rgba(212,175,55,0.1)]"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C9A032] animate-pulse" />
            <span className="font-body text-[11px] font-semibold tracking-[0.25em] text-[#0F0F0F]/70 uppercase">
              Case Studies
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-[#0F0F0F] leading-[1.05]"
          >
            Recent{" "}
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B]"
              style={{ textShadow: '0 2px 8px rgba(212, 175, 55, 0.3)' }}
            >
              Victories
            </span>
          </motion.h2>
        </div>

        {/* Cards Slider */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className={`relative h-full bg-white rounded-3xl p-8 transition-all duration-500 border-2 ${
                hoveredIndex === index 
                  ? 'border-[#D4AF37] shadow-[0_12px_40px_rgba(212,175,55,0.2),0_0_60px_rgba(212,175,55,0.15)]' 
                  : 'border-[#0F0F0F]/8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
              } hover:-translate-y-2`}>
                
                {/* Decorative background gradient */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${study.color} rounded-bl-full -mr-20 -mt-20 transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-60'
                }`} />

                {/* Badge */}
                <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0F0F0F]/5 to-[#0F0F0F]/10 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C9A032]" />
                  <span className="font-body text-xs font-semibold text-[#0F0F0F]/70 uppercase tracking-wider">
                    {study.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative font-heading text-2xl lg:text-3xl font-bold text-[#0F0F0F] mb-4 leading-tight">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="relative font-body text-base text-[#0F0F0F]/65 leading-relaxed mb-6">
                  {study.description}
                </p>

                {/* Impact Metric */}
                <div className="relative flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-[#D4AF37]/5 to-transparent border border-[#D4AF37]/20 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0" strokeWidth={2} />
                  <span className="font-body text-sm font-semibold text-[#0F0F0F]/80">
                    {study.impact}
                  </span>
                </div>

                {/* Read More Link */}
                <div className="relative flex items-center gap-2 text-[#B22222] font-body text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </div>

                {/* Decorative accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accent */}
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37] rounded-br-3xl transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
