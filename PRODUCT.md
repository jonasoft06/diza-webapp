# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

Dos superficies distintas:

- **Landing** — `diza.com.mx` (este repositorio). Es la primera puerta para quien todavía no usa Diza. No tiene cuentas ni formularios propios: explica el producto y manda al tutor.
- **Tutor** — `tutor.diza.com.mx` (otro repositorio). Ahí se activa el libro, se inicia sesión y se usa el producto.

## Users

Diza se usa en bachillerato mexicano, siempre junto a un libro físico.

- **Alumno.** Tiene el libro en las manos y una tarjeta impresa con un PIN. Llega a la landing desde el celular, normalmente porque la tarjeta, el libro o su maestro lo mandaron. Quiere saber qué es esto y cómo entrar. Se le habla de tú.
- **Maestro.** Usa el mismo libro para dar clase. Llega con más calma, a menudo desde una computadora, y evalúa si la herramienta le sirve y si lo vigila. Se le habla de usted.

Quien decide la adopción (dirección o coordinación académica) puede llegar también, pero la landing no le habla directamente: la sección de maestros y la de privacidad resuelven sus dudas.

## Product Purpose

Diza es un tutor académico con IA anclado a un libro físico. No lo reemplaza: lo respalda.

- Con el alumno, Diza guía con preguntas en lugar de dar la respuesta, y cada respuesta cita la página del libro en la que se basa.
- Con el maestro, Diza genera actividades, cuestionarios y planeación por unidad a partir del libro que tiene asignado, exportables a PDF y Word.

El propósito de la landing es que el visitante entienda eso en segundos y dé el siguiente paso: el alumno activa su libro, el maestro solicita acceso.

## Positioning

Diza no es un chatbot general ni un libro digital. Su mecanismo es estar limitado a un libro específico: responde desde sus páginas y las cita. Lo que lo distingue de "preguntarle a una IA" son tres cosas verificables:

1. **Cita la página.** El alumno puede abrir el libro y comprobarlo.
2. **Pregunta antes de responder.** No entrega la tarea resuelta.
3. **Nadie lee las conversaciones.** Ni el administrador, ni el maestro, ni otro alumno.

## Capabilities and Constraints

**Alumno**
- Gratis, incluido en el libro.
- Activa su acceso con el PIN de una tarjeta impresa que viene aparte del libro (no está impreso en sus páginas).
- Entra con su correo institucional.

**Maestro**
- En beta. No se registra solo: el administrador lo da de alta y le asigna libros.
- Genera actividades, cuestionarios y planeación por unidad. Exporta a PDF y Word.

**Para todos**
- Nadie (administrador, maestro, alumno) lee las conversaciones.
- Hay límites diarios de uso.
- No existe reporte por alumno ni seguimiento individual para el maestro.

**Decidido (2026-11-11)**
- El maestro solicita acceso por correo: botón "Solicitar acceso" con un `mailto:` al correo de contacto, con asunto y cuerpo prellenados (nombre, escuela, materia).
- Diza se nombra "tutor académico con IA". No se le da género ("la tutora" queda fuera).
- Las rutas de activación e inicio de sesión en `tutor.diza.com.mx` todavía no existen: viven en `src/lib/constants.ts` con TODO.

**Sin decidir (no resolver sin preguntar)**
- Dominio y correo de contacto definitivos. Hoy: `https://diza.com.mx` y `contacto@diza.com`, provisionales, en `src/lib/constants.ts` con TODO.
- Número de WhatsApp y páginas de aviso de privacidad y términos (hoy "Próximamente" y enlaces `#` en el footer).
- Nombre de la organización en los datos estructurados: el JSON-LD dice "Diza" y el pie de página nombra a "Distribuidora Educativa (DIS)".

## Landing: bloques finales

Orden de lectura: primero qué es Diza, después alumnos, después maestros; cierra con dudas, CTA y footer. Detalle visual en `DESIGN.md` › "Bloques de la página".

| Bloque | Qué resuelve | Acción |
| --- | --- | --- |
| Hero | Qué es: "Tu libro ya viene con tutor." | "Activar mi libro" → tutor; "Soy maestro" → Para maestros |
| Cómo funciona | Demuestra el mecanismo con una conversación: pregunta antes de responder y cita la página | — |
| Para alumnos | Tres pasos: tarjeta con PIN, correo institucional, preguntar | "Activar mi libro"; "Ya tengo cuenta" |
| Para maestros | Qué genera (actividades, cuestionarios, planeación) y que está en beta | "Solicitar acceso" (correo prellenado) |
| Privacidad | Nadie lee las conversaciones; hay límites diarios | — |
| Preguntas frecuentes | Ocho dudas reales; alimentan el JSON-LD `FAQPage` | "Escríbenos" |
| Cierre | Última oportunidad de activar | "Activar mi libro"; "Ya tengo cuenta"; "Solicitar acceso" |

No hay testimonios, cifras ni logotipos de escuelas: se retiraron por ser placeholders.

## Brand Commitments

- Nombre: "Diza". El wordmark se escribe en minúsculas: `diza`.
- Sistema visual "Petróleo + arena", el mismo del tutor. La landing y el tutor deben sentirse como un solo producto. Detalle en `DESIGN.md`, que es la fuente de verdad visual.
- Tipografía: Plus Jakarta Sans. Fraunces solo dentro de portadas de libro ilustradas.
- El footer conserva su comportamiento (se destapa al final del scroll), el wordmark gigante y el grano de papel.
- Textos en español de México. Alumno de tú, maestro de usted.

## Evidence on Hand

No hay testimonios, cifras de uso, escuelas ni catálogo público de libros. No se inventan. Cualquier ejemplo dentro de un mockup (materia, número de página, pregunta) es ilustrativo y debe leerse como ejemplo, no como dato.

Tampoco hay fotografías reales del producto: las imágenes de stock se retiraron y `public/` no tiene imágenes. El libro, la tarjeta con PIN y las pantallas del tutor están dibujados en código. Los dos huecos de imagen pendientes (tarjeta con PIN real y portada real del libro) están en `DESIGN.md` › "Huecos de imagen", con contenido, proporción, texto alternativo y prompt sugerido.

## Product Principles

- El libro físico es el ancla. La plataforma lo respalda, nunca lo sustituye.
- Toda respuesta se apoya en una página del libro y lo dice.
- Guiar con preguntas, no entregar respuestas.
- Privacidad como hecho de producto, no como promesa de marketing: nadie lee las conversaciones.
- Dos trabajos distintos (alumno que estudia, maestro que prepara clase) que no se mezclan en un "asistente de IA" genérico.
- La landing solo afirma lo que el tutor hace hoy.
