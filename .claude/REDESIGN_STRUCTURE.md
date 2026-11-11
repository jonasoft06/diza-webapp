# Estructura propuesta — landing DIZA

Paso 1 del rediseño. Sin código. Los textos son el mensaje de cada bloque; la redacción final se ajusta al construir (paso 3) y vive en `src/content/landing.ts`.

## Orden y ritmo

| # | Bloque | Ancla | Fondo | Objetivo | Estado |
|---|---|---|---|---|---|
| 0 | Header | — | `bg` | efectividad | modificado |
| 1 | Hero | — | `bg` + escena arena | atención, claridad | rediseñado |
| 2 | Cómo funciona (demo) | `#como-funciona` | `surface` | claridad | modificado (fusiona Beneficios + conversación) |
| 3 | Para alumnos: activar | `#alumnos` | `sand` | efectividad | modificado (fusiona Cómo funciona + Activar) |
| 4 | Para maestros | `#para-maestros` | `bg` | claridad, efectividad | modificado |
| 5 | Privacidad | `#privacidad` | `primary` (único bloque sólido) | atención, confianza | nuevo |
| 6 | Preguntas frecuentes | `#preguntas-frecuentes` | `bg` | claridad | modificado (textos corregidos) |
| 7 | Cierre: activar | `#activar` | `sand`, destapa el footer | efectividad | modificado |
| — | Footer | `#site-footer` | `footer` | — | se conserva (solo color) |

Narrativa: qué es (1) → cómo se ve funcionando (2) → alumno: cómo entro (3) → maestro: qué gano y cómo pido acceso (4) → lo que tranquiliza a ambos (5) → dudas (6) → acción (7).

Un solo `h1` (hero). Cada bloque es un `<section>` con `h2`; pasos y capacidades usan `h3`.

---

## 0. Header — modificado

- **Objetivo:** efectividad. El botón de activar está siempre a un toque.
- **Cambio:** ya no flota sobre una foto, así que deja de tener dos estilos (claro sobre foto / sólido al hacer scroll). Fondo `bg` y línea inferior al hacer scroll. Sigue ocultándose cuando el footer entra en vista.
- **CTA:** "Activar mi libro" (primario) y "Ya tengo cuenta" (enlace).

```
MÓVIL
┌────────────────────────────────┐
│ diza             [Activar]  ☰ │
└────────────────────────────────┘
  ☰ abre: Cómo funciona · Para alumnos · Para maestros
          · Preguntas · Ya tengo cuenta

DESKTOP
┌──────────────────────────────────────────────────────────────────────┐
│ diza   Cómo funciona  Para alumnos  Para maestros  Preguntas         │
│                                  Ya tengo cuenta  [Activar mi libro] │
└──────────────────────────────────────────────────────────────────────┘
```

## 1. Hero — rediseñado

- **Objetivo:** atención y claridad. En cinco segundos: es un tutor, viene con tu libro, es gratis.
- **Mensaje:** "Tu libro ya viene con tutor." Subtítulo: Diza es un tutor académico con IA para bachillerato; te guía con preguntas y te dice en qué página de tu libro está cada respuesta.
- **CTA:** "Activar mi libro" (primario) · "Soy maestro" (secundario, baja a `#para-maestros`, que ahora sí tiene su botón).
- **Microtexto bajo los botones:** "Gratis con tu libro. Ten a la mano tu tarjeta con PIN y tu correo institucional." Resuelve el dato que faltaba (correo institucional) antes del clic.
- **Visual:** escena construida en código sobre un panel arena: un libro de pie en la repisa, la tarjeta con PIN recargada en él y una burbuja de Diza que sale del libro con una pregunta guía y el chip "Pág. 42". Es la idea central de `DESIGN.md` ("el libro sobre el pupitre, y alguien que te explica") en una sola imagen.
- **Se elimina el apilado** (hero fijo de pantalla completa con la sección siguiente subiendo encima) y la foto de escritorio a sangre. Motivos: en celular obligaba a recorrer una pantalla entera antes de ver contenido, el texto sobre foto comprometía el contraste, y la foto a calidad 95 era la imagen más pesada del primer viewport. El efecto de "sección que destapa" queda reservado al footer, donde es la firma de la página.
- **Altura:** la del contenido. En celular la escena asoma bajo los botones para invitar al scroll.
- **Animación:** una entrada al cargar (texto en cascada de 60 ms; la burbuja aparece al final con opacidad y escala desde 0.96). Se conserva el subrayado dibujado bajo "tutor". Con movimiento reducido todo aparece estático.

