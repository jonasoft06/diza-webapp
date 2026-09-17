"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { BookOpen } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { conversation, PAGE_CHIP_LABEL, type ConversationTurn } from "@/content/landing";

const TYPING_MS = 620;
const READ_MS = 780;

const { script, subject } = conversation;

function TypingDots() {
  return (
    <span className="flex items-center gap-1 px-1 py-0.5" aria-label="Diza está escribiendo">
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          className="size-1.5 rounded-full bg-muted/60"
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 1, repeat: Infinity, delay: dot * 0.16, ease: "easeInOut" }}
        />
      ))}
    </span>
  );
}

function Bubble({ turn }: { turn: ConversationTurn }) {
  if (turn.from === "student") {
    return (
      <div className="flex justify-end">
        <p className="max-w-[85%] rounded-2xl rounded-br-md bg-accent px-3.5 py-2.5 text-sm leading-snug text-white">
          {turn.text}
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <div className="max-w-[90%] rounded-2xl rounded-bl-md border border-border bg-surface px-3.5 py-2.5">
        <p className="text-sm leading-snug text-ink">{turn.text}</p>
        {turn.page ? (
          <div className="mt-2">
            <Chip icon={BookOpen}>{PAGE_CHIP_LABEL}</Chip>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/**
 * Plays the scripted exchange once it scrolls into view. Under reduced motion
 * the whole thread is rendered at once instead of being staged.
 */
export function Conversacion() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const prefersReducedMotion = useReducedMotion();

  // Always 0 on the first render so the client matches the server-rendered
  // HTML. Deriving it from `prefersReducedMotion` in render would hydrate
  // with 4 bubbles against a server that rendered none.
  const [visibleTurns, setVisibleTurns] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Reduced motion: the whole thread appears at once, after commit.
    if (prefersReducedMotion) {
      timers.push(setTimeout(() => setVisibleTurns(script.length), 0));
      return () => timers.forEach(clearTimeout);
    }

    let elapsed = 260;

    script.forEach((turn, index) => {
      if (turn.from === "diza") {
        timers.push(setTimeout(() => setIsTyping(true), elapsed));
        elapsed += TYPING_MS;
        timers.push(
          setTimeout(() => {
            setIsTyping(false);
            setVisibleTurns(index + 1);
          }, elapsed)
        );
      } else {
        timers.push(setTimeout(() => setVisibleTurns(index + 1), elapsed));
      }
      elapsed += READ_MS;
    });

    return () => timers.forEach(clearTimeout);
  }, [isInView, prefersReducedMotion]);

  return (
    <div ref={ref} className="mx-auto w-full max-w-md">
      <div className="rounded-panel border border-border bg-surface p-3 shadow-card">
        <div className="rounded-screen bg-bg p-4 sm:p-5">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span className="text-sm font-bold tracking-[-0.03em] text-accent">diza</span>
            <span className="text-xs text-muted">{subject}</span>
          </div>

          {/* Reserved height so the staged reveal never reflows the section. */}
          <div className="min-h-72 space-y-3 pt-4 sm:min-h-68">
            {script.slice(0, visibleTurns).map((turn, index) => (
              <motion.div
                key={`${turn.from}-${index}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <Bubble turn={turn} />
              </motion.div>
            ))}

            <AnimatePresence>
              {isTyping ? (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="flex justify-start"
                >
                  <span className="rounded-2xl rounded-bl-md border border-border bg-surface px-3 py-2.5">
                    <TypingDots />
                  </span>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
