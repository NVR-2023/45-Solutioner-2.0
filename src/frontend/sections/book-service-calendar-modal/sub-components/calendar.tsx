const Calendar = () => {
  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();
  const mostRecentSunday = new Date(currentDate);
  mostRecentSunday.setDate(currentDate.getDate() - currentDayOfWeek);

  const lastFourWeekCalendarDate = new Date();
  lastFourWeekCalendarDate.setDate(
    currentDate.getDate() + 28 + (7 - currentDayOfWeek),
  );

  const calendarMonthsString =
    currentDate.getMonth() === lastFourWeekCalendarDate.getMonth()
      ? currentDate.toLocaleString("en-US", { month: "long" }).toLowerCase()
      : `${currentDate.toLocaleString("en-US", { month: "long" }).toLowerCase()}-${lastFourWeekCalendarDate.toLocaleString("en-US", { month: "long" }).toLowerCase()}`;

  const DAYS_OF_THE_WEEK_ABBREVIATIONS = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
  ] as const;

  return (
    <div className="flex w-full flex-col justify-center rounded bg-neutral-300 px-2 pb-2">
      <header className="mt-2 -space-y-0.5">
        <div className="flex items-end ">
          <span className="font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-transparent small-caps md:text-xs"></span>
          <span className="font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-neutral-400 small-caps dark:text-neutral-300 md:text-xs">
            {calendarMonthsString}
          </span>
        </div>
        <div className="grid grid-cols-7 grid-rows-1">
          {DAYS_OF_THE_WEEK_ABBREVIATIONS.map((weekDayAbbreviation, index) => (
            <div key={index} className="flex items-end ">
              <span className="flex h-6 w-full items-center justify-center font-aperçu text-[.3rem] font-bold leading-[.5rem] small-caps dark:text-neutral-300 md:text-xs">
                {weekDayAbbreviation}
              </span>
            </div>
          ))}
        </div>
      </header>
      <main className="grid grid-cols-7 grid-rows-5 space-y-0.5">
        {Array.from({ length: 5 }).map((_, weekIndex) => (
          <div
            key={weekIndex}
            className="col-span-7 row-span-1 grid grid-cols-7"
          >
            {Array.from({ length: 7 }).map((_, dayIndex) => {
              const movingDate = new Date();
              movingDate.setDate(
                mostRecentSunday.getDate() + (weekIndex * 7 + dayIndex),
              );
              const dayOfTheMonth = movingDate.getDate();

              const lastValidDay = new Date();
              lastValidDay.setDate(lastValidDay.getDate() + 28);
              const isDayInvalid =
                movingDate < currentDate || movingDate > lastValidDay;

              return (
                <div
                  key={dayIndex}
                  className="relative flex items-center leading-[.5rem]"
                >
                  <span
                    className={`flex h-5 w-full items-center justify-center font-aperçu ${isDayInvalid ? "text-[.5rem]" : "text-[.625rem]"} font-bold tabular-nums leading-[.5rem] small-caps dark:text-neutral-300`}
                  >
                    {dayOfTheMonth}
                  </span>
                  <div className="absolute left-1/2 top-1/2 translate-x-[-180%] translate-y-[-50%] text-[.5rem] text-transparent">
                    ■
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </main>
    </div>
  );
};

export default Calendar;

{
  /*       <header className="w-full">
        <div className="flex items-end ">
          <span className="font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-transparent small-caps md:text-xs">
            ■
          </span>
          <span className="font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-neutral-400 small-caps dark:text-neutral-300 md:text-xs">
            {calendarMonthsString}
          </span>
        </div>
      </header> */
}
