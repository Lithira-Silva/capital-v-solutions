"use client";

import { motion } from "framer-motion";
import { Building2, Lightbulb, TrendingUp } from "lucide-react";

const partners = [
  {
    title: "Mid-market & Enterprise",
    icon: Building2,
  },
  {
    title: "Data & Innovation Teams",
    icon: Lightbulb,
  },
  {
    title: "Strategy & Operations Leaders",
    icon: TrendingUp,
  },
];

export function Partners() {
  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] border-b border-white/5 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#D4AF37]/6 via-[#D4AF37]/2 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        {/* Simple Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#D4AF37]/25 bg-white/5 backdrop-blur-xl">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="font-body text-[11px] font-semibold tracking-[0.25em] text-[#D4AF37] uppercase">
              Our Clients
            </span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-white">
            Who We Partner With
          </h2>
        </motion.div>

        {/* Simple Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {partners.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#D4AF37]/25 hover:bg-gradient-to-br hover:from-white/[0.11] hover:to-white/[0.05] hover:-translate-y-1 transition-all duration-500 flex flex-col items-center justify-center min-h-[180px]">
                <item.icon className="w-8 h-8 text-[#D4AF37] mx-auto mb-4 group-hover:text-[#FCF6BA] transition-colors duration-500" strokeWidth={1.5} />
                <p className="font-body text-base font-medium text-white group-hover:text-gray-200 transition-colors duration-500">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
