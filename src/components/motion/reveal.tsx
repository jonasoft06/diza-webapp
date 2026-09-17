"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

/**
 * Every scroll reveal on the page goes through this file. Reduced motion is
 * handled once, globally, by `MotionPreferences` (MotionConfig reducedMotion="user"),
 * which strips the `y` offsets and leaves the fades.
 */
const variants = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  },
  stagger: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
  },
} as const;

type RevealVariant = "fade" | "fadeUp";

/** Tags used by reveals, so the rendered DOM stays exactly as authored. */
const tags = {
  div: motion.div,
  h2: motion.h2,
  p: motion.p,
  ul: motion.ul,
} as const;

type RevealTag = keyof typeof tags;

const viewport = { once: true, amount: 0.25 } as const;

type RevealProps = {
  variant?: RevealVariant;
  as?: RevealTag;
  className?: string;
  children: ReactNode;
};

/** A single element that animates in when it scrolls into view. */
function Reveal({ variant = "fadeUp", as = "div", className, children }: RevealProps) {
  const Tag = tags[as];
  return (
    <Tag
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </Tag>
  );
}

/** Container whose `RevealItem` descendants animate in sequence. */
function Stagger({ as = "div", className, children }: Omit<RevealProps, "variant">) {
  const Tag = tags[as];
  return (
    <Tag
      className={className}
      variants={variants.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </Tag>
  );
}

/** Child of `Stagger`; inherits the animation state from it. */
function RevealItem({ variant = "fadeUp", as = "div", className, children }: RevealProps) {
  const Tag = tags[as];
  return (
    <Tag className={className} variants={variants[variant]}>
      {children}
    </Tag>
  );
}

export { Reveal, RevealItem, Stagger };
