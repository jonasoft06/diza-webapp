"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
import { Container, Section } from "@/components/layout/container";
import { EASE_OUT_STRONG } from "@/components/motion/easing";
import { Button, ButtonArrow } from "@/components/ui/button";
import { useOneShot } from "@/hooks/use-one-shot";
import { SECTION_IDS } from "@/lib/constants";

const CTA_TITLE_ID = "cierre-titulo";

type CtaButton = { label: string; href: string };

/** What each page says in its closing block; `subtitle` and `secondary` are optional. */
export type FinalCtaContent = {
  title: string;
  subtitle?: string;
  primary: CtaButton;
  secondary?: CtaButton;
};

/** Total travel of the card's scroll parallax is twice this (px). */
const PARALLAX_PX = 10;

const BLOCK_HIDDEN = { opacity: 0, transform: "scale(0.98)" };
const BLOCK_SHOWN = { opacity: 1, transform: "scale(1)" };

const floatStyle = {
  "--float-amp": "6px",
  "--float-tilt": "1.5deg",
  "--float-duration": "5.6s",
  // After the block has finished entering.
  "--float-delay": "700ms",
} as CSSProperties;

/**
 * Last block before the footer. This section is also what uncovers the pinned
 * footer (see "Footer (contrato)" in DESIGN.md): it stays `relative z-10`, opaque,
 * and keeps the rounded bottom corners. The petróleo block inside it is
 * contained in the page's layout width.
 *
 * The PIN card has three effects, each on its own wrapper: scroll parallax
 * (outer), the looping float (middle) and the image itself. The block enters
 * with a fade and a scale from 0.98. The text and the buttons come from `content`.
 */
export function FinalCta({ content }: { content: FinalCtaContent }) {
  const { ref, isPlaying, prefersReducedMotion } = useOneShot(0.3);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [PARALLAX_PX, -PARALLAX_PX], { clamp: true });
  const parallax = useMotionTemplate`translateY(${y}px)`;

  return (
    <Section
      id={SECTION_IDS.activate}
      aria-labelledby={CTA_TITLE_ID}
      className="relative z-10 rounded-b-seam py-0 pb-16 sm:rounded-b-seam-lg lg:py-0 lg:pb-24"
    >
      <Container>
        <div ref={ref}>
          <motion.div
            initial={BLOCK_HIDDEN}
            animate={isPlaying ? BLOCK_SHOWN : BLOCK_HIDDEN}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: EASE_OUT_STRONG }}
          >
            <div className="relative grid items-center gap-8 overflow-hidden rounded-[2.5rem] bg-primary-dark p-8 text-white sm:p-12 lg:grid-cols-2 lg:gap-12 lg:p-16">
              <div className="relative z-10">
                <h2 id={CTA_TITLE_ID} className="text-section font-semibold text-balance text-white">
                  {content.title}
                </h2>
                {content.subtitle ? (
                  <p className="mt-4 max-w-md text-base leading-relaxed text-balance text-white/70 sm:text-lg">
                    {content.subtitle}
                  </p>
                ) : null}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Button href={content.primary.href} variant="onDark" className="w-full sm:w-auto">
                    {content.primary.label}
                    <ButtonArrow />
                  </Button>
                  {content.secondary ? (
                    <Button href={content.secondary.href} variant="outlineOnDark" className="w-full sm:w-auto">
                      {content.secondary.label}
                    </Button>
                  ) : null}
                </div>
              </div>

              {/* Decorative: the text already names the card. On phones it goes on top, smaller. */}
              <div aria-hidden="true" className="relative order-first mx-auto w-56 sm:w-72 lg:order-last lg:w-full lg:max-w-md">
                {/* Soft halo of the light petróleo (#8fc3d6) behind the card. */}
                <div className="pointer-events-none absolute -inset-[22%] bg-[radial-gradient(closest-side,rgb(143_195_214/0.2),transparent)]" />
                <motion.div
                  className="relative max-md:transform-none! motion-reduce:transform-none!"
                  style={{ transform: parallax }}
                >
                  <div className="animate-hero-float-tilt" style={floatStyle}>
                    <Image
                      src="/images/hero/pin_card.webp"
                      alt=""
                      width={720}
                      height={506}
                      sizes="(min-width: 1024px) 28rem, (min-width: 640px) 18rem, 14rem"
                      className="h-auto w-full max-w-none drop-shadow-[0_22px_30px_rgb(5_18_24/0.45)]"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
