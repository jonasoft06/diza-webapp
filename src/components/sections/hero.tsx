import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { hero, PAGE_CHIP_LABEL } from "@/content/landing";
import { ACTIVATE_URL, SECTION_IDS } from "@/lib/constants";
import deskHero from "@/../public/images/hero_background.jpg";

export function Hero() {
  return (
    <section className="sticky top-0 isolate flex h-svh items-center justify-center overflow-hidden bg-bg text-ink">
      <Image
        src={deskHero}
        alt={hero.imageAlt}
        aria-hidden="true"
        priority
        fill
        quality={95}
        sizes="100vw"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[48%_center] sm:object-center"
      />
      {/* Neutral scrim: keeps the desk photo as warm texture while guaranteeing AA contrast for ink text. */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-bg/82" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-b from-transparent to-bg"
      />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-8">
        <h1 className="text-hero font-bold text-ink">
          {hero.titleBefore}{" "}
          <span className="relative inline-block whitespace-nowrap text-accent">
            {hero.titleAccent}
            <svg
              aria-hidden="true"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              className="animate-underline pointer-events-none absolute -bottom-1 left-0 h-[0.28em] w-full text-accent/45"
            >
              <path
                d="M2 8C34 3.5 78 2.4 121 4.2c25 1 51 2.6 77 4.6"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {hero.description}
        </p>
        <div className="mt-6 flex items-center gap-2 text-sm text-muted">
          <span>{hero.chipLead}</span>
          <Chip icon={BookOpen}>{PAGE_CHIP_LABEL}</Chip>
        </div>
        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Button href={ACTIVATE_URL} className="w-full sm:w-auto">
            {hero.primaryCta}
            <ArrowRight
              className="size-4 transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5"
              strokeWidth={2.25}
              aria-hidden="true"
            />
          </Button>
          <Button href={`#${SECTION_IDS.forTeachers}`} variant="secondary" className="w-full sm:w-auto">
            {hero.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
