"use client";

import { motion } from "motion/react";
import { EyeOff } from "lucide-react";
import { EASE_OUT_STRONG } from "@/components/motion/easing";
import { useOneShot } from "@/hooks/use-one-shot";

const FIRST_DELAY_SECONDS = 0.35;
const STEP_SECONDS = 0.2;

const HIDDEN = { opacity: 0, transform: "translateX(-10px)" };
const SHOWN = { opacity: 1, transform: "translateX(0px)" };

/** The three people who cannot read the conversations; they appear one by one, each with its crossed-out eye. */
export function PrivacyList({ items }: { items: readonly string[] }) {
  const { ref, isPlaying, prefersReducedMotion } = useOneShot();

  return (
    <ul ref={ref as React.Ref<HTMLUListElement>} className="flex flex-col gap-2 md:gap-3">
      {items.map((item, index) => (
        <motion.li
          key={item}
          className="flex items-center gap-3 text-base font-medium text-white md:text-xl"
          initial={HIDDEN}
          animate={isPlaying ? SHOWN : HIDDEN}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.35,
            delay: prefersReducedMotion ? 0 : FIRST_DELAY_SECONDS + index * STEP_SECONDS,
            ease: EASE_OUT_STRONG,
          }}
        >
          <span
            aria-hidden="true"
            className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 md:size-9 md:rounded-xl text-primary-light"
          >
            <EyeOff className="size-4 md:size-5" strokeWidth={1.75} />
          </span>
          {item}
        </motion.li>
      ))}
    </ul>
  );
}
