"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { PageChip } from "@/components/ui/page-chip";

/**
 * Scripted demo of how Diza answers: the student asks, Diza replies with a
 * guiding question and cites the page. It never hands over the answer.
 */
type Turn =
  | { from: "student"; text: string }
  | { from: "diza"; text: string; page?: number };

const script: Turn[] = [
  { from: "student", text: "¿Cómo saco el área de este triángulo?" },
  { from: "diza", text: "¿Qué datos del triángulo te da la página 42?", page: 42 },
  { from: "student", text: "La base y la altura." },
  { from: "diza", text: "Muy bien. ¿Qué operación las relaciona en la fórmula de esa página?" },
];

// Cumulative timeline: each Diza turn is preceded by a "typing" beat.
const TYPING_MS = 620;
const READ_MS = 780;

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

function Bubble({ turn }: { turn: Turn }) {
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
            <PageChip page={turn.page} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function ConversationMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const prefersReducedMotion = useReducedMotion();

  // Reduced motion: no staged reveal, the whole thread is there from the start.
  const [visibleTurns, setVisibleTurns] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setVisibleTurns(script.length);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
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
      <div className="rounded-[2rem] border border-border bg-surface p-3 shadow-card">
        <div className="rounded-[1.5rem] bg-bg p-4 sm:p-5">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span className="text-sm font-bold tracking-[-0.03em] text-accent">diza</span>
            <span className="text-xs text-muted">Matemáticas I</span>
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
