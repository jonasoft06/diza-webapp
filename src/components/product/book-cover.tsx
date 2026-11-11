/** Illustrated textbook cover, 3:4. The title is the only text set in Fraunces. */
function BookCover({ title }: { title: string }) {
  return (
    <div className="flex aspect-[3/4] w-36 overflow-hidden rounded-l-sm rounded-r-md bg-primary drop-shadow-object sm:w-44 md:w-56 lg:w-48">
      <div className="w-[9%] shrink-0 bg-primary-dark" />
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-5">
        <p className="font-book-cover text-2xl leading-tight text-white sm:text-3xl md:text-4xl lg:text-3xl">{title}</p>
        <p className="text-sm font-bold tracking-[-0.03em] text-white/85">diza</p>
      </div>
    </div>
  )
}

export { BookCover }