```
MÓVIL
┌────────────────────────────────┐
│ TUTOR ACADÉMICO CON IA         │
│ Tu libro ya viene              │
│ con tutor.                     │  h1
│ ‾‾‾‾‾                          │
│ Diza te guía con preguntas y   │
│ te dice en qué página está…    │
│ [ Activar mi libro           ] │
│ [ Soy maestro                ] │
│ Gratis con tu libro. Ten a la  │
│ mano tu tarjeta con PIN y…     │
│ ┌────────────────────────────┐ │
│ │   ╭──────────────────────╮ │ │
│ │   │ Antes de responder:  │ │ │
│ │   │ ¿qué dice el ejemplo?│ │ │
│ │   │ [Pág. 42]            │ │ │
│ │   ╰─────────╮────────────╯ │ │
│ │  ▐ libro ▌  ▭ tarjeta PIN  │ │
│ │ ══════════ repisa ═══════  │ │
│ └────────────────────────────┘ │
└────────────────────────────────┘

DESKTOP
┌──────────────────────────────────────────────────────────────────────┐
│ TUTOR ACADÉMICO CON IA             ┌───────────────────────────────┐ │
│ Tu libro ya viene                  │      ╭─────────────────────╮  │ │
│ con tutor.                         │      │ Antes de responder: │  │ │
│                                    │      │ ¿qué dice el…?      │  │ │
│ Diza te guía con preguntas y te    │      │ [Pág. 42]           │  │ │
│ dice en qué página de tu libro     │      ╰──────╮──────────────╯  │ │
│ está cada respuesta.               │                               │ │
│                                    │    ▐  libro  ▌  ▭ tarjeta PIN │ │
│ [Activar mi libro] [Soy maestro]   │  ═══════════ repisa ════════  │ │
│ Gratis con tu libro. Ten a la…     └───────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────┘
        texto 5/12                          escena 7/12
```

## 2. Cómo funciona (demo) — modificado

- **Objetivo:** claridad. Mostrar el producto funcionando en vez de describirlo.
- **Mensaje:** "No te da la respuesta. Te lleva a ella." Tres anotaciones: (1) preguntas con tus palabras, (2) Diza te responde con una pregunta que te hace pensar, (3) te dice la página para que lo compruebes en tu libro.
- **CTA:** ninguno. El siguiente bloque es el de activar; aquí un botón solo distrae de la demostración.
- **Qué cambia:** la rejilla de beneficios (tarjetas idénticas que repetían lo que la conversación ya mostraba) desaparece. La conversación animada que ya existe pasa a ser la protagonista, dentro de un marco de celular hecho en código, y los beneficios se vuelven sus anotaciones.
- **Animación:** la conversación se reproduce una vez al entrar en vista (ya existe). La anotación correspondiente se resalta con `tint` al ritmo de cada turno. Con movimiento reducido se muestra la conversación completa y las tres anotaciones sin resaltar.

