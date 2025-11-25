"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover & Diagnose",
    description: "Understand business goals, current systems, and constraints.",
  },
  {
    number: "02",
    title: "Design & Architect",
    description: "Propose a modern blueprint for platforms, data, and automation.",
  },
  {
    number: "03",
    title: "Build, Integrate & Scale",
    description: "Implement solutions, integrate systems, and iterate for growth.",
  },
];

export function Engagement() {
  return (
    <section id="approach" className="py-20 md:py-28 bg-brand-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="font-body text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold)] mb-4 font-semibold">
            Our Process
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            How We Work With You
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 rounded-full bg-brand-dark border-2 border-[var(--color-gold)]/30 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                <span className="font-heading text-3xl font-semibold text-[var(--color-gold)]">
                  {step.number}
                </span>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="font-body text-[var(--color-text-muted)] max-w-xs leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
