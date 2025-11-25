"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark"
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
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          style={{ scale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="text-xs font-semibold tracking-wider text-brand-gold uppercase">
                Enterprise Technology Consulting
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Build a technology backbone that{" "}
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-[#F1C96B] to-brand-gold"
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
              className="text-lg md:text-xl text-brand-text-muted mb-8 max-w-xl leading-relaxed"
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="brand" size="lg" className="text-base shadow-lg hover:shadow-xl">
                  <Zap className="mr-2 h-4 w-4" />
                  Talk to an Expert
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="brand-outline"
                  size="lg"
                  className="text-base group"
                >
                  View Our Approach
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-2xl font-bold text-white">
                  <TrendingUp className="w-5 h-5 text-brand-gold" />
                  99.9%
                </div>
                <div className="text-xs text-brand-text-muted">Uptime SLA</div>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-brand-text-muted">Enterprise Clients</div>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-brand-text-muted">Support</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="relative hidden lg:block"
            style={{ perspective: "1000px" }}
          >
            {/* Enhanced 3D Visual */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/80 to-brand-dark/50 rounded-2xl border border-brand-gold/20 backdrop-blur-sm shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated rings */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-brand-gold/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border-2 border-brand-red/30 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 border border-brand-gold/40 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating cards */}
                <motion.div
                  className="absolute top-10 left-10 right-10 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-brand-red"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-brand-gold"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-white/20"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                  </div>
                  <div className="space-y-3">
                    <motion.div
                      className="h-2 bg-white/10 rounded overflow-hidden"
                      initial={{ width: "0%" }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                    >
                      <motion.div
                        className="h-full bg-brand-gold/50"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                    <motion.div
                      className="h-2 bg-white/10 rounded overflow-hidden"
                      initial={{ width: "0%" }}
                      animate={{ width: "50%" }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                    />
                    <motion.div
                      className="h-2 bg-white/5 rounded overflow-hidden"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 1.4 }}
                    />
                  </div>
                </motion.div>

                {/* Data flow visualization */}
                <motion.div
                  className="absolute bottom-10 left-10 right-10 p-4 bg-brand-gold/5 rounded-lg border border-brand-gold/20 backdrop-blur-md"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-brand-gold font-mono">AI Processing</span>
                    <motion.span
                      className="text-xs text-brand-text-muted font-mono"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Active
                    </motion.span>
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-6 bg-brand-gold/20 rounded"
                        initial={{ scaleY: 0.3 }}
                        animate={{ scaleY: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                        style={{ originY: 1 }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-red/10 opacity-0"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-brand-gold/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-red/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
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
