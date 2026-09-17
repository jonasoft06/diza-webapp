import { Star } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Reveal, RevealItem, Stagger } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/content/landing";
import { SECTION_IDS } from "@/lib/constants";

const RATING = 5;

export function Testimonios() {
  return (
    <Section
      id={SECTION_IDS.testimonials}
      className="relative z-10 rounded-b-seam sm:rounded-b-seam-lg"
    >
      <Container>
        <Reveal variant="fade">
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            title={testimonials.title}
            description={testimonials.description}
          />
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-3 sm:gap-8">
          {testimonials.entries.map((testimonial) => (
            <RevealItem key={testimonial.initials}>
              <Card interactive className="flex h-full flex-col p-6 sm:p-7">
                <div className="flex gap-1" aria-hidden="true">
                  {Array.from({ length: RATING }).map((_, index) => (
                    <Star key={index} className="size-4 fill-accent text-accent" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-body-sm leading-relaxed text-ink">
                  “{testimonial.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-tint text-sm font-semibold text-accent"
                  >
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-body-sm font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-sm text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