```
MÓVIL
┌────────────────────────────────┐
│ CÓMO FUNCIONA                  │
│ No te da la respuesta.         │  h2
│ Te lleva a ella.               │
│      ┌──────────────────┐      │
│      │ ▪ Matemáticas    │      │
│      │        tu duda ▐ │      │
│      │ ▌ pregunta guía  │      │
│      │        intento ▐ │      │
│      │ ▌ confirma       │      │
│      │   [Pág. 42]      │      │
│      │ [ escribe…     ] │      │
│      └──────────────────┘      │
│ ① Pregunta con tus palabras    │  h3
│ ② Te responde con una pregunta │
│ ③ Te dice la página            │
└────────────────────────────────┘

DESKTOP
┌──────────────────────────────────────────────────────────────────────┐
│ CÓMO FUNCIONA                                                        │
│ No te da la respuesta. Te lleva a ella.                              │
│                                                                      │
│  ① Pregunta con tus palabras          ┌──────────────────┐           │
│     texto breve                       │ ▪ Matemáticas    │           │
│ ┌──────────────────────────────┐      │        tu duda ▐ │           │
│ │② Te responde con una pregunta│ ◄──  │ ▌ pregunta guía  │           │
│ │   (anotación activa, tint)   │      │        intento ▐ │           │
│ └──────────────────────────────┘      │ ▌ confirma       │           │
│  ③ Te dice la página                  │   [Pág. 42]      │           │
│     texto breve                       └──────────────────┘           │
└──────────────────────────────────────────────────────────────────────┘
        anotaciones 6/12                    celular 6/12
```

## 3. Para alumnos: activar — modificado

- **Objetivo:** efectividad. Que el alumno sepa qué necesita y qué va a pasar antes de dar clic.
- **Mensaje:** "Actívalo en tres pasos."
  1. **Busca tu tarjeta.** Viene con tu libro, impresa aparte. Ahí está tu PIN.
  2. **Entra con tu correo institucional.** El que te dio tu escuela. Escribe el PIN de tu tarjeta.
  3. **Pregunta lo que no entiendas.** De cualquier tema de tu libro.
- **CTA:** "Activar mi libro" (primario) · "Ya tengo cuenta" (enlace). Nota: "Gratis con tu libro. Hay un límite diario de uso."
- **Qué cambia:** se corrige "folio impreso en las primeras páginas" por la tarjeta con PIN, se agrega el correo institucional y se absorbe la sección "Activar" con su hueco de video (no hay video).
- **Visual:** una sola repisa continua con tres objetos hechos en código (tarjeta con PIN, pantalla de acceso, pantalla de chat). No son tres tarjetas iguales: son objetos sobre una misma línea, numerados.
- **Animación:** los tres pasos entran en cascada (60 ms) al llegar a vista. Nada más.

```
MÓVIL
┌────────────────────────────────┐
│ PARA ALUMNOS                   │
│ Actívalo en tres pasos.        │  h2
│                                │
│ ① ▭ PIN    Busca tu tarjeta    │  h3
│ │          Viene con tu libro… │
│ ② ▯ correo Entra con tu correo │
│ │          institucional…      │
│ ③ ▯ chat   Pregunta lo que no  │
│            entiendas…          │
│ [ Activar mi libro           ] │
│ Ya tengo cuenta                │
│ Gratis con tu libro. Hay un    │
│ límite diario de uso.          │
└────────────────────────────────┘

DESKTOP
┌──────────────────────────────────────────────────────────────────────┐
│ PARA ALUMNOS                                    [Activar mi libro]   │
│ Actívalo en tres pasos.                          Ya tengo cuenta     │
│                                                                      │
│     ▭ tarjeta PIN         ▯ acceso              ▯ chat               │
│ ═══════════════════════ repisa continua ═══════════════════════════  │
│ ① Busca tu tarjeta    ② Entra con tu correo  ③ Pregunta lo que no    │
│   Viene con tu libro…   institucional…         entiendas…            │
│                                                                      │
│ Gratis con tu libro. Hay un límite diario de uso.                    │
└──────────────────────────────────────────────────────────────────────┘
```

## 4. Para maestros — modificado

