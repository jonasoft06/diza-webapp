import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { maestrosBacking } from "@/content/maestros";

/**
 * A quiet strip right after the hero of /maestros: a verified badge and one line saying who validates
 * the content. Light, between two hairlines, with no heading and nothing to click. One line from `md`;
 * on phones the line wraps beside the badge.
 */
export function BackingStrip() {
  const Icon = maestrosBacking.icon;

  return (
    <section aria-label={maestrosBacking.label} className="border-y border-line bg-bg px-4 py-5 sm:px-6 lg:px-8">
      <Container>
        <Reveal variant="fade">
          <p className="mx-auto flex max-w-fit items-start gap-3 text-body-sm leading-snug text-pretty text-muted md:items-center">
            <Icon aria-hidden="true" className="mt-px size-5 shrink-0 text-primary md:mt-0" strokeWidth={1.75} />
            {maestrosBacking.text}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
