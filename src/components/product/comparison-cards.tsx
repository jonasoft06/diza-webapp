"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Bookmark, Check, X } from "lucide-react";
import { EASE_OUT_STRONG } from "@/components/motion/easing";
import { DizaMessage, TypingDots } from "@/components/product/diza-message";
import { Chip } from "@/components/ui/chip";
import { RichText } from "@/components/ui/rich-text";
import { comparison } from "@/content/landing";
import { useOneShot } from "@/hooks/use-one-shot";
import { cn } from "@/lib/utils";

/**
 * "Otras IA" and "Diza": two cards that share the rows of one grid (subgrid from
 * `md`), so the heading, the chat and each of the four points line up across
 * them. Each card plays once, when it is on screen. "Otras IA" goes first: its
 * answer is typed out fast and its tail fades. On desktop "Diza" follows about
 * two seconds later; on phones, where it sits below, it starts as it arrives.
 * The effects live on their own wrappers; with reduced motion both cards are
 * drawn finished and still.
 */

const { question, others, diza } = comparison;

const CARD_SECONDS = 0.5;
const MESSAGE_SECONDS = 0.3;

/** "Otras IA", in ms from its own start. */
const OTHERS_STUDENT_MS = 500;
const OTHERS_REPLY_MS = 950;
const TYPE_TICK_MS = 22;
const TYPE_CHARS_PER_TICK = 3;

/** "Diza", in ms from its own start (after `DIZA_DELAY_*`). */
const DIZA_DELAY_DESKTOP_MS = 1900;
const DIZA_DELAY_PHONE_MS = 250;
const DIZA_STUDENT_MS = 550;
const DIZA_TYPING_MS = 1150;
const DIZA_REPLY_MS = 1950;
const DIZA_CHIP_MS = 2400;
const DIZA_CHECKS_MS = 2100;
const DIZA_CHECK_STEP_MS = 170;

const FADE_UP_HIDDEN = { opacity: 0, transform: "translateY(8px)" };
const FADE_UP_SHOWN = { opacity: 1, transform: "translateY(0px)" };

/** Shared by both cards: the subgrid hand-off and the compact padding below `md`. */
const cardBase =
  "flex flex-col rounded-3xl p-5 md:row-span-6 md:grid md:grid-rows-subgrid md:p-8";

