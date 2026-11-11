import { Container, Section } from "@/components/layout/container";
import { Reveal, RevealItem, Stagger } from "@/components/motion/reveal";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { faq } from "@/content/landing";
import { SECTION_IDS, SUPPORT_MAILTO } from "@/lib/constants";

export function FAQ() {
  return (
    <Section id={SECTION_IDS.faq}>
      <Container className="grid gap-y-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12">
        <Reveal variant="fade" className="lg:col-span-4 lg:row-start-1">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-section font-semibold text-ink">{faq.title}</h2>
        </Reveal>

        <Accordion className="lg:col-span-8 lg:col-start-5 lg:row-span-2 lg:row-start-1">
          <Stagger className="flex flex-col gap-3">
            {faq.entries.map((entry, index) => (
              <RevealItem key={entry.question}>
                <AccordionItem value={index} question={entry.question}>
                  {entry.answer}
                </AccordionItem>
              </RevealItem>
            ))}
          </Stagger>
        </Accordion>

        <Reveal variant="fade" className="lg:col-span-4 lg:row-start-2">
          <p className="flex items-center gap-1 text-sm text-muted">
            {faq.contactQuestion}
            <Button href={SUPPORT_MAILTO} variant="link" size="sm" className="px-0">
              {faq.contactLink}
            </Button>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
