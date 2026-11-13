"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { Bookmark, ChevronDown, ChevronLeft, History, SendHorizontal, SquarePen, User } from "lucide-react";
import { EASE_OUT_STRONG } from "@/components/motion/easing";
import { Chip } from "@/components/ui/chip";
import { RichText } from "@/components/ui/rich-text";
import { conversation, type ConversationTurn } from "@/content/landing";
import { cn } from "@/lib/utils";

/**
 * The phone with a scripted chat behind its frame. "Cómo funciona" and the hero of
 * /alumnos share it: `usePhoneChatPlayback` owns the one-shot playback (so a caller
 * can light up other things as the turns appear) and `PhoneChat` draws it.
 */

/** Wait after the phone starts entering before the first message. */
const START_DELAY_MS = 700;
/** Pause between one message and the next one (or its typing dots). */
const BETWEEN_MESSAGES_MS = 700;
/** How long the typing dots show before each of Diza's replies. */
const TYPING_MS = 650;

const MESSAGE_ENTER_SECONDS = 0.3;
const PHONE_ENTER_SECONDS = 0.6;

const { subject, unit, label, composerPlaceholder, privacyNote } = conversation;

/** The chat text is a share of the phone's width, never smaller than 12px on phones and 11px from `md` up. */
const text = {
  title: "text-[length:max(12px,3.9cqw)] md:text-[length:max(11px,3.9cqw)]",
  meta: "text-[length:max(12px,3.5cqw)] md:text-[length:max(11px,3.5cqw)]",
  message: "text-[length:max(12px,3.95cqw)] md:text-[length:max(11px,3.95cqw)]",
  composer: "text-[length:max(12px,4cqw)] md:text-[length:max(11px,4cqw)]",
  note: "text-[length:max(12px,3.1cqw)] md:text-[length:max(11px,3.1cqw)]",
};

/** How much of a Diza slot to bring into view while only the typing dots are on it (px). */
const TYPING_REVEAL_PX = 44;

/** Square rounded avatar at the foot of each block of Diza messages. */
function DizaAvatar() {
  return (
    <span
      aria-hidden="true"
      className="flex size-[7cqw] min-h-5.5 min-w-5.5 shrink-0 items-center justify-center rounded-[2cqw] bg-primary text-[length:max(12px,3.4cqw)] md:text-[length:max(11px,3.4cqw)] font-bold leading-none text-white"
    >
      D
    </span>
  );
}

function TypingBubble() {
  return (
    <motion.span
      aria-hidden="true"
      className="absolute left-[max(1.375rem,7cqw)] top-0 ml-[1.6cqw] flex items-center gap-[1.4cqw] rounded-[3.6cqw] rounded-bl-[1.2cqw] bg-tint px-[3.4cqw] py-[3.2cqw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.09, ease: EASE_OUT_STRONG } }}
      transition={{ duration: 0.18, ease: EASE_OUT_STRONG }}
    >
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          className="size-[1.6cqw] min-w-[5px] rounded-full bg-muted"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.15, ease: "easeInOut" }}
        />
      ))}
    </motion.span>
  );
}

function Bubble({ turn }: { turn: ConversationTurn }) {
  if (turn.from === "student") {
    return (
      <p
        className={cn(
          "ml-auto w-fit max-w-[84%] rounded-[3.6cqw] rounded-br-[1.2cqw] bg-ink px-[3.4cqw] py-[2.1cqw] leading-snug text-white",
          text.message
        )}
      >
        <span className="sr-only">{turn.label}: </span>
        {turn.text}
      </p>
    );
  }

  return (
    <div className="flex w-fit max-w-full items-end gap-[1.6cqw]">
      <DizaAvatar />
      <div className="min-w-0 rounded-[3.6cqw] rounded-bl-[1.2cqw] bg-tint px-[3.4cqw] py-[2.1cqw]">
        <p className={cn("leading-snug text-ink", text.message)}>
          <span className="sr-only">{turn.label}: </span>
          <RichText value={turn.text} />
        </p>
        {turn.pageChip ? (
          <Chip
            icon={Bookmark}
            className={cn("mt-[2cqw] max-w-full gap-[1.2cqw] bg-surface px-[2.4cqw] py-[1cqw]", text.meta)}
          >
            {turn.pageChip}
          </Chip>
        ) : null}
      </div>
    </div>
  );
}

