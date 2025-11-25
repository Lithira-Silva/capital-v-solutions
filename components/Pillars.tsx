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
    <section id="pillars" className="py-20 md:py-28 bg-brand-dark relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="font-body text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold)] mb-4 font-semibold">
            Our Foundation
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Our Pillars
          </h2>
          <p className="font-body text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
            We focus on the three critical layers of modern enterprise technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative rounded-2xl border border-white/5 bg-white/5 p-8 md:p-10 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)] h-full group">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-dark)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="p-0 mb-6">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                    <pillar.icon className="h-6 w-6 text-[var(--color-gold)]" />
                  </div>
                  <CardTitle className="font-heading text-2xl font-semibold text-white mb-3">
                    {pillar.title}
                  </CardTitle>
                  <p className="font-body text-[var(--color-text-muted)] text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-3">
                    {pillar.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2 font-body text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-red)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
