"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Detect active section
      const sections = ["pillars", "approach", "tech", "contact"];
      const scrollPosition = window.scrollY + 100;

      // Check if at top of page
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", id: "" },
    { name: "Services", href: "#pillars", id: "pillars" },
    { name: "Our Approach", href: "#approach", id: "approach" },
    { name: "Technology", href: "#tech", id: "tech" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out bg-white border-b",
        isScrolled
          ? "shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-black/10"
          : "shadow-sm border-black/[0.06]"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-10">
            <span className="text-xl font-heading font-semibold tracking-tight text-[#0F0F0F] flex items-center gap-1.5 transition-all duration-300 group-hover:opacity-80">
              Capital{" "}
              <span className="relative inline-flex items-center justify-center w-7 h-7 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/logo.png.PNG"
                  alt="V"
                  fill
                  className="object-contain"
                  priority
                />
              </span>{" "}
              Solutions
            </span>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-2 bg-gradient-to-r from-[#FEFDFB]/95 via-white/90 to-[#FEFDFB]/95 px-3 py-1.5 rounded-full border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 font-body text-[13px] font-medium transition-all duration-300 cursor-pointer rounded-full",
                  activeSection === link.id
                    ? "text-[#0F0F0F] bg-gradient-to-br from-white to-[#FAF9F6] shadow-[0_1px_4px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(212,175,55,0.35)]"
                    : "text-[#0F0F0F]/65 hover:text-[#0F0F0F] hover:bg-white/90"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-[#0F0F0F] hover:bg-black/[0.05] rounded-lg transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-black/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.08)] animate-in slide-in-from-top-2 duration-300">
          <div className="max-w-[1400px] mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer",
                  activeSection === link.id
                    ? "text-[#0F0F0F] bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 shadow-[inset_0_0_0_1px_rgba(212,175,55,0.2)]"
                    : "text-[#0F0F0F]/70 hover:text-[#0F0F0F] hover:bg-black/[0.03]"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
