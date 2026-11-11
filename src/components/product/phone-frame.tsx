import type { ReactNode } from "react"

type PhoneFrameProps = {
  children: ReactNode
  /** Small phone for step illustrations: thinner bezel, fixed proportion, no minimum height. Width comes from the parent. */
  compact?: boolean
}

/** Bare phone body: an `ink` bezel around a `bg` screen. Its content is supplied by the caller. */
function PhoneFrame({ children, compact = false }: PhoneFrameProps) {
  if (compact) {
    return (
      <div className="aspect-[3/5] w-full rounded-2xl bg-ink p-1 drop-shadow-object md:rounded-3xl md:p-1.5">
        <div className="flex h-full flex-col gap-1.5 rounded-xl bg-bg p-1 md:gap-2 md:rounded-2xl md:p-2">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-80 rounded-panel bg-ink p-2.5 drop-shadow-object">
      <div className="flex min-h-[30rem] flex-col rounded-screen bg-bg p-4">{children}</div>
    </div>
  )
}

export { PhoneFrame }