- **Objetivo:** claridad y efectividad. Qué hace por el maestro y cómo se pide el acceso.
- **Mensaje (de usted):** "Prepare su clase con el mismo libro que usan sus alumnos." Genera actividades, cuestionarios y planeación por unidad; exporta a PDF y Word.
- **Aviso honesto:** "Acceso para maestros en beta. Un administrador le da de alta y le asigna sus libros."
- **CTA:** "Solicitar acceso" → `mailto:` con asunto y cuerpo prellenados (nombre, escuela, materia).
- **Qué cambia:** la sección no tenía ningún botón; ahora tiene el suyo. Las tres tarjetas se vuelven una lista con íconos junto a una maqueta en código del generador (pestañas Actividad / Cuestionario / Planeación, selector de unidad, vista previa con líneas de esqueleto y botones PDF / Word). La maqueta usa líneas de esqueleto, no contenido inventado.
- **Animación:** entrada al llegar a vista. Sin animación en la maqueta.

```
MÓVIL
┌────────────────────────────────┐
│ PARA MAESTROS · [Beta]         │
│ Prepare su clase con el mismo  │  h2
│ libro que usan sus alumnos.    │
│ ✓ Actividades                  │  h3
│ ✓ Cuestionarios                │
│ ✓ Planeación por unidad        │
│ Exporte a PDF o Word.          │
│ ┌────────────────────────────┐ │
│ │ Activ.│Cuestion.│Planeac.  │ │
│ │ Unidad 2 ▾                 │ │
│ │ ▬▬▬▬▬▬▬▬▬▬▬▬               │ │
│ │ ▬▬▬▬▬▬▬▬                   │ │
│ │            [PDF] [Word]    │ │
│ └────────────────────────────┘ │
│ Acceso en beta. Un adminis-    │
│ trador le da de alta…          │
│ [ Solicitar acceso           ] │
└────────────────────────────────┘

DESKTOP
┌──────────────────────────────────────────────────────────────────────┐
│ PARA MAESTROS · [Beta]              ┌──────────────────────────────┐ │
│ Prepare su clase con el mismo       │ Actividad│Cuestionario│Plan. │ │
│ libro que usan sus alumnos.         │ Unidad 2 ▾                   │ │
│                                     │ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬             │ │
│ ✓ Actividades   texto breve         │ ▬▬▬▬▬▬▬▬▬▬▬                  │ │
│ ✓ Cuestionarios texto breve         │ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬               │ │
│ ✓ Planeación por unidad             │               [PDF] [Word]   │ │
│                                     └──────────────────────────────┘ │
│ Acceso en beta. Un administrador le da de alta y le asigna libros.   │
│ [Solicitar acceso]                                                   │
└──────────────────────────────────────────────────────────────────────┘
        texto 5/12                          maqueta 7/12
```

## 5. Privacidad — nuevo

- **Objetivo:** atención y confianza. Es el hecho más diferenciador y hoy está enterrado en una línea. Le habla a los dos públicos: el alumno pregunta sin pena, el maestro sabe que no es una herramienta de vigilancia.
- **Mensaje:** "Nadie lee las conversaciones." Ni el administrador, ni el maestro, ni otros alumnos. Tampoco hay reportes por alumno.
- **CTA:** ninguno.
- **Visual:** el único bloque petróleo sólido de la página (regla "un solo destacado" de `DESIGN.md`). Panel redondeado dentro del contenedor, texto blanco, sin imagen.
- **Animación:** entrada simple al llegar a vista.

