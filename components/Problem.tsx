"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function Problem() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0A0A0A] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
              Ambitious goals. <br />
              <span className="text-gray-400">
                Fragile tech foundations.
              </span>
            </h2>
            <p className="font-body text-lg text-gray-400 leading-relaxed">
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
            className="relative rounded-2xl border border-gray-800 bg-white/5 p-8 md:p-10 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.3)]"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]" />
            <h3 className="font-heading text-xl font-semibold mb-8 text-white flex items-center gap-2">
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
                  <div className="relative shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] flex items-center justify-center">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0A0A0A]" strokeWidth={2.5} />
                    </div>
                  </div>
                  <span className="font-body text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
