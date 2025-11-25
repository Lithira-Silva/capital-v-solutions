"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function Problem() {
  return (
    <section className="py-20 md:py-28 bg-brand-light dark:bg-[#0B0C10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-[11px] uppercase tracking-[0.18em] text-[var(--color-red)] mb-4 font-semibold">
              The Challenge
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-brand-text-dark dark:text-brand-text-light mb-6 leading-tight">
              Ambitious goals. <br />
              <span className="text-[var(--color-text-muted)]">
                Fragile tech foundations.
              </span>
            </h2>
            <p className="font-body text-lg text-[var(--color-text-muted)] leading-relaxed">
              Many enterprises have big digital ambitions but are held back by
              legacy systems, siloed data, and fragile integrations. Instead of
              accelerating the business, technology becomes the bottleneck that
              stalls growth and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl border border-white/5 bg-white dark:bg-white/5 p-8 md:p-10 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.15)]"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-dark)]" />
            <h3 className="font-heading text-xl font-semibold mb-8 text-brand-text-dark dark:text-brand-text-light flex items-center gap-2">
              <AlertCircle className="text-[var(--color-red)] h-5 w-5" />
              Common Roadblocks
            </h3>
            <ul className="space-y-5">
              {[
                "Data trapped in silos, inaccessible for decision making",
                "Manual processes slowing down operations",
                "Unreliable integrations causing system downtime",
                "Tech debt accumulating faster than features",
                "Difficulty scaling infrastructure with demand",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                  <span className="font-body text-[var(--color-text-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
