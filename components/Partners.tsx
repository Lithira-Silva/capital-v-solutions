"use client";

export function Partners() {
  return (
    <section className="py-20 bg-brand-dark border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Who We Partner With
        </h2>
        <p className="text-lg text-brand-text-muted max-w-3xl mx-auto mb-12">
          We work with growth-focused enterprises, scale-ups, and business units
          that want technology to become a true force multiplier.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            "Mid-market & Enterprise",
            "Data & Innovation Teams",
            "Strategy & Operations Leaders",
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white/5 border border-white/10 text-brand-text-light font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
