import React from "react";

const Calendar = () => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const currentDayOfWeek = currentDate.getDay();
  const mostRecentSunday = new Date(currentDate);
  mostRecentSunday.setDate(currentDate.getDate() - currentDayOfWeek);
  mostRecentSunday.setHours(0, 0, 0, 0);

  const lastFourWeekCalendarDate = new Date(mostRecentSunday);
  lastFourWeekCalendarDate.setDate(mostRecentSunday.getDate() + 34);
  lastFourWeekCalendarDate.setHours(0, 0, 0, 0);

  const monthSpanString =
    mostRecentSunday.getMonth() === lastFourWeekCalendarDate.getMonth()
      ? currentDate.toLocaleString("en-US", { month: "long" }).toLowerCase()
      : `${mostRecentSunday.toLocaleString("en-US", { month: "long" }).toLowerCase()}-${lastFourWeekCalendarDate.toLocaleString("en-US", { month: "long" }).toLowerCase()}`;

  const DAYS_OF_THE_WEEK_ABBREVIATIONS = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
  ] as const;

  const handleOnClick = () => {
    alert("Clicked");
  };

  return (
    <div className="flex w-full flex-col justify-center rounded bg-neutral-300 px-2 pb-2">
      <header className="mt-2 -space-y-0.5">
        <div className="font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide small-caps dark:text-neutral-300 md:text-xs">
          {monthSpanString}
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
        {Array.from({ length: 5 }).map((week, weekIndex) => (
          <div
            key={weekIndex}
            className="col-span-7 row-span-1 grid grid-cols-7"
          >
            {Array.from({ length: 7 }).map((day, dayIndex) => {
              
              const movingDate = new Date(mostRecentSunday);
              movingDate.setDate(
                mostRecentSunday.getDate() + (weekIndex * 7 + dayIndex),
              );
              movingDate.setHours(0, 0, 0, 0); 
              const dayOfTheMonth = movingDate.getDate();

              const lastBookableDay = new Date(mostRecentSunday);
              lastBookableDay.setDate(mostRecentSunday.getDate() + 28);
              lastBookableDay.setHours(0, 0, 0, 0);

              const isDayUnbookable =
                movingDate < currentDate || movingDate > lastBookableDay;

              const isCurrentDay =
                movingDate.getTime() === currentDate.getTime();

              return (
                <div
                  key={dayIndex}
                  className="relative flex items-center leading-[.5rem] hover:bg-red-400"
                >
                  <span
                    className={`flex h-5 w-full items-center justify-center font-aperçu ${isDayUnbookable ? "text-[.35rem] text-neutral-500" : "text-[.625rem]"} font-bold tabular-nums leading-[.5rem] small-caps `}
                  >
                    {dayOfTheMonth}
                  </span>
                  <div className="absolute left-1/2 top-1/2 translate-x-[-180%] translate-y-[-50%] text-[.5rem] text-transparent">
                    ■
                  </div>
                  {isCurrentDay && (
                    <div className="absolute left-1/2 top-1/2 translate-x-[-180%] translate-y-[-50%] text-[.5rem] text-red-400">
                      ■
                    </div>
                  )}
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
