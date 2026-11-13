import type { ReactNode } from "react";
import { Container, Section } from "@/components/layout/container";
import { Reveal, RevealItem, Stagger } from "@/components/motion/reveal";
import {
  BookPinVisual,
  ChatExchangeVisual,
  LoginFormVisual,
} from "@/components/product/student-step-visuals";
import { Button, ButtonArrow } from "@/components/ui/button";
import { IconBox } from "@/components/ui/icon-box";
import { forStudents, type StudentStepId } from "@/content/landing";
import { ACTIVATE_URL, APP_LOGIN_URL, SECTION_IDS } from "@/lib/constants";

/** One illustration per step; each one plays its own animation (see student-step-visuals). */
const stepVisuals: Record<StudentStepId, ReactNode> = {
  card: <BookPinVisual />,
  login: <LoginFormVisual />,
  chat: <ChatExchangeVisual />,
};

const factLink =
  "rounded-sm font-semibold break-words text-white underline decoration-white/40 underline-offset-4 transition-colors duration-200 ease-out-strong hover:decoration-white focus-visible:outline-white";

/**
 * The header of /alumnos: a petróleo band that opens the page (so it holds the `h1` and leaves room
 * for the fixed navbar, which the page draws solid). Title and main button first, then the three
 * steps, then the two things worth knowing before asking.
 */
export function ForStudents() {
  return (
    <Section id={SECTION_IDS.students} className="bg-primary-dark pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
      <Container>
        <Reveal variant="fade">
          <h1 className="max-w-3xl text-hero font-bold text-balance text-white">{forStudents.title}</h1>
          <div className="mt-7 flex flex-col items-start gap-4">
            <Button href={ACTIVATE_URL} variant="onDark" className="w-full sm:w-auto">
              {forStudents.primaryCta}
              <ButtonArrow />
            </Button>
            <p className="text-body-sm text-white/85">
              {forStudents.loginPrompt}{" "}
              <a href={APP_LOGIN_URL} className={factLink}>
                {forStudents.loginLink}
              </a>
            </p>
          </div>
        </Reveal>

        <Stagger as="ol" className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5 lg:mt-14">
          {forStudents.steps.map((step, index) => (
            <RevealItem
              key={step.id}
              as="li"
              className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5"
            >
              <span
                aria-hidden="true"
                className="px-1 text-5xl font-semibold leading-none tracking-tight text-white/20 tabular-nums lg:text-6xl"
              >
                {index + 1}
              </span>
              <div className="mt-4">{stepVisuals[step.id]}</div>
              <h2 className="mt-5 px-1 text-xl font-semibold text-white">{step.title}</h2>
              <p className="mt-2 px-1 text-body-sm leading-relaxed text-pretty text-white/70">
                {step.description}
              </p>
            </RevealItem>
          ))}
        </Stagger>

        {/* Two things to know before the first question, under a hairline rather than in cards. */}
        <ul className="mt-8 grid gap-5 border-t border-white/10 pt-8 md:grid-cols-2 md:gap-8 lg:mt-10">
          {forStudents.facts.map((fact) => (
            <li key={fact.id} className="flex items-start gap-3.5">
              <IconBox icon={fact.icon} className="bg-white/10 text-primary-light" />
              <p className="pt-2.5 text-body-sm leading-snug text-pretty text-white/85 sm:text-base sm:leading-snug">
                {fact.before}
                {"link" in fact && fact.link ? (
                  <>
                    {" "}
                    <a href={fact.link.href} className={factLink}>
                      {fact.link.label}
                    </a>{" "}
                    {fact.after}
                  </>
                ) : null}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
