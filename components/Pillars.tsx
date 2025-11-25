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
    <section id="pillars" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Pillars
          </h2>
          <p className="text-brand-text-muted max-w-2xl mx-auto">
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
              <Card className="bg-white/5 border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-1 h-full group">
                <div className="h-1 w-full bg-gradient-to-r from-brand-gold/50 to-brand-gold/10 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors">
                    <pillar.icon className="h-6 w-6 text-brand-gold" />
                  </div>
                  <CardTitle className="text-xl text-white mb-2">
                    {pillar.title}
                  </CardTitle>
                  <p className="text-brand-text-muted text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pillar.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
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
