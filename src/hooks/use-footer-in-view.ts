"use client";

import { useEffect, useState } from "react";
import { FOOTER_ID } from "@/lib/constants";

/**
 * Tracks whether the footer has started to reveal, so the navbar can get out of
 * the way. `onEnter` fires on the observer callback (not in an effect body) so
 * callers can react to the transition without cascading renders.
 */
export function useFooterInView(onEnter?: () => void) {
  const [isFooterInView, setIsFooterInView] = useState(false);

  useEffect(() => {
    const footer = document.getElementById(FOOTER_ID);
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterInView(entry.isIntersecting);
        if (entry.isIntersecting) onEnter?.();
      },
      { threshold: 0.15 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
    // `onEnter` is intentionally not a dependency: re-subscribing on every
    // render would tear down the observer constantly.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isFooterInView;
}
