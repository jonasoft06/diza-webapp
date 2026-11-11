"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { BookOpen } from "lucide-react";
import { PhoneFrame } from "@/components/product/phone-frame";
import { Chip } from "@/components/ui/chip";
import {
  conversation,
  howItWorks,
  PAGE_CHIP_LABEL,
  type AnnotationId,
  type ConversationTurn,
} from "@/content/landing";
import { cn } from "@/lib/utils";

const START_DELAY_MS = 200;
const TYPING_MS = 700;
const READ_MS = 1300;
/** How long the last note stays highlighted once the whole script is on screen. */
const FINAL_HIGHLIGHT_MS = 1600;

const ENTER_SECONDS = 0.28;
const EASE_OUT_STRONG = [0.23, 1, 0.32, 1] as const;

const { script, subject, label, composerPlaceholder } = conversation;

function TypingBubble() {
  return (
    <motion.span
      aria-hidden="true"
      className="absolute left-0 top-0 flex items-center gap-1 rounded-2xl rounded-bl-md border border-line bg-surface px-3.5 py-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, ease: EASE_OUT_STRONG }}
    >
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          className="size-1.5 rounded-full bg-muted/60"
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 1, repeat: Infinity, delay: dot * 0.16, ease: "easeInOut" }}
        />
      ))}
    </motion.span>
  );
}

function Bubble({ turn }: { turn: ConversationTurn }) {
  if (turn.from === "student") {
    return (
      <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-primary px-3.5 py-2.5 text-sm leading-snug text-white">
        {turn.text}
      </p>
    );
  }

  return (
    <div className="w-fit max-w-[90%] rounded-2xl rounded-bl-md border border-line bg-surface px-3.5 py-2.5">
      <p className="text-sm leading-snug text-ink">{turn.text}</p>
      {turn.citesPage ? (
        <Chip icon={BookOpen} className="mt-2">
          {PAGE_CHIP_LABEL}
        </Chip>
      ) : null}
    </div>
  );
}

/**
 * Owns the one-shot playback and shares it with both halves of the demo: the
 * phone shows the turns, the notes highlight the one that explains each turn.
 */
export function ConversationDemo() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(phoneRef, { once: true, amount: 0.8 });
  const prefersReducedMotion = useReducedMotion();

  // Initial values describe the server-rendered HTML (all turns hidden, no
  // highlight). Deriving them from `prefersReducedMotion` during render would
  // make the client hydrate with a different tree.
  const [shownTurns, setShownTurns] = useState(0);
  const [typingTurn, setTypingTurn] = useState<number | null>(null);
  const [activeAnnotation, setActiveAnnotation] = useState<AnnotationId | null>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (delayMs: number, action: () => void) => timers.push(setTimeout(action, delayMs));

    // Reduced motion: the finished thread appears at once, with no highlight.
    if (prefersReducedMotion) {
      at(0, () => setShownTurns(script.length));
      return () => timers.forEach(clearTimeout);
    }

    if (!isInView) return;

    let elapsedMs = START_DELAY_MS;

    script.forEach((turn, index) => {
      if (turn.from === "diza") {
        at(elapsedMs, () => setTypingTurn(index));
        elapsedMs += TYPING_MS;
      }
      at(elapsedMs, () => {
        setTypingTurn(null);
        setShownTurns(index + 1);
        setActiveAnnotation(turn.annotation);
      });
      elapsedMs += index === script.length - 1 ? FINAL_HIGHLIGHT_MS : READ_MS;
    });

    at(elapsedMs, () => setActiveAnnotation(null));

    return () => timers.forEach(clearTimeout);
  }, [isInView, prefersReducedMotion]);

  return (
    <div className="mt-12 grid items-center gap-10 sm:mt-14 lg:grid-cols-12 lg:gap-12">
      <div ref={phoneRef} className="lg:col-span-6 lg:col-start-7 lg:row-start-1">
        <PhoneFrame>
          <div className="flex items-center justify-between border-b border-line pb-3">
            <span className="text-sm font-bold tracking-[-0.03em] text-primary">diza</span>
            <span className="text-xs text-muted">{subject}</span>
          </div>

          {/* Every turn is always laid out, so the thread never changes height while it plays. */}
          <div role="group" aria-label={label} className="flex-1 space-y-3 pt-4">
            {script.map((turn, index) => (
              <div key={turn.text} className="relative">
                <motion.div
                  initial={{ opacity: 0, transform: "translateY(8px)" }}
                  animate={
                    index < shownTurns
                      ? { opacity: 1, transform: "translateY(0px)" }
                      : { opacity: 0, transform: "translateY(8px)" }
                  }
                  transition={{ duration: prefersReducedMotion ? 0 : ENTER_SECONDS, ease: EASE_OUT_STRONG }}
                >
                  <Bubble turn={turn} />
                </motion.div>
                <AnimatePresence>{typingTurn === index ? <TypingBubble /> : null}</AnimatePresence>
              </div>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="mt-4 rounded-full border border-line bg-surface px-4 py-2.5 text-sm text-muted"
          >
            {composerPlaceholder}
          </div>
        </PhoneFrame>
      </div>

      <ol className="grid gap-2 md:grid-cols-3 lg:col-span-6 lg:grid-cols-1 lg:col-start-1 lg:row-start-1">
        {howItWorks.annotations.map((annotation, index) => {
          const isActive = annotation.id === activeAnnotation;

          return (
            <li
              key={annotation.id}
              className={cn(
                "flex gap-4 rounded-3xl md:flex-col md:gap-3 lg:flex-row lg:gap-4 border border-transparent p-4 transition-colors duration-200 sm:p-5",
                isActive && "bg-tint"
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-200",
                  isActive ? "bg-primary text-white" : "bg-tint text-primary"
                )}
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink lg:text-xl">{annotation.title}</h3>
                <p className="mt-1 text-body-sm leading-relaxed text-pretty text-muted lg:text-base">{annotation.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
