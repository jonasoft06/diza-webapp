import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ConversationDemo } from "@/components/sections/conversation-demo";
import { Eyebrow } from "@/components/ui/eyebrow";
import { howItWorks } from "@/content/landing";
import { SECTION_IDS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <Section id={SECTION_IDS.howItWorks} className="bg-surface">
      <Container>
        <Reveal variant="fade">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-section font-semibold text-ink">{howItWorks.title}</h2>
          </div>
        </Reveal>

        <ConversationDemo />
      </Container>
    </Section>
  );
}
