import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PageChip } from "@/components/ui/page-chip";
import { ACTIVATE_URL, SECTION_IDS } from "@/lib/links";
import deskHero from "@/../public/images/hero_background.jpg";

export function Hero() {
  return (
    <section className="sticky top-0 isolate flex h-svh items-center justify-center overflow-hidden bg-bg text-ink">
      <Image
        src={deskHero}
        alt=""
        aria-hidden="true"
        priority
        fill
        quality={95}
        sizes="100vw"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[48%_center] sm:object-center"
      />
      {/* Neutral scrim: keeps the desk photo as warm texture while guaranteeing AA contrast for ink text. */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-bg/82" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-b from-transparent to-bg"
      />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-8">
        <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-ink">
          La tutora que vive dentro de tu{" "}
          <span className="relative inline-block whitespace-nowrap text-accent">
            libro
            <svg
              aria-hidden="true"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              className="animate-underline pointer-events-none absolute -bottom-1 left-0 h-[0.28em] w-full text-accent/45"
            >
              <path
                d="M2 8C34 3.5 78 2.4 121 4.2c25 1 51 2.6 77 4.6"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Diza no te da las respuestas. Te hace las preguntas correctas hasta que encuentres tú mismo — siempre
          apoyada en las páginas del libro que ya tienes en las manos.
        </p>
        <div className="mt-6 flex items-center gap-2 text-sm text-muted">
          <span>Cada respuesta cita su origen</span>
          <PageChip />
        </div>
        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <a href={ACTIVATE_URL} className={`w-full sm:w-auto ${buttonVariants({ variant: "primary" })}`}>
            Activar mi libro
            <ArrowRight
              className="size-4 transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5"
              strokeWidth={2.25}
              aria-hidden="true"
            />
          </a>
          <a
            href={`#${SECTION_IDS.forTeachers}`}
            className={`w-full sm:w-auto ${buttonVariants({ variant: "secondary" })}`}
          >
            Soy maestro
          </a>
        </div>
      </div>
    </section>
  );
}