```
MÓVIL
┌────────────────────────────────┐
│ ╭────────────────────────────╮ │
│ │ PRIVACIDAD                 │ │
│ │ Nadie lee las              │ │  h2
│ │ conversaciones.            │ │
│ │ ✕ Ni el administrador      │ │
│ │ ✕ Ni el maestro            │ │
│ │ ✕ Ni otros alumnos         │ │
│ │ Tampoco hay reportes por   │ │
│ │ alumno.                    │ │
│ ╰────────────────────────────╯ │
└────────────────────────────────┘

DESKTOP
┌──────────────────────────────────────────────────────────────────────┐
│ ╭──────────────────────────────────────────────────────────────────╮ │
│ │ PRIVACIDAD                                                       │ │
│ │ Nadie lee las conversaciones.        ✕ Ni el administrador       │ │
│ │                                      ✕ Ni el maestro             │ │
│ │ Tampoco hay reportes por alumno.     ✕ Ni otros alumnos          │ │
│ ╰──────────────────────────────────────────────────────────────────╯ │
└──────────────────────────────────────────────────────────────────────┘
```

## 6. Preguntas frecuentes — modificado

- **Objetivo:** claridad. Quitar las últimas objeciones antes del cierre.
- **Mensaje:** respuestas cortas, solo con hechos del producto.
- **CTA:** "¿Otra duda? Escríbenos" (enlace `mailto:` al correo de contacto).
- **Entradas (8):**
  1. ¿Cuánto cuesta? — Nada: viene incluido con tu libro.
  2. ¿Dónde está mi PIN? — En la tarjeta impresa que viene con tu libro, aparte.
  3. ¿Con qué correo entro? — Con tu correo institucional.
  4. ¿Diza me resuelve la tarea? — No. Te guía con preguntas y te dice en qué página está.
  5. ¿Alguien puede leer lo que pregunto? — Nadie.
  6. ¿Hay límite de uso? — Sí, hay un límite diario.
  7. Soy maestro, ¿cómo obtengo acceso? — Está en beta; un administrador le da de alta. Solicítelo por correo.
  8. ¿Qué puede ver el maestro de sus alumnos? — Ni conversaciones ni reportes por alumno. Sustituye a la entrada incorrecta de "reporte por alumno desde el primer uso".
- **Se conserva:** el acordeón actual. Estas mismas entradas alimentan el JSON-LD `FAQPage` del paso 4.

```
MÓVIL
┌────────────────────────────────┐
│ PREGUNTAS FRECUENTES           │
│ Lo que suelen preguntarnos     │  h2
│ ¿Cuánto cuesta?              + │
│ ¿Dónde está mi PIN?          + │
│ ¿Con qué correo entro?       + │
│ … (8)                          │
│ ¿Otra duda? Escríbenos         │
└────────────────────────────────┘

DESKTOP
┌──────────────────────────────────────────────────────────────────────┐
│ PREGUNTAS FRECUENTES          ¿Cuánto cuesta?                      + │
│ Lo que suelen                 ¿Dónde está mi PIN?                  + │
│ preguntarnos                  ¿Con qué correo entro?               + │
│                               ¿Diza me resuelve la tarea?          + │
│ ¿Otra duda? Escríbenos        … (8)                                  │
└──────────────────────────────────────────────────────────────────────┘
        título 4/12                         acordeón 8/12
```

## 7. Cierre: activar — modificado

- **Objetivo:** efectividad. Una sola acción, sin distracciones.
- **Mensaje:** "¿Ya tienes tu tarjeta? Activa tu libro."
- **CTA:** "Activar mi libro" (primario) · "Ya tengo cuenta" (enlace) · línea para maestros: "¿Es maestro? Solicitar acceso".
- **Visual:** fondo arena con la misma escena del hero en versión reducida (libro y tarjeta en la repisa, sin burbuja). Reutiliza el componente.
- **Footer:** este bloque hereda `relative z-10 rounded-b-seam sm:rounded-b-seam-lg` y pasa a ser el que destapa el footer, en lugar de Testimonios. El efecto no cambia.

