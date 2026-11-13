"use client";

import { useEffect, useState, type ComponentProps } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Bookmark } from "lucide-react";
import { EASE_OUT_STRONG } from "@/components/motion/easing";
import { DizaMessage, TypingDots } from "@/components/product/diza-message";
import { Chip } from "@/components/ui/chip";
import { forStudents } from "@/content/landing";
import { useOneShot } from "@/hooks/use-one-shot";
import { cn } from "@/lib/utils";

/**
 * The three illustrations of "Para alumnos", one per step. Each plays once when
 * its panel is on screen; with reduced motion it is drawn finished and still.
 * Initial state is what the server renders (nothing typed, nothing shown), so
 * reduced motion is applied from an effect instead of during render.
 */

const { visuals } = forStudents;

/** Light sand panel the illustration sits on; the card's text goes below it. */
function VisualPanel({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex min-h-38 items-center justify-center rounded-2xl bg-sand p-3 md:h-56 md:p-4",
        className
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* 1. Book with the PIN card                                                   */
/* -------------------------------------------------------------------------- */

const BOOK_HIDDEN = { opacity: 0, transform: "translateY(10px) scale(0.96)" };
const BOOK_SHOWN = { opacity: 1, transform: "translateY(0px) scale(1)" };
/** Lets the card finish its own entrance first. */
const BOOK_DELAY_S = 0.3;

export function BookPinVisual() {
  const { ref, isInView, prefersReducedMotion } = useOneShot();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (!isInView && !prefersReducedMotion) return;
    const timer = setTimeout(() => setIsShown(true), 0);
    return () => clearTimeout(timer);
  }, [isInView, prefersReducedMotion]);

  return (
    <VisualPanel ref={ref}>
      {/* The photo is the whole object (the card is part of it), so it enters but never floats. */}
      <motion.div
        initial={BOOK_HIDDEN}
        animate={isShown ? BOOK_SHOWN : BOOK_HIDDEN}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.55,
          delay: prefersReducedMotion ? 0 : BOOK_DELAY_S,
          ease: EASE_OUT_STRONG,
        }}
      >
        <Image
          src="/images/alumnos/book_pin.webp"
          alt={visuals.bookAlt}
          width={1000}
          height={875}
          preload
          sizes="(min-width: 768px) 12rem, 10rem"
          className="h-auto max-h-30 w-auto drop-shadow-object-soft md:max-h-40"
        />
      </motion.div>
    </VisualPanel>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Sign-in form that fills itself                                          */
/* -------------------------------------------------------------------------- */

const FORM_START_MS = 900;
const EMAIL_CHAR_MS = 45;
const PIN_CHAR_MS = 80;
const PAUSE_BETWEEN_FIELDS_MS = 280;
const PAUSE_BEFORE_SUBMIT_MS = 320;
const SUBMIT_PRESS_MS = 180;

type FormPhase = "idle" | "email" | "pin" | "done";

function Caret() {
  return (
    <motion.span
      aria-hidden="true"
      className="ml-px h-3.5 w-px shrink-0 bg-ink"
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    />
  );
}

type FieldProps = { label: string; value: string; isActive: boolean };

function Field({ label, value, isActive }: FieldProps) {
  return (
    <div className="mt-2.5">
      <p className="text-[11px] font-medium leading-none text-muted">{label}</p>
      <div
        className={cn(
          "mt-1 flex h-7 items-center rounded-lg border bg-bg px-2.5 text-xs text-ink transition-colors duration-150",
          isActive ? "border-primary" : "border-line"
        )}
      >
        <span className="truncate">{value}</span>
        {isActive ? <Caret /> : null}
      </div>
    </div>
  );
}

