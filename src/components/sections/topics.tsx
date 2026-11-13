import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { TopicChips } from "@/components/product/topic-chips";
import { alumnosTopics } from "@/content/alumnos";
import { SECTION_IDS } from "@/lib/constants";

const TITLE_ID = "temas-titulo";

/** "Temas de tu libro": a sand band (the book's own material) with the topics of Unidad 1 as chips. */
export function Topics() {
  return (
    <Section id={SECTION_IDS.topics} aria-labelledby={TITLE_ID} className="bg-sand">
      <Container className="max-w-4xl text-center">
        <Reveal variant="fade">
          <h2 id={TITLE_ID} className="text-section font-semibold text-balance text-ink">
            {alumnosTopics.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-balance text-muted sm:text-lg">
            {alumnosTopics.subtitle}
          </p>
        </Reveal>

        <Reveal className="mt-8 lg:mt-10">
          <TopicChips />
          <p className="mt-6 text-sm leading-relaxed text-muted">{alumnosTopics.note}</p>
        </Reveal>
      </Container>
    </Section>
  );
}
