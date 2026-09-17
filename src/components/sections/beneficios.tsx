import { Check } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Reveal, RevealItem, Stagger } from "@/components/motion/reveal";
import { Conversacion } from "@/components/sections/conversacion";
import { benefits } from "@/content/landing";
import { SECTION_IDS } from "@/lib/constants";

export function Beneficios() {
  return (
    <Section id={SECTION_IDS.benefits}>
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Stagger>
          <RevealItem as="h2" variant="fade" className="text-section font-semibold text-ink">
            {benefits.title}
          </RevealItem>
          <RevealItem
            as="p"
            variant="fade"
            className="mt-4 text-base leading-relaxed text-muted sm:text-lg"
          >
            {benefits.description}
          </RevealItem>
          <RevealItem as="ul" variant="fade" className="mt-8 space-y-4">
            {benefits.points.map((point) => (
              <li key={point.lead} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent"
                >
                  <Check className="size-3.5" strokeWidth={2.5} />
                </span>
                <p className="text-body-sm leading-relaxed text-muted">
                  <span className="font-semibold text-ink">{point.lead}</span> {point.text}
                </p>
              </li>
            ))}
          </RevealItem>
        </Stagger>

        <Reveal>
          <Conversacion />
        </Reveal>
      </Container>
    </Section>
  );
}
