"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Tech logos with real SVG icons (using CDN URLs for placeholder)
const techLogos = [
  { 
    name: "Azure", 
    url: "https://cdn.worldvectorlogo.com/logos/azure-1.svg",
  },
  { 
    name: "Python", 
    url: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  },
  { 
    name: "Power BI", 
    url: "https://cdn.worldvectorlogo.com/logos/power-bi.svg",
  },
  { 
    name: "TensorFlow", 
    url: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg",
  },
  { 
    name: "TypeScript", 
    url: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  { 
    name: "React", 
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  { 
    name: "Docker", 
    url: "https://cdn.worldvectorlogo.com/logos/docker.svg",
  },
  { 
    name: "PostgreSQL", 
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
];

// Duplicate for seamless infinite scroll
const allLogos = [...techLogos, ...techLogos, ...techLogos];

export function TechMarquee() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#FAF9F6] to-[#F5F3ED] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#D4AF37]/5 to-[#C9A032]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#FAF9F6] via-[#FAF9F6]/90 to-transparent z-10 pointer-events-none" />

        {/* Infinite Scrolling Container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-12 md:gap-16 lg:gap-20"
            animate={{
              x: ["-33.333%", "-66.666%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{ x: "-33.333%" }}
          >
            {allLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="group flex-shrink-0 cursor-pointer"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                  {/* Logo Container */}
                  <div className="relative w-full h-full flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                    <Image
                      src={logo.url}
                      alt={logo.name}
                      width={80}
                      height={80}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      unoptimized
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjOTk5Ij5Mb2dvPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#D4AF37] opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500" />
                </div>

                {/* Logo Name (optional) */}
                <div className="text-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-body text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B]">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Optional Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 font-body text-sm text-[#0F0F0F]/50 uppercase tracking-widest"
        >
          Trusted Technologies
        </motion.p>
      </div>
    </section>
  );
}
