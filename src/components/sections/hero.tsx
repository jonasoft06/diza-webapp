import { Container } from "@/components/layout/container";
import { HeroScene } from "@/components/sections/hero-scene";
import { Button, ButtonArrow } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { hero } from "@/content/landing";
import { ACTIVATE_URL, SECTION_IDS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-clip bg-bg px-4 text-ink sm:px-6 lg:px-8">
      {/* No bottom padding: the hand is anchored to the base of the hero, so the
          next section starts right where the sleeve ends. */}
      <Container className="grid flex-1 grid-rows-[1fr_auto] lg:grid-cols-12 lg:grid-rows-1 lg:gap-12">
        <div className="flex flex-col justify-start pb-8 pt-24 sm:pt-28 lg:col-span-5 lg:justify-center lg:pb-24 lg:pt-32">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="mt-4 text-hero font-bold text-ink">
            {hero.titleBefore}{" "}
            <span className="relative inline-block whitespace-nowrap text-primary">
              {hero.titleAccent}
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="animate-underline pointer-events-none absolute -bottom-1 left-0 h-[0.28em] w-full text-primary/45"
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
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href={ACTIVATE_URL} className="w-full sm:w-auto">
              {hero.primaryCta}
              <ButtonArrow />
            </Button>
            <Button href={`#${SECTION_IDS.forTeachers}`} variant="secondary" className="w-full sm:w-auto">
              {hero.secondaryCta}
            </Button>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{hero.note}</p>
        </div>

        <div className="relative h-[68svh] min-h-112 lg:col-span-7 lg:h-auto">
          <HeroScene />
        </div>
      </Container>
    </section>
  );
}
