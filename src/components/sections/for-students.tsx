import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Reveal, RevealItem, Stagger } from "@/components/motion/reveal";
import { ChatScreen } from "@/components/product/chat-screen";
import { LoginScreen } from "@/components/product/login-screen";
import { PinCard } from "@/components/product/pin-card";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { forStudents, PIN_LABEL, type StudentStepId } from "@/content/landing";
import { ACTIVATE_URL, APP_LOGIN_URL, SECTION_IDS } from "@/lib/constants";

/** Widths live here so the three objects read as one family. */
const stepObjects: Record<StudentStepId, ReactNode> = {
  card: (
    <PinCard
      label={PIN_LABEL}
      className="w-24 rotate-0 p-2 sm:w-24 md:w-44 md:p-3 lg:w-52"
    />
  ),
  login: (
    <div className="w-24 md:w-32 lg:w-36">
      <LoginScreen />
    </div>
  ),
  chat: (
    <div className="w-24 md:w-32 lg:w-36">
      <ChatScreen />
    </div>
  ),
};

export function ForStudents() {
  return (
    <Section id={SECTION_IDS.students} className="bg-sand">
      <Container className="grid gap-y-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-y-14">
        <Reveal variant="fade" className="lg:col-start-1 lg:row-start-1">
          <Eyebrow>{forStudents.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-section font-semibold text-ink">{forStudents.title}</h2>
        </Reveal>

        <div className="relative [--object-area:14rem] lg:col-span-2 lg:row-start-2 lg:[--object-area:16rem]">
          {/* One plank under all three objects: it crosses the column gaps without breaking the list. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-(--object-area) hidden h-4 border-t border-sand-line bg-shelf md:block"
          />
          <Stagger as="ol" className="relative md:grid md:grid-cols-3 md:gap-x-8">
            {forStudents.steps.map((step, index) => (
              <RevealItem
                key={step.id}
                as="li"
                className="relative grid grid-cols-[2rem_6rem_1fr] gap-x-3 pb-8 before:absolute before:bottom-0 before:left-4 before:top-8 before:w-px before:bg-sand-line last:pb-0 last:before:hidden md:flex md:flex-col md:pb-0 md:before:hidden"
              >
                <span
                  aria-hidden="true"
                  className="flex size-8 items-center justify-center rounded-full border border-sand-line bg-sand text-sm font-semibold text-ink md:mt-9"
                >
                  {index + 1}
                </span>
                <div
                  aria-hidden="true"
                  className="flex items-center justify-center md:order-first md:h-(--object-area) md:items-end md:justify-start"
                >
                  {stepObjects[step.id]}
                </div>
                <div className="pt-1 md:pt-0">
                  <h3 className="text-lg font-semibold text-ink md:mt-3">{step.title}</h3>
                  <p className="mt-1 text-body-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </div>

        <div className="flex flex-col items-stretch gap-1 md:flex-row md:items-center md:gap-6 lg:col-start-2 lg:row-start-1 lg:flex-col lg:items-stretch lg:gap-1">
          <Button href={ACTIVATE_URL} className="w-full md:w-auto">
            {forStudents.primaryCta}
            <ArrowRight
              className="size-4 transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5"
              strokeWidth={2.25}
              aria-hidden="true"
            />
          </Button>
          <Button href={APP_LOGIN_URL} variant="link" size="sm" className="px-4">
            {forStudents.secondaryCta}
          </Button>
        </div>

        <p className="text-sm leading-relaxed text-muted lg:col-span-2 lg:row-start-3">{forStudents.note}</p>
      </Container>
    </Section>
  );
}
