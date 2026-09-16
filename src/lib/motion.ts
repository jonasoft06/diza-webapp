/**
 * Shared scroll-reveal variants. `MotionConfig reducedMotion="user"` in the root
 * layout strips the `y` offsets automatically when the OS asks for reduced motion.
 */
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export const viewportOnce = { once: true, amount: 0.25 } as const;
