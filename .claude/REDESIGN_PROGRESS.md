# Progreso del rediseño "Petróleo + arena"

Rama: `redesign/petroleo-arena` (sin push). Reglas para subagentes: `.claude/REDESIGN_BRIEF.md`. Fuente de verdad visual: `DESIGN.md`.

Flujo: 0 preparación → 1 propuesta de estructura → 2 tokens + footer → 3 secciones → 4 SEO → 5 cierre. Cada paso espera aprobación del usuario (✋).

## Aprobado
- **Paso 0** (2026-11-11) — rama, skills, `PRODUCT.md`, `DESIGN.md`, brief y este archivo. Con commit.

## En curso
- **Paso 1** — propuesta entregada en `.claude/REDESIGN_STRUCTURE.md`, esperando aprobación (2026-11-11).

## Siguiente
- **Paso 2** — tokens en `globals.css` (renombrar `accent* → primary*/tint`, `border → line`, agregar arena) + color del footer, comprobando que el efecto de destape no cambia. El usuario revisa en localhost.

## Decisiones tomadas
- Tokens con los nombres del tutor en inglés: `bg, surface, line, ink, muted, primary, primary-dark, tint, sand, sand-2, shelf, sand-line, footer`. El paso 2 renombra `accent* → primary*/tint` y `border → line` en el código.
- Footer `#0F2A35` (white/75 = 9.00:1, white/60 = 6.29:1).
- `muted` sobre `shelf` falla AA (4.34): ahí se usa `ink`.
- Sombras derivadas de `ink`.

- Botón de maestro: "Solicitar acceso" con `mailto:` prellenado (aprobado por el usuario).
- No existe reporte por alumno (confirmado por el usuario).
- Diza se nombra "tutor académico con IA", sin género (decisión del usuario).
- Las rutas del tutor aún no existen: `ACTIVATE_URL` y `APP_LOGIN_URL` quedan como constantes con TODO.

## Preguntas abiertas para el usuario
- Decisiones del paso 1 (ver el final de `.claude/REDESIGN_STRUCTURE.md`): imágenes en código o stock, Fraunces, titular del hero, destino provisional de los botones.
- Correo de contacto para el `mailto:` (`constants.ts` tiene `contacto@diza.com`): hace falta antes de construir la sección de maestros.
- Dominio definitivo (paso 4).
- WhatsApp y páginas legales (hoy placeholders en el footer).

## Notas técnicas
- Playwright funciona vía `npx playwright` (1.65.0, Chromium ya instalado). No está en `package.json`.
- `review-animations` tiene `disable-model-invocation`: se aplica leyendo `.agents/skills/review-animations/{SKILL,STANDARDS}.md`.
- Placeholders actuales: `ACTIVATE_URL` y `APP_LOGIN_URL` = `#`; enlaces legales `#`; WhatsApp "Próximamente".
- Colores fuera de tokens a migrar: `src/app/opengraph-image.tsx` (6 hex), `src/app/icon.svg` (vino).
- `libro.png` pesa 2 MB: optimizar en el paso 3.
- El acordeón anima `height` (excepción documentada en `DESIGN.md`).
