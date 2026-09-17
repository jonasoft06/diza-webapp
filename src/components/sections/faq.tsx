import { Container, Section } from "@/components/layout/container";
import { Reveal, RevealItem, Stagger } from "@/components/motion/reveal";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { faq } from "@/content/landing";
import { SECTION_IDS } from "@/lib/constants";

export function FAQ() {
  return (
    <Section id={SECTION_IDS.faq}>
      <Container>
        <Reveal variant="fade">
          <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
        </Reveal>

        <Accordion className="mt-14 sm:mt-16">
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {faq.entries.map((entry, index) => (
              <RevealItem key={entry.question}>
                <AccordionItem value={index} question={entry.question}>
                  {entry.answer}
                </AccordionItem>
              </RevealItem>
            ))}
          </Stagger>
        </Accordion>
      </Container>
    </Section>
  );
}
