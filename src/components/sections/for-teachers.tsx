"use client";

import { BookOpenCheck, ClipboardList, Layers, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Eyebrow, IconTile } from "@/components/ui/section";
import { SECTION_IDS } from "@/lib/links";
import { fadeIn, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const cards = [
  {
    icon: ClipboardList,
    title: "Actividades listas para clase",
    description: "Genera actividades a partir del tema que usted elija.",
  },
  {
    icon: Layers,
    title: "Variaciones de plan de clase",
    description: "Mismo tema, distintos enfoques según su grupo.",
  },
  {
    icon: BookOpenCheck,
    title: "Apoyo y guía académica",
    description: "Material de refuerzo y orientación rápida para resolver dudas.",
  },
];

export function ForTeachers() {
  return (
    <section id={SECTION_IDS.forTeachers} className="bg-bg px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Card
              variant="accent"
              className="paper-grain flex h-full flex-col justify-center p-8 sm:p-9"
            >
              <Eyebrow className="text-white/75">Para maestros</Eyebrow>
              <h2 className="mt-4 text-[clamp(1.625rem,2.1vw,2.125rem)] font-semibold text-white">
                No reemplaza su criterio. Le ahorra las horas.
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/85">
                Diza entiende el libro completo: usted elige el tema o la unidad y obtiene material listo para su
                clase, sin prepararlo desde cero.
              </p>
            </Card>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {cards.map(({ icon, title, description }) => (
              <motion.div key={title} variants={fadeUp}>
                <Card interactive className="flex h-full flex-col justify-center p-6">
                  <IconTile icon={icon} />
                  <h3 className="mt-5 text-base font-semibold text-ink lg:text-[1.0625rem]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <Card variant="flat" className="mt-4 flex items-start gap-4 p-6 sm:mt-5 sm:items-center sm:p-7">
            <IconTile icon={ShieldCheck} />
            <p className="text-[0.9375rem] leading-relaxed text-muted sm:text-base">
              Diza no vigila ni evalúa al maestro, y no envía conversaciones ni evaluaciones a la dirección.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
