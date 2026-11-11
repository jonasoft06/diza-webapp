import Image from "next/image";
import { Container, Section } from "@/components/layout/container";
import { Reveal, RevealItem, Stagger } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { howItWorks } from "@/content/landing";
import { SECTION_IDS } from "@/lib/constants";

/** Widest the step image is ever painted, so the browser stops over-fetching. */
const STEP_IMAGE_SIZES = "320px";

export function HowItWorks() {
  return (
    <Section id={SECTION_IDS.howItWorks} className="overflow-x-clip">
      <Container>
        <Reveal variant="fade">
          <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} />
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-3 sm:gap-8">
          {howItWorks.steps.map((step, index) => (
            <RevealItem key={step.step} className="relative">
              {/* Sequence connector: reads as a thread between steps, desktop only. */}
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-8 top-24 hidden w-8 text-primary/40 sm:block"
                >
                  <svg viewBox="0 0 32 8" fill="none" className="w-full">
                    <path d="M1 4h25" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    <path
                      d="M23.5 1.5 26.5 4l-3 2.5"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              ) : null}

              <Card interactive className="flex h-full flex-col overflow-hidden">
                <div className="relative flex h-44 items-center justify-center bg-tint px-6 sm:h-48">
                  <span className="absolute left-5 top-5 rounded-full bg-surface px-2.5 py-1 text-xs font-semibold text-primary">
                    {step.step}
                  </span>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    sizes={STEP_IMAGE_SIZES}
                    className="h-28 w-auto max-w-full object-contain drop-shadow-object sm:h-32"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-body-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </Card>
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
