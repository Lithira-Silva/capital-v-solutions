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
      className="relative min-h-screen flex items-center py-32 md:py-40 overflow-hidden bg-[#FAF9F6]"
    >
      {/* Minimal Background Elements */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity }}>
        {/* Subtle gradient accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#B22222]/4 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[75vh]"
          style={{ scale }}
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl space-y-8"
          >
            {/* Simplified Badge - Apple Style */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="font-body text-xs font-medium tracking-widest text-gray-500 uppercase">
                Enterprise Technology
              </span>
            </motion.div>

            {/* Hero Heading - Apple Style Typography */}
            <motion.h1
              className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#0F0F0F] leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Build technology that{" "}
              <span className="inline-block relative">
                <span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B]"
                  style={{
                    textShadow: '0 2px 8px rgba(212, 175, 55, 0.3)',
                    WebkitTextStroke: '0.5px rgba(184, 134, 11, 0.15)'
                  }}
                >
                  powers
                </span>
              </span>{" "}
              your business
            </motion.h1>

            {/* Description - Apple Style */}
            <motion.p
              className="font-body text-xl lg:text-2xl text-[#0F0F0F]/70 leading-relaxed max-w-xl font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Capital V Solutions helps enterprises design robust platforms, intelligent data foundations, and AI-driven automation.
            </motion.p>

            {/* CTA Buttons - Deep Crimson */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button 
                variant="brand" 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-body rounded-full bg-[#A61C26] px-8 py-6 text-base font-medium text-white hover:bg-[#8C151F] ring-1 ring-white/20 transition-all"
              >
                Talk to an Expert
              </Button>
              <Button
                variant="brand-outline"
                size="lg"
                onClick={() => document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-body rounded-full border border-[#D4AF37]/50 text-[#0F0F0F] px-8 py-6 text-base font-medium hover:bg-[#D4AF37]/5 hover:border-[#D4AF37] transition-all group"
              >
                View Our Approach
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </motion.div>

            {/* Trust indicators - Mobile only */}
            <motion.div
              className="flex lg:hidden items-center justify-center gap-8 pt-12 mt-12 border-t border-[#0F0F0F]/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-col gap-2 text-center">
                <div className="text-3xl font-heading font-bold bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">99.9%</div>
                <div className="font-body text-xs font-semibold text-[#0F0F0F]/60 tracking-wider uppercase">Uptime</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent"></div>
              <div className="flex flex-col gap-2 text-center">
                <div className="text-3xl font-heading font-bold bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">24/7</div>
                <div className="font-body text-xs font-semibold text-[#0F0F0F]/60 tracking-wider uppercase">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Premium Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/5] max-w-[550px] ml-auto">
              {/* Minimal frame */}
              <div className="absolute inset-0 rounded-2xl border border-[#0F0F0F]/10 overflow-hidden bg-[#FFFEF9] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                {/* Hero Video */}
                <div className="relative w-full h-full">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/Digital_Network_Data_Flow_Video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/5 via-transparent to-transparent" />
                </div>

                {/* Premium stats overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl rounded-2xl border-2 border-[#D4AF37]/20 p-6 shadow-[0_8px_32px_rgba(212,175,55,0.15)]">
                  <div className="flex items-center justify-around gap-6">
                    <motion.div 
                      className="flex flex-col gap-2 text-center flex-1"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="text-2xl font-heading font-bold bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">99.9%</div>
                      <div className="font-body text-[10px] font-semibold text-[#0F0F0F]/60 tracking-widest uppercase">Uptime</div>
                    </motion.div>
                    <div className="h-16 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent"></div>
                    <motion.div 
                      className="flex flex-col gap-2 text-center flex-1"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="text-2xl font-heading font-bold bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">24/7</div>
                      <div className="font-body text-[10px] font-semibold text-[#0F0F0F]/60 tracking-widest uppercase">Support</div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Subtle accent element */}
              <div className="absolute -z-10 top-8 -right-8 w-32 h-32 bg-[#D4AF37]/8 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Removed floating tech badges for minimal design */}
        </motion.div>
      </div>
    </section>
  );
}
