import type { LucideIcon } from "lucide-react";
import { BookOpenCheck, ClipboardList, Layers } from "lucide-react";
import { APP_LOGIN_URL, SECTION_IDS, SUPPORT_EMAIL } from "@/lib/constants";

export type NavLink = { label: string; href: string };

/** Decides which object is drawn above each activation step. */
export type StudentStepId = "card" | "login" | "chat";

export type StudentStep = { id: StudentStepId; title: string; description: string };

export type TeacherCard = { icon: LucideIcon; title: string; description: string };

export type FaqEntry = { question: string; answer: string };

export type Testimonial = { initials: string; name: string; role: string; quote: string };

export type AnnotationId = "ask" | "guide" | "cite";

export type DemoAnnotation = { id: AnnotationId; title: string; description: string };

/** `annotation` is the note highlighted while this turn is on screen. */
export type ConversationTurn = {
  from: "student" | "diza";
  text: string;
  annotation: AnnotationId;
  citesPage?: boolean;
};

/** The recurring motif: every answer is anchored to a page of the book. */
export const PAGE_CHIP_LABEL = "Pág. 42";

/** Same label in the navbar, the closing CTA and the footer. */
export const LOGIN_LABEL = "Ya tengo cuenta";

/** Student CTA: full label for the hero, closing CTA and desktop navbar; short one where the mobile navbar is tight. */
export const ACTIVATE_CTA_LABEL = "Activar mi libro";
export const ACTIVATE_CTA_SHORT_LABEL = "Activar";

/** Label of the printed activation card, shared by the hero scene and the activation steps. */
export const PIN_LABEL = "PIN";

export const navLinks: NavLink[] = [
  { label: "Cómo funciona", href: `#${SECTION_IDS.howItWorks}` },
  { label: "Para alumnos", href: `#${SECTION_IDS.students}` },
  { label: "Para maestros", href: `#${SECTION_IDS.forTeachers}` },
  { label: "Preguntas", href: `#${SECTION_IDS.faq}` },
];

export const hero = {
  eyebrow: "Tutor académico con IA",
  titleBefore: "Tu libro ya viene con",
  titleAccent: "tutor",
  description:
    "Diza es un tutor académico con IA para bachillerato. Te guía con preguntas y te dice en qué página de tu libro está cada respuesta.",
  primaryCta: ACTIVATE_CTA_LABEL,
  secondaryCta: "Soy maestro",
  note: "Gratis con tu libro. Ten a la mano tu tarjeta con PIN y tu correo institucional.",
  scene: {
    description:
      "Un libro con su tarjeta de PIN sobre una repisa. Diza responde con una pregunta y cita la página 42.",
    bookTitle: "Tu libro",
    pinLabel: PIN_LABEL,
    bubble: "Antes de darte la respuesta: ¿qué dice el ejemplo de esta página?",
  },
} as const;

export const forStudents = {
  eyebrow: "Para alumnos",
  title: "Actívalo en tres pasos.",
  steps: [
    {
      id: "card",
      title: "Busca tu tarjeta",
      description: "Viene con tu libro, impresa aparte. Ahí está tu PIN.",
    },
    {
      id: "login",
      title: "Entra con tu correo institucional",
      description: "El que te dio tu escuela. Escribe el PIN de tu tarjeta.",
    },
    {
      id: "chat",
      title: "Pregunta lo que no entiendas",
      description: "De cualquier tema de tu libro.",
    },
  ] satisfies StudentStep[],
  primaryCta: ACTIVATE_CTA_LABEL,
  secondaryCta: LOGIN_LABEL,
  note: "Gratis con tu libro. Hay un límite diario de uso.",
};

export const howItWorks = {
  eyebrow: "Cómo funciona",
  title: "No te da la respuesta. Te lleva a ella.",
  annotations: [
    {
      id: "ask",
      title: "Pregunta con tus palabras",
      description: "Escribe tu duda tal como la piensas.",
    },
    {
      id: "guide",
      title: "Te responde con una pregunta",
      description: "Diza no te entrega el resultado: te guía para que llegues tú.",
    },
    {
      id: "cite",
      title: "Te dice la página",
      description: "Cada respuesta cita la página de tu libro, para que lo compruebes ahí.",
    },
  ] satisfies DemoAnnotation[],
};

/**
 * Scripted demo of how Diza answers: the student asks, Diza replies with a
 * guiding question and cites the page. It never hands over the answer.
 */
export const conversation = {
  label: "Ejemplo de conversación con Diza",
  subject: "Matemáticas",
  composerPlaceholder: "Escribe tu duda…",
  script: [
    { from: "student", text: "¿Cómo saco el área de este triángulo?", annotation: "ask" },
    {
      from: "diza",
      text: "Antes de darte la fórmula: ¿qué dos medidas te da el ejemplo?",
      annotation: "guide",
    },
    { from: "student", text: "La base y la altura.", annotation: "guide" },
    {
      from: "diza",
      text: "Exacto. Mira cómo las relaciona la fórmula de esa página y dime qué operación usa.",
      annotation: "cite",
      citesPage: true,
    },
  ] satisfies ConversationTurn[],
};

export const forTeachers = {
  eyebrow: "Para maestros",
  title: "No reemplaza su criterio. Le ahorra las horas.",
  description:
    "Diza entiende el libro completo: usted elige el tema o la unidad y obtiene material listo para su clase, sin prepararlo desde cero.",
  trustLine:
    "Diza no vigila ni evalúa al maestro, y no envía conversaciones ni evaluaciones a la dirección.",
  cards: [
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
  ] satisfies TeacherCard[],
};

export const faq = {
  eyebrow: "Dudas",
  title: "Lo que suelen preguntarnos",
  entries: [
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
  ] satisfies FaqEntry[],
};

export const testimonials = {
  eyebrow: "Qué dicen",
  title: "Quienes ya usan Diza, confían",
  description: "Maestros y alumnos que ya integraron Diza a su forma de estudiar y enseñar.",
  // TODO: reemplazar con testimonios reales
  entries: [
    {
      initials: "R.M.",
      name: "[Nombre del maestro]",
      role: "Maestro de Matemáticas",
      quote:
        "Por fin puedo ver en qué parte del libro se atoran mis alumnos sin tener que revisar cuaderno por cuaderno.",
    },
    {
      initials: "D.L.",
      name: "[Nombre del alumno]",
      role: "Alumno de prepa",
      quote: "Me ayuda a entender la pregunta sin que me dé la respuesta directa, así sí aprendo.",
    },
    {
      initials: "S.T.",
      name: "[Nombre del maestro]",
      role: "Maestra de Español",
      quote: "Se adapta al libro que ya uso en clase, no tuve que cambiar mi forma de dar la materia.",
    },
  ] satisfies Testimonial[],
};

export const footer = {
  tagline: "Tu libro, ahora con quien te explica.",
  productHeading: "Producto",
  contactHeading: "Contacto",
  // TODO: agregar número de WhatsApp cuando esté disponible
  whatsapp: "WhatsApp — Próximamente",
  copyright: "© 2026 Distribuidora Educativa (DIS). Todos los derechos reservados.",
  productLinks: [...navLinks, { label: LOGIN_LABEL, href: APP_LOGIN_URL }] satisfies NavLink[],
  supportEmail: SUPPORT_EMAIL,
  // TODO: apuntar a las páginas reales de aviso de privacidad y términos y condiciones
  legalLinks: [
    { label: "Aviso de privacidad", href: "#" },
    { label: "Términos y condiciones", href: "#" },
  ] satisfies NavLink[],
};
