"use client";

import { useEffect, useState } from "react";

export function useScrolled(threshold = 0) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const syncWithScroll = () => setIsScrolled(window.scrollY > threshold);
    syncWithScroll();
    window.addEventListener("scroll", syncWithScroll, { passive: true });
    return () => window.removeEventListener("scroll", syncWithScroll);
  }, [threshold]);

  return isScrolled;
}
