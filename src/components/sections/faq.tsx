import type { ComponentProps } from "react";
import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Accordion } from "@/components/ui/accordion";
import { Button, ButtonArrow } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { faq as landingFaq } from "@/content/landing";
import { SECTION_IDS, SUPPORT_MAILTO } from "@/lib/constants";

type FaqContent = {
  eyebrow: string;
  title: string;
  entries: ComponentProps<typeof Accordion>["entries"];
  contactQuestion: string;
  contactLink: string;
};

/** Short questions in a single centred column: heading, accordion, then the contact card. The landing's by default. */
export function FAQ({ content = landingFaq }: { content?: FaqContent }) {
  const faq = content;
  return (
    <Section id={SECTION_IDS.faq}>
      <Container className="max-w-3xl">
        <Reveal variant="fade">
          <div className="text-center">
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-section font-semibold text-ink">{faq.title}</h2>
          </div>
        </Reveal>

        <Accordion entries={faq.entries} className="mt-10 lg:mt-14" />

        <Reveal variant="fade" className="mt-8 lg:mt-10">
          <div className="flex items-center justify-between gap-4 rounded-3xl bg-sand p-5 sm:p-6">
            <p className="text-lg font-semibold text-ink">{faq.contactQuestion}</p>
            <Button href={SUPPORT_MAILTO} variant="link" size="sm" className="px-0">
              {faq.contactLink}
              <ButtonArrow />
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
