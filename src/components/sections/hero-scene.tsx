"use client";

import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Chip } from "@/components/ui/chip";
import { hero } from "@/content/landing";
import { cn } from "@/lib/utils";

const { scene } = hero;

/** Page scroll (px) over which the floating pieces reach their full offset. */
const PARALLAX_SCROLL_RANGE = 640;

/** Duration of `animate-hero-enter` (globals.css); the float starts right after it. */
const ENTER_DURATION_MS = 500;
const FLOAT_GAP_MS = 250;

const floatingCard = "rounded-2xl border border-line bg-surface shadow-card";

type PieceProps = {
  scrollY: MotionValue<number>;
  /** Parallax travel in px at the end of the scroll range (max ~20). */
  shift: number;
  /** Entrance delay in ms. */
  enterMs: number;
  /** Float loop duration in seconds (4–6) and amplitude in px (4–6). */
  floatSeconds: number;
  floatAmp?: number;
  /** The PIN card also rocks ±1° while it floats (the photo is already tilted ~12°). */
  tilt?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * One floating piece = three nested wrappers, so no two transforms collide:
 * outer `motion.div` = scroll parallax (positioned), middle = staggered
 * entrance, inner = resting float. The pieces are not interactive, so they have no hover.
 * The wrappers never toggle `display` (a `display: none` → `block` change restarts a
 * CSS animation, which replayed the entrance from opacity 0 whenever the viewport
 * crossed `md`); what is desktop-only hides its own content instead.
 * The entrance and the float are CSS, so they do not wait for hydration;
 * Motion only drives the parallax, which `max-md` and `motion-reduce` switch
 * off without a hydration mismatch.
 */
function Piece({
  scrollY,
  shift,
  enterMs,
  floatSeconds,
  floatAmp = 5,
  tilt = false,
  className,
  children,
}: PieceProps) {
  const y = useTransform(scrollY, [0, PARALLAX_SCROLL_RANGE], [0, shift], { clamp: true });
  const transform = useMotionTemplate`translateY(${y}px)`;

  const enterStyle = { "--hero-enter-delay": `${enterMs}ms` } as CSSProperties;
  const floatStyle = {
    "--float-amp": `${floatAmp}px`,
    "--float-duration": `${floatSeconds}s`,
    "--float-delay": `${enterMs + ENTER_DURATION_MS + FLOAT_GAP_MS}ms`,
  } as CSSProperties;

  return (
    <motion.div
      className={cn("absolute max-md:transform-none! motion-reduce:transform-none!", className)}
      style={{ transform }}
    >
      <div className="animate-hero-enter" style={enterStyle}>
        <div className={tilt ? "animate-hero-float-tilt" : "animate-hero-float"} style={floatStyle}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Hero visual: the photographed hand and book rising from the bottom edge of
 * the hero, with a sample exchange, the subject chip and the PIN card floating
 * around it. Everything is positioned in percentages of the hand, so the
 * composition scales with it. The book itself never floats.
 */
export function HeroScene() {
  const { scrollY } = useScroll();

  return (
    <figure className="absolute inset-0">
      <div className="absolute bottom-0 left-1/2 aspect-608/1309 h-full max-h-216 -translate-x-1/2 lg:left-[56%] lg:h-[78%]">
        <div
          className="animate-hero-enter size-full"
          style={{ "--hero-enter-delay": "100ms", "--hero-enter-y": "56px" } as CSSProperties}
        >
          <Image
            src="/images/hero/hero_hand_book.webp"
            alt={scene.bookAlt}
            width={608}
            height={1309}
            preload
            sizes="(min-width: 768px) 24rem, 72vw"
            className="size-full max-w-none drop-shadow-object-soft"
          />
        </div>

        {/* Student, above-left of the book. On phones both bubbles sit at the
            sides of the book, within 58vw, and stay clear of the fingers. */}
        <Piece
          scrollY={scrollY}
          shift={-18}
          enterMs={260}
          floatSeconds={5.2}
          className="-top-[4%] left-[calc(50%-50vw+0.5rem)] z-20 w-[58vw] md:left-auto md:right-[80%] md:top-[9%] md:w-56 lg:w-[min(68%,17rem)]"
        >
          <p className={cn(floatingCard, "px-3.5 py-2.5 text-sm leading-snug text-ink md:px-4 md:py-3")}>
            <span className="sr-only">{scene.studentLabel}: </span>
            {scene.studentBubble}
          </p>
        </Piece>

        {/* Diza, below the student on desktop, mid-height on the right on phones. */}
        <Piece
          scrollY={scrollY}
          shift={-12}
          enterMs={330}
          floatSeconds={4.4}
          floatAmp={4}
          className="right-[calc(50%-50vw+0.5rem)] top-[12%] z-20 w-[58vw] md:right-[76%] md:top-[28%] md:w-64 lg:w-[min(76%,18.5rem)]"
        >
          <div className={cn(floatingCard, "flex gap-2.5 px-3.5 py-3 md:gap-3 md:p-4")}>
            <span
              aria-hidden="true"
              className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary pb-px text-sm font-bold text-white"
            >
              D
            </span>
            <div>
              <p className="text-sm leading-snug text-ink">
                <span className="sr-only">{scene.tutorLabel}: </span>
                {scene.tutorBubble}
              </p>
              <Chip icon={BookOpen} className="mt-2.5 md:mt-3">
                {scene.pageChip}
              </Chip>
            </div>
          </div>
        </Piece>

        {/* Desktop only: subject chip, top right of the book. */}
        <Piece
          scrollY={scrollY}
          shift={-20}
          enterMs={400}
          floatSeconds={5.8}
          floatAmp={6}
          className="left-[72%] top-[5%] z-20"
        >
          <p className={cn(floatingCard, "hidden whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold text-ink md:block")}>
            {scene.subject}
          </p>
        </Piece>

        {/* Desktop only: PIN card to the right of the arm, at hand height. The photo
            already carries its ~12° tilt, so no CSS rotation is added on top. */}
        <Piece
          scrollY={scrollY}
          shift={-8}
          enterMs={470}
          floatSeconds={6}
          floatAmp={5}
          tilt
          className="left-[79%] top-[54%] z-10 w-[50%]"
        >
          <Image
            src="/images/hero/pin_card.webp"
            alt={scene.pinCardAlt}
            width={720}
            height={506}
            sizes="12rem"
            className="hidden h-auto w-full drop-shadow-object-soft md:block"
          />
        </Piece>
      </div>

      <figcaption className="sr-only">{scene.description}</figcaption>
    </figure>
  );
}
