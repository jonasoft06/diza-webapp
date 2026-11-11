import { ShieldCheck } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Reveal, RevealItem, Stagger } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IconBox } from "@/components/ui/icon-box";
import { forTeachers } from "@/content/landing";
import { SECTION_IDS } from "@/lib/constants";

export function ForTeachers() {
  return (
    <Section id={SECTION_IDS.forTeachers}>
      <Container>
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
          <Reveal variant="fade">
            <Card variant="primary" className="paper-grain flex h-full flex-col justify-center p-8 sm:p-9">
              <Eyebrow className="text-white/75">{forTeachers.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-subsection font-semibold text-white">{forTeachers.title}</h2>
              <p className="mt-4 text-body-sm leading-relaxed text-white/85">
                {forTeachers.description}
              </p>
            </Card>
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
            {forTeachers.cards.map((card) => (
              <RevealItem key={card.title}>
                <Card interactive className="flex h-full flex-col justify-center p-6">
                  <IconBox icon={card.icon} />
                  <h3 className="mt-5 text-base font-semibold text-ink lg:text-body-md">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
                </Card>
              </RevealItem>
            ))}
          </Stagger>
        </div>

        <Reveal>
          <Card variant="flat" className="mt-4 flex items-start gap-4 p-6 sm:mt-5 sm:items-center sm:p-7">
            <IconBox icon={ShieldCheck} />
            <p className="text-body-sm leading-relaxed text-muted sm:text-base">
              {forTeachers.trustLine}
            </p>
          </Card>
        </Reveal>
      </Container>
    </Section>
  );
}
