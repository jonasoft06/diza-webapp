import { seo } from "@/content/landing";

// /alumnos shares the landing's social card (the same brand image). Giving the page its own
// `openGraph` metadata makes Next drop the root card, so the file is repeated here; the image
// itself is drawn once, in ../opengraph-image.tsx.
export const alt = seo.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export { default } from "../opengraph-image";
