/**
 * Single source of truth for in-page anchors and external app URLs.
 * The navbar, the footer and the section elements all read from here.
 */
export const SECTION_IDS = {
  howItWorks: "como-funciona",
  students: "alumnos",
  forTeachers: "para-maestros",
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
