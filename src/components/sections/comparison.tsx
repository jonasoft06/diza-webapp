import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { DizaCard, OthersCard } from "@/components/product/comparison-cards";
import { Eyebrow } from "@/components/ui/eyebrow";
import { comparison } from "@/content/landing";
import { SECTION_IDS } from "@/lib/constants";

/** "La diferencia": the same question answered by another AI and by Diza, side by side. */
export function Comparison() {
  return (
    <Section id={SECTION_IDS.difference}>
      <Container>
        <Reveal variant="fade">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{comparison.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-section font-semibold text-balance text-ink">{comparison.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-balance text-muted sm:text-lg">
              {comparison.subtitle}
            </p>
          </div>
        </Reveal>

        {/* From `md` the two cards share six rows (heading, chat, four points) through subgrid. */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2 md:grid-rows-[repeat(6,auto)] md:gap-x-5 md:gap-y-0 lg:mt-14">
          <OthersCard />
          <DizaCard />
        </div>
      </Container>
    </Section>
  );
}
