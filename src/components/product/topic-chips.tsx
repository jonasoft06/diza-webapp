"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Bookmark } from "lucide-react";
import { EASE_OUT_STRONG } from "@/components/motion/easing";
import { DizaMessage } from "@/components/product/diza-message";
import { Chip } from "@/components/ui/chip";
import { alumnosTopics } from "@/content/alumnos";
import { cn } from "@/lib/utils";

const { items, listLabel, replyLabel } = alumnosTopics;

const ENTER_SECONDS = 0.2;
const EXIT_SECONDS = 0.1;

/**
 * Doubts as chips (the question in the student's words, its topic in small type) with Diza's short
 * answer under them. The chips are toggle buttons (`aria-pressed`) and exactly one is always on, the
 * first by default. The answer sits in a polite live region, so a screen reader hears the new one when
 * a chip is pressed; it fades out and in (no movement, so reduced motion only shortens it) and the slot
 * keeps a minimum height so the page below does not jump when an answer takes more lines than another.
 */
export function TopicChips() {
  const [activeId, setActiveId] = useState(items[0].id);
  const prefersReducedMotion = useReducedMotion();
  const replyId = useId();
  const active = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <>
      <div role="group" aria-label={listLabel} className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={isActive}
              aria-controls={replyId}
              onClick={() => setActiveId(item.id)}
              className={cn(
                "flex min-h-[4.5rem] cursor-pointer flex-col items-start justify-center gap-1 rounded-2xl border px-4 py-3 text-left outline-none transition-[background-color,border-color,color,scale] duration-200 ease-out-strong select-none active:scale-[0.98] active:duration-100 motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                isActive
                  ? "border-primary bg-primary text-white"
                  : "border-line bg-surface text-ink hover:border-ink/20 hover:bg-tint"
              )}
            >
              <span className="text-base leading-snug font-semibold text-pretty">{item.question}</span>
              <span className={cn("text-xs font-medium", isActive ? "text-white/80" : "text-muted")}>{item.topic}</span>
            </button>
          );
        })}
      </div>

      <div id={replyId} aria-live="polite" className="mt-8 flex min-h-36 items-start justify-center sm:min-h-32">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: prefersReducedMotion ? 0 : ENTER_SECONDS, ease: EASE_OUT_STRONG },
            }}
            exit={{
              opacity: 0,
              transition: { duration: prefersReducedMotion ? 0 : EXIT_SECONDS, ease: EASE_OUT_STRONG },
            }}
            className="max-w-xl text-left"
          >
            <DizaMessage>
              <p className="text-base leading-snug text-ink">
                <span className="sr-only">{replyLabel}: </span>
                {active.reply}
              </p>
              <Chip icon={Bookmark} className="mt-2.5 bg-surface">
                {active.page}
              </Chip>
            </DizaMessage>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
