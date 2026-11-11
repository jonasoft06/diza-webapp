import { X } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { privacy } from "@/content/landing";
import { SECTION_IDS } from "@/lib/constants";

export function Privacy() {
  return (
    // No vertical padding of its own: the panel sits between the bottom padding of ForTeachers and the top padding of the next section.
    <Section id={SECTION_IDS.privacy} className="py-0 lg:py-0">
      <Container>
        <Reveal>
          <div className="paper-grain grid gap-y-8 rounded-panel bg-primary p-8 text-white sm:p-12 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12 lg:p-16">
            <div className="lg:col-start-1 lg:row-start-1">
              <Eyebrow className="text-white/75">{privacy.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-section font-semibold">{privacy.title}</h2>
            </div>

            <ul className="flex flex-col gap-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:justify-center">
              {privacy.exclusions.map((exclusion) => (
                <li key={exclusion} className="flex items-center gap-3 text-xl font-medium sm:text-2xl">
                  <X className="size-6 shrink-0 text-white/75" strokeWidth={2} aria-hidden="true" />
                  {exclusion}
                </li>
              ))}
            </ul>

            <p className="text-lg text-white/85 lg:col-start-1 lg:row-start-2 lg:self-end">{privacy.closing}</p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
