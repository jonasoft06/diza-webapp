import { Container, Section } from "@/components/layout/container";
import { Reveal, RevealItem, Stagger } from "@/components/motion/reveal";
import { IconBox } from "@/components/ui/icon-box";
import { maestrosApproach } from "@/content/maestros";
import { SECTION_IDS } from "@/lib/constants";

const TITLE_ID = "como-trabaja-titulo";

/**
 * "Cómo trabaja con sus alumnos": three columns on a white band, each one an icon,
 * a title beside it and a line, under a hairline. Plain columns, not boxes: the page already
 * has plenty of containers further down.
 */
export function TeacherApproach() {
  return (
    <Section id={SECTION_IDS.approach} aria-labelledby={TITLE_ID} className="bg-surface">
      <Container>
        <Reveal variant="fade">
          <h2 id={TITLE_ID} className="mx-auto max-w-3xl text-center text-section font-semibold text-balance text-ink">
            {maestrosApproach.title}
          </h2>
        </Reveal>

        <Stagger as="ul" className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-3 lg:mt-14">
          {maestrosApproach.points.map((point) => (
            <RevealItem key={point.id} as="li" className="border-t border-line pt-6">
              <div className="flex items-center gap-3">
                <IconBox icon={point.icon} />
                <h3 className="text-xl leading-tight font-semibold text-ink">{point.title}</h3>
              </div>
              <p className="mt-4 max-w-sm text-body-sm leading-relaxed text-pretty text-muted sm:text-base">
                {point.description}
              </p>
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
