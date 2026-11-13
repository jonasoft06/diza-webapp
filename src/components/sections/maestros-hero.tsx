import type { CSSProperties } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button, ButtonArrow } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Eyebrow } from "@/components/ui/eyebrow";
import { maestrosHero } from "@/content/maestros";
import { TEACHER_ACCESS_MAILTO } from "@/lib/constants";
import { cn } from "@/lib/utils";

/** Duration of `animate-hero-enter` (globals.css); the float starts right after it. */
const ENTER_DURATION_MS = 500;
const FLOAT_GAP_MS = 250;

type FloatingChipProps = {
  icon: LucideIcon;
  label: string;
  /** Position over the photo. */
  className: string;
  enterMs: number;
  floatSeconds: number;
  /** Left out below `md`. Only its content hides: a wrapper that toggled `display` would replay its entrance. */
  desktopOnly?: boolean;
};

/**
 * Same recipe as the pieces of the landing's hero: an entrance wrapper (CSS
 * `animate-hero-enter`) around a resting float (`animate-hero-float`), so no two
 * transforms collide. Reduced motion keeps only the fade (globals.css).
 */
function FloatingChip({ icon: Icon, label, className, enterMs, floatSeconds, desktopOnly }: FloatingChipProps) {
  const enterStyle = { "--hero-enter-delay": `${enterMs}ms` } as CSSProperties;
  const floatStyle = {
    "--float-amp": "4px",
    "--float-duration": `${floatSeconds}s`,
    "--float-delay": `${enterMs + ENTER_DURATION_MS + FLOAT_GAP_MS}ms`,
  } as CSSProperties;

  return (
    <div className={cn("absolute z-10", className)}>
      <div className="animate-hero-enter" style={enterStyle}>
        <div className="animate-hero-float" style={floatStyle}>
          <p
            className={cn(
              "flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-semibold text-ink shadow-card",
              desktopOnly && "max-md:hidden"
            )}
          >
            <Icon className="size-4 text-primary" strokeWidth={2} aria-hidden="true" />
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

const chipPlacement = [
  { className: "left-3 top-3 md:-left-5 md:top-8", enterMs: 250, floatSeconds: 5.2 },
  { className: "right-3 top-[46%] md:-right-5 md:top-[42%]", enterMs: 340, floatSeconds: 4.6 },
  { className: "bottom-4 left-[10%] md:-bottom-3", enterMs: 430, floatSeconds: 5.8, desktopOnly: true },
] as const;

/**
 * Hero of /maestros: the promise on the left, the teacher's desk on the right with three
 * chips floating over it (two on phones). Below `lg` the text comes first and the photo under it.
 */
export function MaestrosHero() {
  return (
    <section className="overflow-x-clip bg-bg px-4 pb-16 pt-28 text-ink sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <Eyebrow>{maestrosHero.eyebrow}</Eyebrow>
            <Chip>{maestrosHero.badge}</Chip>
          </div>
          {/* Longer than the landing's headline, so one step below `text-hero`. */}
          <h1 className="mt-4 text-[length:clamp(2.25rem,4.2vw,3.5rem)] font-bold text-balance text-ink">
            {maestrosHero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
            {maestrosHero.description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href={TEACHER_ACCESS_MAILTO} className="w-full sm:w-auto">
              {maestrosHero.primaryCta}
              <ButtonArrow />
            </Button>
            <Button href={maestrosHero.toolsHref} variant="secondary" className="w-full sm:w-auto">
              {maestrosHero.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-line shadow-card">
            <Image
              src="/images/maestros/teacher_desk.webp"
              alt={maestrosHero.photoAlt}
              fill
              preload
              sizes="(min-width: 1152px) 36rem, (min-width: 1024px) 45vw, calc(100vw - 2rem)"
              className="object-cover"
            />
          </div>

          {/* Decorative: the tools section below says the same in full. */}
          <div aria-hidden="true">
            {maestrosHero.chips.map((chip, index) => (
              <FloatingChip key={chip.id} icon={chip.icon} label={chip.label} {...chipPlacement[index]} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
