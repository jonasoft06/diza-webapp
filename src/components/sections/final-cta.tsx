"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { PageChip } from "@/components/ui/page-chip";
import { ACTIVATE_URL, APP_LOGIN_URL, SECTION_IDS } from "@/lib/links";
import { fadeIn, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function FinalCta() {
  return (
    <section id={SECTION_IDS.activate} className="bg-bg px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-[2rem] bg-accent-tint px-6 py-14 sm:px-10 sm:py-16">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeIn}
              className="text-[clamp(2rem,3.5vw,3rem)] font-semibold text-ink"
            >
              Tu libro ya trae la llave.
            </motion.h2>
            <motion.p variants={fadeIn} className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Toma la tarjeta que viene dentro, activa tu PIN y empieza hoy.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-5 flex items-center justify-center gap-2 text-sm text-muted">
              <span>Tu primera pregunta empieza aquí</span>
              <PageChip tone="onTint" />
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
            >
              <a href={ACTIVATE_URL} className={`w-full sm:w-auto ${buttonVariants({ variant: "primary" })}`}>
                Activar mi libro
                <ArrowRight
                  className="size-4 transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
              </a>
              <a
                href={APP_LOGIN_URL}
                className={`w-full sm:w-auto ${buttonVariants({ variant: "secondary" })}`}
              >
                Ya tengo cuenta
              </a>
            </motion.div>
          </motion.div>

          {/* TODO: reemplazar por video/screenshot real de la plataforma */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto mt-12 aspect-video w-full max-w-4xl rounded-3xl border-2 border-dashed border-accent/25 bg-surface/60"
          >
            <div className="flex h-full w-full items-center justify-center px-6 text-center">
              <p className="text-sm font-medium text-muted sm:text-base">
                Video/imagen de la plataforma — próximamente
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
