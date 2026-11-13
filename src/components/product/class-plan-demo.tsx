"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Bookmark, FileText, Sparkles } from "lucide-react";
import { EASE_OUT_STRONG } from "@/components/motion/easing";
import { Button, ButtonArrow } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { maestrosPlan } from "@/content/maestros";
import { useOneShot } from "@/hooks/use-one-shot";
import { cn } from "@/lib/utils";

const { steps, sheet } = maestrosPlan;

/** When each step lights up, in ms after the demo comes into view. Each one changes something on the sheet. */
const STEP_AT_MS = [600, 2000, 3400, 5200];
const SHEET_SECONDS = 0.5;
const BAR_SECONDS = 0.35;
const BAR_STAGGER_SECONDS = 0.07;

const SHEET_HIDDEN = { opacity: 0, transform: "translateY(16px)" };
const SHEET_SHOWN = { opacity: 1, transform: "translateY(0px)" };
const BAR_HIDDEN = { clipPath: "inset(0 100% 0 0)" };
const BAR_SHOWN = { clipPath: "inset(0 0% 0 0)" };

/** A grey bar standing in for text. It is "written" left to right when `written` turns true. */
function WriteBar({
  written,
  instant,
  order = 0,
  className,
}: {
  written: boolean;
  instant: boolean;
  /** Position in its group, to stagger the bars. */
  order?: number;
  className?: string;
}) {
  return (
    <motion.span
      aria-hidden="true"
      initial={BAR_HIDDEN}
      animate={written ? BAR_SHOWN : BAR_HIDDEN}
      transition={{
        duration: instant ? 0 : BAR_SECONDS,
        delay: instant ? 0 : order * BAR_STAGGER_SECONDS,
        ease: EASE_OUT_STRONG,
      }}
      className={cn("block h-1.5 rounded-full bg-ink/15", className)}
    />
  );
}