type ChatScreenProps = {
  script: readonly ConversationTurn[];
  shownTurns: number;
  typingTurn: number | null;
  instant: boolean;
};

/** Decorative controls of the header: the real ones are not part of this illustration. */
const headerIcon = "size-[max(14px,4.4cqw)] shrink-0 text-muted";

/**
 * The chat sits behind the phone frame, whose screen is transparent. Sizes are
 * in `cqw` of the phone's width, so the whole thread scales with the phone. The
 * header, the unit chip and the composer stay put; only the thread scrolls.
 */
function ChatScreen({ script, shownTurns, typingTurn, instant }: ChatScreenProps) {
  const threadRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Like a real chat, keep the newest message (or the typing dots) in view as it arrives.
  useEffect(() => {
    const thread = threadRef.current;
    const slot = slotRefs.current[typingTurn ?? shownTurns - 1];
    if (!thread || !slot) return;

    const bottom = typingTurn === null ? slot.offsetTop + slot.offsetHeight : slot.offsetTop + TYPING_REVEAL_PX;
    const bottomPadding = Number.parseFloat(getComputedStyle(thread).paddingBottom);
    const top = Math.max(0, bottom + bottomPadding - thread.clientHeight);
    if (top > thread.scrollTop) {
      thread.scrollTo({ top, behavior: instant ? "instant" : "smooth" });
    }
  }, [shownTurns, typingTurn, instant]);

  return (
    <div className="absolute bottom-[2.8%] left-[4.1%] right-[4.8%] top-[2.2%] overflow-hidden rounded-[8cqw] bg-surface">
      {/* The top padding keeps the header under the camera (about 7% of the phone's height). */}
      <div className="flex h-full flex-col pb-[3.4cqw] pt-[9.5cqw]">
        <div aria-hidden="true" className="flex items-center gap-[2cqw] border-b border-line px-[3.6cqw] pb-[2.6cqw]">
          <ChevronLeft className={cn(headerIcon, "text-ink")} strokeWidth={2} />
          <span className={cn("min-w-0 flex-1 truncate font-semibold leading-tight text-ink", text.title)}>
            {subject}
          </span>
          <History className={headerIcon} strokeWidth={1.75} />
          <SquarePen className={headerIcon} strokeWidth={1.75} />
          <span className="flex size-[6.4cqw] min-h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
            <User className="size-[58%]" strokeWidth={2} />
          </span>
        </div>

        <div className="px-[3.6cqw] pt-[2cqw]">
          <span
            aria-hidden="true"
            className={cn(
              "inline-flex items-center gap-[1cqw] rounded-full bg-tint py-[1cqw] pl-[3cqw] pr-[2.2cqw] font-medium text-ink",
              text.meta
            )}
          >
            {unit}
            <ChevronDown className="size-[max(12px,3.4cqw)]" strokeWidth={2} />
          </span>
        </div>

        {/* Every turn is always laid out, so the connectors beside the phone keep their place; the thread scrolls to follow the newest one. */}
        <div
          ref={threadRef}
          role="group"
          aria-label={label}
          className="relative flex min-h-0 flex-1 flex-col gap-[3cqw] overflow-hidden px-[3.6cqw] py-[2.1cqw] mask-[linear-gradient(to_bottom,transparent,black_2.6cqw)]"
        >
          {script.map((turn, index) => (
            <div
              key={turn.text}
              ref={(node) => {
                slotRefs.current[index] = node;
              }}
              className="relative shrink-0"
            >
              <motion.div
                initial={{ opacity: 0, transform: "translateY(8px)" }}
                animate={
                  index < shownTurns
                    ? { opacity: 1, transform: "translateY(0px)" }
                    : { opacity: 0, transform: "translateY(8px)" }
                }
                transition={{ duration: instant ? 0 : MESSAGE_ENTER_SECONDS, ease: EASE_OUT_STRONG }}
              >
                <Bubble turn={turn} />
              </motion.div>
              <AnimatePresence>{typingTurn === index ? <TypingBubble /> : null}</AnimatePresence>
            </div>
          ))}
        </div>

        <div aria-hidden="true" className="px-[3.6cqw] pt-[1.6cqw]">
          <div className="flex items-center justify-between gap-[2cqw] rounded-[3.6cqw] border border-line bg-surface p-[1.4cqw] pl-[3.4cqw]">
            <span className={cn("truncate text-muted", text.composer)}>{composerPlaceholder}</span>
            <span className="flex size-[8cqw] min-h-6 min-w-6 shrink-0 items-center justify-center rounded-[2.4cqw] bg-primary/45 text-white">
              <SendHorizontal className="size-[52%]" strokeWidth={2} />
            </span>
          </div>
          <p className={cn("mt-[1.6cqw] text-center text-muted", text.note)}>{privacyNote}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Plays `script` once, when the phone is half on screen: the phone fades in, then
 * each turn appears (Diza's after its typing dots). `shownTurns` is how many are
 * on screen, so callers can derive state from it. Initial values describe the
 * server-rendered HTML (phone and turns hidden); deriving them from the reduced
 * motion preference during render would make the client hydrate with a different tree.
 */
export function usePhoneChatPlayback(script: readonly ConversationTurn[]) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion() ?? false;

  const [phoneShown, setPhoneShown] = useState(false);
  const [shownTurns, setShownTurns] = useState(0);
  const [typingTurn, setTypingTurn] = useState<number | null>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (delayMs: number, action: () => void) => timers.push(setTimeout(action, delayMs));

    // Reduced motion: the finished scene appears at once.
    if (prefersReducedMotion) {
      schedule(0, () => {
        setPhoneShown(true);
        setShownTurns(script.length);
      });
      return () => timers.forEach(clearTimeout);
    }

    if (!isInView) return;

    schedule(0, () => setPhoneShown(true));

    let elapsedMs = START_DELAY_MS;
    script.forEach((turn, index) => {
      if (turn.from === "diza") {
        schedule(elapsedMs, () => setTypingTurn(index));
        elapsedMs += TYPING_MS;
      }
      schedule(elapsedMs, () => {
        setTypingTurn(null);
        setShownTurns(index + 1);
      });
      elapsedMs += BETWEEN_MESSAGES_MS;
    });

    return () => timers.forEach(clearTimeout);
  }, [script, isInView, prefersReducedMotion]);

  return { ref, phoneShown, shownTurns, typingTurn, prefersReducedMotion };
}

