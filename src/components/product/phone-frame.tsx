import type { ReactNode } from "react"

/** Bare phone body: an `ink` bezel around a `bg` screen. Its content is supplied by the caller. */
function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-80 rounded-panel bg-ink p-2.5 drop-shadow-object">
      <div className="flex min-h-[30rem] flex-col rounded-screen bg-bg p-4">{children}</div>
    </div>
  )
}

export { PhoneFrame }
