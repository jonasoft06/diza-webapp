import { EyeOff } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { privacyStrip } from "@/content/landing";
import { SECTION_IDS } from "@/lib/constants";

const TITLE_ID = "privacidad-titulo";

/** A short dark petróleo band: one promise, one line to back it up. */
export function PrivacyStrip() {
  return (
    <Section
      id={SECTION_IDS.privacy}
      aria-labelledby={TITLE_ID}
      className="bg-primary-dark py-14 text-white sm:py-16 lg:py-20"
    >
      <Container>
        <Reveal variant="fade">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <EyeOff aria-hidden="true" className="size-7 text-primary-light" strokeWidth={1.75} />
            <h2 id={TITLE_ID} className="mt-4 text-section font-semibold text-balance text-white">
              {privacyStrip.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-balance text-white/70 sm:text-lg">
              {privacyStrip.subtitle}
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
