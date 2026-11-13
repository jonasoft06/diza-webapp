import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { InstantHistoryScroll } from "@/components/layout/instant-history-scroll";
import { MotionPreferences } from "@/components/motion/motion-preferences";
import { seo } from "@/content/landing";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: SITE_NAME,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // `data-scroll-behavior="smooth"` (needed because globals.css sets `scroll-behavior: smooth`): since Next 16
    // it no longer turns smooth scrolling off during a route change by itself. Without it, the page's
    // scroll-into-view calls start a smooth scroll toward the last block (the footer) that the call on the
    // first block does not cancel, so the new page opened at the bottom.
    <html lang="es-MX" data-scroll-behavior="smooth" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg text-ink">
        <InstantHistoryScroll />
        <MotionPreferences>{children}</MotionPreferences>
      </body>
    </html>
  );
}
