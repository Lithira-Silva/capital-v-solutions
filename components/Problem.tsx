"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function Problem() {
  return (
    <section className="py-24 bg-brand-light dark:bg-[#0B0C10]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-red font-semibold tracking-wider uppercase text-sm">
              The Challenge
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-brand-text-dark dark:text-brand-text-light mb-6">
              Ambitious goals. <br />
              <span className="text-brand-text-muted">
                Fragile tech foundations.
              </span>
            </h2>
            <p className="text-lg text-brand-text-muted leading-relaxed">
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
            className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-brand-gold/10 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-6 text-brand-text-dark dark:text-brand-text-light flex items-center gap-2">
              <AlertCircle className="text-brand-red h-5 w-5" />
              Common Roadblocks
            </h3>
            <ul className="space-y-4">
              {[
                "Data trapped in silos, inaccessible for decision making",
                "Manual processes slowing down operations",
                "Unreliable integrations causing system downtime",
                "Tech debt accumulating faster than features",
                "Difficulty scaling infrastructure with demand",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-brand-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
