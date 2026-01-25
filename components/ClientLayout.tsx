"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AnimatePresence } from "framer-motion";

export function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        {children}
      </div>
    </>
  );
}
