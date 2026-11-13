import { EyeOff } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { alumnosPrivacy } from "@/content/alumnos";
import { SECTION_IDS } from "@/lib/constants";

const TITLE_ID = "privacidad-titulo";

/** Privacy for students: a centred petróleo card on the light background. */
export function PrivacyCard() {
  return (
    <Section id={SECTION_IDS.privacy} aria-labelledby={TITLE_ID}>
      <Container>
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center rounded-[2.5rem] bg-primary-dark px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <EyeOff aria-hidden="true" className="size-7 text-primary-light" strokeWidth={1.75} />
            <h2 id={TITLE_ID} className="mt-4 text-section font-semibold text-balance text-white">
              {alumnosPrivacy.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-white/70 sm:text-lg">
              {alumnosPrivacy.description}
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
