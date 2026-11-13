import Image from "next/image";
import { Container, Section } from "@/components/layout/container";
import { Reveal, RevealItem, Stagger } from "@/components/motion/reveal";
import { ExportFileTiles } from "@/components/product/export-file-tiles";
import { PrivacyList } from "@/components/product/privacy-list";
import { DocSheet } from "@/components/product/teacher-doc-sheets";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IconBox } from "@/components/ui/icon-box";
import { forTeachers, privacy } from "@/content/landing";
import { SECTION_IDS, TEACHER_ACCESS_MAILTO } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * "Para maestros" and "Privacidad" as one bento. Four columns from `lg`:
 *
 *   A A B1 B2      A: photo + access (2 × 2)
 *   A A B3 B3      B: the three tools; the third is wide
 *   C C D D        C: export, D: privacy
 *
 * Two columns from `md` (A, B1 B2, B3, C, D each on its row) and one column
 * below, in DOM order: A, the three B, C, D. No cell is left empty at any width.
 */
export function ForTeachers({ heading = forTeachers }: { heading?: { eyebrow?: string; title: string } }) {
  return (
    <Section id={SECTION_IDS.tools} className="py-12 md:py-20 lg:py-24">
      <Container>
        <Reveal variant="fade">
          {heading.eyebrow ? <Eyebrow>{heading.eyebrow}</Eyebrow> : null}
          <h2 className={cn("max-w-3xl text-section font-semibold text-ink", heading.eyebrow && "mt-4")}>
            {heading.title}
          </h2>
        </Reveal>

        <Stagger className="mt-7 grid gap-3 md:mt-10 md:gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {/* A: the desk and how to get access. */}
          <RevealItem className="flex flex-col rounded-3xl border border-line bg-surface p-3 shadow-card md:col-span-2 lg:row-span-2">
            <div className="relative aspect-16/10 overflow-hidden rounded-2xl md:aspect-video lg:aspect-auto lg:min-h-56 lg:flex-1">
              <Image
                src="/images/maestros/teacher_desk.webp"
                alt={forTeachers.deskAlt}
                fill
                sizes="(min-width: 1152px) 34rem, (min-width: 768px) 90vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 p-4 sm:p-5 md:flex-row md:items-center md:justify-between md:gap-8 lg:flex-col lg:items-start lg:gap-5">
              <div className="max-w-md space-y-2 text-body-sm leading-relaxed text-pretty text-muted sm:text-base">
                <p>{forTeachers.accessNotice}</p>
                <p>{forTeachers.accessNote}</p>
              </div>
              <Button href={TEACHER_ACCESS_MAILTO} className="w-full shrink-0 md:w-auto">
                {forTeachers.cta}
              </Button>
            </div>
          </RevealItem>

          {/* B: one card per tool, each with a miniature of the document it makes. */}
          {forTeachers.features.map((feature, index) => {
            const isWide = index === forTeachers.features.length - 1;

            return (
              <RevealItem
                key={feature.id}
                className={cn(
                  "flex flex-col gap-5 rounded-3xl bg-sand p-4 md:p-6",
                  isWide && "md:col-span-2 md:flex-row md:items-center md:gap-8"
                )}
              >
                {/* Below md the card is compact: icon beside title and description, no miniature. */}
                <div
                  className={cn(
                    "grid grid-cols-[auto_1fr] gap-x-3 md:flex md:flex-col md:gap-x-0",
                    isWide && "md:flex-1"
                  )}
                >
                  <div className="contents md:flex md:items-center md:gap-3">
                    <IconBox icon={feature.icon} className="row-span-2 self-start md:row-span-1 md:self-auto" />
                    <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
                  </div>
                  <p className="col-start-2 mt-1 text-body-sm leading-relaxed text-pretty text-muted md:col-start-auto md:mt-3">
                    {feature.description}
                  </p>
                </div>
                <div className={cn("mt-auto hidden md:block", isWide && "md:mt-0 md:w-64 md:shrink-0")}>
                  <DocSheet kind={feature.id} label={feature.sheetLabel} />
                </div>
              </RevealItem>
            );
          })}

          {/* C: export. */}
          <RevealItem className="flex items-center justify-between gap-4 rounded-3xl border border-line bg-surface p-5 shadow-card md:col-span-2 md:gap-6 md:p-8">
            <p className="text-xl font-semibold text-pretty text-ink md:text-2xl">{forTeachers.exportLine}</p>
            <ExportFileTiles formats={forTeachers.exportFormats} />
          </RevealItem>

          {/* D: privacy. It keeps its own anchor, since it used to be a section. */}
          <RevealItem className="flex md:col-span-2">
            <div
              id={SECTION_IDS.privacy}
              className="grid flex-1 content-between gap-x-8 gap-y-4 rounded-3xl bg-primary-dark p-5 text-white md:grid-cols-2 md:gap-y-6 md:p-8"
            >
              <div>
                <Eyebrow className="text-primary-light">{privacy.eyebrow}</Eyebrow>
                <h3 className="mt-3 text-2xl font-semibold text-balance text-white sm:text-3xl lg:text-2xl">
                  {privacy.title}
                </h3>
              </div>
              <PrivacyList items={privacy.exclusions} />
              <p className="text-body-sm text-white/70 md:col-span-2">{privacy.closing}</p>
            </div>
          </RevealItem>
        </Stagger>
      </Container>
    </Section>
  );
}
