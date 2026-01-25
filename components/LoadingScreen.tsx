"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, memo } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = memo(function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 200);
          return 100;
        }
        return prev + 4; // Faster increment for quicker loading
      });
    }, 20); // Reduced interval for faster updates

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#D4AF37]/8 via-[#D4AF37]/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 px-4">
        {/* Logo and text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 md:gap-3 flex-wrap justify-center"
        >
          <span className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F0F0F]">
            Capital
          </span>
          
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              type: "spring",
              stiffness: 200
            }}
            className="relative"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-lg blur-md opacity-40" />
              <Image
                src="/logo.png.PNG"
                alt="V"
                width={56}
                height={56}
                className="relative z-10 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              />
            </motion.div>
          </motion.div>
          
          <span className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F0F0F]">
            Solutions
          </span>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-[16rem] sm:max-w-[18rem] md:max-w-[20rem] space-y-2"
        >
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden backdrop-blur-xl">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#D4AF37] rounded-full relative will-change-[width]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </motion.div>
          </div>
          
          <p className="text-center font-body text-[10px] sm:text-xs text-gray-400 tracking-wider">
            Loading Experience
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
});
