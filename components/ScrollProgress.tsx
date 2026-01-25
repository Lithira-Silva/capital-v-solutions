"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 h-[40vh] w-1 bg-gray-200/30 rounded-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="w-full bg-[#D4AF37] rounded-full relative shadow-lg"
        style={{ height: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      >
        {/* Subtle highlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </div>
  );
}
