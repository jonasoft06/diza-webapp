"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Drives an animation that plays once, when its element is on screen.
 *
 * `isPlaying` turns true the first time the element is in view, or at once when
 * the user asks for reduced motion (so the caller draws the finished state and
 * skips its delays). It starts false and only changes from an effect: the
 * server cannot know the preference, and reading it during render would make
 * the client hydrate with a different tree.
 */
export function useOneShot(amount = 0.6) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isInView && !prefersReducedMotion) return;
    const timer = setTimeout(() => setIsPlaying(true), 0);
    return () => clearTimeout(timer);
  }, [isInView, prefersReducedMotion]);

  return { ref, isInView, isPlaying, prefersReducedMotion };
}
