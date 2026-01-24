"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

const metrics = [
  {
    value: "99.9%",
    label: "Uptime",
    icon: TrendingUp,
  },
  {
    value: "24/7",
    label: "Support",
    icon: Clock,
  },
  {
    value: "100+",
    label: "Projects Delivered",
    icon: Award,
  },
];

export function LiveMetrics() {
  return (
    <section className="relative py-16 bg-white/60 backdrop-blur-xl border-y border-gray-200/50 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group text-center"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/60 backdrop-blur-xl border border-gray-200/50 mb-4 group-hover:border-[#D4AF37]/40 transition-all duration-300">
                <metric.icon className="w-5 h-5 text-[#0F0F0F]/60 group-hover:text-[#D4AF37] transition-colors" />
              </div>
              
              {/* Value with Metallic Gold Gradient */}
              <div className="mb-2">
                <span className="font-heading text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]">
                  {metric.value}
                </span>
              </div>
              
              {/* Label */}
              <div className="font-body text-sm lg:text-base text-[#0F0F0F]/60 font-normal">
                {metric.label}
              </div>

              {/* Animated underline */}
              <div className="mt-4 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
