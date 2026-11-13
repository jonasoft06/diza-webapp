import {
  BadgeCheck,
  BookMarked,
  ClipboardList,
  FileText,
  Lightbulb,
  ListChecks,
  MessageCircleQuestionMark,
  type LucideIcon,
} from "lucide-react";
import { faq, faqEntry, forTeachers } from "@/content/landing";
import { SECTION_IDS, SUPPORT_EMAIL, TEACHER_ACCESS_MAILTO } from "@/lib/constants";

/** Copy of /maestros. Everything here speaks to the teacher (usted). The tools bento reuses `forTeachers`. */

export const REQUEST_ACCESS_LABEL = "Solicitar acceso";

export const maestrosSeo = {
  title: "Diza para maestros: prepare su clase con el libro de sus alumnos",
  description:
    "Actividades, cuestionarios y planeación a partir del libro de Lengua y Comunicación, exportables a PDF y Word. Acceso exclusivo: un administrador le da de alta y le asigna sus libros.",
};

export const maestrosHero = {
  eyebrow: forTeachers.eyebrow,
  badge: "Acceso exclusivo",
  title: forTeachers.title,
  description:
    "Actividades, cuestionarios y planeación a partir del contenido del libro de Lengua y Comunicación.",
  primaryCta: REQUEST_ACCESS_LABEL,
  secondaryCta: "Ver herramientas",
  toolsHref: `#${SECTION_IDS.tools}`,
  photoAlt: forTeachers.deskAlt,
  /** Floating over the photo; the third one is left out on phones. */
  chips: [
    { id: "activity", icon: ClipboardList, label: "Actividad · Unidad 1" },
    { id: "quiz", icon: ListChecks, label: "Cuestionario listo" },
    { id: "export", icon: FileText, label: "Exportar a Word" },
  ] satisfies { id: string; icon: LucideIcon; label: string }[],
};

/** A quiet one-line strip right after the hero: who validates the academic content. */
export const maestrosBacking = {
  label: "Respaldo académico",
  icon: BadgeCheck,
  text: "Contenido académico validado por la editorial, un equipo pedagógico, autores y maestros.",
};

export const maestrosApproach = {
  title: "Diza no responde por sus alumnos. Los hace pensar.",
  points: [
    {
      id: "ask",
      icon: MessageCircleQuestionMark,
      title: "Pregunta antes de responder",
      description: "Ante una duda, Diza le devuelve al alumno una pregunta que lo guía.",
    },
    {
      id: "cite",
      icon: BookMarked,
      title: "Cita el libro",
      description: "Cada respuesta indica la página, para que el alumno lo compruebe ahí.",
    },
    {
      id: "think",
      icon: Lightbulb,
      title: "Fomenta el pensamiento crítico",
      description: "El alumno argumenta, contrasta con su libro y llega a la respuesta.",
    },
  ] satisfies { id: string; icon: LucideIcon; title: string; description: string }[],
};

/** The tools bento keeps its own copy (`forTeachers`); only its heading changes on this page. */
export const maestrosToolsHeading = { title: "Herramientas para su clase." };

export const maestrosPlan = {
  badge: "Próximamente",
  title: "Su plan de clase, listo para la academia.",
  subtitle: "Parta del plan base del libro y ajústelo a su grupo con ayuda de Diza.",
  stepsLabel: "Pasos para armar su plan de clase",
  steps: [
    "Parta del plan base de la editorial",
    "Complete los datos de su grupo",
    "Ajuste cada sesión con ayuda de Diza",
    "Expórtelo en Word para su academia",
  ],
  cta: "Quiero enterarme",
  ctaHref: TEACHER_ACCESS_MAILTO,
  /** The illustrated sheet. Illustrative: no real plan, group or page of a real book. */
  sheet: {
    description:
      "Ejemplo de un plan de clase de Lengua y Comunicación: unidad, tema, semana y horas; aprendizaje esperado; apertura, desarrollo y cierre con la página del libro; evaluación diagnóstica, formativa y sumativa; y evidencia. El desarrollo aparece ajustado con ayuda de Diza.",
    title: "Plan de clase · Lengua y Comunicación",
    /** The sheet's header: filled in when the group's data is completed (step 2). */
    header: "Unidad 1 · Gramática · Semana 1 · 3 horas",
    /**
     * The fields of a plan, top to bottom. `lines` is how many grey bars stand in for the content;
     * `detail` is text written out (the kinds of evaluation) instead of bars.
     */
    fields: [
      { id: "expected", label: "Aprendizaje esperado", lines: 2 },
      { id: "opening", label: "Apertura", page: "p. 3", lines: 2 },
      { id: "development", label: "Desarrollo", page: "p. 4", lines: 3 },
      { id: "closing", label: "Cierre", lines: 2 },
      { id: "evaluation", label: "Evaluación", detail: "diagnóstica · formativa · sumativa" },
      { id: "evidence", label: "Evidencia", lines: 2 },
    ] satisfies { id: string; label: string; page?: string; lines?: number; detail?: string }[],
    adjustedBlockId: "development",
    adjustedLabel: "Ajustado con Diza",
    exportLabel: "Word",
  },
};

export const maestrosAccess = {
  title: "Cómo obtener acceso",
  /** The address inside a description becomes a mail link (see `AccessSteps`). */
  steps: [
    {
      title: "Escríbanos",
      description: `Envíe un correo a ${SUPPORT_EMAIL} con su interés en usar Diza.`,
    },
    {
      title: "Le contactamos",
      description:
        "Una persona de nuestro equipo se pondrá en contacto con usted para darle de alta y asignarle sus libros.",
    },
    {
      title: "Empiece con guía",
      description: "Al entrar, una guía dentro de la plataforma le muestra cómo usar cada herramienta.",
    },
  ],
  cta: REQUEST_ACCESS_LABEL,
  ctaHref: TEACHER_ACCESS_MAILTO,
};

export const maestrosFaq = {
  ...faq,
  contactLink: "Escríbanos",
  entries: [
    {
      question: "Soy maestro, ¿cómo obtengo acceso?",
      answer: `Escríbanos a ${SUPPORT_EMAIL}. Una persona de nuestro equipo se pondrá en contacto con usted para darle de alta y asignarle sus libros.`,
    },
    {
      question: "¿Quién valida el contenido?",
      answer: "El contenido académico está validado por la editorial, un equipo pedagógico, autores y maestros.",
    },
    {
      question: "¿Hay capacitación?",
      answer: "Sí. Dentro de la plataforma, una guía le muestra paso a paso cómo usar cada herramienta.",
    },
    {
      question: "¿Qué puede ver el maestro de sus alumnos?",
      answer:
        "Las conversaciones de sus alumnos son privadas: usted no las ve y no hay reportes por alumno. Así preguntan sin miedo a equivocarse.",
    },
    {
      question: "¿En qué formatos puedo exportar?",
      answer: "En PDF o Word.",
    },
    faqEntry.subjects,
    {
      question: "¿Por qué el acceso es exclusivo?",
      answer:
        "Damos acceso a maestros que usan el libro con sus alumnos. Un administrador le da de alta y le asigna sus libros.",
    },
    {
      question: "¿Diza les hace la tarea a mis alumnos?",
      answer:
        "No. Les responde con preguntas y les indica la página del libro, para que lleguen ellos a la respuesta.",
    },
  ],
};

/** Closing block. The subtitle is the page's existing access note. */
export const maestrosFinalCta = {
  title: "Prepare su próxima clase con Diza.",
  subtitle: forTeachers.accessNote,
  primary: { label: REQUEST_ACCESS_LABEL, href: TEACHER_ACCESS_MAILTO },
};
