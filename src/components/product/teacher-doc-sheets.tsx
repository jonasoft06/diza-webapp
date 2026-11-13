"use client";

import type { JSX } from "react";
import { motion, type Variants } from "motion/react";
import { EASE_OUT_STRONG } from "@/components/motion/easing";
import type { TeacherFeatureId } from "@/content/landing";
import { useOneShot } from "@/hooks/use-one-shot";
import { cn } from "@/lib/utils";

/**
 * Miniature documents for the teacher cards: a small white sheet with grey bars
 * standing in for text. Once on screen, the bars are "written" left to right.
 * `custom` is the reduced-motion flag: the bars then appear finished, with no
 * wipe and no stagger.
 */
const BAR_SECONDS = 0.35;
const BAR_STAGGER_SECONDS = 0.07;
const START_DELAY_SECONDS = 0.3;

const sheetVariants: Variants = {
  hidden: {},
  visible: (instant: boolean) => ({
    transition: {
      staggerChildren: instant ? 0 : BAR_STAGGER_SECONDS,
      delayChildren: instant ? 0 : START_DELAY_SECONDS,
    },
  }),
};

const barVariants: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: (instant: boolean) => ({
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: instant ? 0 : BAR_SECONDS, ease: EASE_OUT_STRONG },
  }),
};

function Bar({ className }: { className?: string }) {
  return <motion.span variants={barVariants} className={cn("block h-1.5 rounded-full bg-ink/15", className)} />;
}

function ActivityBody() {
  return (
    <div className="space-y-1.5">
      <Bar className="mb-2.5 h-2 w-2/3" />
      <Bar className="w-full" />
      <Bar className="w-11/12" />
      <Bar className="w-full" />
      <Bar className="w-3/5" />
    </div>
  );
}

const QUIZ_BAR_WIDTHS = ["w-4/5", "w-3/5", "w-[72%]"];

function QuizBody() {
  return (
    <div className="space-y-2.5">
      {QUIZ_BAR_WIDTHS.map((width) => (
        <div key={width} className="flex items-center gap-2">
          <span className="size-3 shrink-0 rounded-[3px] border border-ink/25" />
          <Bar className={width} />
        </div>
      ))}
    </div>
  );
}

function PlanBody() {
  return (
    <div className="space-y-2">
      <Bar className="h-2 w-1/2" />
      <div className="grid grid-cols-2 gap-1.5">
        {[0, 1, 2, 3].map((block) => (
          <div key={block} className="space-y-1 rounded-md bg-bg p-1.5">
            <Bar className="w-full" />
            <Bar className="w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}

const bodies: Record<TeacherFeatureId, () => JSX.Element> = {
  activity: ActivityBody,
  quiz: QuizBody,
  plan: PlanBody,
};

export function DocSheet({ kind, label, className }: { kind: TeacherFeatureId; label: string; className?: string }) {
  const { ref, isPlaying, prefersReducedMotion } = useOneShot();
  const Body = bodies[kind];

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      variants={sheetVariants}
      custom={prefersReducedMotion}
      initial="hidden"
      animate={isPlaying ? "visible" : "hidden"}
      className={cn("rounded-lg bg-surface p-3 shadow-card", className)}
    >
      <span className="inline-flex rounded-full bg-tint px-2 py-0.5 text-[11px] font-semibold leading-4 text-primary">
        {label}
      </span>
      <div className="mt-3">
        <Body />
      </div>
    </motion.div>
  );
}
