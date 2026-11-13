import { Container, Section } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ClassPlanDemo } from "@/components/product/class-plan-demo";
import { Chip } from "@/components/ui/chip";
import { maestrosPlan } from "@/content/maestros";
import { SECTION_IDS } from "@/lib/constants";

const TITLE_ID = "plan-titulo";

/** "Plan de clase (PCP)": a sand band (it holds the paper plan) announcing what is coming. */
export function ClassPlan() {
  return (
    <Section id={SECTION_IDS.plan} aria-labelledby={TITLE_ID} className="bg-sand">
      <Container>
        <Reveal variant="fade">
          <Chip>{maestrosPlan.badge}</Chip>
          <h2 id={TITLE_ID} className="mt-4 max-w-2xl text-section font-semibold text-balance text-ink">
            {maestrosPlan.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
            {maestrosPlan.subtitle}
          </p>
        </Reveal>

        <ClassPlanDemo />
      </Container>
    </Section>
  );
}
