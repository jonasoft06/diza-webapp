"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

// `reducedMotion="user"` drops transform/layout animations when the OS asks for
// reduced motion, while still allowing opacity fades through.
export function MotionPreferences({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
