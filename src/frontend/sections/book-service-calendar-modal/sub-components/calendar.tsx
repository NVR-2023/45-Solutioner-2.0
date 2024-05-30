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

  const daysOfWeekAbbreviations = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
  ];

  return (
    <div className="w-full flex-col rounded bg-neutral-300 px-2 py-1">
      <header className="w-full">
        <div className="flex items-end font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-neutral-400 small-caps dark:text-neutral-300 md:text-xs">
          <span>&nbsp;</span>
          <span>{calendarMonthsString}</span>
        </div>
        <div className="flex w-full justify-center space-x-2">
          {daysOfWeekAbbreviations.map((day, index) => (
            <div key={index}>
              <span>&nbsp;</span>
              <span className="font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs">
                {day}
              </span>
            </div>
          ))}
        </div>
      </header>

      <p>month(s):{calendarMonthsString}</p>
    </div>
  );
};

export default Calendar;
