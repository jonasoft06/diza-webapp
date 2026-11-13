"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { EASE_OUT_STRONG } from "@/components/motion/easing";

/**
 * A message from Diza as the chat draws it: a `tint` bubble with the petróleo
 * rounded-square "D" at its foot. Small illustrations (Para alumnos, La
 * diferencia, Momentos) share it; the big chat in "Cómo funciona" sizes
 * everything in `cqw` and keeps its own.
 */
export function DizaMessage({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-end gap-1.5">
      <span
        aria-hidden="true"
        className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary text-[11px] font-bold leading-none text-white"
      >
        D
      </span>
      <div className="min-w-0 rounded-2xl rounded-bl-md bg-tint px-3 py-2">{children}</div>
    </div>
  );
}

/**
 * The three typing dots, drawn where the bubble will go. Place it in a
 * `relative` slot that holds the (still hidden) message: it lines up with the bubble.
 */
export function TypingDots() {
  return (
    <motion.span
      aria-hidden="true"
      className="absolute left-7.5 top-0 flex items-center gap-1 rounded-2xl rounded-bl-md bg-tint px-3 py-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.09, ease: EASE_OUT_STRONG } }}
      transition={{ duration: 0.18, ease: EASE_OUT_STRONG }}
    >
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          className="size-1.5 rounded-full bg-muted"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.15, ease: "easeInOut" }}
        />
      ))}
    </motion.span>
  );
}
