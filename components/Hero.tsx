"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, TrendingUp, Cloud, Brain, BarChart, Activity, Plug } from "lucide-react";
import Image from "next/image";
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
            {/* Minimal Badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#FFFEF9]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="font-body text-[10px] font-medium tracking-[0.2em] text-[#0F0F0F]/70 uppercase">
                Enterprise Technology
              </span>
            </motion.div>

            {/* Hero Heading */}
            <motion.h1
              className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-[-0.02em] text-[#0F0F0F] leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Build technology that{" "}
              <span className="inline-block relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#C9A032]">
                  powers
                </span>
              </span>{" "}
              your business
            </motion.h1>

            {/* Description */}
            <motion.p
              className="font-body text-lg lg:text-xl text-[#0F0F0F]/60 leading-[1.7] max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Capital V Solutions helps enterprises design robust platforms, intelligent data foundations, and AI-driven automation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                variant="brand" 
                size="lg" 
                className="font-body rounded-full bg-[#B22222] px-8 py-6 text-base font-medium text-white hover:bg-[#8B1A1A] shadow-[0_4px_20px_rgba(178,34,34,0.25)] hover:shadow-[0_6px_28px_rgba(178,34,34,0.35)] transition-all"
              >
                Talk to an Expert
              </Button>
              <Button
                variant="brand-outline"
                size="lg"
                className="font-body rounded-full border border-[#D4AF37]/50 text-[#0F0F0F] px-8 py-6 text-base font-medium hover:bg-[#D4AF37]/5 hover:border-[#D4AF37] transition-all group"
              >
                View Our Approach
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </motion.div>

            {/* Trust indicators - Mobile only */}
            <motion.div
              className="flex lg:hidden items-center gap-10 pt-12 mt-12 border-t border-[#0F0F0F]/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-col gap-1">
                <div className="text-2xl font-heading font-bold text-[#0F0F0F]">99.9%</div>
                <div className="font-body text-[11px] font-medium text-[#0F0F0F]/50 tracking-wide uppercase">Uptime</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-2xl font-heading font-bold text-[#0F0F0F]">50+</div>
                <div className="font-body text-[11px] font-medium text-[#0F0F0F]/50 tracking-wide uppercase">Clients</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-2xl font-heading font-bold text-[#0F0F0F]">24/7</div>
                <div className="font-body text-[11px] font-medium text-[#0F0F0F]/50 tracking-wide uppercase">Support</div>
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
                {/* Hero Image */}
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                    alt="Enterprise business solutions and analytics platforms"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 0vw, 45vw"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/5 via-transparent to-transparent" />
                </div>

                {/* Minimal stats overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#FFFEF9]/95 backdrop-blur-sm rounded-xl border border-[#0F0F0F]/10 p-5">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-xl font-heading font-bold text-[#0F0F0F] mb-0.5">99.9%</div>
                      <div className="font-body text-[10px] font-medium text-[#0F0F0F]/50 tracking-wide uppercase">Uptime</div>
                    </div>
                    <div className="text-center border-x border-[#0F0F0F]/10">
                      <div className="text-xl font-heading font-bold text-[#0F0F0F] mb-0.5">50+</div>
                      <div className="font-body text-[10px] font-medium text-[#0F0F0F]/50 tracking-wide uppercase">Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-heading font-bold text-[#0F0F0F] mb-0.5">24/7</div>
                      <div className="font-body text-[10px] font-medium text-[#0F0F0F]/50 tracking-wide uppercase">Support</div>
                    </div>
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
