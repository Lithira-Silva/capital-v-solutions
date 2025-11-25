export function Footer() {
  return (
    <footer className="bg-[#050509] border-t border-white/10 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold tracking-tight text-white">
              Capital <span className="text-brand-gold">V</span> Solutions
            </span>
            <p className="text-sm text-brand-text-muted mt-2">
              © {new Date().getFullYear()} Capital V Solutions. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-brand-text-muted hover:text-brand-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-brand-text-muted hover:text-brand-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-brand-text-muted hover:text-brand-gold transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
