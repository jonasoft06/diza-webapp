import type { MetadataRoute } from "next";
import { ALUMNOS_PATH, MAESTROS_PATH, SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL },
    { url: `${SITE_URL}${ALUMNOS_PATH}` },
    { url: `${SITE_URL}${MAESTROS_PATH}` },
  ];
}
