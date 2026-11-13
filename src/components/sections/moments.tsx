import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { MomentsCarousel } from "@/components/product/moments-carousel";
import { Eyebrow } from "@/components/ui/eyebrow";
import { moments } from "@/content/landing";
import { SECTION_IDS } from "@/lib/constants";

/**
 * "Momentos": three situations in the student's voice, each answered by Diza.
 * A sand panel that rises 48px over the base of the hero, covering the end of the sleeve;
 * the extra top padding makes up for those 48px, so the heading keeps its usual air.
 */
export function Moments() {
  return (
    <Section id={SECTION_IDS.moments} className="relative z-10 -mt-12 rounded-t-seam bg-sand pt-28 lg:pt-32">
      <Container>
        <Reveal variant="fade">
          <Eyebrow>{moments.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-section font-semibold text-ink">{moments.title}</h2>
        </Reveal>

        <MomentsCarousel />
      </Container>
    </Section>
  );
}
