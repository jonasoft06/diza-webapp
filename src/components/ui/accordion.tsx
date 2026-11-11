"use client";

import type { ComponentProps, ReactNode } from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/** Allows several items open at once. */
function Accordion({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root multiple className={className} {...props} />;
}

type AccordionItemProps = {
  value: string | number;
  question: ReactNode;
  children: ReactNode;
  className?: string;
};

/**
 * Base UI wires aria-expanded on the trigger and aria-controls while the panel
 * is open. The panel animates via `--accordion-panel-height`.
 */
function AccordionItem({ value, question, children, className }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      value={value}
      className={cn(
        "overflow-hidden rounded-3xl border border-line bg-surface shadow-card transition-shadow duration-200 ease-out hover:shadow-card-hover",
        className
      )}
    >
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger className="group flex min-h-16 w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary sm:px-7">
          <span className="text-body-sm font-semibold text-ink sm:text-base">{question}</span>
          <Plus
            className="size-5 shrink-0 text-primary transition-transform duration-250 ease-out-strong group-data-panel-open:rotate-45"
            strokeWidth={2}
            aria-hidden="true"
          />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-250 ease-out-strong data-ending-style:h-0 data-starting-style:h-0">
        <p className="px-6 pb-6 text-body-sm leading-relaxed text-muted sm:px-7">{children}</p>
      </AccordionPrimitive.Panel>
    </AccordionPrimitive.Item>
  );
}

export { Accordion, AccordionItem };