function StudentBubble({
  shown,
  instant,
  className,
}: {
  shown: boolean;
  instant: boolean;
  className: string;
}) {
  return (
    <motion.div
      initial={FADE_UP_HIDDEN}
      animate={shown ? FADE_UP_SHOWN : FADE_UP_HIDDEN}
      transition={{ duration: instant ? 0 : MESSAGE_SECONDS, ease: EASE_OUT_STRONG }}
    >
      <p
        className={cn(
          "ml-auto w-fit max-w-[90%] rounded-2xl rounded-br-md px-3 py-2 text-[13px] leading-snug",
          className
        )}
      >
        {question}
      </p>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Otras IA                                                                    */
/* -------------------------------------------------------------------------- */

export function OthersCard() {
  const { ref, isPlaying, prefersReducedMotion } = useOneShot(0.3);
  const [isShown, setIsShown] = useState(false);
  const [isStudentShown, setIsStudentShown] = useState(false);
  const [typedChars, setTypedChars] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    // Reduced motion: finished and still.
    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        setIsShown(true);
        setIsStudentShown(true);
        setTypedChars(others.reply.length);
      }, 0);
      return () => clearTimeout(timer);
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    let typing: ReturnType<typeof setInterval> | undefined;

    timers.push(setTimeout(() => setIsShown(true), 0));
    timers.push(setTimeout(() => setIsStudentShown(true), OTHERS_STUDENT_MS));
    timers.push(
      setTimeout(() => {
        typing = setInterval(() => {
          setTypedChars((chars) => {
            const next = Math.min(chars + TYPE_CHARS_PER_TICK, others.reply.length);
            if (next >= others.reply.length) clearInterval(typing);
            return next;
          });
        }, TYPE_TICK_MS);
      }, OTHERS_REPLY_MS)
    );

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(typing);
    };
  }, [isPlaying, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, transform: "translateY(16px)" }}
      animate={isShown ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(16px)" }}
      transition={{ duration: prefersReducedMotion ? 0 : CARD_SECONDS, ease: EASE_OUT_STRONG }}
      className={cn(cardBase, "border border-line bg-surface shadow-card")}
    >
      <h3 className="pb-4 text-xl font-semibold text-muted">{others.title}</h3>

      <div aria-hidden="true" className="mb-5 rounded-2xl bg-bg p-3 md:p-4">
        <StudentBubble shown={isStudentShown} instant={prefersReducedMotion} className="bg-muted text-white" />
        {/* The answer is laid out whole from the start (the unwritten part is transparent),
            so the card never changes height while it types; its last lines fade out. */}
        {/* `overflow-anchor: none`: the answer is typed into one span while the rest stays in a transparent one, so the
            text the browser would pick as its scroll anchor moves as it types, and the page scrolled by itself (~90px). */}
        <div className="mt-2.5 max-h-24 overflow-hidden [overflow-anchor:none] mask-[linear-gradient(to_bottom,black_45%,transparent)]">
          <p className="w-fit max-w-[94%] rounded-2xl rounded-bl-md border border-line bg-surface px-3 py-2 text-[13px] leading-snug text-muted">
            <span>{others.reply.slice(0, typedChars)}</span>
            <span className="opacity-0">{others.reply.slice(typedChars)}</span>
          </p>
        </div>
      </div>

      <ul className="md:row-span-4 md:grid md:grid-rows-subgrid">
        {others.items.map((item) => (
          <li key={item} className="flex items-center gap-3 border-t border-line py-3.5 text-body-sm text-muted">
            <span
              aria-hidden="true"
              className="flex size-6 shrink-0 items-center justify-center rounded-full bg-line text-ink/45"
            >
              <X className="size-3.5" strokeWidth={2.25} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Diza                                                                        */
/* -------------------------------------------------------------------------- */

function CheckMark({ shown, instant }: { shown: boolean; instant: boolean }) {
  return (
    <motion.span
      aria-hidden="true"
      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary-light"
      initial={{ opacity: 0, transform: "scale(0.7)" }}
      animate={shown ? { opacity: 1, transform: "scale(1)" } : { opacity: 0, transform: "scale(0.7)" }}
      transition={{ duration: instant ? 0 : 0.25, ease: EASE_OUT_STRONG }}
    >
      <Check className="size-3.5" strokeWidth={2.5} />
    </motion.span>
  );
}

export function DizaCard() {
  const { ref, isPlaying, prefersReducedMotion } = useOneShot(0.3);
  const [isShown, setIsShown] = useState(false);
  const [isStudentShown, setIsStudentShown] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isReplyShown, setIsReplyShown] = useState(false);
  const [isChipShown, setIsChipShown] = useState(false);
  const [checksShown, setChecksShown] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        setIsShown(true);
        setIsStudentShown(true);
        setIsReplyShown(true);
        setIsChipShown(true);
        setChecksShown(diza.items.length);
      }, 0);
      return () => clearTimeout(timer);
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (delayMs: number, action: () => void) => timers.push(setTimeout(action, delayMs));

    // Read at start, so a resized window is judged when the card is reached, not at load.
    const delayMs = window.matchMedia("(min-width: 768px)").matches ? DIZA_DELAY_DESKTOP_MS : DIZA_DELAY_PHONE_MS;

    schedule(delayMs, () => setIsShown(true));
    schedule(delayMs + DIZA_STUDENT_MS, () => setIsStudentShown(true));
    schedule(delayMs + DIZA_TYPING_MS, () => setIsTyping(true));
    schedule(delayMs + DIZA_REPLY_MS, () => {
      setIsTyping(false);
      setIsReplyShown(true);
    });
    schedule(delayMs + DIZA_CHIP_MS, () => setIsChipShown(true));
    diza.items.forEach((_, index) => {
      schedule(delayMs + DIZA_CHECKS_MS + index * DIZA_CHECK_STEP_MS, () => setChecksShown(index + 1));
    });

    return () => timers.forEach(clearTimeout);
  }, [isPlaying, prefersReducedMotion]);

  const hidden = { opacity: 0, transform: "translateY(16px) scale(0.96)" };
  const shown = { opacity: 1, transform: "translateY(0px) scale(1)" };

  // The card is a touch bigger from `md` (the `scale` property, which composes with the entrance's `transform`); no extra scale on phones.
  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isShown ? shown : hidden}
      transition={{ duration: prefersReducedMotion ? 0 : CARD_SECONDS, ease: EASE_OUT_STRONG }}
      className={cn(cardBase, "bg-primary-dark text-white shadow-card md:scale-[1.02]")}
    >
      <h3 className="pb-4 text-xl font-semibold text-white">{diza.title}</h3>

      <div aria-hidden="true" className="mb-5 rounded-2xl bg-surface p-3 md:p-4">
        <StudentBubble shown={isStudentShown} instant={prefersReducedMotion} className="bg-ink text-white" />
        <div className="relative mt-2.5">
          <motion.div
            initial={FADE_UP_HIDDEN}
            animate={isReplyShown ? FADE_UP_SHOWN : FADE_UP_HIDDEN}
            transition={{ duration: prefersReducedMotion ? 0 : MESSAGE_SECONDS, ease: EASE_OUT_STRONG }}
          >
            <DizaMessage>
              <p className="text-[13px] leading-snug text-ink">
                <RichText value={diza.reply} />
              </p>
              <ChipSlot shown={isChipShown} instant={prefersReducedMotion}>
                {diza.pageChip}
              </ChipSlot>
            </DizaMessage>
          </motion.div>
          <AnimatePresence>{isTyping ? <TypingDots /> : null}</AnimatePresence>
        </div>
      </div>

      <ul className="md:row-span-4 md:grid md:grid-rows-subgrid">
        {diza.items.map((item, index) => (
          <li key={item} className="flex items-center gap-3 border-t border-white/15 py-3.5 text-body-sm text-white">
            <CheckMark shown={index < checksShown} instant={prefersReducedMotion} />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ChipSlot({ shown, instant, children }: { shown: boolean; instant: boolean; children: ReactNode }) {
  return (
    <motion.div
      className="mt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: shown ? 1 : 0 }}
      transition={{ duration: instant ? 0 : 0.25, ease: EASE_OUT_STRONG }}
    >
      <Chip icon={Bookmark} className="bg-surface">
        {children}
      </Chip>
    </motion.div>
  );
}
