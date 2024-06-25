import { useMemo } from "react";
import { motion } from "framer-motion";
import { convertDateToYearString } from "@/utils/functions/date-time/convert-date-to-year-string";
import { convertDateToHourString } from "@/utils/functions/date-time/convert-date-to-hour-string";
import { increaseHourByTwoBeyondTwentyFour } from "@/utils/functions/date-time/increase-hour-by-two-beyond-twenty-four";
import { roundupToNearestHalfHour } from "@/utils/functions/date-time/roundup-to-nearest-half-hour-string";
import { getLastBookableHour } from "@/utils/functions/date-time/get-last-bookable-hour";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";

const buttonVariants = {
  initial: {
    scale: 1,
  },
  whileTap: {
    scale: [1, 1.2, 1, 1],
    transition: {
      duration: 0.1,
      type: "tween",
      interrupt: "never",
    },
  },
};

type calendarProps = {
  date: string;
  setDate: (date: string) => void;
  isCalendarExpanded: boolean;
};

const Calendar = ({ date, setDate, isCalendarExpanded }: calendarProps) => {
  const { bookServiceModalContext } = useBookServiceModalContext();
  const duration = bookServiceModalContext.duration;

  const DAYS_OF_THE_WEEK_ABBREVIATIONS = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
  ] as const;

  const currentDate = useMemo(() => {
    return new Date();
  }, []);
  currentDate.setHours(0, 0, 0, 0);

  const currentDayOfTheWeek = useMemo(() => {
    return currentDate.getDay();
  }, [currentDate]);

  const mostRecentSunday = useMemo(() => {
    const temporaryDate = new Date(currentDate);
    temporaryDate.setDate(currentDate.getDate() - currentDayOfTheWeek);
    temporaryDate.setHours(0, 0, 0, 0);
    return temporaryDate;
  }, [currentDate, currentDayOfTheWeek]);

  const lastBookableDay = useMemo(() => {
    const temporaryDate = new Date();
    temporaryDate.setDate(currentDate.getDate() + 28);
    temporaryDate.setHours(0, 0, 0, 0);
    return temporaryDate;
  }, [currentDate]);

  const FIRST_SERVICE_HOUR = "07:00" as const;
  const currentHour = useMemo(() => {
    return convertDateToHourString(new Date());
  }, []);

  const currentFirstBookableHour = useMemo(() => {
    let temporaryHour = increaseHourByTwoBeyondTwentyFour(
      roundupToNearestHalfHour(currentHour),
    );
    if (temporaryHour > "00:00" && temporaryHour < FIRST_SERVICE_HOUR) {
      temporaryHour = FIRST_SERVICE_HOUR;
    }
    return temporaryHour;
  }, []);

  const lastBookableHour = useMemo(() => {
    return getLastBookableHour(duration!);
  }, []);

  const handleOnClick = (selectedDate: Date) => {
    const convertedSelectedDate: string = convertDateToYearString(selectedDate);
    setDate(convertedSelectedDate);
  };

  return (
    <div className="w-full overflow-hidden transition-all duration-300">
      <div
        className="grid"
        style={{
          gridTemplateRows: isCalendarExpanded ? "1fr" : "0fr",
          transition: "grid-template-rows 500ms",
        }}
      >
        <div className="overflow-hidden">
          <div className="overflow-hidden ">
            <div className="mb-2 grid grid-cols-7 grid-rows-1">
              {DAYS_OF_THE_WEEK_ABBREVIATIONS.map(
                (weekDayAbbreviation, index) => (
                  <div
                    key={index}
                    className={` ${index === 0 ? "border-l-[0.7px] border-black" : null} ${index === 6 ? "border-r-[0.7px] border-black" : null} flex h-full w-full items-center justify-center font-aperçu text-[.625rem] font-bold small-caps dark:text-neutral-300`}
                  >
                    {weekDayAbbreviation}
                  </div>
                ),
              )}
            </div>

            <div className="grid grid-cols-7 grid-rows-5">
              {Array.from({ length: 5 }).map((_, weekIndex) => (
                <div
                  key={weekIndex}
                  className="col-span-7 row-span-1 grid grid-cols-7"
                >
                  {Array.from({ length: 7 }).map((_, dayIndex) => {
                    const movingDate = new Date(mostRecentSunday);
                    movingDate.setDate(
                      mostRecentSunday.getDate() + (weekIndex * 7 + dayIndex),
                    );
                    movingDate.setHours(0, 0, 0, 0);
                    const dayOfTheMonth = movingDate.getDate();

                    const isCurrentDate =
                      convertDateToYearString(currentDate) ===
                      convertDateToYearString(movingDate);

                    const isDayUnbookable =
                      movingDate < currentDate ||
                      movingDate > lastBookableDay! ||
                      (convertDateToYearString(movingDate) ===
                        convertDateToYearString(currentDate) &&
                        currentFirstBookableHour > lastBookableHour);

                    const isSelectedBookDate =
                      convertDateToYearString(movingDate) === date;

                    return (
                      <motion.div
                        variants={buttonVariants}
                        whileTap={isDayUnbookable ? "" : "whileTap"}
                        key={dayIndex}
                        className={`relative flex items-center rounded-[2px]  ${isDayUnbookable ? "" : "hover:bg-neutral-100 "}`}
                      >
                        <motion.button
                          disabled={isDayUnbookable}
                          onClick={() => {
                            handleOnClick(movingDate);
                          }}
                          className={` ${isCurrentDate ? "underline decoration-1 underline-offset-2" : null} flex h-6 w-full items-center justify-center font-aperçu ${isDayUnbookable ? "text-[.35rem] text-neutral-400 decoration-neutral-400" : " text-[.625rem] decoration-black "} font-semibold tabular-nums decoration-black small-caps `}
                        >
                          {dayOfTheMonth}
                        </motion.button>

                        {isSelectedBookDate && (
                          <motion.div
                            layoutId="selectedBookDate"
                            className="absolute left-0 top-0 h-full w-full rounded-[2px] bg-white bg-opacity-50"
                          ></motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
