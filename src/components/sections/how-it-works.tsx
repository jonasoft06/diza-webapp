"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section";
import { SECTION_IDS } from "@/lib/links";
import { fadeIn, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import libroImg from "@/../public/images/libro.png";
import tarjetaPinImg from "@/../public/images/tarjeta-pin.png";
import celularImg from "@/../public/images/celular.png";

const steps = [
  {
    step: "01",
    title: "Abre tu libro",
    description: "Cada ejemplar de Diza trae un folio único impreso en sus primeras páginas.",
    image: libroImg,
    alt: "Pila de libros de texto",
  },
  {
    step: "02",
    title: "Activa tu PIN",
    description: "Ingresa el código de tu libro para vincularlo a tu cuenta en segundos.",
    image: tarjetaPinImg,
    alt: "Tarjeta con PIN de activación",
  },
  {
    step: "03",
    title: "Pregunta lo que sea",
    description: "Desde tu celular, resuelve tus dudas siempre apoyado en las páginas de tu libro.",
    image: celularImg,
    alt: "Celular mostrando la aplicación de Diza",
  },
];

export function HowItWorks() {
  return (
    <section
      id={SECTION_IDS.howItWorks}
      className="relative z-10 overflow-x-clip rounded-t-[2.5rem] bg-bg px-4 py-20 sm:rounded-t-[3rem] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeIn}>
          <SectionHeading eyebrow="Cómo funciona" title="Tres pasos para empezar." />
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-3 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {steps.map((step, index) => (
            <motion.div key={step.step} variants={fadeUp} className="relative">
              {/* Sequence connector: reads as a thread between steps, desktop only. */}
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-8 top-24 hidden w-8 text-accent/40 sm:block"
                >
                  <svg viewBox="0 0 32 8" fill="none" className="w-full">
                    <path d="M1 4h25" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    <path
                      d="M23.5 1.5 26.5 4l-3 2.5"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              ) : null}

              <Card interactive className="flex h-full flex-col overflow-hidden">
                <div className="relative flex h-44 items-center justify-center bg-accent-tint px-6 sm:h-48">
                  <span className="absolute left-5 top-5 rounded-full bg-surface px-2.5 py-1 text-xs font-semibold text-accent">
                    {step.step}
                  </span>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    className="h-28 w-auto max-w-full object-contain drop-shadow-[0_10px_18px_rgb(28_25_23/0.18)] sm:h-32"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{step.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
