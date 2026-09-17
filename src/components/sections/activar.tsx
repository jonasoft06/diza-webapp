import { ArrowRight, BookOpen } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Reveal, RevealItem, Stagger } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { activate, PAGE_CHIP_LABEL } from "@/content/landing";
import { ACTIVATE_URL, APP_LOGIN_URL, SECTION_IDS } from "@/lib/constants";

export function Activar() {
  return (
    <Section id={SECTION_IDS.activate}>
      <Container>
        <div className="rounded-panel bg-accent-tint px-6 py-14 sm:px-10 sm:py-16">
          <Stagger className="mx-auto max-w-2xl text-center">
            <RevealItem as="h2" variant="fade" className="text-section font-semibold text-ink">
              {activate.title}
            </RevealItem>
            <RevealItem
              as="p"
              variant="fade"
              className="mt-4 text-base leading-relaxed text-muted sm:text-lg"
            >
              {activate.description}
            </RevealItem>
            <RevealItem variant="fade" className="mt-5 flex items-center justify-center gap-2 text-sm text-muted">
              <span>{activate.chipLead}</span>
              <Chip icon={BookOpen} tone="surface">
                {PAGE_CHIP_LABEL}
              </Chip>
            </RevealItem>
            <RevealItem
              variant="fade"
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
            >
              <Button href={ACTIVATE_URL} className="w-full sm:w-auto">
                {activate.primaryCta}
                <ArrowRight
                  className="size-4 transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
              </Button>
              <Button href={APP_LOGIN_URL} variant="secondary" className="w-full sm:w-auto">
                {activate.secondaryCta}
              </Button>
            </RevealItem>
          </Stagger>

          <Reveal className="mx-auto mt-12 aspect-video w-full max-w-4xl rounded-3xl border-2 border-dashed border-accent/25 bg-surface/60">
            <div className="flex h-full w-full items-center justify-center px-6 text-center">
              <p className="text-sm font-medium text-muted sm:text-base">
                {activate.mediaPlaceholder}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
