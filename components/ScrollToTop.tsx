"use client";

import { useState, useEffect, useCallback, memo } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { throttle } from "@/lib/utils";

export const ScrollToTop = memo(function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > 300);
  }, []);

  useEffect(() => {
    const throttledToggle = throttle(toggleVisibility, 200);
    window.addEventListener("scroll", throttledToggle, { passive: true });
    return () => window.removeEventListener("scroll", throttledToggle);
  }, [toggleVisibility]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group will-change-transform"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
});
