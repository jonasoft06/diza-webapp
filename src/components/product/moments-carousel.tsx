"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Bookmark } from "lucide-react";
import { EASE_OUT_STRONG } from "@/components/motion/easing";
import { RevealItem, Stagger } from "@/components/motion/reveal";
import { DizaMessage, TypingDots } from "@/components/product/diza-message";
import { Chip } from "@/components/ui/chip";
import { moments } from "@/content/landing";
import { useOneShot } from "@/hooks/use-one-shot";
import { cn } from "@/lib/utils";

/** Pause before Diza starts typing, and the extra wait per card so they answer one after another. */
const TYPING_START_MS = 700;
const CARD_STAGGER_MS = 350;
const TYPING_MS = 1000;
const CHIP_AFTER_REPLY_MS = 450;

type MomentItem = (typeof moments.items)[number];

/**
 * One moment: the context chip, the situation in the student's voice and, at
 * the foot, Diza's answer. When the card is on screen Diza types (three dots)
 * and then the bubble appears; the bubble's room is reserved from the start, so
 * the card never changes height. Each effect has its own wrapper.
 */
function MomentCard({ item, index }: { item: MomentItem; index: number }) {
  const { ref, isPlaying, prefersReducedMotion } = useOneShot(0.6);
  const [isTyping, setIsTyping] = useState(false);
  const [isReplyShown, setIsReplyShown] = useState(false);
  const [isChipShown, setIsChipShown] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    // Reduced motion: the answer is there from the start.
    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        setIsReplyShown(true);
        setIsChipShown(true);
      }, 0);
      return () => clearTimeout(timer);
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    const startMs = TYPING_START_MS + index * CARD_STAGGER_MS;
    timers.push(setTimeout(() => setIsTyping(true), startMs));
    timers.push(
      setTimeout(() => {
        setIsTyping(false);
        setIsReplyShown(true);
      }, startMs + TYPING_MS)
    );
    timers.push(setTimeout(() => setIsChipShown(true), startMs + TYPING_MS + CHIP_AFTER_REPLY_MS));
    return () => timers.forEach(clearTimeout);
  }, [isPlaying, prefersReducedMotion, index]);

  const Icon = item.icon;
  const hidden = { opacity: 0, transform: "translateY(8px)" };
  const shown = { opacity: 1, transform: "translateY(0px)" };

  return (
    <div
      ref={ref}
      className="flex h-full flex-col rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6"
    >
      <Chip icon={Icon} className="self-start">
        {item.context}
      </Chip>
      <p className="mt-5 text-xl font-semibold leading-snug text-pretty text-ink lg:text-2xl">
        {item.situation}
      </p>

      <div aria-hidden="true" className="mt-auto pt-6">
        <div className="relative">
          <motion.div
            initial={hidden}
            animate={isReplyShown ? shown : hidden}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: EASE_OUT_STRONG }}
          >
            <DizaMessage>
              <p className="text-sm leading-snug text-ink">{item.reply}</p>
              {item.pageChip ? (
                <motion.div
                  className="mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isChipShown ? 1 : 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: EASE_OUT_STRONG }}
                >
                  <Chip icon={Bookmark} className="bg-surface">
                    {item.pageChip}
                  </Chip>
                </motion.div>
              ) : null}
            </DizaMessage>
          </motion.div>
          <AnimatePresence>{isTyping ? <TypingDots /> : null}</AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/**
 * Three cards side by side from `md`. Below it they become a horizontal
 * carousel with scroll-snap (each card ~85% wide, the next one peeking) and a
 * row of dots that follows the scroll and jumps to a card when tapped.
 */
export function MomentsCarousel() {
  const listRef = useRef<HTMLOListElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const padLeft = Number.parseFloat(getComputedStyle(list).scrollPaddingLeft) || 0;
      const atEnd = list.scrollLeft + list.clientWidth >= list.scrollWidth - 2;
      const cards = Array.from(list.children) as HTMLElement[];
      let nearest = 0;
      cards.forEach((card, index) => {
        const distance = Math.abs(card.offsetLeft - padLeft - list.scrollLeft);
        const best = Math.abs(cards[nearest].offsetLeft - padLeft - list.scrollLeft);
        if (distance < best) nearest = index;
      });
      setActiveIndex(atEnd ? cards.length - 1 : nearest);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    list.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      list.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  function goTo(index: number) {
    const list = listRef.current;
    const card = list?.children[index] as HTMLElement | undefined;
    if (!list || !card) return;
    const padLeft = Number.parseFloat(getComputedStyle(list).scrollPaddingLeft) || 0;
    list.scrollTo({ left: card.offsetLeft - padLeft, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }

  return (
    <>
      {/* `Stagger` only drives the entrance; the scrolling list is the plain <ol> inside it. */}
      <Stagger>
        <ol
          ref={listRef}
          aria-label={moments.listLabel}
          className="-mx-4 mt-8 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-6 [scrollbar-width:none] sm:-mx-6 sm:scroll-px-6 sm:px-6 md:mx-0 md:mt-10 md:grid md:snap-none md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:mt-14 [&::-webkit-scrollbar]:hidden"
        >
          {moments.items.map((item, index) => (
            <RevealItem key={item.id} as="li" className="w-[85%] shrink-0 snap-start md:w-auto">
              <MomentCard item={item} index={index} />
            </RevealItem>
          ))}
        </ol>
      </Stagger>

      <div className="-mt-2 flex justify-center md:hidden">
        {moments.items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-label={`${moments.dotLabel} ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => goTo(index)}
            className="group flex size-8 items-center justify-center rounded-full outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary"
          >
            <span
              className={cn(
                "h-2 rounded-full transition-[width,background-color] duration-200 ease-out-strong",
                index === activeIndex ? "w-5 bg-primary" : "w-2 bg-primary/30"
              )}
            />
          </button>
        ))}
      </div>
    </>
  );
}
