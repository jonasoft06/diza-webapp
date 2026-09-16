---
name: Diza
description: Tutor académico de IA para bachillerato mexicano, anclado al libro físico.
colors:
  bg: "#fafaf8"
  surface: "#ffffff"
  border: "#eceae5"
  ink: "#1c1917"
  muted: "#6b6560"
  accent: "#8a3b2e"
  accent-hover: "#74301f"
  accent-tint: "#f6ece9"
  footer: "#2a1714"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontWeight: 700
  heading:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontWeight: 600
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontWeight: 400
  body-medium:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontWeight: 500
  body-strong:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontWeight: 600
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "#ffffff"
  button-secondary:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    textColor: "{colors.ink}"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    radius: "1.375rem"
---

# Design System: Diza

## Overview

**Creative North Star: "Confianza editorial, claridad de producto"**

Diza se presenta como una herramienta profesional y clara para maestros y alumnos de bachillerato: base neutra, un solo color de acento (vino) y tarjetas blancas con borde fino. La calidez viene del acento y de la fotografía real del escritorio, no de fondos crema ni de tipografía serif.

Este sistema reemplaza (2026-09-16) la versión anterior basada en Newsreader + Schibsted Grotesk y en la paleta papel/tinta. Motivo: la landing debía leerse como SaaS educativo confiable, y el cuerpo de texto caía a Times New Roman porque la variable de fuente se declaraba en `<body>` mientras `html { font-sans }` la resolvía.

**Key Characteristics:**
- Base neutra (`bg` / `surface` / `border`) con vino como único acento.
- Una sola familia tipográfica en varios pesos; ningún serif.
- Tarjetas blancas con borde de 1px y sombra muy suave; nunca gradientes.
- Espaciado generoso y ritmo de sección constante.

## Colors

### Base
- **bg** (`#fafaf8`): fondo de todas las secciones. Es el color del `<body>`.
- **surface** (`#ffffff`): tarjetas, header, burbujas de Diza.
- **border** (`#eceae5`): bordes de 1px y separadores.

### Texto
- **ink** (`#1c1917`): texto principal y títulos. 17.3:1 sobre `surface`.
- **muted** (`#6b6560`): texto secundario. 5.74:1 sobre `surface`, 5.50:1 sobre `bg` — pasa AA como texto normal.

### Acento
- **accent** (`#8a3b2e`): botones primarios, iconos, eyebrows, estrellas, avatares, el bloque destacado y el chip de página. 7.66:1 con texto blanco encima.
- **accent-hover** (`#74301f`): únicamente el hover del botón primario.
- **accent-tint** (`#f6ece9`): fondos de iconos, chips, panel del CTA y zona de imagen en las tarjetas de pasos.
- **footer** (`#2a1714`): fondo exclusivo del footer. 16.8:1 con texto blanco.

### Named Rules

**The One Accent Rule.** Vino es el único acento. `accent-hover` existe solo como estado del botón primario; `accent-tint` es un fondo, no un segundo acento.

**The One Highlight Rule.** Como máximo un bloque con fondo `accent` por página. Hoy es la tarjeta de intro de "Para maestros".

**The No-Gradient Rule.** Sin gradientes de color en fondos, botones ni tarjetas. La única excepción es el difuminado neutro al pie del hero, que resuelve la unión con la sección siguiente (`transparent → bg`), y el grano de papel, que es ruido, no mezcla de color.

**The AA Floor Rule.** Todo texto cumple 4.5:1 (3:1 en texto grande). Sobre `accent` el texto secundario no baja de `white/85`; sobre `footer` no baja de `white/75`. Cualquier opacidad nueva se verifica antes de usarse.

## Typography

**Familia única:** Plus Jakarta Sans (400/500/600/700), cargada con `next/font/google` y expuesta como `--font-jakarta`.

> La variable de fuente se declara en `<html>`, no en `<body>`. Declararla en `<body>` deja a `html { font-sans }` sin resolver y el documento cae a un serif del sistema.

### Escala
- **h1**: `clamp(2.5rem, 5vw, 4.5rem)`, peso 700.
- **h2**: `clamp(2rem, 3.5vw, 3rem)`, peso 600.
- **h3** (títulos de tarjeta): 1rem–1.25rem, peso 600.
- **body**: 1rem–1.125rem, peso 400, `line-height: 1.6`.
- **eyebrow**: utilidad `text-eyebrow` — 0.75rem, peso 600, mayúsculas, `letter-spacing: 0.12em`.

Los encabezados llevan `letter-spacing: -0.02em`, `line-height: 1.1` y `text-wrap: balance` desde la capa base.

### Named Rules

**The Single Family Rule.** Una sola familia. La jerarquía se construye con peso, tamaño y color — nunca con una segunda tipografía.

**The Eyebrow Exception.** Los eyebrows se mantienen por decisión explícita de producto (2026-09-16), aunque la guía general de Impeccable los descarte: ayudan a orientar secciones en una landing larga de una sola página.

