"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, TrendingUp, Cloud, Brain, BarChart, Activity, Plug } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-24 overflow-hidden bg-brand-dark"
    >
      {/* Enhanced Background Elements */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity }}>
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ translateY: "-50%", translateX: "33%" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ translateY: "33%", translateX: "-25%" }}
        />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-gold/30 rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <motion.div
          className="flex items-center justify-start min-h-[80vh]"
          style={{ scale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="max-w-4xl"
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-[var(--color-gold)]" />
              <span className="font-body text-[11px] font-semibold tracking-[0.18em] text-[var(--color-gold)] uppercase">
                Enterprise Technology Consulting
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Build a technology backbone that{" "}
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] via-[#F1C96B] to-[var(--color-gold)]"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                actually powers
              </motion.span>{" "}
              your business.
            </motion.h1>

            <motion.p
              className="font-body text-base md:text-lg lg:text-xl text-[var(--color-text-muted)] mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Capital V Solutions helps enterprises design and implement robust
              platforms, intelligent data foundations, and AI-driven automation
              to turn ambitious goals into real outcomes.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button variant="brand" size="lg" className="font-body rounded-full bg-[var(--color-red)] px-8 py-3 text-base text-white hover:bg-[var(--color-red-dark)] shadow-lg shadow-[rgba(178,34,34,0.4)] transition-all">
                  <Zap className="mr-2 h-4 w-4" />
                  Talk to an Expert
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="brand-outline"
                  size="lg"
                  className="font-body rounded-full border border-[var(--color-gold)]/60 text-[var(--color-gold)] px-8 py-3 text-base hover:bg-[var(--color-gold)]/10 transition-all group"
                >
                  View Our Approach
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex items-center gap-12 mt-12 pt-8 border-t border-white/10 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-2xl font-heading font-semibold text-white">
                  <TrendingUp className="w-5 h-5 text-[var(--color-gold)]" />
                  99.9%
                </div>
                <div className="font-body text-xs text-[var(--color-text-muted)] mt-1">Uptime SLA</div>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-heading font-semibold text-white">50+</div>
                <div className="font-body text-xs text-[var(--color-text-muted)] mt-1">Enterprise Clients</div>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-heading font-semibold text-white">24/7</div>
                <div className="font-body text-xs text-[var(--color-text-muted)] mt-1">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating tech badges - premium glassmorphism design */}
          <motion.div
            className="absolute top-24 right-[5%] hidden lg:block"
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="group px-5 py-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-[var(--color-gold)]/30 backdrop-blur-xl shadow-2xl hover:shadow-[var(--color-gold)]/20 transition-all duration-300 hover:scale-105"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ borderColor: "rgba(212, 175, 55, 0.5)" }}
            >
              <div className="flex items-center gap-3">
                <Cloud className="w-4 h-4 text-[var(--color-gold)]" />
                <span className="text-sm text-white/95 font-medium tracking-wide">Azure Cloud</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-44 right-[12%] hidden lg:block"
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="group px-5 py-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-[var(--color-red)]/30 backdrop-blur-xl shadow-2xl hover:shadow-[var(--color-red)]/20 transition-all duration-300 hover:scale-105"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              whileHover={{ borderColor: "rgba(178, 34, 34, 0.5)" }}
            >
              <div className="flex items-center gap-3">
                <Brain className="w-4 h-4 text-[var(--color-red)]" />
                <span className="text-sm text-white/95 font-medium tracking-wide">AI/ML Models</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-64 right-[7%] hidden lg:block"
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="group px-5 py-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-[var(--color-gold)]/20 backdrop-blur-xl shadow-2xl hover:shadow-[var(--color-gold)]/10 transition-all duration-300 hover:scale-105"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ borderColor: "rgba(212, 175, 55, 0.35)" }}
            >
              <div className="flex items-center gap-3">
                <BarChart className="w-4 h-4 text-[var(--color-gold)]" />
                <span className="text-sm text-white/95 font-medium tracking-wide">Data Analytics</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-[340px] right-[15%] hidden xl:block"
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="group px-5 py-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-[var(--color-gold)]/30 backdrop-blur-xl shadow-2xl hover:shadow-[var(--color-gold)]/20 transition-all duration-300 hover:scale-105"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              whileHover={{ borderColor: "rgba(212, 175, 55, 0.5)" }}
            >
              <div className="flex items-center gap-3">
                <Activity className="w-4 h-4 text-[var(--color-gold)]" />
                <span className="text-sm text-white/95 font-medium tracking-wide">99.9% Uptime</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-[420px] right-[9%] hidden xl:block"
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="group px-5 py-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-[var(--color-red)]/30 backdrop-blur-xl shadow-2xl hover:shadow-[var(--color-red)]/20 transition-all duration-300 hover:scale-105"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              whileHover={{ borderColor: "rgba(178, 34, 34, 0.5)" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm text-white/95 font-medium tracking-wide">API Integration</span>
                <Plug className="w-4 h-4 text-[var(--color-red)]" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-brand-text-muted"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-brand-gold/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-brand-gold rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
