// TODO: URL real de la app (activación de PIN)
export const ACTIVATE_URL = "#";

// TODO: URL real de la app (inicio de sesión)
export const APP_LOGIN_URL = "#";

export const SECTION_IDS = {
  howItWorks: "como-funciona",
  benefits: "beneficios",
  forTeachers: "para-maestros",
  faq: "preguntas-frecuentes",
  activate: "activar",
  testimonials: "testimonios",
} as const;

export const NAV_LINKS = [
  { label: "Cómo funciona", href: `#${SECTION_IDS.howItWorks}` },
  { label: "Para maestros", href: `#${SECTION_IDS.forTeachers}` },
  { label: "Preguntas frecuentes", href: `#${SECTION_IDS.faq}` },
];
