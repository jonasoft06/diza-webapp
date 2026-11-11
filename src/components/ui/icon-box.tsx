import type { LucideIcon } from "lucide-react"

/** 44px rounded square holding an outline icon — the one icon treatment. */
function IconBox({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span
      aria-hidden="true"
      className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-tint text-primary"
    >
      <Icon className="size-5" strokeWidth={1.75} />
    </span>
  )
}

export { IconBox }
