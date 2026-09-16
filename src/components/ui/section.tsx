import type { ComponentProps, ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

/** Consistent vertical rhythm + max-w-6xl container for every landing section. */
function Section({ className, children, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("px-4 py-20 sm:px-6 lg:px-8 lg:py-24", className)} {...props}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}

function Eyebrow({ className, children, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("text-eyebrow text-accent", className)} {...props}>
      {children}
    </p>
  )
}

/** 44px rounded square holding an outline icon — the one icon treatment. */
function IconTile({
  icon: Icon,
  tone = "tint",
  className,
}: {
  icon: LucideIcon
  tone?: "tint" | "onAccent"
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-xl",
        tone === "tint" ? "bg-accent-tint text-accent" : "bg-white/12 text-white",
        className
      )}
    >
      <Icon className="size-5" strokeWidth={1.75} />
    </span>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "center" | "left"
}) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-2xl text-center")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "text-[clamp(2rem,3.5vw,3rem)] font-semibold text-ink",
          eyebrow && "mt-4"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

export { Section, SectionHeading, Eyebrow, IconTile }
