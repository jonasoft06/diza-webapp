/**
 * Single source of truth for in-page anchors and external app URLs.
 * The navbar, the footer and the section elements all read from here.
 */
export const SECTION_IDS = {
  howItWorks: "como-funciona",
  students: "alumnos",
  forTeachers: "para-maestros",
  privacy: "privacidad",
  faq: "preguntas-frecuentes",
  activate: "activar",
  testimonials: "testimonios",
} as const;

/** Observed by the header to hide the navbar once the footer is revealed. */
export const FOOTER_ID = "site-footer";

// ---------------------------------------------------------------------------
// Placeholders — replace before launch
// ---------------------------------------------------------------------------

export const TUTOR_URL = "https://tutor.diza.com.mx";

/** TODO: las rutas de activación todavía no existen; por ahora lleva al tutor. */
export const ACTIVATE_URL = TUTOR_URL;

/** TODO: las rutas de inicio de sesión todavía no existen; por ahora lleva al tutor. */
export const APP_LOGIN_URL = TUTOR_URL;

/** TODO: correo definitivo sin decidir. */
export const SUPPORT_EMAIL = "contacto@diza.com";

const TEACHER_ACCESS_SUBJECT = "Solicitud de acceso para maestros";
const TEACHER_ACCESS_BODY = ["Nombre:", "Escuela:", "Materia:"].join("\r\n");

/** Opens the teacher's mail app with the request already half written. */
export const TEACHER_ACCESS_MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  TEACHER_ACCESS_SUBJECT,
)}&body=${encodeURIComponent(TEACHER_ACCESS_BODY)}`;
