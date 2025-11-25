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
    <section id="approach" className="py-24 bg-brand-dark border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How We Work With You
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-brand-dark border-2 border-brand-gold/30 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                <span className="text-2xl font-bold text-brand-gold">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-brand-text-muted max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
