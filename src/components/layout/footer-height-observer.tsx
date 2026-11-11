"use client";

import { useEffect } from "react";
import { FOOTER_ID } from "@/lib/constants";

/**
 * Publishes the footer's height as `--footer-height`. The footer's sticky
 * offset needs it: CSS alone cannot compare an element's own height with the
 * viewport's.
 */
export function FooterHeightObserver() {
  useEffect(() => {
    const footer = document.getElementById(FOOTER_ID);
    if (!footer) return;

    const observer = new ResizeObserver(([entry]) => {
      footer.style.setProperty("--footer-height", `${entry.borderBoxSize[0].blockSize}px`);
    });

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return null;
}
