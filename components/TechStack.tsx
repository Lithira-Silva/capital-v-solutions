"use client";

export function TechStack() {
  const categories = [
    "Cloud & Platforms",
    "Data & Analytics",
    "AI & Machine Learning",
    "Integration & APIs",
    "Automation & Orchestration",
  ];

  return (
    <section id="tech" className="py-20 md:py-24 bg-brand-light dark:bg-[#0B0C10]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-body text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold)] mb-4 font-semibold">
          Technology
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-brand-text-dark dark:text-brand-text-light mb-12">
          Our Technical Foundations
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((tech, index) => (
            <div
              key={index}
              className="font-body px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-[var(--color-gold)]/20 text-brand-text-dark dark:text-brand-text-light font-medium shadow-sm hover:border-[var(--color-gold)]/50 hover:-translate-y-0.5 transition-all cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
