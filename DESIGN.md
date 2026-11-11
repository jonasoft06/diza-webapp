---
name: Diza
description: Tutor académico con IA para bachillerato mexicano, anclado al libro físico. Sistema "Petróleo + arena", compartido con el tutor.
colors:
  bg: "#F9F8F6"
  surface: "#FFFFFF"
  line: "#E7E4DF"
  ink: "#1E2B33"
  muted: "#59646B"
  primary: "#1D5C75"
  primary-dark: "#154558"
  tint: "#E4EEF2"
  sand: "#F1EADF"
  sand-2: "#E9DFCF"
  shelf: "#E3D9C8"
  sand-line: "#CBBBA0"
  footer: "#0F2A35"
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
  book-cover:
    fontFamily: "Fraunces, Georgia, serif"
    fontWeight: 600
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
    textColor: "#FFFFFF"
  button-secondary:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.line}"
    textColor: "{colors.ink}"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.line}"
    radius: "1.375rem"
---

# Design System: Diza

Este documento es la fuente de verdad visual de la landing (`diza.com.mx`). Si el código y este documento no coinciden, se corrige el código o se actualiza este documento en el mismo cambio.

## Overview

**Creative North Star: "El libro sobre el pupitre, y alguien que te explica"**

La landing y el tutor (`tutor.diza.com.mx`) son un solo producto: quien pasa de una al otro no debe notar el cambio. Por eso comparten sistema. El petróleo es la voz de Diza (acciones, citas de página, marca). La arena es el mundo físico del libro (papel, repisa, pupitre, tarjeta). Lo demás es neutro y deja leer.

Este sistema reemplaza (2026-11-11) al anterior de base neutra + acento vino, que no coincidía con el tutor.

**Key Characteristics:**
- Base neutra cálida (`bg` / `surface` / `line`), petróleo como único color de acción.
- Arena como material: aparece donde hay libro, tarjeta, repisa o pupitre, no como decoración.
- Elementos derivados del producto real: chip de página, tarjeta con PIN, escenas de repisa/pupitre y mockups del tutor hechos en código.
- Una sola familia tipográfica. Fraunces solo dentro de portadas de libro ilustradas.

## Colors

Los nombres de token son los del tutor, en inglés. En código se exponen como utilidades de Tailwind (`bg-primary`, `text-muted`, `border-line`, `bg-sand`…) desde `src/app/globals.css`. Ningún componente escribe un hex.

### Base
- **bg** (`#F9F8F6`): fondo de página y de las secciones neutras.
- **surface** (`#FFFFFF`): tarjetas, header, burbujas de Diza, pantallas de mockup.
- **line** (`#E7E4DF`): bordes de 1px y separadores sobre `bg` y `surface`.

### Texto
- **ink** (`#1E2B33`): títulos y texto principal.
- **muted** (`#59646B`): texto secundario.

### Petróleo (acción y marca)
- **primary** (`#1D5C75`): botones primarios, enlaces, iconos, eyebrows, chip de página, burbuja del alumno, bloque destacado.
- **primary-dark** (`#154558`): hover y estado activo de lo que es `primary`.
- **tint** (`#E4EEF2`): fondo de iconos y chips, hover del botón secundario, selección de texto.

### Arena (material)
- **sand** (`#F1EADF`): bandas y paneles cálidos; el "papel" de una sección.
- **sand-2** (`#E9DFCF`): superficie anidada sobre `sand` y fondo de los huecos de imagen.
- **shelf** (`#E3D9C8`): el plano de la repisa o del pupitre dentro de una escena.
- **sand-line** (`#CBBBA0`): borde de superficies arena, canto de la repisa y borde punteado de los huecos de imagen.

### Footer
- **footer** (`#0F2A35`): fondo exclusivo del footer. Es el mismo tono del petróleo llevado casi a negro.

### Contraste verificado (WCAG 2.1)

| Texto | bg | surface | tint | sand | sand-2 | shelf |
| --- | --- | --- | --- | --- | --- | --- |
| ink | 13.66 | 14.50 | 12.30 | 12.13 | 10.99 | 10.37 |
| muted | 5.72 | 6.07 | 5.15 | 5.08 | 4.60 | **4.34 ✗** |
| primary | 6.97 | 7.39 | 6.27 | 6.19 | 5.61 | 5.29 |
| primary-dark | 9.78 | 10.38 | 8.80 | 8.68 | 7.87 | 7.42 |

