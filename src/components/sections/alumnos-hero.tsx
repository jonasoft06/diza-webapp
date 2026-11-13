import { Container } from "@/components/layout/container";
import { AlumnosChat } from "@/components/product/alumnos-chat";
import { Button, ButtonArrow } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { alumnosHero } from "@/content/alumnos";
import { ACTIVATE_URL, APP_LOGIN_URL } from "@/lib/constants";

/**
 * Hero of /alumnos: the promise on the left, a short chat in the phone on the right.
 * Below `lg` the text comes first and the phone sits under it. The phone is an
 * illustration: its description lives in the figure's caption for screen readers.
 */
export function AlumnosHero() {
  return (
    <section className="bg-bg px-4 pb-16 pt-28 text-ink sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{alumnosHero.eyebrow}</Eyebrow>
          {/* Longer than the landing's headline, so one step below `text-hero`. */}
          <h1 className="mt-4 text-[length:clamp(2.25rem,4.2vw,3.5rem)] font-bold text-balance text-ink">
            {alumnosHero.titleParts.map((part) => (
              <span key={part} className="block">
                {part}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
            {alumnosHero.description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href={ACTIVATE_URL} className="w-full sm:w-auto">
              {alumnosHero.primaryCta}
              <ButtonArrow />
            </Button>
            <Button href={APP_LOGIN_URL} variant="secondary" className="w-full sm:w-auto">
              {alumnosHero.secondaryCta}
            </Button>
          </div>
        </div>

        <figure>
          <AlumnosChat />
          <figcaption className="sr-only">{alumnosHero.chatDescription}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
