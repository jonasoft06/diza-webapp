"use client";

import { Plus } from "lucide-react";
import { motion } from "motion/react";
import { Accordion } from "@base-ui/react/accordion";
import { SectionHeading } from "@/components/ui/section";
import { SECTION_IDS } from "@/lib/links";
import { fadeIn, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const faqs = [
  {
    question: "¿Necesito comprar algo extra?",
    answer: "No. El PIN viene dentro de tu libro, sin costo adicional.",
  },
  {
    question: "¿Diza me va a resolver la tarea?",
    answer:
      "No. Diza nunca entrega la respuesta de un ejercicio calificable — te devuelve la pregunta y la página donde está la teoría.",
  },
  {
    question: "¿Funciona con cualquier libro?",
    answer: "Funciona con los libros que incluyen la tarjeta de activación de Diza.",
  },
  {
    question: "¿Diza vigila o reporta mi desempeño como maestro?",
    answer:
      "No. Diza no evalúa al maestro ni envía conversaciones o evaluaciones a la dirección. Decide usted, no la herramienta.",
  },
  {
    question: "¿Diza reemplaza mi forma de enseñar?",
    answer:
      "No. Diza se ancla al mismo libro y temario que ya usas en tu clase — no sustituye tu método, lo refuerza.",
  },
  {
    question: "¿Necesito configurar algo para empezar a usarlo con mi grupo?",
    answer:
      "No. El PIN de tus alumnos ya está vinculado a tu libro; el reporte por alumno está disponible desde el primer uso, sin configuración adicional.",
  },
];

export function Faq() {
  return (
    <section id={SECTION_IDS.faq} className="bg-bg px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeIn}>
          <SectionHeading eyebrow="Dudas" title="Lo que suelen preguntarnos" />
        </motion.div>

        <Accordion.Root multiple className="mt-14 sm:mt-16">
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {faqs.map((faq, faqIndex) => (
              <motion.div key={faq.question} variants={fadeUp}>
                <Accordion.Item
                  value={faqIndex}
                  className="overflow-hidden rounded-3xl border border-border bg-surface shadow-card transition-shadow duration-200 ease-out hover:shadow-card-hover"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex min-h-16 w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent sm:px-7">
                      <span className="text-[0.9375rem] font-semibold text-ink sm:text-base">
                        {faq.question}
                      </span>
                      <Plus
                        className="size-5 shrink-0 text-accent transition-transform duration-250 ease-[cubic-bezier(0.23,1,0.32,1)] group-data-open:rotate-45"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-250 ease-[cubic-bezier(0.23,1,0.32,1)] data-ending-style:h-0 data-starting-style:h-0">
                    <p className="px-6 pb-6 text-[0.9375rem] leading-relaxed text-muted sm:px-7">
                      {faq.answer}
                    </p>
                  </Accordion.Panel>
                </Accordion.Item>
              </motion.div>
            ))}
          </motion.div>
        </Accordion.Root>
      </div>
    </section>
  );
}
