"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const differentiators = [
  {
    title: "Business-first engineering",
    description: "We start from business outcomes, not just technology requirements.",
  },
  {
    title: "End-to-end delivery",
    description: "From architecture and design to implementation and long-term support.",
  },
  {
    title: "Modern, proven stack",
    description: "We leverage proven cloud, data, and AI technologies that scale.",
  },
  {
    title: "Embedded partnership",
    description: "We work as an extended part of your team, not just an external vendor.",
  },
];

export function Difference() {
  return (
    <section className="py-20 md:py-28 bg-brand-light dark:bg-[#0B0C10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="font-body text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold)] mb-4 font-semibold">
            Why Choose Us
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-brand-text-dark dark:text-brand-text-light mb-4">
            The Capital V Difference
          </h2>
          <div className="h-1 w-24 bg-[var(--color-gold)] rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/5 bg-white dark:bg-white/5 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.15)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--color-gold)]/5 rounded-bl-full -mr-10 -mt-10" />
              <h3 className="font-heading text-lg font-semibold text-brand-text-dark dark:text-brand-text-light mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm text-[var(--color-text-muted)] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
