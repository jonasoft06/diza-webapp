import { ChevronDown } from "lucide-react"
import { forTeachers } from "@/content/landing"
import { cn } from "@/lib/utils"

const { generator } = forTeachers

const bulletBars = ["w-4/5", "w-3/5", "w-2/3"]

/** Teacher's generator drawn in code: tabs, unit picker, document preview as skeleton bars, export buttons. Not interactive. */
function GeneratorScreen() {
  return (
    <div
      role="img"
      aria-label={generator.description}
      className="rounded-screen border border-line bg-surface p-4 shadow-card sm:p-6"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-1 rounded-full bg-bg p-1">
          {generator.tabs.map((tab, index) => (
            <span
              key={tab}
              className={cn(
                "flex-1 whitespace-nowrap rounded-full px-2 py-1.5 text-center text-xs sm:flex-none sm:px-4 sm:text-sm",
                index === 0 ? "bg-tint font-semibold text-primary" : "font-medium text-muted"
              )}
            >
              {tab}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-2 self-start rounded-xl border border-line bg-surface py-2 pl-3 pr-2.5 text-sm font-medium text-ink sm:self-auto">
          {generator.unit}
          <ChevronDown className="size-4 text-muted" strokeWidth={2} aria-hidden="true" />
        </span>
      </div>

      <div className="mt-4 rounded-2xl bg-bg p-4 lg:p-6">
        <div className="flex flex-col gap-4 rounded-lg border border-line bg-surface p-4 sm:p-5 lg:gap-7 lg:p-8">
          <span className="h-3 w-2/5 rounded-full bg-ink/30" />
          <div className="flex flex-col gap-2">
            <span className="h-2 w-full rounded-full bg-ink/15" />
            <span className="h-2 w-11/12 rounded-full bg-ink/15" />
            <span className="h-2 w-3/5 rounded-full bg-ink/15" />
          </div>
          <div className="flex flex-col gap-3 lg:gap-6">
            {bulletBars.map((width) => (
              <div key={width} className="flex items-start gap-3">
                <span className="mt-0.5 size-4 shrink-0 rounded-md bg-tint" />
                <div className="flex flex-1 flex-col gap-2">
                  <span className="h-2 w-full rounded-full bg-ink/15" />
                  <span className={cn("h-2 rounded-full bg-ink/15", width)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        {generator.exportFormats.map((format) => (
          <span
            key={format}
            className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-semibold text-ink"
          >
            {format}
          </span>
        ))}
      </div>
    </div>
  )
}

export { GeneratorScreen }
