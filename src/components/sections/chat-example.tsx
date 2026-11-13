import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { AlumnosChat } from "@/components/product/alumnos-chat";
import { alumnosChatExample } from "@/content/alumnos";
import { SECTION_IDS } from "@/lib/constants";

const TITLE_ID = "ejemplo-titulo";

/**
 * A worked example (the accent of "cómo") in the phone: Diza gives a hint, asks, and says the page.
 * Text on the left, phone on the right; stacked on phones, text first. The phone is an illustration, so
 * its description lives in the figure's caption for screen readers.
 */
export function ChatExample() {
  return (
    <Section id={SECTION_IDS.example} aria-labelledby={TITLE_ID} className="bg-surface">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="fade">
          <h2 id={TITLE_ID} className="text-section font-semibold text-balance text-ink">
            {alumnosChatExample.title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-pretty text-muted sm:text-lg">
            {alumnosChatExample.description}
          </p>
        </Reveal>

        <figure>
          <AlumnosChat />
          <figcaption className="sr-only">{alumnosChatExample.chatDescription}</figcaption>
        </figure>
      </Container>
    </Section>
  );
}
