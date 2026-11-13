"use client";

import type { CSSProperties } from "react";
import { motion } from "motion/react";
import { EASE_OUT_STRONG } from "@/components/motion/easing";
import { PhoneChat, usePhoneChatPlayback } from "@/components/product/phone-chat";
import { conversation, howItWorks, type AnnotationId } from "@/content/landing";
import { cn } from "@/lib/utils";

const STEP_SECONDS = 0.35;
const STEP_IDLE_OPACITY = 0.45;

const { script } = conversation;

/**
 * Where each step card sits beside the phone: on which side, and at what share of
 * the phone's height. The thread is longer than the screen and scrolls as it
 * goes, so a message has no fixed height: these match where each message rests
 * once the conversation is finished (re-measure if the script or the type scale
 * changes). Below `md` the cards sit under the phone and have no connectors.
 */
const STEP_LAYOUT: Record<AnnotationId, { side: "left" | "right"; top: string }> = {
  ask: { side: "left", top: "22%" },
  guide: { side: "right", top: "37%" },
  cite: { side: "left", top: "79%" },
};

type StepCardProps = {
  index: number;
  id: AnnotationId;
  title: string;
  description: string;
  active: boolean;
  instant: boolean;
};

/**
 * Three nested wrappers, one effect each: the `li` positions the card beside the
 * phone, the `motion.div` fades it from idle to active, and the card itself
 * changes its border and number colour.
 */
function StepCard({ index, id, title, description, active, instant }: StepCardProps) {
  const { side, top } = STEP_LAYOUT[id];
  const isLeft = side === "left";

  return (
    <li
      className={cn(
        "mx-auto w-full max-w-md md:absolute md:top-(--step-top) md:-translate-y-1/2 md:w-40 lg:w-64",
        isLeft ? "md:right-full md:mr-7 lg:mr-14" : "md:left-full md:ml-7 lg:ml-14"
      )}
      style={{ "--step-top": top } as CSSProperties}
    >
      <motion.div
        initial={false}
        animate={{ opacity: active ? 1 : STEP_IDLE_OPACITY }}
        transition={{ duration: instant ? 0 : STEP_SECONDS, ease: EASE_OUT_STRONG }}
      >
        <div
          className={cn(
            "relative flex gap-3 rounded-2xl border bg-surface p-4 shadow-card transition-colors duration-300 md:flex-col md:gap-2.5 lg:flex-row lg:gap-3",
            active ? "border-primary" : "border-line"
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "flex size-7 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-300",
              active ? "bg-primary text-white" : "bg-tint text-primary"
            )}
          >
            {index + 1}
          </span>
          <div>
            <h3 className="text-base font-semibold leading-snug text-ink">{title}</h3>
            <p className="mt-1 text-sm leading-snug text-pretty text-muted">{description}</p>
          </div>

          {/* Connector: a hairline from the card to the phone's edge, ending in a dot at the message's height. */}
          <span
            aria-hidden="true"
            className={cn(
              "absolute top-1/2 hidden h-px w-7 transition-colors duration-300 md:block lg:w-14",
              isLeft ? "left-full" : "right-full",
              active ? "bg-primary" : "bg-sand-line"
            )}
          >
            <span
              className={cn(
                "absolute top-1/2 size-2 -translate-y-1/2 rounded-full transition-colors duration-300",
                isLeft ? "-right-1" : "-left-1",
                active ? "bg-primary" : "bg-sand-line"
              )}
            />
          </span>
        </div>
      </motion.div>
    </li>
  );
}

/**
 * Shares the phone's playback with the step cards: each card lights up as the
 * turn it explains appears.
 */
export function ConversationDemo() {
  const playback = usePhoneChatPlayback(script);
  const activeSteps = new Set(script.slice(0, playback.shownTurns).map((turn) => turn.annotation));

  return (
    <div className="relative mx-auto mt-12 w-full sm:mt-14 md:w-80">
      <PhoneChat script={script} playback={playback} className="mx-auto w-[min(300px,80vw)] md:w-full" />

      {/* Below md the cards stack under the phone; from md they sit beside it, each at the height of its message. */}
      <ol className="mt-8 grid gap-3 md:absolute md:inset-0 md:mt-0">
        {howItWorks.annotations.map((annotation, index) => (
          <StepCard
            key={annotation.id}
            index={index}
            id={annotation.id}
            title={annotation.title}
            description={annotation.description}
            active={activeSteps.has(annotation.id)}
            instant={playback.prefersReducedMotion}
          />
        ))}
      </ol>
    </div>
  );
}
