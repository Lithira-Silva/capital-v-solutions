"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-brand-light/90 dark:bg-brand-dark/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-heading font-semibold tracking-tight text-brand-text-dark dark:text-brand-text-light">
              Capital <span className="text-[var(--color-gold)]">V</span> Solutions
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "font-body text-sm font-medium transition-all cursor-pointer relative group",
                  activeSection === link.id
                    ? "text-[var(--color-gold)]"
                    : "text-brand-text-dark/80 dark:text-brand-text-light/80 hover:text-[var(--color-red)]"
                )}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--color-gold)] rounded-full shadow-sm shadow-[var(--color-gold)]/50" />
                )}
              </a>
            ))}
            <Button variant="brand" className="rounded-full px-6 py-2.5 shadow-lg shadow-[rgba(178,34,34,0.3)] hover:-translate-y-0.5 transition-all">Let&apos;s Build Your Solution</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-brand-text-dark dark:text-brand-text-light"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-brand-light dark:bg-brand-dark border-b border-brand-gold/20 p-4 shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base font-medium py-2 cursor-pointer transition-colors relative",
                  activeSection === link.id
                    ? "text-[var(--color-gold)]"
                    : "text-brand-text-dark dark:text-brand-text-light hover:text-brand-red"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[var(--color-gold)] rounded-full shadow-sm shadow-[var(--color-gold)]/50" />
                )}
              </a>
            ))}
            <Button variant="brand" className="w-full">
              Let&apos;s Build Your Solution
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
