import Image from "next/image";
import { Linkedin, Shield, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050509] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png.PNG"
                  alt="Capital V Solutions"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading text-xl font-semibold tracking-tight text-white">
                Capital <span className="text-[var(--color-gold)]">V</span> Solutions
              </span>
            </div>
            <p className="font-body text-sm text-[var(--color-text-muted)]">
              © {new Date().getFullYear()} Capital V Solutions. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="font-body text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Privacy Policy
            </a>
            <a href="#" className="font-body text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Terms of Service
            </a>
            <a href="#" className="font-body text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
