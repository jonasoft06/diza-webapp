"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";
import { ConversationMockup } from "@/components/sections/conversation-mockup";
import { SECTION_IDS } from "@/lib/links";
import { fadeIn, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const points = [
  {
    lead: "Basado en tu libro real.",
    text: "Cada ejercicio parte de las páginas que ya tienes frente a ti.",
  },
  {
    lead: "Aprendizaje guiado.",
    text: "Diza te hace las preguntas correctas hasta que encuentres la respuesta por ti mismo.",
  },
  {
    lead: "Sin presión, a tu ritmo.",
    text: "Practica cuanto quieras, sin distracciones ni calificaciones.",
  },
  {
    lead: "Siempre puedes verificar.",
    text: "Cada respuesta señala la página exacta del libro en la que se basa — nunca inventa fuera de lo que ya tienes.",
  },
];

export function ValueBlock() {
  return (
    <section id={SECTION_IDS.benefits} className="bg-bg px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            variants={fadeIn}
            className="text-[clamp(2rem,3.5vw,3rem)] font-semibold text-ink"
          >
            No reemplaza tu libro. Lo hace valer más.
          </motion.h2>
          <motion.p variants={fadeIn} className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Diza convierte cada página que ya lees en una conversación — sin videos genéricos, sin salirse de lo que
            tu maestro ya definió en clase.
          </motion.p>
          <motion.ul variants={fadeIn} className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point.lead} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent"
                >
                  <Check className="size-3.5" strokeWidth={2.5} />
                </span>
                <p className="text-[0.9375rem] leading-relaxed text-muted">
                  <span className="font-semibold text-ink">{point.lead}</span> {point.text}
                </p>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <ConversationMockup />
        </motion.div>
      </div>
    </section>
  );
}