| Texto blanco | sobre primary | sobre primary-dark | sobre footer |
| --- | --- | --- | --- |
| white | 7.39 | 10.38 | 14.97 |
| white/85 | 5.86 | 7.99 | — |
| white/75 | 4.96 | 6.62 | 9.00 |
| white/60 | — | — | 6.29 |

`sand-line` y `line` son bordes decorativos (1.6:1 y 1.2:1): nunca son el único indicador de un control ni se usan como color de texto.

### Named Rules

**The One Action Color Rule.** Petróleo es el único color de acción. Si algo es petróleo sólido, se puede pulsar o es la voz de Diza. `primary-dark` es un estado, no un segundo color.

**The Sand Is Material Rule.** La arena representa lo físico (papel, tarjeta, repisa, pupitre). No se usa para botones, texto ni estados. Una sección arena necesita un motivo: contiene el libro, la tarjeta o una escena.

**The One Highlight Rule.** Como máximo un bloque con fondo `primary` por página. El footer no cuenta: es su propio color.

**The No-Gradient Rule.** Sin gradientes de color en fondos, botones ni tarjetas. Excepciones: un difuminado neutro para unir una fotografía con el fondo (`transparent → bg`) y el grano de papel, que es ruido y no mezcla de color.

**The AA Floor Rule.** Todo texto cumple 4.5:1 (3:1 en texto grande). Sobre `primary`, el texto secundario no baja de `white/85`. Sobre `footer`, no baja de `white/75` (los eyebrows del footer usan `white/60`, 6.29:1). `muted` no se usa sobre `shelf`: ahí va `ink`. Cualquier opacidad o par nuevo se verifica antes de usarse y se agrega a la tabla.

## Typography

**Familia:** Plus Jakarta Sans (400/500/600/700), cargada con `next/font/google` y expuesta como `--font-jakarta`.

> La variable de fuente se declara en `<html>`, no en `<body>`. Declararla en `<body>` deja a `html { font-sans }` sin resolver y el documento cae a un serif del sistema.

**Fraunces** solo se carga si la página incluye portadas de libro ilustradas, y solo se aplica dentro de la portada. Nunca en títulos, texto ni interfaz.

### Escala
- **h1** (`text-hero`): `clamp(2.5rem, 5vw, 4.5rem)`, peso 700. Uno solo por página.
- **h2** (`text-section`): `clamp(2rem, 3.5vw, 3rem)`, peso 600.
- **h2 secundario** (`text-subsection`): `clamp(1.625rem, 2.1vw, 2.125rem)`, peso 600.
- **h3** (títulos de tarjeta): 1rem–1.25rem, peso 600.
- **body**: 1rem–1.125rem, peso 400, `line-height: 1.6`. Nunca menos de 16px en texto de lectura.
- **eyebrow** (`text-eyebrow`): 0.75rem, peso 600, mayúsculas, `letter-spacing: 0.12em`.

Los encabezados llevan `letter-spacing: -0.02em`, `line-height: 1.1` y `text-wrap: balance` desde la capa base. El texto de lectura no pasa de ~70 caracteres por línea.

### Named Rules

**The Single Family Rule.** La jerarquía se construye con peso, tamaño y color, no con una segunda tipografía.

**The Eyebrow Exception.** Los eyebrows se mantienen por decisión de producto: orientan en una landing larga de una sola página.

## Layout

- Mobile-first: los estilos base son para 360px y se agrega complejidad con `sm` / `md` / `lg`. Se verifica en 360, 390, 768, 1024, 1280 y 1440, sin scroll horizontal.
- Contenedor: `max-w-6xl` centrado.
- Padding de sección: `py-20` / `lg:py-24`, `px-4` / `sm:px-6` / `lg:px-8`.
- Radios: tarjetas `rounded-3xl` (1.375rem), paneles `rounded-panel` (2rem), pantallas de mockup `rounded-screen` (1.5rem), pastillas `rounded-full`, cuadros de icono `rounded-xl`, unión de secciones `rounded-seam` (2.5rem / 3rem).
- Objetivos táctiles de 44×44px como mínimo.
- `scroll-margin-top: 6rem` en todo elemento con `id`, para que el header fijo no tape los títulos.
- Semántica: un `h1`, cada sección es un `<section>` con su `h2`, las tarjetas usan `h3`. `lang="es-MX"`.

