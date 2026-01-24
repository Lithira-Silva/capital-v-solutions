"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const leaders = [
  {
    name: "John Doe",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    linkedin: "#",
  },
  {
    name: "Jane Smith",
    role: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    linkedin: "#",
  },
  {
    name: "Mike Johnson",
    role: "Head of Data & AI",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "#",
  },
  {
    name: "Sarah Williams",
    role: "Director of Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    linkedin: "#",
  },
];

export function Leadership() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#FAF9F6] via-[#F5F3ED] to-[#FAF9F6] overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-xs font-medium tracking-widest text-gray-500 uppercase">
              The Leadership
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F0F0F] leading-[1.05]"
          >
            Meet The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]">
              Experts
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-xl text-[#0F0F0F]/70 leading-relaxed font-normal"
          >
            Our leadership team brings decades of experience building enterprise-grade technology solutions.
          </motion.p>
        </div>

        {/* Leadership Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative">
                {/* Avatar Container with Gold Ring */}
                <div className="relative mb-6">
                  <div className="relative w-full aspect-square rounded-full overflow-hidden">
                    {/* Gold Ring Border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] p-[3px] group-hover:p-[4px] transition-all duration-500">
                      <div className="absolute inset-[3px] rounded-full bg-[#FAF9F6] group-hover:inset-[4px] transition-all duration-500" />
                    </div>
                    
                    {/* Avatar Image */}
                    <div className="absolute inset-[3px] rounded-full overflow-hidden group-hover:inset-[4px] transition-all duration-500">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  </div>

                  {/* LinkedIn Badge */}
                  <motion.a
                    href={leader.linkedin}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-white/60 backdrop-blur-xl border border-gray-200/50 shadow-[0_4px_16px_rgb(0,0,0,0.08)] flex items-center justify-center group/icon hover:bg-[#A61C26] transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-[#0F0F0F] group-hover/icon:text-white transition-colors" />
                  </motion.a>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="font-heading text-xl font-bold text-[#0F0F0F] mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#BF953F] group-hover:via-[#FCF6BA] group-hover:to-[#B38728] transition-all duration-500">
                    {leader.name}
                  </h3>
                  <p className="font-body text-sm text-[#0F0F0F]/60">{leader.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
