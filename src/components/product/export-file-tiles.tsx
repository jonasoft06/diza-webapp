"use client";

import { motion } from "motion/react";
import { FileText } from "lucide-react";
import { EASE_OUT_STRONG } from "@/components/motion/easing";
import { useOneShot } from "@/hooks/use-one-shot";

const FIRST_DELAY_SECONDS = 0.25;
const NEXT_DELAY_SECONDS = 0.13;
const DROP_PX = 28;

/**
 * The export formats as two file tiles. Once on screen each one drops in with a
 * slight bounce, like a file that has just finished downloading. The label sits
 * in the tile and the whole thing is decorative: the card's text says it already.
 */
export function ExportFileTiles({ formats }: { formats: readonly string[] }) {
  const { ref, isPlaying, prefersReducedMotion } = useOneShot();

  return (
    <div ref={ref} aria-hidden="true" className="flex shrink-0 items-end gap-2.5 md:gap-4">
      {formats.map((format, index) => (
        <motion.div
          key={format}
          initial={{ opacity: 0, y: -DROP_PX }}
          animate={isPlaying ? { opacity: 1, y: 0 } : { opacity: 0, y: -DROP_PX }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  delay: FIRST_DELAY_SECONDS + index * NEXT_DELAY_SECONDS,
                  y: { type: "spring", duration: 0.55, bounce: 0.25 },
                  opacity: { duration: 0.2, ease: EASE_OUT_STRONG },
                }
          }
        >
          <div className="flex h-16 w-14 flex-col items-center justify-center gap-1 rounded-xl bg-sand shadow-card md:h-28 md:w-22 md:gap-2">
            <FileText className="size-5 text-primary md:size-8" strokeWidth={1.75} />
            <span className="rounded-full bg-primary px-2 py-0.5 text-[11px] font-bold leading-4 text-white">
              {format}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
