import {
  BookOpen,
  CalendarDays,
  CalendarRange,
  ClipboardList,
  ListChecks,
  LifeBuoy,
  MessagesSquare,
  Moon,
  type LucideIcon,
} from "lucide-react";
import {
  ACTIVATE_URL,
  ALUMNOS_PATH,
  APP_LOGIN_URL,
  MAESTROS_PATH,
  SECTION_IDS,
  SUPPORT_EMAIL,
  SUPPORT_MAILTO,
} from "@/lib/constants";

type NavLink = { label: string; href: string };

/** Decides which object is drawn above each activation step. */
export type StudentStepId = "card" | "login" | "chat";

type StudentStep = { id: StudentStepId; title: string; description: string };

/** `before`, then (optionally) a mail link and what comes after it. */
type StudentFact = {
  id: string;
  icon: LucideIcon;
  before: string;
  link?: { label: string; href: string };
  after?: string;
};

/** Decides which miniature document is drawn in each teacher card. */
export type TeacherFeatureId = "activity" | "quiz" | "plan";

type TeacherFeature = {
  id: TeacherFeatureId;
  icon: LucideIcon;
  title: string;
  description: string;
  /** Caption of the miniature document. */
  sheetLabel: string;
};

/** `link` goes under the answer, for questions that point to another section. */
type FaqEntry = { question: string; answer: string; link?: { label: string; href: string } };

export type AnnotationId = "ask" | "guide" | "cite";

type DemoAnnotation = { id: AnnotationId; title: string; description: string };

/** `annotation` is the step card that lights up when this turn appears; turns that no card explains leave it out. */
export type ConversationTurn = {
  from: "student" | "diza";
  /** Read by screen readers before the text, since the bubbles are told apart by colour alone. */
  label: string;
  /** `**word**` marks the words shown in bold. */
  text: string;
  annotation?: AnnotationId;
  /** Page chip under the message, e.g. `p. 27`. */
  pageChip?: string;
};

/** The recurring motif: every answer is anchored to a page of the book. */
export const PAGE_CHIP_LABEL = "Pág. 42";

/** Same label in the navbar, the closing CTA and the footer. */
export const LOGIN_LABEL = "Ya tengo cuenta";

/** Student CTA: full label for the hero, closing CTA and desktop navbar; short one where the mobile navbar is tight. */
export const ACTIVATE_CTA_LABEL = "Activar mi libro";
export const ACTIVATE_CTA_SHORT_LABEL = "Activar";

/** Header navigation. The footer lists its own links (`footer.productLinks`). */
export const navLinks: NavLink[] = [
  { label: "Cómo funciona", href: `/#${SECTION_IDS.howItWorks}` },
  { label: "La diferencia", href: `/#${SECTION_IDS.difference}` },
  { label: "Alumnos", href: ALUMNOS_PATH },
  { label: "Maestros", href: MAESTROS_PATH },
  { label: "Preguntas", href: `/#${SECTION_IDS.faq}` },
];

export const hero = {
  eyebrow: "Tutor académico con IA",
  titleBefore: "Tu libro ya viene con",
  titleAccent: "tutor",
  description:
    "Diza es un tutor académico con IA para bachillerato. Te guía con preguntas y te dice en qué página de tu libro está cada respuesta.",
  primaryCta: ACTIVATE_CTA_LABEL,
  /** A quiet text link under the main button, for the visitor who is not a student. */
  teacherLink: "¿Es usted maestro? Conozca Diza para su clase",
  note: "Gratis con tu libro. Ten a la mano tu tarjeta con PIN.",
  noCardNote: "¿Tu libro no trae tarjeta? Pregúntale a tu escuela.",
  scene: {
    description:
      "Ejemplo de una conversación con Diza: un alumno pregunta qué es una metáfora y Diza le responde con otra pregunta y la página de su libro donde buscar.",
    /** Title on the illustrated cover of the closing scene. */
    bookTitle: "Tu libro",
    bookAlt: "Mano de un estudiante sosteniendo un libro de texto de pasta dura color azul petróleo",
    pinCardAlt: "Tarjeta de activación con PIN que viene con el libro",
    subject: "Lengua y Comunicación",
    studentLabel: "Alumno",
    studentBubble: "¿Qué es una metáfora?",
    tutorLabel: "Diza",
    tutorBubble: "Antes de decírtelo: ¿qué dos cosas compara esta frase?",
    pageChip: "Pág. 34",
  },
} as const;

