"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Calendar, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-32 md:py-40 lg:py-48 bg-gradient-to-b from-[#FAF9F6] via-[#F5F3ED] to-[#FAF9F6] relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary gradient orb */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#D4AF37]/8 via-[#D4AF37]/4 to-transparent rounded-full blur-3xl" />
        {/* Secondary accent orb */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#B22222]/6 via-[#B22222]/3 to-transparent rounded-full blur-3xl" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,15,15,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,15,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border-2 border-[#B22222]/30 bg-gradient-to-r from-[#FFFEF9]/95 to-[#FFF9F0]/80 backdrop-blur-sm shadow-[0_4px_20px_rgba(178,34,34,0.1)] mb-8">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#B22222] to-[#C1121F] animate-pulse" />
              <span className="font-body text-[11px] font-semibold tracking-[0.25em] text-[#0F0F0F]/70 uppercase">
                Let's Talk
              </span>
            </div>
            
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] text-[#0F0F0F] mb-8 leading-[1.05]">
              Ready to modernize your technology backbone?
            </h2>
            
            <p className="font-body text-xl md:text-2xl text-[#0F0F0F]/65 mb-12 leading-[1.75] font-light max-w-xl">
              Let's explore how Capital V Solutions can support your next
              initiative.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
              <Button 
                variant="brand" 
                size="lg" 
                className="group font-body rounded-2xl bg-gradient-to-r from-[#B22222] to-[#C1121F] px-10 py-6 text-base font-semibold text-white hover:from-[#8B1A1A] hover:to-[#A01616] shadow-[0_12px_40px_rgba(178,34,34,0.4)] hover:shadow-[0_16px_50px_rgba(178,34,34,0.5)] hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={2} />
                Schedule a Discovery Call
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group font-body rounded-2xl border-2 border-[#D4AF37]/50 bg-transparent text-[#0F0F0F] font-semibold hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] px-10 py-6 text-base shadow-[0_8px_30px_rgba(212,175,55,0.2)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={2} />
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* Premium Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            <div className="relative rounded-3xl border-2 border-[#0F0F0F]/8 bg-gradient-to-b from-[#FFFEF9] to-[#F5F3ED] p-10 lg:p-12 backdrop-blur-sm shadow-[0_24px_80px_rgba(0,0,0,0.12)] group-hover:shadow-[0_32px_100px_rgba(0,0,0,0.15),0_0_0_1px_rgba(212,175,55,0.1)] group-hover:border-[#D4AF37]/20 transition-all duration-500">
              {/* Decorative corner accents */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 rounded-tl-2xl transition-all duration-500" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 rounded-br-2xl transition-all duration-500" />
              
              <h3 className="font-heading text-3xl lg:text-4xl font-bold tracking-[-0.02em] text-[#0F0F0F] mb-10">
                Send us a message
              </h3>
              
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
