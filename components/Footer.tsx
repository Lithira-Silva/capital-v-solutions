import Image from "next/image";
import { Linkedin, Shield, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#FFFEF9] border-t border-[var(--color-gold)]/15 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
              <span className="font-heading text-xl font-semibold tracking-tight text-[#0F0F0F] flex items-center gap-1">
                Capital{" "}
                <span className="relative inline-flex items-center justify-center w-7 h-7">
                  <Image
                    src="/logo.png.PNG"
                    alt="V"
                    fill
                    className="object-contain"
                  />
                </span>{" "}
                Solutions
              </span>
            </div>
            <p className="font-body text-sm text-[#6B6B6B]">
              © {new Date().getFullYear()} Capital V Solutions. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="font-body text-sm text-[#6B6B6B] hover:text-[var(--color-gold)] transition-colors flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Privacy Policy
            </a>
            <a href="#" className="font-body text-sm text-[#6B6B6B] hover:text-[var(--color-gold)] transition-colors flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Terms of Service
            </a>
            <a href="#" className="font-body text-sm text-[#6B6B6B] hover:text-[var(--color-gold)] transition-colors flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