/** The band of /alumnos and the FAQ answer the same two doubts with the same words. */
const limitAnswer = "Tienes un límite de preguntas al día. Si llegas a él, sigues mañana. No te cuesta nada.";
const lostCardAfterEmail = "con tu nombre, tu escuela y una foto de tu libro.";
const lostCardAnswer = `Escribe a ${SUPPORT_EMAIL} ${lostCardAfterEmail}`;

export const forStudents = {
  title: "Activa tu libro en 3 pasos",
  steps: [
    {
      id: "card",
      title: "Busca tu tarjeta",
      description: "Viene con tu libro, impresa aparte. Ahí está tu PIN.",
    },
    {
      id: "login",
      title: "Entra con tu correo",
      description: "Escribe el PIN de tu tarjeta y listo.",
    },
    {
      id: "chat",
      title: "Pregunta lo que no entiendas",
      description: "De cualquier tema de tu libro.",
    },
  ] satisfies StudentStep[],
  primaryCta: ACTIVATE_CTA_LABEL,
  /** Under the main button: a prompt and the link that goes with it. */
  loginPrompt: "¿Ya tienes cuenta?",
  loginLink: "Entra aquí",
  /** Two things worth knowing before the first question. The FAQ repeats their wording (`limitAnswer`, `lostCardAnswer`). */
  facts: [
    {
      id: "limit",
      icon: MessagesSquare,
      before: limitAnswer,
    },
    {
      id: "support",
      icon: LifeBuoy,
      before: "¿Perdiste tu tarjeta o tu PIN? Escribe a",
      link: { label: SUPPORT_EMAIL, href: SUPPORT_MAILTO },
      after: lostCardAfterEmail,
    },
  ] satisfies StudentFact[],
  /** Texts drawn inside the three illustrations; none of them is a promise about the real product. */
  visuals: {
    bookAlt: "Libro de pasta azul petróleo con la tarjeta de activación asomando por arriba",
    login: {
      emailLabel: "Correo",
      email: "alumno@tuescuela.edu.mx",
      pinLabel: "PIN",
      pin: "••••••",
      submit: "Entrar",
    },
    chat: {
      student: "¿Cómo empiezo un texto si no se me ocurre nada?",
      diza: "Pista: empieza por lo que ya sabes del tema. ¿Qué te pidieron que expliques?",
      page: "p. 15",
    },
  },
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

/** Three moments when a student needs Diza, in the student's own voice, each with how Diza answers. */
type Moment = {
  id: string;
  icon: LucideIcon;
  context: string;
  situation: string;
  reply: string;
  pageChip?: string;
};

export const moments = {
  eyebrow: "Para alumnos",
  title: "¿Cuándo te sirve Diza?",
  listLabel: "Momentos en los que te sirve Diza",
  dotLabel: "Ir al momento",
  items: [
    {
      id: "night",
      icon: Moon,
      context: "11:40 p.m.",
      situation: "Son las 11 de la noche y no hay a quién preguntarle.",
      reply:
        "Va. Una pista: los acentos dependen de dónde cae la fuerza de la palabra. ¿En qué sílaba suena más fuerte «examen»?",
    },
    {
      id: "exam",
      icon: CalendarDays,
      context: "Mañana: examen",
      situation: "Mañana es el examen y no entendiste el tema.",
      reply:
        "Empecemos por el cuadro de la p. 72: ahí están los tres tipos de texto. ¿Cuál se parece al que te dejaron?",
      pageChip: "p. 72",
    },
    {
      id: "reading",
      icon: BookOpen,
      context: "Tercera lectura",
      situation: "Leíste la página tres veces y sigue sin tener sentido.",
      reply: "Hagamos un resumen juntos: dime en una frase de qué trata el primer párrafo.",
    },
  ] satisfies Moment[],
};

/**
 * "Diza vs. otras IA": the same question answered two ways. Both lists have
 * four points and are laid out row by row, so each pair lines up.
 */
export const comparison = {
  eyebrow: "La diferencia",
  title: "En el examen no hay IA.",
  subtitle:
    "Otras IA te dan la respuesta y en el examen te quedas solo. Diza te ayuda a entenderlo, para que en el examen sí te acuerdes.",
  question: "¿Qué es un texto argumentativo?",
  others: {
    title: "Otras IA",
    /** The tail of the answer fades out: it goes on, and says it all. */
    reply:
      "Un texto argumentativo es aquel en el que el autor expone una postura sobre un tema y la defiende con razones, ejemplos y datos, con el propósito de convencer al lector. Suele constar de tres partes: introducción, desarrollo de los argumentos y conclusión.",
    items: [
      "Te da la respuesta completa",
      "No sabes de dónde sale",
      "Lo olvidas al cerrar el chat",
      "Responde de cualquier tema, sin tu libro",
    ],
  },
  diza: {
    title: "Diza",
    reply: "Antes de decírtelo: ¿qué intenta lograr un texto que te quiere convencer de algo?",
    pageChip: "p. 41",
    items: [
      "Te responde con preguntas para que llegues tú",
      "Te dice en qué página de tu libro está",
      "Tu libro es la fuente principal; si hace falta, complementa con otras fuentes",
      "Te pide comprobarlo en tu libro",
    ],
  },
};

/**
 * Scripted demo of how Diza answers: she greets, the student asks, Diza replies
 * with a guiding question and cites the page. She never hands over the answer.
 */
export const conversation = {
  label: "Ejemplo de conversación con Diza",
  /** Chat title: the subject of the book. */
  subject: hero.scene.subject,
  unit: "Unidad 1",
  composerPlaceholder: "Escribe tu duda…",
  privacyNote: "Solo tú ves esta conversación",
  script: [
    {
      from: "diza",
      label: hero.scene.tutorLabel,
      text: "¡Hola! Soy Diza. Te acompaño con tu libro de Lengua y Comunicación. ¿Con qué te gustaría empezar?",
    },
    {
      from: "student",
      label: hero.scene.studentLabel,
      text: "¿Cómo encuentro la idea principal de este texto?",
      annotation: "ask",
    },
    {
      from: "diza",
      label: hero.scene.tutorLabel,
      text: "Buena pregunta. Antes de decírtela: ¿qué idea se repite en el **primer** y en el **último** párrafo?",
      annotation: "guide",
    },
    {
      from: "student",
      label: hero.scene.studentLabel,
      text: "Que leer cambia nuestra forma de pensar.",
    },
    {
      from: "diza",
      label: hero.scene.tutorLabel,
      text: "Vas bien. Compara eso con la **definición** de idea principal de esa página y dime si cumple.",
      pageChip: "p. 58 · «La idea principal»",
    },
    {
      from: "student",
      label: hero.scene.studentLabel,
      text: "¡Ah! Entonces la idea principal es que leer cambia cómo pensamos.",
    },
    {
      from: "diza",
      label: hero.scene.tutorLabel,
      text: "Exacto. Y lo comprobaste tú en la página 58.",
      annotation: "cite",
    },
  ] satisfies ConversationTurn[],
};

export const forTeachers = {
  eyebrow: "Para maestros",
  title: "Prepare su clase con el mismo libro que usan sus alumnos.",
  deskAlt:
    "Escritorio de un maestro: el libro de texto, hojas de actividades y una mano escribiendo en una de ellas",
  features: [
    {
      id: "activity",
      icon: ClipboardList,
      title: "Actividades",
      description: "Ejercicios para trabajar en clase, a partir del contenido del libro.",
      sheetLabel: "Actividad · Unidad 2",
    },
    {
      id: "quiz",
      icon: ListChecks,
      title: "Cuestionarios",
      description: "Preguntas sobre los temas de la unidad.",
      sheetLabel: "Cuestionario",
    },
    {
      id: "plan",
      icon: CalendarRange,
      title: "Planeación por unidad",
      description: "Una propuesta para organizar la unidad, que usted ajusta a su grupo.",
      sheetLabel: "Planeación",
    },
  ] satisfies TeacherFeature[],
  exportLine: "Exporte a PDF o Word.",
  exportFormats: ["PDF", "Word"],
  accessNotice: "Acceso exclusivo para maestros. Un administrador le da de alta y le asigna sus libros.",
  accessNote: "Al solicitar acceso, le escribimos para darle de alta y asignarle sus libros.",
  cta: "Solicitar acceso",
};

export const privacy = {
  eyebrow: "Privacidad",
  title: "Nadie lee las conversaciones.",
  exclusions: ["Ni el administrador", "Ni el maestro", "Ni otros alumnos"],
  closing: "Tampoco hay reportes por alumno. Así sus alumnos preguntan sin miedo a equivocarse.",
};

/** Short band between "Elige tu camino" and the FAQ. (`privacy` above is the teachers' bento card.) */
export const privacyStrip = {
  title: "Nadie lee tus conversaciones.",
  subtitle: "Ni tu maestro, ni tu escuela, ni otros alumnos.",
};

type ChooserOption = {
  id: "student" | "teacher";
  href: string;
  image: string;
  imageFit: "contain" | "cover";
  title: string;
  description: string;
};

/** "Elige tu camino": two big cards that send each visitor to their own page. */
export const chooser = {
  title: "Sigue por aquí",
  options: [
    {
      id: "student",
      href: ALUMNOS_PATH,
      /** The book is a cut-out on a transparent background, so it sits inside its panel. */
      image: "/images/alumnos/book_pin.webp",
      imageFit: "contain",
      title: "Activa tu libro",
      description: "Cómo activarlo y qué puedes preguntarle.",
    },
    {
      id: "teacher",
      href: MAESTROS_PATH,
      /** A full photograph, so it fills its panel. */
      image: "/images/maestros/teacher_desk.webp",
      imageFit: "cover",
      title: "Soy maestro",
      description: "Herramientas para preparar su clase con el mismo libro.",
    },
  ] satisfies ChooserOption[],
};

/** Questions the landing and /alumnos both answer; each page picks and orders the ones it needs. */
export const faqEntry = {
  cost: {
    question: "¿Cuánto cuesta?",
    answer: "Nada. Diza viene incluido con tu libro.",
  },
  pin: {
    question: "¿Dónde está mi PIN?",
    answer:
      "En la tarjeta impresa que viene con tu libro. Es una tarjeta aparte, no una página del libro.",
  },
  lostCard: {
    question: "¿Perdí mi tarjeta o mi PIN, qué hago?",
    answer: lostCardAnswer,
  },
  limit: {
    question: "¿Hay límite de uso?",
    answer: limitAnswer,
  },
  homework: {
    question: "¿Diza me resuelve la tarea?",
    answer:
      "No. Te guía con preguntas para que llegues tú a la respuesta y te dice en qué página de tu libro está.",
  },
  privacy: {
    question: "¿Alguien puede leer lo que pregunto?",
    answer: "No. Nadie lee las conversaciones: ni el administrador, ni tu maestro, ni otros alumnos.",
  },
  sources: {
    question: "¿Diza usa solo mi libro?",
    answer:
      "Tu libro es la fuente principal. Cuando hace falta, Diza complementa con otras fuentes y te regresa a tu libro para comprobarlo.",
  },
  subjects: {
    question: "¿Para qué materias funciona?",
    answer: "Por ahora, Lengua y Comunicación. Pronto, más materias.",
  },
} satisfies Record<string, FaqEntry>;

export const faq = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que suelen preguntarnos",
  entries: [
    faqEntry.cost,
    faqEntry.homework,
    faqEntry.sources,
    faqEntry.privacy,
    faqEntry.limit,
    faqEntry.subjects,
    faqEntry.lostCard,
  ] satisfies FaqEntry[],
  contactQuestion: "¿Otra duda?",
  contactLink: "Escríbenos",
};

