import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { MotionPreferences } from "@/components/motion/motion-preferences";
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

export const metadata: Metadata = {
  title: "Diza | La tutora dentro de tu libro",
  description:
    "Diza acompaña a estudiantes de preparatoria con preguntas basadas en las páginas de su propio libro.",
  openGraph: {
    title: "Diza | La tutora dentro de tu libro",
    description:
      "Diza acompaña a estudiantes de preparatoria con preguntas basadas en las páginas de su propio libro.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${jakarta.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg text-ink">
        <MotionPreferences>{children}</MotionPreferences>
      </body>
    </html>
  );
}
