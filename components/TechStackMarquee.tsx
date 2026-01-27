"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";

// Logo data - You can replace these with actual logo URLs
const logos = [
  { name: "Azure", url: "https://cdn.worldvectorlogo.com/logos/azure-1.svg" },
  { name: "Python", url: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "Power BI", url: "https://cdn.worldvectorlogo.com/logos/power-bi.svg" },
  { name: "AWS", url: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", url: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

// Duplicate the logos for seamless infinite scroll
const allLogos = [...logos, ...logos];

export const TechStackMarquee = memo(function TechStackMarquee() {
  return (
    <section id="tech" className="relative py-20 bg-gradient-to-b from-[#FAF9F6] via-[#FFFEF9] to-[#FAF9F6] overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#D4AF37]/8 via-[#D4AF37]/4 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-xs font-medium tracking-widest text-gray-500 uppercase">
              Technology
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F0F0F] leading-[1.05]"
          >
            Our Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]">
              Foundations
            </span>
          </motion.h2>
        </div>

        {/* Infinite Scrolling Marquee */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-16 will-change-transform"
              animate={{
                x: ["-50%", "-100%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{ x: "-50%" }}
            >
              {allLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    {/* Logo Container */}
                    <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 will-change-transform">
                      <Image
                        src={logo.url}
                        alt={`${logo.name} logo`}
                        width={80}
                        height={80}
                        className="object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:logo-hover-glow transition-all duration-500 will-change-[filter,opacity]"
                        unoptimized={true}
                        priority={index < 8}
                        crossOrigin="anonymous"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.opacity = '0.4';
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjOTk5Ij5Mb2dvPC90ZXh0Pjwvc3ZnPg==';
                        }}
                        onLoad={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.opacity = '1';
                        }}
                      />
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                  </div>

                  {/* Logo Name */}
                  <div className="text-center mt-2">
                    <span className="font-body text-sm text-[#0F0F0F]/40 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#BF953F] group-hover:via-[#FCF6BA] group-hover:to-[#B38728] transition-all duration-500">
                      {logo.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 font-body text-lg text-[#0F0F0F]/70 leading-relaxed font-normal max-w-3xl mx-auto"
        >
          We leverage best-in-class technologies to build robust, scalable solutions
          that drive enterprise transformation.
        </motion.p>
      </div>
    </section>
  );
});
