import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Reveal, RevealItem, Stagger } from "@/components/motion/reveal";
import { chooser } from "@/content/landing";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const TITLE_ID = "elige-tu-camino-titulo";

/**
 * "Elige tu camino": two big cards, side by side from `md` and stacked below it,
 * each one a single link to the page for that audience. On hover the card rises
 * a little and its arrow moves forward; reduced motion keeps both still. The
 * photo is decorative (the text already says who the card is for).
 */
export function ChoosePath() {
  return (
    <Section id={SECTION_IDS.chooser} aria-labelledby={TITLE_ID} className="bg-sand">
      <Container>
        <Reveal variant="fade">
          <h2 id={TITLE_ID} className="text-center text-section font-semibold text-ink">
            {chooser.title}
          </h2>
        </Reveal>

        <Stagger className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2 md:gap-6 lg:mt-14">
          {chooser.options.map((option) => (
            <RevealItem key={option.id}>
              <Link
                href={option.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-card outline-none transition-[translate,scale,box-shadow] duration-200 ease-out-strong hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:translate-y-0 active:scale-[0.99] active:duration-100 motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-tint">
                  <Image
                    src={option.image}
                    alt=""
                    fill
                    sizes="(min-width: 896px) 28rem, calc(100vw - 2rem)"
                    className={cn(
                      option.imageFit === "cover" ? "object-cover" : "object-contain p-[9%] drop-shadow-object-soft"
                    )}
                  />
                </div>

                <div className="flex flex-1 items-start justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-ink">{option.title}</h3>
                    <p className="mt-2 max-w-xs text-body-sm leading-relaxed text-pretty text-muted sm:text-base">
                      {option.description}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center self-center rounded-full bg-primary text-white transition-colors duration-200 ease-out-strong group-hover:bg-primary-dark"
                  >
                    <ArrowRight
                      className="size-5 transition-transform duration-200 ease-out-strong group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
                      strokeWidth={2.25}
                    />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
