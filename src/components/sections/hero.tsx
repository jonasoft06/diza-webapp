import { ArrowRight, BookOpen } from "lucide-react";
import { Container } from "@/components/layout/container";
import { BookCover } from "@/components/product/book-cover";
import { PinCard } from "@/components/product/pin-card";
import { ShelfScene } from "@/components/product/shelf-scene";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Eyebrow } from "@/components/ui/eyebrow";
import { hero, PAGE_CHIP_LABEL } from "@/content/landing";
import { ACTIVATE_URL, SECTION_IDS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="bg-bg px-4 pb-16 pt-24 text-ink sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-36">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
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
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{hero.note}</p>
        </div>

        <figure className="lg:col-span-7">
          <div aria-hidden="true">
            {/* Objects grow at md (full-width panel) and shrink back at lg (narrower column). */}
            <ShelfScene>
              <div className="flex flex-col items-start">
                <div className="animate-bubble-in mb-3 max-w-64 rounded-2xl rounded-bl-sm border border-line bg-surface p-4 shadow-card sm:max-w-72 md:max-w-80 lg:max-w-72">
                  <p className="text-sm leading-snug text-ink sm:text-base md:text-lg lg:text-base">{hero.scene.bubble}</p>
                  <Chip icon={BookOpen} className="mt-3">
                    {PAGE_CHIP_LABEL}
                  </Chip>
                </div>
                <div className="flex items-end">
                  <BookCover title={hero.scene.bookTitle} />
                  <div className="-ml-4 sm:-ml-5 md:-ml-6 lg:-ml-5">
                    <PinCard label={hero.scene.pinLabel} />
                  </div>
                </div>
              </div>
            </ShelfScene>
          </div>
          <figcaption className="sr-only">{hero.scene.description}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
