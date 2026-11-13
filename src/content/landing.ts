import { CalendarRange, ClipboardList, ListChecks, type LucideIcon } from "lucide-react";
import { APP_LOGIN_URL, SECTION_IDS, SUPPORT_EMAIL } from "@/lib/constants";

type NavLink = { label: string; href: string };

/** Decides which object is drawn above each activation step. */
export type StudentStepId = "card" | "login" | "chat";

type StudentStep = { id: StudentStepId; title: string; description: string };

type TeacherFeature = { icon: LucideIcon; title: string; description: string };

type FaqEntry = { question: string; answer: string };

export type AnnotationId = "ask" | "guide" | "cite";

type DemoAnnotation = { id: AnnotationId; title: string; description: string };

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
      "Ejemplo de una conversación con Diza: un alumno pregunta por su libro de Lengua y Comunicación y Diza le responde con otra pregunta y la página donde buscar.",
    /** Title on the illustrated cover of the closing scene. */
    bookTitle: "Tu libro",
    bookAlt: "Mano de un estudiante sosteniendo un libro de texto de pasta dura color azul petróleo",
    pinCardAlt: "Tarjeta de activación con PIN que viene con el libro",
    subject: "Lengua y Comunicación",
    studentLabel: "Alumno",
    studentBubble: "¿Cómo encuentro la idea principal de este texto?",
    tutorLabel: "Diza",
    tutorBubble: "Antes de decírtela: ¿qué idea se repite en el primer y en el último párrafo?",
    pageChip: "Pág. 58",
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
  betaLabel: "Beta",
  title: "Prepare su clase con el mismo libro que usan sus alumnos.",
  features: [
    {
      icon: ClipboardList,
      title: "Actividades",
      description: "Ejercicios para trabajar en clase, a partir del contenido del libro.",
    },
    {
      icon: ListChecks,
      title: "Cuestionarios",
      description: "Preguntas sobre los temas de la unidad.",
    },
    {
      icon: CalendarRange,
      title: "Planeación por unidad",
      description: "Una propuesta para organizar la unidad, que usted ajusta a su grupo.",
    },
  ] satisfies TeacherFeature[],
  exportLine: "Exporte a PDF o Word.",
  betaNotice: "Acceso para maestros en beta. Un administrador le da de alta y le asigna sus libros.",
  cta: "Solicitar acceso",
  generator: {
    description:
      "Ilustración del generador para maestros: pestañas de Actividad, Cuestionario y Planeación, selector de unidad, vista previa de un documento y botones para exportar a PDF o Word.",
    tabs: ["Actividad", "Cuestionario", "Planeación"],
    unit: "Unidad 2",
    exportFormats: ["PDF", "Word"],
  },
};

export const privacy = {
  eyebrow: "Privacidad",
  title: "Nadie lee las conversaciones.",
  exclusions: ["Ni el administrador", "Ni el maestro", "Ni otros alumnos"],
  closing: "Tampoco hay reportes por alumno.",
};

export const faq = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que suelen preguntarnos",
  entries: [
    {
      question: "¿Cuánto cuesta?",
      answer: "Nada. Diza viene incluido con tu libro.",
    },
    {
      question: "¿Dónde está mi PIN?",
      answer:
        "En la tarjeta impresa que viene con tu libro. Es una tarjeta aparte, no una página del libro.",
    },
    {
      question: "¿Con qué correo entro?",
      answer: "Con tu correo institucional, el que te dio tu escuela.",
    },
    {
      question: "¿Diza me resuelve la tarea?",
      answer:
        "No. Te guía con preguntas para que llegues tú a la respuesta y te dice en qué página de tu libro está.",
    },
    {
      question: "¿Alguien puede leer lo que pregunto?",
      answer: "No. Nadie lee las conversaciones: ni el administrador, ni tu maestro, ni otros alumnos.",
    },
    {
      question: "¿Hay límite de uso?",
      answer: "Sí. Hay un límite diario de uso.",
    },
    {
      question: "Soy maestro, ¿cómo obtengo acceso?",
      answer: `El acceso para maestros está en beta. Un administrador le da de alta y le asigna sus libros. Puede solicitarlo por correo a ${SUPPORT_EMAIL}.`,
    },
    {
      question: "¿Qué puede ver el maestro de sus alumnos?",
      answer: "Nada de lo que preguntan. El maestro no ve las conversaciones y no hay reportes por alumno.",
    },
  ] satisfies FaqEntry[],
  contactQuestion: "¿Otra duda?",
  contactLink: "Escríbenos",
};

export const closing = {
  question: "¿Ya tienes tu tarjeta?",
  action: "Activa tu libro.",
  teacherQuestion: "¿Es maestro?",
};

export const a11y = {
  skipToContent: "Saltar al contenido",
  homeLabel: "Diza, inicio",
  mainNav: "Navegación principal",
  mobileNav: "Navegación principal móvil",
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
};

export const seo = {
  title: "Diza: el tutor académico con IA que viene con tu libro",
  description:
    "Tutor académico con IA para bachillerato, incluido con tu libro. Te guía con preguntas y cita la página donde está cada respuesta. Actívalo con tu PIN.",
  ogTagline: "Te guía con preguntas y cita la página de tu libro.",
  ogImageAlt: "Diza: tu libro ya viene con tutor",
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