## Elevation & Depth

Sombras neutras y muy suaves, derivadas de `ink`. Nunca tintadas de petróleo ni duras.

- **shadow-card**: `0 1px 2px rgb(30 43 51 / 0.04), 0 8px 24px rgb(30 43 51 / 0.05)`.
- **shadow-card-hover**: `0 2px 4px rgb(30 43 51 / 0.05), 0 14px 34px rgb(30 43 51 / 0.09)`.
- **drop-shadow-object**: `0 10px 18px rgb(30 43 51 / 0.18)`, para objetos recortados (libro, tarjeta, celular) apoyados en una escena.

**The Hairline Rule.** La definición de una tarjeta viene del borde de 1px, no de la sombra.

## Components

### Base (`src/components/ui`)

- **Button** — pastilla completa; `<a>` si recibe `href`, `<button>` si no.
  - `primary`: fondo `primary`, texto blanco, hover `primary-dark`.
  - `secondary`: fondo `surface`, borde `line`, texto `ink`, hover `tint`.
  - Tamaños: `sm` 44px (nav), `lg` 48px (CTA). `active:scale-[0.97]` y anillo de foco `primary`.
- **Card** — `surface` (blanco + borde + `shadow-card`), `flat` (sin sombra), `accent` (fondo `primary`, texto blanco: el bloque destacado). `interactive` eleva 4px en hover, solo con puntero fino.
- **IconBox** — cuadro de 44px, `rounded-xl`, fondo `tint`, icono Lucide `primary` con `strokeWidth 1.75`. Único tratamiento de icono.
- **Chip** — pastilla con icono de libro y "Pág. N". Tonos `tint` y `surface`. Es el motivo de marca: resume que toda respuesta se ancla a una página.
- **Eyebrow**, **SectionHeading**, **Accordion** (Base UI, apertura múltiple).
- **Container / Section** (`src/components/layout`).

### Derivados del producto

Se construyen en código, con tokens, a partir de lo que el alumno y el maestro ven de verdad. La lista final se fija al cierre del rediseño.

- **Chip de página** — ya existe (`Chip`).
- **Tarjeta con PIN** — la tarjeta impresa que viene aparte del libro.
- **Escena de repisa / pupitre** — plano `shelf` con canto `sand-line` donde se apoyan libro, tarjeta o celular.
- **Mockups del tutor** — pantallas hechas en código (conversación del alumno, generador del maestro), no capturas. Su contenido es ilustrativo y no nombra libros reales.

### Huecos de imagen

Donde falta una imagen real, la página muestra un sustituto dibujado en código (misma proporción, mismos tokens) y el hueco se registra aquí con su contenido, proporción, texto alternativo y un prompt sugerido para Recraft. Un bloque punteado visible no se usa: en el tamaño de estos objetos no caben el alt ni el prompt, y rompería la escena de la repisa.

Al llegar la imagen real: se exporta con fondo removido (PNG o WebP con transparencia), se coloca en `public/images/` y reemplaza al sustituto con `next/image`, `alt` de la tabla y `sizes` ajustado al ancho pintado.

| Hueco | Dónde va | Proporción | Sustituto actual | Texto alternativo | Prompt sugerido para Recraft |
| --- | --- | --- | --- | --- | --- |
| Tarjeta con PIN real | Para alumnos, paso 1 (y la tarjeta del hero) | 3:2, objeto con fondo removido | `PinCard` | "Tarjeta de activación de Diza con el PIN impreso" | "Fotografía de producto fotorrealista de una tarjeta impresa de cartulina blanca mate, tamaño tarjeta de crédito, vista frontal con una inclinación mínima, con un código PIN de seis caracteres impreso en tinta oscura y un detalle en azul petróleo (#1D5C75). Luz de estudio suave, sombra de contacto sutil, fondo transparente, sin manos ni otros objetos, sin logotipos inventados." |
| Portada real del libro | Hero y cierre | 3:4, objeto con fondo removido | `BookCover` | "Portada del libro de bachillerato que incluye acceso a Diza" | "Fotografía de producto fotorrealista de un libro de texto de bachillerato de pasta blanda, de pie, visto de frente con el lomo apenas visible a la izquierda, portada en azul petróleo (#1D5C75) con tipografía serif clara. Luz de estudio suave, sombra de contacto sutil, fondo transparente, sin texto legible de editoriales reales ni logotipos." |