/** Text that is "written" left to right like the bars are (the sheet's header and the kinds of evaluation). */
function WriteText({
  written,
  instant,
  className,
  children,
}: {
  written: boolean;
  instant: boolean;
  className?: string;
  children: string;
}) {
  return (
    <motion.span
      initial={BAR_HIDDEN}
      animate={written ? BAR_SHOWN : BAR_HIDDEN}
      transition={{ duration: instant ? 0 : BAR_SECONDS * 1.4, ease: EASE_OUT_STRONG }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.span>
  );
}

const BASE_BARS = ["w-full", "w-11/12", "w-3/5"];
/** The adjusted block comes back a little different, as rewritten text would. */
const ADJUSTED_BARS = ["w-full", "w-4/5", "w-11/12"];

type Stage = { sheetWritten: boolean; groupFilled: boolean; adjusted: boolean; exported: boolean };

/**
 * One field of the plan (Aprendizaje esperado, Apertura, Desarrollo…): its label, the page of the book
 * when it has one, and grey bars (or, for the evaluation, its kinds written out). The adjusted one is
 * rewritten when step 3 arrives.
 */
function PlanBlock({
  label,
  page,
  lines = 0,
  detail,
  isAdjustedBlock,
  stage,
  instant,
}: {
  label: string;
  page?: string;
  lines?: number;
  detail?: string;
  isAdjustedBlock: boolean;
  stage: Stage;
  instant: boolean;
}) {
  const highlighted = isAdjustedBlock && stage.adjusted;
  const bars = (highlighted ? ADJUSTED_BARS : BASE_BARS).slice(0, lines);

  return (
    <div
      className={cn(
        "rounded-xl p-3 transition-[background-color,box-shadow] duration-300 ease-out-strong sm:p-3.5",
        highlighted ? "bg-tint ring-1 ring-primary/40" : "bg-bg"
      )}
    >
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
        <span className="text-sm font-semibold text-ink">{label}</span>
        {detail ? (
          <WriteText written={stage.groupFilled} instant={instant} className="text-xs font-medium text-muted">
            {detail}
          </WriteText>
        ) : null}
        {page ? (
          <Chip icon={Bookmark} className={cn("py-0.5", highlighted ? "bg-surface" : "bg-tint")}>
            {page}
          </Chip>
        ) : null}
        {isAdjustedBlock ? (
          <motion.span
            className="ml-auto"
            initial={{ opacity: 0, transform: "scale(0.95)" }}
            animate={stage.adjusted ? { opacity: 1, transform: "scale(1)" } : { opacity: 0, transform: "scale(0.95)" }}
            transition={{ duration: instant ? 0 : 0.25, delay: instant ? 0 : 0.35, ease: EASE_OUT_STRONG }}
          >
            <Chip icon={Sparkles} className="bg-primary py-0.5 text-white">
              {sheet.adjustedLabel}
            </Chip>
          </motion.span>
        ) : null}
      </div>

      {/* `key` remounts the bars when the block is adjusted, so they are written again from the left. */}
      {bars.length > 0 ? (
        <div key={highlighted ? "adjusted" : "base"} className="mt-2.5 space-y-1.5">
          {bars.map((width, index) => (
            <WriteBar key={index} written={stage.sheetWritten} instant={instant} order={index} className={width} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

/**
 * The steps and the illustrated plan, played once when they come into view. Each step
 * lights up in turn (and stays lit) and does something to the sheet: 1 writes the base
 * plan, 2 fills in the group's data (the header and the kinds of evaluation), 3 rewrites the "Desarrollo" block and marks it
 * "Ajustado con Diza", 4 stamps the Word export. With reduced motion everything is
 * drawn finished. The initial state is what the server renders (all steps idle, an
 * empty sheet), so the preference is applied from an effect.
 */
export function ClassPlanDemo() {
  const { ref, isPlaying, prefersReducedMotion } = useOneShot(0.35);
  const [activeSteps, setActiveSteps] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    if (prefersReducedMotion) {
      const timer = setTimeout(() => setActiveSteps(steps.length), 0);
      return () => clearTimeout(timer);
    }

    const timers = STEP_AT_MS.map((ms, index) => setTimeout(() => setActiveSteps(index + 1), ms));
    return () => timers.forEach(clearTimeout);
  }, [isPlaying, prefersReducedMotion]);

  const stage: Stage = {
    sheetWritten: activeSteps >= 1,
    groupFilled: activeSteps >= 2,
    adjusted: activeSteps >= 3,
    exported: activeSteps >= 4,
  };

  return (
    <div
      ref={ref}
      className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-16 lg:gap-y-8"
    >
      <ol aria-label={maestrosPlan.stepsLabel} className="lg:col-start-1 lg:row-start-2">
        {steps.map((step, index) => {
          const isActive = index < activeSteps;
          const isLast = index === steps.length - 1;

          return (
            <li key={step} className={cn("relative flex items-start gap-4", !isLast && "pb-7")}>
              <span
                aria-hidden="true"
                className={cn(
                  "relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-colors duration-300 ease-out-strong tabular-nums",
                  isActive ? "border-primary bg-primary text-white" : "border-sand-line bg-surface text-primary"
                )}
              >
                {index + 1}
              </span>
              {!isLast ? (
                <span aria-hidden="true" className="absolute top-9 bottom-0 left-4.5 w-px bg-sand-line" />
              ) : null}
              <p
                className={cn(
                  "pt-1 text-lg leading-snug font-semibold text-pretty transition-colors duration-300 ease-out-strong",
                  isActive ? "text-ink" : "text-muted"
                )}
              >
                {step}
              </p>
            </li>
          );
        })}
      </ol>

      <figure className="lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:self-center">
        <motion.div
          aria-hidden="true"
          initial={SHEET_HIDDEN}
          animate={isPlaying ? SHEET_SHOWN : SHEET_HIDDEN}
          transition={{ duration: prefersReducedMotion ? 0 : SHEET_SECONDS, ease: EASE_OUT_STRONG }}
          className="mx-auto w-full max-w-md rounded-2xl border border-line bg-surface p-4 shadow-card sm:p-6"
        >
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm leading-snug font-semibold text-ink sm:text-base">{sheet.title}</p>
            <motion.span
              className="shrink-0"
              initial={{ opacity: 0, transform: "scale(0.9)" }}
              animate={stage.exported ? { opacity: 1, transform: "scale(1)" } : { opacity: 0, transform: "scale(0.9)" }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: EASE_OUT_STRONG }}
            >
              <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[11px] leading-4 font-bold text-white">
                <FileText className="size-3" strokeWidth={2.25} />
                {sheet.exportLabel}
              </span>
            </motion.span>
          </div>

          {/* The unit, topic, week and hours: filled in at step 2 with the rest of the group's data. */}
          <p className="mt-1.5 text-xs font-medium text-muted sm:text-[13px]">
            <WriteText written={stage.groupFilled} instant={prefersReducedMotion}>
              {sheet.header}
            </WriteText>
          </p>

          <div className="mt-3.5 space-y-2">
            {sheet.fields.map((field) => (
              <PlanBlock
                key={field.id}
                label={field.label}
                page={"page" in field ? field.page : undefined}
                lines={"lines" in field ? field.lines : undefined}
                detail={"detail" in field ? field.detail : undefined}
                isAdjustedBlock={field.id === sheet.adjustedBlockId}
                stage={stage}
                instant={prefersReducedMotion}
              />
            ))}
          </div>
        </motion.div>
        <figcaption className="sr-only">{sheet.description}</figcaption>
      </figure>

      <div className="lg:col-start-1 lg:row-start-3 lg:self-start">
        <Button href={maestrosPlan.ctaHref} className="w-full sm:w-auto">
          {maestrosPlan.cta}
          <ButtonArrow />
        </Button>
      </div>
    </div>
  );
}
