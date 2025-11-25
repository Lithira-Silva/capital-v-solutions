"use client";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Calendar, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--color-gold)]/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/4" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[var(--color-red)]/5 rounded-full blur-3xl -translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold)] mb-6 font-semibold">
              Let's Talk
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-8 leading-tight">
              Ready to modernize your technology backbone?
            </h2>
            <p className="font-body text-xl text-[var(--color-text-muted)] mb-10 leading-relaxed">
              Let's explore how Capital V Solutions can support your next
              initiative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="brand" size="lg" className="font-body rounded-full bg-[var(--color-red)] px-8 py-3 text-white hover:bg-[var(--color-red-dark)] shadow-lg shadow-[rgba(178,34,34,0.4)] hover:-translate-y-0.5 transition-all flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Schedule a Discovery Call
              </Button>
              <Button variant="outline" size="lg" className="font-body rounded-full border border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 py-3 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/5 bg-white/5 p-8 md:p-10 backdrop-blur-md shadow-2xl">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-dark)]" />
            <h3 className="font-heading text-2xl font-semibold text-white mb-8">
              Send us a message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
