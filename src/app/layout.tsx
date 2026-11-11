import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { MotionPreferences } from "@/components/motion/motion-preferences";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-fraunces",
  display: "swap",
});

const TITLE = "Diza: el tutor académico con IA que viene con tu libro";
const DESCRIPTION =
  "Tutor académico con IA para bachillerato, incluido con tu libro. Te guía con preguntas y cita la página donde está cada respuesta. Actívalo con tu PIN.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${jakarta.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg text-ink">
        <MotionPreferences>{children}</MotionPreferences>
      </body>
    </html>
  );
}
