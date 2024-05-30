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

  const daysOfWeekLabels = (
    <div className="flex w-full items-center justify-center space-x-2">
      {DAYS_OF_THE_WEEK_ABBREVIATIONS.map((day, index) => (
        <div key={index}>
          <span className="font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-transparent small-caps md:text-xs">
            ■
          </span>
          <span className="font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs">
            {day}
          </span>
        </div>
      ))}
    </div>
  );

  const fourWeekCalendar = (
    <div>
      {Array.from({ length: 5 }).map((_, weekIndex) => (
        <div key={weekIndex} className="">
          {Array.from({ length: 7 }).map((_, dayIndex) => {
            const calendarDay = new Date();
            calendarDay.setDate(
              mostRecentSunday.getDate() + (weekIndex * 7 + dayIndex),
            );
            const calendarDayOfTheMonth = calendarDay.getDate();

            return (
              <span key={`${weekIndex}-${dayIndex}`} className="">
                <span className="font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-red-400 small-caps md:text-xs">
                  ■
                </span>
                <span className="text-xs">
                  {calendarDayOfTheMonth.toString()}
                </span>
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex w-full flex-col justify-center rounded bg-neutral-300 pe-4 ps-2">
      <header className="mt-2 -space-y-0.5">
        <div className="flex items-end ">
          <span className="font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-transparent small-caps md:text-xs">
            ■
          </span>
          <span className="font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-neutral-400 small-caps dark:text-neutral-300 md:text-xs">
            {calendarMonthsString}
          </span>
        </div>
        <div className="grid grid-cols-7 grid-rows-6">
          {DAYS_OF_THE_WEEK_ABBREVIATIONS.map((weekDayAbbreviation, index) => (
            <div key={index} className="flex items-end ">
              <span className="font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-red-400 small-caps md:text-xs">
                ■
              </span>
              <span className="font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide small-caps dark:text-neutral-300 md:text-xs">
                {weekDayAbbreviation}
              </span>
            </div>
          ))}
        </div>
      </header>
      <main></main>
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
