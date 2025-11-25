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
    <section className="py-24 bg-brand-light dark:bg-[#0B0C10]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-dark dark:text-brand-text-light mb-4">
            The Capital V Difference
          </h2>
          <div className="h-1 w-20 bg-brand-gold rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-white/5 p-6 rounded-xl border border-brand-gold/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-brand-gold/5 rounded-bl-full -mr-8 -mt-8" />
              <h3 className="text-lg font-bold text-brand-text-dark dark:text-brand-text-light mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
