import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { BookCover } from "@/components/product/book-cover";
import { PinCard } from "@/components/product/pin-card";
import { ShelfScene } from "@/components/product/shelf-scene";
import { Button, ButtonArrow } from "@/components/ui/button";
import {
  ACTIVATE_CTA_LABEL,
  closing,
  forTeachers,
  hero,
  LOGIN_LABEL,
  PIN_LABEL,
} from "@/content/landing";
import { ACTIVATE_URL, APP_LOGIN_URL, SECTION_IDS, TEACHER_ACCESS_MAILTO } from "@/lib/constants";

const CLOSING_TITLE_ID = "cierre-titulo";

export function Closing() {
  return (
    <Section
      id={SECTION_IDS.activate}
      aria-labelledby={CLOSING_TITLE_ID}
      className="relative z-10 rounded-b-seam bg-sand sm:rounded-b-seam-lg"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-12">
        <Reveal variant="fade" className="lg:col-span-6">
          <h2 id={CLOSING_TITLE_ID} className="text-section font-semibold text-ink">
            <span className="block">{closing.question}</span>
            <span className="block">{closing.action}</span>
          </h2>
          <div className="mt-8 flex flex-col items-stretch gap-1 sm:flex-row sm:items-center sm:gap-6">
            <Button href={ACTIVATE_URL} className="w-full sm:w-auto">
              {ACTIVATE_CTA_LABEL}
              <ButtonArrow />
            </Button>
            <Button href={APP_LOGIN_URL} variant="link" size="sm" className="px-4">
              {LOGIN_LABEL}
            </Button>
          </div>
          <p className="mt-6 flex items-center gap-1 text-sm text-muted">
            {closing.teacherQuestion}
            <Button href={TEACHER_ACCESS_MAILTO} variant="link" size="sm" className="px-0">
              {forTeachers.cta}
            </Button>
          </p>
        </Reveal>

        <Reveal variant="fade" className="lg:col-span-6">
          <div aria-hidden="true">
            <ShelfScene className="bg-sand-2">
              <div className="flex items-end">
                <BookCover
                  title={hero.scene.bookTitle}
                  className="w-28 sm:w-36 md:w-44 lg:w-36"
                />
                <div className="-ml-3 sm:-ml-4 md:-ml-5 lg:-ml-4">
                  <PinCard label={PIN_LABEL} className="w-22 sm:w-25 md:w-32 lg:w-28" />
                </div>
              </div>
            </ShelfScene>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
