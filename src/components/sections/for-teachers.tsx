import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { GeneratorScreen } from "@/components/product/generator-screen";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IconBox } from "@/components/ui/icon-box";
import { forTeachers } from "@/content/landing";
import { SECTION_IDS, TEACHER_ACCESS_MAILTO } from "@/lib/constants";

export function ForTeachers() {
  return (
    <Section id={SECTION_IDS.forTeachers}>
      <Container className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-8">
        <Reveal variant="fade" className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
          <div className="flex items-center gap-3">
            <Eyebrow>{forTeachers.eyebrow}</Eyebrow>
            <Chip>{forTeachers.betaLabel}</Chip>
          </div>
          <h2 className="mt-4 text-section font-semibold text-ink">{forTeachers.title}</h2>
          <ul className="mt-8 flex flex-col gap-5">
            {forTeachers.features.map((feature) => (
              <li key={feature.title} className="flex items-start gap-4">
                <IconBox icon={feature.icon} />
                <div>
                  <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
                  <p className="mt-1 text-body-sm leading-relaxed text-muted">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base font-medium text-ink">{forTeachers.exportLine}</p>
        </Reveal>

        <Reveal className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:self-center">
          <GeneratorScreen />
        </Reveal>

        <Reveal variant="fade" className="flex flex-col items-stretch gap-6 sm:items-start lg:col-span-5 lg:col-start-1 lg:row-start-2">
          <p className="text-sm leading-relaxed text-muted">{forTeachers.betaNotice}</p>
          <Button href={TEACHER_ACCESS_MAILTO} className="w-full sm:w-auto">
            {forTeachers.cta}
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
