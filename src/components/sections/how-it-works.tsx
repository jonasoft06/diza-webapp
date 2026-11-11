import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ConversationDemo } from "@/components/sections/conversation-demo";
import { SectionHeading } from "@/components/ui/section-heading";
import { howItWorks } from "@/content/landing";
import { SECTION_IDS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <Section id={SECTION_IDS.howItWorks} className="bg-surface">
      <Container>
        <Reveal variant="fade">
          <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} />
        </Reveal>

        <ConversationDemo />
      </Container>
    </Section>
  );
}
