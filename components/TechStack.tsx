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
    <section id="tech" className="py-20 bg-brand-light dark:bg-[#0B0C10]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-text-dark dark:text-brand-text-light mb-10">
          Our Technical Foundations
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-brand-gold/20 text-brand-text-dark dark:text-brand-text-light font-medium shadow-sm hover:border-brand-gold/50 transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
