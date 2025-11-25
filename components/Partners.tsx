"use client";

export function Partners() {
  return (
    <section className="py-20 md:py-24 bg-brand-dark border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-body text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold)] mb-4 font-semibold">
          Our Clients
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
          Who We Partner With
        </h2>
        <p className="font-body text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto mb-16 leading-relaxed">
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
              className="font-body p-8 rounded-2xl bg-white/5 border border-white/10 text-brand-text-light font-medium hover:-translate-y-1 transition-all"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
