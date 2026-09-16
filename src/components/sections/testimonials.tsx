"use client";

import { Star } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section";
import { SECTION_IDS } from "@/lib/links";
import { fadeIn, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

// TODO: reemplazar con testimonio real
const testimonials = [
  {
    initials: "R.M.",
    name: "[Nombre del maestro]",
    role: "Maestro de Matemáticas",
    quote:
      "Por fin puedo ver en qué parte del libro se atoran mis alumnos sin tener que revisar cuaderno por cuaderno.",
  },
  // TODO: reemplazar con testimonio real
  {
    initials: "D.L.",
    name: "[Nombre del alumno]",
    role: "Alumno de prepa",
    quote: "Me ayuda a entender la pregunta sin que me dé la respuesta directa, así sí aprendo.",
  },
  // TODO: reemplazar con testimonio real
  {
    initials: "S.T.",
    name: "[Nombre del maestro]",
    role: "Maestra de Español",
    quote: "Se adapta al libro que ya uso en clase, no tuve que cambiar mi forma de dar la materia.",
  },
];

export function Testimonials() {
  return (
    <section
      id={SECTION_IDS.testimonials}
      className="relative z-10 rounded-b-[2.5rem] bg-bg px-4 py-20 sm:rounded-b-[3rem] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeIn}>
          <SectionHeading
            eyebrow="Qué dicen"
            title="Quienes ya usan Diza, confían"
            description="Maestros y alumnos que ya integraron Diza a su forma de estudiar y enseñar."
          />
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-3 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.initials} variants={fadeUp}>
              <Card interactive className="flex h-full flex-col p-6 sm:p-7">
                <div className="flex gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="size-4 fill-accent text-accent" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-[0.9375rem] leading-relaxed text-ink">
                  “{testimonial.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-tint text-sm font-semibold text-accent"
                  >
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-[0.9375rem] font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-sm text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
