import { Container, Section } from "@/components/layout/container";
import { Reveal, RevealItem, Stagger } from "@/components/motion/reveal";
import { Button, ButtonArrow } from "@/components/ui/button";
import { maestrosAccess } from "@/content/maestros";
import { SECTION_IDS, SUPPORT_EMAIL, SUPPORT_MAILTO } from "@/lib/constants";

const TITLE_ID = "acceso-titulo";

/** A description in which the support address, if it appears, is a mail link. */
function Description({ text }: { text: string }) {
  const [before, ...rest] = text.split(SUPPORT_EMAIL);
  if (rest.length === 0) return <>{text}</>;

  return (
    <>
      {before}
      <a
        href={SUPPORT_MAILTO}
        className="rounded-sm font-semibold break-words text-primary underline decoration-primary/40 underline-offset-4 transition-colors duration-200 ease-out-strong hover:decoration-primary"
      >
        {SUPPORT_EMAIL}
      </a>
      {rest.join(SUPPORT_EMAIL)}
    </>
  );
}

/**
 * "Cómo obtener acceso": three steps in a row (stacked on phones), each with a title and a line, and
 * the button that starts them. A hairline joins each number to the next from `md`.
 */
export function AccessSteps() {
  return (
    <Section id={SECTION_IDS.access} aria-labelledby={TITLE_ID} className="bg-surface">
      <Container className="max-w-5xl">
        <Reveal variant="fade">
          <h2 id={TITLE_ID} className="text-center text-section font-semibold text-balance text-ink">
            {maestrosAccess.title}
          </h2>
        </Reveal>

        <Stagger as="ol" className="mt-10 grid gap-8 md:grid-cols-3 md:gap-8 lg:mt-14">
          {maestrosAccess.steps.map((step, index) => (
            <RevealItem key={step.title} as="li" className="relative flex items-start gap-4 md:flex-col md:gap-5">
              <span
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-tint text-lg font-semibold text-primary tabular-nums"
              >
                {index + 1}
              </span>
              <div className="md:pr-4">
                <h3 className="pt-2 text-xl leading-snug font-semibold text-ink md:pt-0">{step.title}</h3>
                <p className="mt-2 text-body-sm leading-relaxed text-pretty text-muted sm:text-base">
                  <Description text={step.description} />
                </p>
              </div>
              {index < maestrosAccess.steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-5.5 left-14 hidden h-px w-[calc(100%-3.5rem+2rem-0.75rem)] bg-line md:block"
                />
              ) : null}
            </RevealItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 flex justify-center lg:mt-12">
          <Button href={maestrosAccess.ctaHref} className="w-full sm:w-auto">
            {maestrosAccess.cta}
            <ButtonArrow />
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
