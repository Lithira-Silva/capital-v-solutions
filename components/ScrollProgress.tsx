"use client";

import { useEffect, useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { throttle } from "@/lib/utils";

export const ScrollProgress = memo(function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = useCallback(() => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollPx / winHeightPx) * 100;
    setScrollProgress(scrolled);
  }, []);

  useEffect(() => {
    const throttledUpdate = throttle(updateScrollProgress, 16); // ~60fps
    window.addEventListener("scroll", throttledUpdate, { passive: true });
    return () => window.removeEventListener("scroll", throttledUpdate);
  }, [updateScrollProgress]);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 h-[40vh] w-1 bg-gray-200/30 rounded-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="w-full bg-[#D4AF37] rounded-full relative shadow-lg will-change-[height]"
        style={{ height: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      >
        {/* Subtle highlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </div>
  );
});
