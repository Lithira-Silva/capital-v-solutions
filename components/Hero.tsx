"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-gradient-to-br from-white via-[#FEFDFB] to-[#FAF9F6]"
    >
      {/* Premium Background Elements */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity }}>
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/12 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#A61C26]/8 via-transparent to-transparent" />
        
        {/* Floating gradient orbs */}
        <motion.div 
          className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#D4AF37]/10 via-[#D4AF37]/4 to-transparent rounded-full blur-3xl will-change-[transform,opacity]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-tl from-[#A61C26]/8 via-[#A61C26]/3 to-transparent rounded-full blur-3xl will-change-[transform,opacity]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,15,15,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,15,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]" />
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
          style={{ scale, y }}
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl space-y-6"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/90 via-[#FFFEF9]/80 to-white/90 backdrop-blur-xl border border-[#D4AF37]/20 shadow-[0_4px_20px_rgba(212,175,55,0.15)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2} />
              <span className="font-body text-[11px] font-semibold tracking-[0.25em] text-[#0F0F0F]/70 uppercase">
                Enterprise Technology
              </span>
            </motion.div>

            {/* Hero Heading - Enhanced */}
            <motion.h1
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.02em] text-[#0F0F0F] leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Build technology that{" "}
              <span className="inline-block relative">
                <span 
                  className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#C9A032] gold-text-glow"
                >
                  powers
                  <motion.span
                    className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-[#D4AF37]/20 blur-2xl -z-10 will-change-[opacity]"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </span>
              </span>{" "}
              your business
            </motion.h1>

            {/* Description - Enhanced */}
            <motion.p
              className="font-body text-base lg:text-lg text-[#0F0F0F]/65 leading-[1.7] max-w-xl font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Capital V Solutions helps enterprises design robust platforms, intelligent data foundations, and AI-driven automation that transform business operations.
            </motion.p>

            {/* CTA Buttons - Premium */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button 
                variant="brand" 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-shimmer font-body rounded-full bg-gradient-to-r from-[#A61C26] to-[#8C151F] px-8 py-5 text-sm font-semibold text-white hover:from-[#8C151F] hover:to-[#A61C26] hover:shadow-[0_12px_40px_rgba(166,28,38,0.35)] hover:-translate-y-0.5 transition-all duration-500 shadow-[0_8px_30px_rgba(166,28,38,0.25)]"
              >
                Talk to an Expert
              </Button>
              <Button
                variant="brand-outline"
                size="lg"
                onClick={() => document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-shimmer font-body rounded-full border-2 border-[#D4AF37]/40 bg-white/40 backdrop-blur-sm text-[#0F0F0F] px-8 py-5 text-sm font-semibold hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] hover:shadow-[0_12px_40px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 transition-all duration-500 shadow-[0_4px_20px_rgba(212,175,55,0.15)] group"
              >
                View Our Approach
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Trust indicators - Mobile only */}
            <motion.div
              className="flex lg:hidden items-center gap-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex-1 flex flex-col gap-2 items-center p-6 rounded-2xl bg-gradient-to-br from-white/90 to-[#FFFEF9]/80 backdrop-blur-xl border border-[#D4AF37]/15 shadow-[0_4px_20px_rgba(212,175,55,0.1)]">
                <div className="text-3xl font-heading font-bold bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#C9A032] bg-clip-text text-transparent">99.9%</div>
                <div className="font-body text-[10px] font-semibold text-[#0F0F0F]/60 tracking-widest uppercase">Uptime</div>
              </div>
              <div className="flex-1 flex flex-col gap-2 items-center p-6 rounded-2xl bg-gradient-to-br from-white/90 to-[#FFFEF9]/80 backdrop-blur-xl border border-[#A61C26]/15 shadow-[0_4px_20px_rgba(166,28,38,0.1)]">
                <div className="text-3xl font-heading font-bold bg-gradient-to-r from-[#A61C26] via-[#B22222] to-[#A61C26] bg-clip-text text-transparent">24/7</div>
                <div className="font-body text-[10px] font-semibold text-[#0F0F0F]/60 tracking-widest uppercase">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Premium Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex lg:flex-col lg:gap-6"
          >
            <div className="relative w-full aspect-video max-w-[550px] ml-auto">
              {/* Decorative background elements */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent rounded-[2rem] blur-2xl -z-10 will-change-[transform,opacity]"
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Main frame with enhanced styling */}
              <div className="absolute inset-0 rounded-[1.5rem] border-2 border-white/60 overflow-hidden bg-gradient-to-br from-white via-[#FFFEF9] to-[#FAF9F6] shadow-[0_30px_80px_rgba(0,0,0,0.12),0_0_0_1px_rgba(212,175,55,0.1)]">
                {/* Hero Video */}
                <div className="relative w-full h-full bg-gradient-to-br from-[#0F0F0F]/5 via-transparent to-transparent overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    disableRemotePlayback
                    className="w-full h-full object-cover"
                    style={{
                      imageRendering: 'auto',
                      transform: 'scale(1.12)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      filter: 'none',
                    }}
                  >
                    <source src="/videos/Cinematic_AI_Globe_Generation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Enhanced overlay with vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/8 via-transparent to-[#0F0F0F]/3" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,15,15,0.03)_100%)]" />
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div 
                className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#D4AF37]/15 to-transparent rounded-full blur-2xl will-change-[transform,opacity]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -z-10 bottom-10 -left-10 w-40 h-40 bg-gradient-to-tl from-[#A61C26]/12 to-transparent rounded-full blur-2xl will-change-[transform,opacity]"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>

            {/* Premium stats below video */}
            <motion.div 
              className="w-full max-w-[550px] ml-auto bg-gradient-to-br from-white/98 via-[#FFFEF9]/95 to-white/90 backdrop-blur-2xl rounded-2xl border-2 border-[#D4AF37]/30 p-7 shadow-[0_12px_40px_rgba(212,175,55,0.25),0_0_0_1px_rgba(255,255,255,0.5)_inset]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center justify-around gap-6">
                <motion.div 
                  className="flex flex-col gap-2.5 text-center flex-1"
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <div className="text-2xl lg:text-3xl font-heading font-bold bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#C9A032] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]">99.9%</div>
                  <div className="font-body text-[10px] font-semibold text-[#0F0F0F]/65 tracking-[0.2em] uppercase">Uptime</div>
                </motion.div>
                <div className="h-16 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent"></div>
                <motion.div 
                  className="flex flex-col gap-2.5 text-center flex-1"
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <div className="text-2xl lg:text-3xl font-heading font-bold bg-gradient-to-r from-[#A61C26] via-[#B22222] to-[#A61C26] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(166,28,38,0.3)]">24/7</div>
                  <div className="font-body text-[10px] font-semibold text-[#0F0F0F]/65 tracking-[0.2em] uppercase">Support</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