## Layout

- Contenedor: `max-w-6xl` centrado en todas las secciones.
- Padding de sección: `py-20` móvil / `lg:py-24` desktop, `px-4 / sm:px-6 / lg:px-8`.
- Radios: tarjetas `rounded-3xl` (1.375rem), paneles grandes `2rem`, pastillas `rounded-full`, cuadros de icono `rounded-xl`.
- `scroll-margin-top: 6rem` en todo elemento con `id`, para que el header fijo no tape los títulos al navegar por anclas.

## Elevation & Depth

Sombras neutras y muy suaves; nunca tintadas de vino, nunca duras.

- **shadow-card**: `0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px rgb(0 0 0 / 0.04)`.
- **shadow-card-hover**: `0 2px 4px rgb(0 0 0 / 0.05), 0 14px 34px rgb(0 0 0 / 0.08)`.

**The Hairline Rule.** La definición de una tarjeta viene del borde de 1px, no de la sombra. La sombra solo insinúa profundidad.

## Components

### Buttons (`src/components/ui/button.tsx`)
Pastillas completas, dos variantes más `ghost`.
- **primary**: fondo `accent`, texto blanco, hover `accent-hover`.
- **secondary**: fondo `surface`, borde `border`, texto `ink`, hover `accent-tint`.
- **Tamaños**: `sm` 44px (nav), `lg` 48px (CTA de página).
- Todos llevan `active:scale-[0.97]` (100ms) y `focus-visible` con anillo `accent`.

### Cards (`src/components/ui/card.tsx`)
- **surface**: blanco + borde + `shadow-card`. Es la tarjeta por defecto.
- **flat**: blanco + borde, sin sombra.
- **accent**: fondo vino, texto blanco — el bloque destacado.
- **tint**: fondo `accent-tint`, sin borde.
- `interactive` añade elevación de 4px en hover.

### IconTile (`src/components/ui/section.tsx`)
Cuadro de 44px, `rounded-xl`, fondo `accent-tint`, icono Lucide `accent` con `strokeWidth 1.75`. Es el único tratamiento de icono del sistema.

### PageChip (`src/components/ui/page-chip.tsx`)
Pastilla con icono de libro y "Pág. N". Es el motivo de marca recurrente: aparece en el hero, en el mockup de conversación y en el CTA final, y resume la promesa de que toda respuesta se ancla a una página del libro.

## Motion

Librería: Motion (`motion/react`). `MotionConfig reducedMotion="user"` envuelve la app en el layout raíz.

- **Revelado al hacer scroll**: fundido (`fadeIn`) o fundido + 16px hacia arriba (`fadeUp`), 0.5–0.6s `easeOut`, `viewport={{ once: true }}`. Variantes compartidas en `src/lib/motion.ts`.
- **Stagger**: 90ms entre hijos.
- **Interacción**: press 100ms, hover de tarjeta y flecha 200ms, acordeón y navbar 250ms con `cubic-bezier(0.23, 1, 0.32, 1)`.
- **Sticky reveal**: hero fijo arriba y footer fijo abajo, cada uno detrás de la sección vecina, que lleva esquinas redondeadas y un z-index mayor y actúa de máscara. Es CSS puro (`position: sticky`), sin JS.
- **Mockup de conversación**: revelado secuencial con indicador de "escribiendo"; es animación explicativa de marketing, por eso puede durar más de 300ms.

### Named Rules

**The Under-300ms Rule.** Cualquier animación de interfaz se resuelve en menos de 300ms. Solo la animación explicativa de marketing puede durar más.

**The Reduced-Motion Rule.** Con `prefers-reduced-motion: reduce` se eliminan desplazamientos y animaciones, pero se conservan las transiciones de opacidad y color (200ms). Nunca un apagado global de 0.01ms: eso destruye feedback útil.

**The Entering Ease Rule.** Todo lo que entra o sale usa `ease-out`. Nunca `ease-in` en interfaz.

## Do's and Don'ts

### Do:
- **Do** mantener el fondo neutro y vino como único acento.
- **Do** definir las tarjetas con borde de 1px + sombra suave.
- **Do** usar `IconTile` para todo icono y `PageChip` para reforzar el ancla al libro.
- **Do** verificar el contraste de cualquier opacidad nueva sobre `accent` o `footer`.
- **Do** declarar la variable de fuente en `<html>`.

### Don't:
- **Don't** usar gradientes de color, ni sombras tintadas de vino.
- **Don't** introducir una segunda tipografía ni volver al serif.
- **Don't** usar más de un bloque con fondo `accent` por página.
- **Don't** apoyar toda la estructura de la página en rejillas de tarjetas idénticas: alternar composición (lista con checks, mockup, acordeón, bloque destacado).
- **Don't** bajar el texto secundario sobre vino por debajo de `white/85`, ni sobre el footer por debajo de `white/75`.
