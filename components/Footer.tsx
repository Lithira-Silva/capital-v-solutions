"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] border-t border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#D4AF37]/6 via-[#D4AF37]/2 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Capital{" "}
                <span className="relative inline-flex items-center justify-center w-7 h-7">
                  <Image
                    src="/logo.png.PNG"
                    alt="V"
                    fill
                    className="object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
                  />
                </span>{" "}
                Solutions
              </span>
            </div>
            <p className="font-body text-sm text-gray-400 leading-relaxed max-w-xs">
              Building technology backbones that power modern enterprises through robust platforms, intelligent data foundations, and AI-driven automation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading text-sm font-semibold tracking-wider text-[#D4AF37] uppercase">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Our Approach", href: "#pillars" },
                { label: "Technology Stack", href: "#tech" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-sm text-gray-400 hover:text-white transition-colors duration-300 w-fit group"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-body text-xs text-gray-500">
              © {new Date().getFullYear()} Capital V Solutions. All rights reserved.
            </p>
            
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="font-body text-xs text-gray-500 hover:text-gray-300 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-body text-xs text-gray-500 hover:text-gray-300 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
