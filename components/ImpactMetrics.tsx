"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Target, Shield, Globe } from "lucide-react";

const metrics = [
  {
    label: "Measurable ROI",
    value: "Target Focused",
    icon: Target,
    description: "Every engagement tied to business outcomes",
  },
  {
    label: "Data Reliability",
    value: "99.9%",
    icon: Shield,
    description: "Enterprise-grade uptime and accuracy",
  },
  {
    label: "Delivery Model",
    value: "Global & Agile",
    icon: Globe,
    description: "Flexible teams across time zones",
  },
];

function AnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      {text}
    </motion.span>
  );
}

export function ImpactMetrics() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#FAF9F6] to-[#F5F3ED] overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#D4AF37]/5 to-[#B22222]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Glass Panel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white/60 backdrop-blur-2xl border-2 border-[#D4AF37]/20 rounded-3xl p-8 md:p-12 lg:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#B22222]/10 to-transparent rounded-br-3xl" />

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group text-center space-y-4"
              >
                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 mb-2">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#C9A032]/20 group-hover:from-[#D4AF37]/30 group-hover:to-[#C9A032]/30 transition-all duration-500" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C9A032] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  <metric.icon className="relative w-8 h-8 lg:w-10 lg:h-10 text-[#B8860B] group-hover:text-[#D4AF37] transition-colors duration-500" strokeWidth={1.5} />
                </div>

                {/* Label */}
                <div className="font-body text-sm lg:text-base font-medium text-[#0F0F0F]/60 uppercase tracking-wider">
                  <AnimatedText text={metric.label} delay={index * 0.15 + 0.2} />
                </div>

                {/* Value - Large with Gold Gradient */}
                <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] group-hover:from-[#D4AF37] group-hover:via-[#FCF6BA] group-hover:to-[#D4AF37] transition-all duration-500"
                    style={{
                      textShadow: '0 2px 12px rgba(212, 175, 55, 0.2)',
                    }}
                  >
                    <AnimatedText text={metric.value} delay={index * 0.15 + 0.3} />
                  </span>
                </div>

                {/* Description */}
                <p className="font-body text-xs lg:text-sm text-[#0F0F0F]/50 leading-relaxed max-w-xs mx-auto">
                  <AnimatedText text={metric.description} delay={index * 0.15 + 0.4} />
                </p>

                {/* Divider (not on last item) */}
                {index < metrics.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
