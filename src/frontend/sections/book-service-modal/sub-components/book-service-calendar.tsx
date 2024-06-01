import { useEffect } from "react";
import LabelWIthAnimatedSlidingText from "@/frontend/components/ui/animated-components/label-with-animated-sliding-text";
import { motion } from "framer-motion";

type BookServiceCalendarProps = {
  bookServiceDate: Date;
  setBookServiceDate: (date: Date) => void;
};

const BookServiceCalendar = ({
  bookServiceDate,
  setBookServiceDate,
}: BookServiceCalendarProps) => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const currentDayOfWeek = currentDate.getDay();
  const mostRecentSunday = new Date(currentDate);
  mostRecentSunday.setDate(currentDate.getDate() - currentDayOfWeek);
  mostRecentSunday.setHours(0, 0, 0, 0);

  const lastFourWeekCalendarDate = new Date(mostRecentSunday);
  lastFourWeekCalendarDate.setDate(mostRecentSunday.getDate() + 34);
  lastFourWeekCalendarDate.setHours(0, 0, 0, 0);

  const DAYS_OF_THE_WEEK_ABBREVIATIONS = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
  ] as const;

  useEffect(() => {
    setBookServiceDate(currentDate);
  }, []);

  const handleOnClick = (selectedDate: Date) => {
    setBookServiceDate(selectedDate);
  };

  return (
    <div className="flex w-full flex-col justify-center space-y-0.5 rounded bg-neutral-300 px-2 pb-2">
      <header className="mt-2">
        <div className="grid grid-cols-7 grid-rows-1 border-b-[.7px]  border-black">
          {DAYS_OF_THE_WEEK_ABBREVIATIONS.map((weekDayAbbreviation, index) => (
            <div key={index} className="flex items-end ">
              <span className="flex w-full items-center justify-center py-0.5 font-aperçu text-xs font-bold small-caps dark:text-neutral-300">
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

              const lastBookableDay = new Date(currentDate);
              lastBookableDay.setDate(currentDate.getDate() + 28);
              lastBookableDay.setHours(0, 0, 0, 0);

              const isDayUnbookable =
                movingDate < currentDate || movingDate > lastBookableDay;

              const isSelectedBookDate =
                movingDate.getTime() === bookServiceDate?.getTime();

              return (
                <div
                  key={dayIndex}
                  className={`relative flex items-center rounded-[2px] leading-[.5rem] ${isDayUnbookable ? "" : "hover:bg-neutral-400 "}`}
                >
                  <button
                    disabled={isDayUnbookable}
                    onClick={() => {
                      handleOnClick(movingDate);
                    }}
                    className={` flex h-6 w-full items-center justify-center font-aperçu ${isDayUnbookable ? "text-[.35rem] text-neutral-500" : "text-[.625rem]"} font-bold tabular-nums leading-[.5rem] small-caps `}
                  >
                    {dayOfTheMonth}
                  </button>

                  {isSelectedBookDate && (
                    <motion.div
                      layoutId="selectedBookDate"
                      className="absolute left-0 top-0 h-full w-full rounded-[2px] bg-neutral-400 bg-opacity-50"
                    ></motion.div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </main>
      <footer className="flex w-full ps-2">
        <LabelWIthAnimatedSlidingText
          label={"date:"}
          text={(bookServiceDate
            ? new Date(bookServiceDate)
            : new Date()
          ).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        />
      </footer>
    </div>
  );
};

export default BookServiceCalendar;
