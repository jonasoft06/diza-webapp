"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT_STRONG } from "@/components/motion/easing";

/**
 * Every scroll reveal on the page goes through this file. `MotionConfig`
 * (reducedMotion="user") only neutralises the `x`/`y` shortcuts, not the
 * `transform` key we use, so reduced motion is handled here: the hidden state
 * stays identical (it is server-rendered) and the `transform` transition lasts
 * 0, leaving the piece in place and fading it in.
 */
const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT_STRONG } },
};

function buildFadeUp(isMoveInstant: boolean) {
  return {
    hidden: { opacity: 0, transform: "translateY(16px)" },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        duration: 0.5,
        ease: EASE_OUT_STRONG,
        ...(isMoveInstant && { transform: { duration: 0 } }),
      },
    },
  };
}

const fadeUp = buildFadeUp(false);
const fadeUpInstantMove = buildFadeUp(true);

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

function useFadeUp() {
  return useReducedMotion() ? fadeUpInstantMove : fadeUp;
}

/** Tags used by staggered lists, so the rendered DOM stays exactly as authored. */
const tags = {
  div: motion.div,
  ol: motion.ol,
  li: motion.li,
} as const;

type StaggerTag = keyof typeof tags;

const viewport = { once: true, amount: 0.25 } as const;

type StaggerProps = {
  as?: StaggerTag;
  className?: string;
  children: ReactNode;
};

type RevealProps = {
  variant?: "fade" | "fadeUp";
  className?: string;
  children: ReactNode;
};

/** A single element that animates in when it scrolls into view. */
function Reveal({ variant = "fadeUp", className, children }: RevealProps) {
  const fadeUpVariants = useFadeUp();
  return (
    <motion.div
      className={className}
      variants={variant === "fade" ? fade : fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

/** Container whose `RevealItem` descendants animate in sequence. */
function Stagger({ as = "div", className, children }: StaggerProps) {
  const Tag = tags[as];
  return (
    <Tag
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </Tag>
  );
}

/** Child of `Stagger`; inherits the animation state from it. */
function RevealItem({ as = "div", className, children }: StaggerProps) {
  const Tag = tags[as];
  const fadeUpVariants = useFadeUp();
  return (
    <Tag className={className} variants={fadeUpVariants}>
      {children}
    </Tag>
  );
}

export { Reveal, RevealItem, Stagger };