export function LoginFormVisual() {
  const { ref, isInView, prefersReducedMotion } = useOneShot();
  const [emailLength, setEmailLength] = useState(0);
  const [pinLength, setPinLength] = useState(0);
  const [phase, setPhase] = useState<FormPhase>("idle");
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (delayMs: number, action: () => void) => timers.push(setTimeout(action, delayMs));

    // Reduced motion: the form is drawn already filled in.
    if (prefersReducedMotion) {
      schedule(0, () => {
        setEmailLength(visuals.login.email.length);
        setPinLength(visuals.login.pin.length);
        setPhase("done");
      });
      return () => timers.forEach(clearTimeout);
    }

    if (!isInView) return;

    let elapsedMs = FORM_START_MS;

    schedule(elapsedMs, () => setPhase("email"));
    for (let length = 1; length <= visuals.login.email.length; length += 1) {
      elapsedMs += EMAIL_CHAR_MS;
      schedule(elapsedMs, () => setEmailLength(length));
    }

    elapsedMs += PAUSE_BETWEEN_FIELDS_MS;
    schedule(elapsedMs, () => setPhase("pin"));
    for (let length = 1; length <= visuals.login.pin.length; length += 1) {
      elapsedMs += PIN_CHAR_MS;
      schedule(elapsedMs, () => setPinLength(length));
    }

    elapsedMs += PAUSE_BEFORE_SUBMIT_MS;
    schedule(elapsedMs, () => {
      setPhase("done");
      setIsPressed(true);
    });
    schedule(elapsedMs + SUBMIT_PRESS_MS, () => setIsPressed(false));

    return () => timers.forEach(clearTimeout);
  }, [isInView, prefersReducedMotion]);

  return (
    <VisualPanel ref={ref}>
      <div aria-hidden="true" className="w-full max-w-60 rounded-xl bg-surface p-3 shadow-card">
        <p className="text-base font-bold leading-none tracking-wordmark text-primary">Diza</p>
        <Field
          label={visuals.login.emailLabel}
          value={visuals.login.email.slice(0, emailLength)}
          isActive={phase === "email"}
        />
        <Field
          label={visuals.login.pinLabel}
          value={visuals.login.pin.slice(0, pinLength)}
          isActive={phase === "pin"}
        />
        <span
          className={cn(
            "mt-3 flex h-7 items-center justify-center rounded-lg bg-primary text-xs font-semibold text-white transition-[transform,background-color] duration-150 ease-out-strong",
            isPressed && "scale-[0.96] bg-primary-dark"
          )}
        >
          {visuals.login.submit}
        </span>
      </div>
    </VisualPanel>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. A question and Diza's guiding reply                                     */
/* -------------------------------------------------------------------------- */

const CHAT_STUDENT_MS = 700;
const CHAT_TYPING_MS = 1500;
const CHAT_REPLY_MS = 2300;
const CHAT_CHIP_MS = 2750;

const FADE_UP_HIDDEN = { opacity: 0, transform: "translateY(8px)" };
const FADE_UP_SHOWN = { opacity: 1, transform: "translateY(0px)" };

export function ChatExchangeVisual() {
  const { ref, isInView, prefersReducedMotion } = useOneShot();
  const [isStudentShown, setIsStudentShown] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isReplyShown, setIsReplyShown] = useState(false);
  const [isChipShown, setIsChipShown] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (delayMs: number, action: () => void) => timers.push(setTimeout(action, delayMs));

    // Reduced motion: the finished exchange is on screen from the start.
    if (prefersReducedMotion) {
      schedule(0, () => {
        setIsStudentShown(true);
        setIsReplyShown(true);
        setIsChipShown(true);
      });
      return () => timers.forEach(clearTimeout);
    }

    if (!isInView) return;

    schedule(CHAT_STUDENT_MS, () => setIsStudentShown(true));
    schedule(CHAT_TYPING_MS, () => setIsTyping(true));
    schedule(CHAT_REPLY_MS, () => {
      setIsTyping(false);
      setIsReplyShown(true);
    });
    schedule(CHAT_CHIP_MS, () => setIsChipShown(true));

    return () => timers.forEach(clearTimeout);
  }, [isInView, prefersReducedMotion]);

  const transition = { duration: prefersReducedMotion ? 0 : 0.3, ease: EASE_OUT_STRONG };

  // Both messages are laid out from the start, so the panel never changes height while it plays.
  return (
    <VisualPanel ref={ref}>
      <div aria-hidden="true" className="flex w-full max-w-72 flex-col gap-2.5">
        <motion.div
          className="ml-auto"
          initial={FADE_UP_HIDDEN}
          animate={isStudentShown ? FADE_UP_SHOWN : FADE_UP_HIDDEN}
          transition={transition}
        >
          <p className="w-fit rounded-2xl rounded-br-md bg-ink px-3 py-2 text-[13px] leading-snug text-white">
            {visuals.chat.student}
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={FADE_UP_HIDDEN}
            animate={isReplyShown ? FADE_UP_SHOWN : FADE_UP_HIDDEN}
            transition={transition}
          >
            <DizaMessage>
              <p className="text-[13px] leading-snug text-ink">{visuals.chat.diza}</p>
              <motion.div
                className="mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isChipShown ? 1 : 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: EASE_OUT_STRONG }}
              >
                <Chip icon={Bookmark} className="bg-surface">
                  {visuals.chat.page}
                </Chip>
              </motion.div>
            </DizaMessage>
          </motion.div>
          <AnimatePresence>{isTyping ? <TypingDots /> : null}</AnimatePresence>
        </div>
      </div>
    </VisualPanel>
  );
}