/** Last block before the footer. Each page passes its own (see `FinalCtaContent` in final-cta.tsx). */
export const finalCta = {
  title: "Tu próxima duda ya tiene a quién preguntarle.",
  subtitle: "Ten a la mano tu tarjeta con PIN y tu correo.",
  primary: { label: ACTIVATE_CTA_LABEL, href: ACTIVATE_URL },
  secondary: { label: "Soy maestro", href: MAESTROS_PATH },
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
  /** Small print under the tagline: who stands behind the content. */
  validation: "Contenido validado por la editorial, un equipo pedagógico, autores y maestros.",
  productHeading: "Producto",
  contactHeading: "Contacto",
  // TODO: agregar número de WhatsApp cuando esté disponible
  whatsapp: "WhatsApp — Próximamente",
  copyright: "© 2026 Distribuidora Educativa (DIS). Todos los derechos reservados.",
  productLinks: [
    ...navLinks.filter((link) => link.href !== `/#${SECTION_IDS.difference}`),
    { label: LOGIN_LABEL, href: APP_LOGIN_URL },
  ] satisfies NavLink[],
  supportEmail: SUPPORT_EMAIL,
  // TODO: apuntar a las páginas reales de aviso de privacidad y términos y condiciones
  legalLinks: [
    { label: "Aviso de privacidad", href: "#" },
    { label: "Términos y condiciones", href: "#" },
  ] satisfies NavLink[],
};
