"use client";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

export function CTA() {
  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/4" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-3xl -translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to modernize your technology backbone?
            </h2>
            <p className="text-xl text-brand-text-muted mb-8">
              Let’s explore how Capital V Solutions can support your next
              initiative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="brand" size="lg" className="text-lg px-8">
                Schedule a Discovery Call
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send us a message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