export type PhoneChatPlayback = ReturnType<typeof usePhoneChatPlayback>;

/** The phone itself; `className` sets its width (the chat scales with it). `preload` is for a phone above the fold. */
export function PhoneChat({
  script,
  playback,
  className,
  preload = false,
}: {
  script: readonly ConversationTurn[];
  playback: PhoneChatPlayback;
  className?: string;
  preload?: boolean;
}) {
  const { ref, phoneShown, shownTurns, typingTurn, prefersReducedMotion } = playback;

  return (
    <div ref={ref} className={cn("@container relative", className)}>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(20px)" }}
        animate={
          phoneShown
            ? { opacity: 1, transform: "translateY(0px)" }
            : { opacity: 0, transform: "translateY(20px)" }
        }
        transition={{ duration: prefersReducedMotion ? 0 : PHONE_ENTER_SECONDS, ease: EASE_OUT_STRONG }}
      >
        <div className="relative drop-shadow-object-soft">
          <ChatScreen
            script={script}
            shownTurns={shownTurns}
            typingTurn={typingTurn}
            instant={prefersReducedMotion}
          />
          <Image
            src="/images/como-funciona/phone_frame.webp"
            alt=""
            aria-hidden="true"
            width={734}
            height={1424}
            preload={preload}
            sizes="(min-width: 768px) 20rem, min(300px, 80vw)"
            className="pointer-events-none relative z-10 h-auto w-full max-w-none select-none"
          />
        </div>
      </motion.div>
    </div>
  );
}