```
MÓVIL
┌────────────────────────────────┐
│ ¿Ya tienes tu tarjeta?         │  h2
│ Activa tu libro.               │
│ [ Activar mi libro           ] │
│ Ya tengo cuenta                │
│ ¿Es maestro? Solicitar acceso  │
│     ▐ libro ▌ ▭ tarjeta        │
│ ═══════════ repisa ══════════  │
╰────────────────────────────────╯  ← esquinas redondeadas
  d i z a   (footer destapándose)

DESKTOP
┌──────────────────────────────────────────────────────────────────────┐
│ ¿Ya tienes tu tarjeta?                                               │
│ Activa tu libro.                          ▐  libro  ▌ ▭ tarjeta PIN  │
│ [Activar mi libro]  Ya tengo cuenta     ═════════ repisa ══════════  │
│ ¿Es maestro? Solicitar acceso                                        │
╰──────────────────────────────────────────────────────────────────────╯
  d i z a   (footer destapándose)
```

## Footer — se conserva

Comportamiento, wordmark y grano intactos. Cambia el color (paso 2) y los enlaces de navegación siguen a las anclas nuevas (solo datos en `landing.ts`). Pendiente del usuario: WhatsApp "Próximamente" y enlaces legales que hoy apuntan a `#`.

---

## Qué se elimina y por qué

| Se elimina | Por qué |
|---|---|
| Testimonios | Son placeholders. No se inventan testimonios. |
| Rejilla de Beneficios | Repetía con tarjetas idénticas lo que la conversación ya demuestra. Sus tres ideas pasan a ser las anotaciones de la demo. |
| Sección "Activar" con hueco de video | No existe el video. Su mensaje se reparte entre el bloque 3 y el cierre. |
| Apilado del hero y foto a sangre | Peor lectura y rendimiento en celular. El efecto de destape queda solo en el footer. |
| "Folio impreso en las primeras páginas" | Es incorrecto: es una tarjeta con PIN. |
| FAQ "reporte por alumno desde el primer uso" | Es incorrecto: no hay reporte por alumno. |
| "La tutora" | Diza se nombra "tutor académico con IA", sin género. |
| Las cuatro imágenes de stock (recomendado, ver decisión 1) | No muestran el producto real: libros genéricos, tarjeta en blanco, celular vacío en perspectiva, escritorio con un libro ajeno. |

## Imágenes

Recomendación: construir en código los elementos derivados del producto (portada de libro ilustrada, tarjeta con PIN, repisa, marco de celular, maquetas del tutor). Pesan casi nada, usan los tokens y se ven nítidos en cualquier pantalla. Esto resuelve el peso de `libro.png` (2 MB) al dejar de usarlo.

Huecos marcados que se dejarían (con contenido, proporción, alt y prompt de Recraft):
- **Tarjeta con PIN real** (bloque 3, paso 1), 3:2, objeto con fondo removido. Lo ideal es una foto de la tarjeta verdadera: el alumno tiene que reconocerla.
- **Portada real del libro** (hero y cierre), 3:4, objeto con fondo removido. Mientras no exista, se usa la portada ilustrada en código con el texto "Tu libro".

## Orden de construcción (paso 3)

Cinco entregas, cada una con su QA, commit y ✋:

1. Header + Hero (incluye las piezas compartidas: portada, tarjeta, repisa).
2. Cómo funciona (demo).
3. Para alumnos: activar.
4. Para maestros + Privacidad.
5. Preguntas + Cierre + limpieza (quitar Testimonios, imágenes y constantes sin uso).

## Decisiones del usuario (2026-11-11) — propuesta aprobada

1. **Imágenes:** se retiran las cuatro de stock. Los elementos del producto se construyen en código.
2. **Fraunces en la portada del libro:** sí, con `next/font`, un solo peso (lo dejó a mi criterio).
3. **Titular del hero:** "Tu libro ya viene con tutor."
4. **"Activar mi libro" y "Ya tengo cuenta":** apuntan a `https://tutor.diza.com.mx` (raíz) con TODO hasta que existan las rutas.
5. **Correo de contacto:** `contacto@diza.com` por ahora, con TODO; el definitivo no está decidido.
