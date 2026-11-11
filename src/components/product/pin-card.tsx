const PIN_DOTS = 6

/** The printed card that ships apart from the book; the PIN is hidden and decorative. */
function PinCard({ label }: { label: string }) {
  return (
    <div className="flex aspect-[3/2] w-28 origin-bottom -rotate-6 flex-col justify-between rounded-lg border border-line bg-surface p-3 drop-shadow-object sm:w-32 md:w-40 lg:w-36">
      <p className="text-eyebrow text-primary">{label}</p>
      <div className="flex gap-1.5">
        {Array.from({ length: PIN_DOTS }, (_, position) => (
          <span key={position} className="size-1.5 rounded-full bg-ink" />
        ))}
      </div>
    </div>
  )
}

export { PinCard }