La foto de la tarjeta debe ser la tarjeta verdadera en cuanto exista: el alumno tiene que reconocerla. El prompt sirve solo como imagen provisional.

## Footer (contrato)

El comportamiento del footer no se cambia sin aprobación explícita.

- `sticky bottom-0`, `z-0`. La sección anterior lleva `relative z-10` y esquinas inferiores `rounded-b-seam`, y lo destapa al hacer scroll. Si esa sección cambia, la nueva hereda esas clases y el efecto queda igual.
- Conserva el wordmark gigante `diza` (`text-wordmark`, `white/8`, decorativo) y el grano de papel (`paper-grain`).
- Fondo `footer`. Texto principal blanco, secundario `white/75`, encabezados de columna `white/60`, separador `white/15`.
- `use-footer-in-view` observa `#site-footer` y oculta el navbar cuando el footer entra en vista.

## Motion

Librería: Motion (`motion/react`). No se instala ninguna otra. `MotionConfig reducedMotion="user"` envuelve la app en el layout raíz.

- **Revelado al hacer scroll**: fundido o fundido + 16px hacia arriba, `viewport={{ once: true }}`. `Reveal` / `Stagger` / `RevealItem` en `src/components/motion/reveal.tsx` centralizan variantes y viewport.
- **Stagger**: 30–80ms entre hijos.
- **Interacción**: press 100–160ms, hover 200ms, acordeón y navbar hasta 250ms, con `--ease-out-strong` (`cubic-bezier(0.23, 1, 0.32, 1)`).
- **Ligado al scroll**: `useScroll` / `useTransform` sobre `transform` y `opacity`, o CSS (`position: sticky`). Sin listeners de scroll propios para animar.
- **Animación explicativa** (por ejemplo el mockup de conversación): puede durar más de 300ms porque enseña cómo funciona el producto.

### Named Rules

**The Purpose Rule.** Cada animación responde "¿por qué se anima esto?": explica, da feedback, orienta o evita un cambio brusco. Si no hay respuesta, se quita.

**The Under-300ms Rule.** Toda animación de interfaz se resuelve en menos de 300ms. Solo la animación explicativa de marketing puede durar más.

**The Entering Ease Rule.** Lo que entra o sale usa `ease-out` fuerte. Lo que se mueve en pantalla, `ease-in-out`. Nunca `ease-in`.

**The GPU Rule.** Solo se animan `transform` y `opacity`. En Motion se escribe la cadena completa (`transform: "translateY(16px)"`), no los atajos `x` / `y` / `scale`. Nunca `transition: all` ni entradas desde `scale(0)`. Única excepción: la altura del panel del acordeón, porque su contenido debe empujar el resto de la página.

**The Hover Gate Rule.** El movimiento en hover va bajo `@media (hover: hover) and (pointer: fine)`. Nada depende de hover para funcionar.

**The Reduced-Motion Rule.** Con `prefers-reduced-motion: reduce` se elimina el movimiento y se conservan las transiciones de opacidad y color (200ms). El contenido se ve completo sin animación. Nunca un apagado global de 0.01ms sobre las transiciones.

## Do's and Don'ts

### Do:
- **Do** usar petróleo solo para acción y para la voz de Diza.
- **Do** usar arena donde hay libro, tarjeta, repisa o pupitre.
- **Do** definir las tarjetas con borde de 1px + sombra suave.
- **Do** usar `IconBox` para todo icono y `Chip` para reforzar el ancla al libro.
- **Do** verificar el contraste de cualquier par u opacidad nueva y agregarlo a la tabla.
- **Do** alternar composición entre secciones (escena, mockup, lista, acordeón, bloque destacado).

### Don't:
- **Don't** escribir colores fuera de tokens.
- **Don't** usar `muted` sobre `shelf`, ni arena como color de texto o de botón.
- **Don't** usar gradientes de color ni sombras tintadas.
- **Don't** usar más de un bloque con fondo `primary` por página.
- **Don't** apoyar la página en rejillas de tarjetas idénticas.
- **Don't** inventar testimonios, cifras, escuelas ni nombres de libros, tampoco dentro de un mockup.
- **Don't** tocar el comportamiento del footer.
