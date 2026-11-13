import {
  ACTIVATE_CTA_LABEL,
  faq,
  faqEntry,
  finalCta,
  hero,
  LOGIN_LABEL,
  type ConversationTurn,
} from "@/content/landing";

/** Copy of /alumnos. Everything here speaks to the student (tú). The steps band and the final CTA reuse `forStudents` and `finalCta`. */

export const alumnosSeo = {
  title: "Diza para alumnos: pregunta con tus palabras, entiende con tu libro",
  description:
    "Activa tu libro con el PIN de tu tarjeta y pregunta lo que no entiendas de Lengua y Comunicación. Diza te guía con preguntas y te dice en qué página de tu libro está cada respuesta.",
};

export const alumnosHero = {
  eyebrow: "Para alumnos",
  /** Two sentences, each one balanced on its own line(s). */
  titleParts: ["Pregunta con tus palabras.", "Entiende con tu libro."],
  description:
    "Diza conoce tu libro de Lengua y Comunicación: te guía con preguntas y te dice en qué página está cada respuesta.",
  primaryCta: ACTIVATE_CTA_LABEL,
  secondaryCta: LOGIN_LABEL,
  chatDescription:
    "Ejemplo de una conversación con Diza: un alumno pregunta cuándo lleva acento «cómo» y Diza le da una pista, le pregunta y le dice en qué página de su libro lo ve.",
};

/** The short chat beside the hero: same look as "Cómo funciona", no step cards. */
export const alumnosChat = [
  {
    from: "student",
    label: hero.scene.studentLabel,
    text: "¿Cuándo lleva acento «cómo»?",
  },
  {
    from: "diza",
    label: hero.scene.tutorLabel,
    text: "Buena duda. Pista: cuando pregunta o exclama. ¿En «no sé cómo hacerlo» está preguntando algo?",
  },
  {
    from: "student",
    label: hero.scene.studentLabel,
    text: "Sí, aunque no tenga signos.",
  },
  {
    from: "diza",
    label: hero.scene.tutorLabel,
    text: "Exacto. Lo ves en la p. 27.",
    pageChip: "p. 27",
  },
] satisfies ConversationTurn[];

/**
 * "¿De qué le puedes preguntar?": each chip is a doubt in the student's own words, with its topic in small
 * type underneath. Tapping one shows Diza's short answer: a hint and the page of the book. Pages are illustrative.
 */
export const alumnosTopics = {
  title: "¿De qué le puedes preguntar?",
  subtitle: "De cualquier tema de tu libro. Por ejemplo, de la Unidad 1:",
  listLabel: "Dudas de la Unidad 1",
  replyLabel: "Respuesta de Diza",
  note: "Por ahora, Lengua y Comunicación. Pronto, más materias.",
  items: [
    {
      id: "etimologia",
      question: "¿De dónde viene esta palabra?",
      topic: "Etimología",
      reply: "Pista: fíjate si se parece a otra palabra que conozcas, quizá del latín o del griego. ¿Con cuál la relacionas?",
      page: "p. 8",
    },
    {
      id: "cohesion",
      question: "¿Cómo hago que mis ideas no se vean brincadas?",
      topic: "Cohesión",
      reply: "Pista: palabras como «además» o «por eso» unen una idea con la siguiente. ¿Cuál falta entre tus dos oraciones?",
      page: "p. 21",
    },
    {
      id: "coherencia",
      question: "¿Por qué mi texto no tiene sentido?",
      topic: "Coherencia",
      reply: "Pista: revisa que todas tus ideas hablen del mismo tema. ¿Cuál se sale?",
      page: "p. 23",
    },
    {
      id: "oracion-parrafo",
      question: "¿Dónde termina un párrafo?",
      topic: "La oración y el párrafo",
      reply: "Pista: un párrafo desarrolla una sola idea. ¿En qué momento empiezas a hablar de otra?",
      page: "p. 18",
    },
    {
      id: "categorias",
      question: "¿Esto es adjetivo o adverbio?",
      topic: "Categorías gramaticales",
      reply: "Pista: el adjetivo acompaña a un sustantivo; el adverbio, a un verbo. ¿A quién acompaña tu palabra?",
      page: "p. 31",
    },
    {
      id: "redaccion",
      question: "¿Cómo empiezo a escribir?",
      topic: "Redacción",
      reply: "Pista: empieza por lo que ya sabes del tema. ¿Qué te pidieron que expliques?",
      page: "p. 15",
    },
  ],
};

/** The accent example as a section of its own, with the phone of the old hero. */
export const alumnosChatExample = {
  title: "Así te responde Diza.",
  description: "Te da una pista, te pregunta y te dice en qué página de tu libro puedes comprobarlo.",
  chatDescription: alumnosHero.chatDescription,
};

export const alumnosPrivacy = {
  title: "Lo que preguntas es tuyo.",
  description:
    "Nadie lee tus conversaciones: ni tu maestro, ni el administrador de tu escuela, ni otros alumnos. Tampoco hay reportes por alumno.",
};

/** The landing's closing block without the teacher button. */
export const alumnosFinalCta = { ...finalCta, secondary: undefined };

/** Only what a student asks, in the order a student asks it. */
export const alumnosFaq = {
  ...faq,
  entries: [
    faqEntry.cost,
    faqEntry.pin,
    faqEntry.lostCard,
    faqEntry.limit,
    faqEntry.homework,
    faqEntry.sources,
    faqEntry.privacy,
    faqEntry.subjects,
  ],
};
