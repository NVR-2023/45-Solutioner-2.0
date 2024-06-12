import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";
import { capitalizeFirstLetter } from "@/utils/functions/capitalize-first-letter";

import { rounddownToNearestHalfHour } from "@/utils/functions/date-time/rounddown-to-nearest-half-hour-string";
import { getLastBookableHour } from "@/utils/functions/date-time/get-last-bookable-hour";
import { convertDateToYearString } from "@/utils/functions/date-time/convert-date-to-year-string";
import { convertDateToFullString } from "@/utils/functions/date-time/convert-date-to-full-string";
import { convertStringToDate } from "@/utils/functions/date-time/convert-string-to-date";
import { convertDateToHourString } from "@/utils/functions/date-time/convert-date-to-hour-string";
import { generateThirtyMinuteTimestamps } from "@/utils/functions/date-time/generate-thirty-minute-timestamps";
import { increaseHourByTwo } from "@/utils/functions/date-time/increase-hour-by-two";

import AnimatedSlidingText from "@/frontend/components/ui/animated-components/animated-sliding-text.";
import HourPicker from "./hour-picker";
import { roundupToNearestHalfHour } from "@/utils/functions/date-time/roundup-to-nearest-half-hour-string";

type CalendarProps = {
  date: string;
  setDate: (date: string) => void;
  time: string;
  setTime: (time: string) => void;
  isCalendarExpanded: boolean;
  setIsCalendarExpanded: (isCalendarExpanded: boolean) => void;
};

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

const Calendar = ({
  date,
  setDate,
  time,
  setTime,
  isCalendarExpanded,
  setIsCalendarExpanded,
}: CalendarProps) => {
  const { bookServiceModalContext: bookServiceModalObject } =
    useBookServiceModalContext();

  const service = bookServiceModalObject.service;
  const duration = bookServiceModalObject.duration;

  const [bookableHours, setBookableHours] = useState<string[]>([""]);

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const currentDayOfWeek = currentDate.getDay();
  const mostRecentSunday = new Date(currentDate);
  mostRecentSunday.setDate(currentDate.getDate() - currentDayOfWeek);
  mostRecentSunday.setHours(0, 0, 0, 0);

  const lastFourWeekCalendarDate = new Date(mostRecentSunday);
  lastFourWeekCalendarDate.setDate(mostRecentSunday.getDate() + 34);
  lastFourWeekCalendarDate.setHours(0, 0, 0, 0);

  const lastBookableHour = rounddownToNearestHalfHour(
    getLastBookableHour(duration!),
  );

  const DAYS_OF_THE_WEEK_ABBREVIATIONS = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
  ] as const;

  const handleOnClick = (selectedDate: Date) => {
    const parsedSelectedDate: string = convertDateToYearString(selectedDate);
    setDate(parsedSelectedDate);
  };

  const handleOnToggleCalendarExpansion = () => {
    setIsCalendarExpanded(!isCalendarExpanded);
  };

  useEffect(() => {
    setIsCalendarExpanded(true);
  }, []);

  useEffect(() => {
    const convertedCurrentDate = convertDateToYearString(currentDate);
    setDate(convertedCurrentDate);
  }, []);

  useEffect(() => {
    const DEFAULT_FIRST_BOOKABDLE_HOUR = "07:00" as const;
    const currentHour = convertDateToHourString(new Date());
    const lastBookableHour = rounddownToNearestHalfHour(
      getLastBookableHour(duration!),
    );

    if (date !== convertDateToYearString(new Date())) {
      setBookableHours(
        generateThirtyMinuteTimestamps(
          DEFAULT_FIRST_BOOKABDLE_HOUR,
          lastBookableHour,
        ),
      );
    } else {
      if (currentHour > lastBookableHour) {
        const nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + 1);
        setDate(convertDateToYearString(nextDay));
        setBookableHours(
          generateThirtyMinuteTimestamps(
            DEFAULT_FIRST_BOOKABDLE_HOUR,
            lastBookableHour,
          ),
        );
        return;
      } else {
        let currentFirstBookableHour = increaseHourByTwo(
          roundupToNearestHalfHour(currentHour),
        );

        if (currentFirstBookableHour < DEFAULT_FIRST_BOOKABDLE_HOUR) {
          currentFirstBookableHour = DEFAULT_FIRST_BOOKABDLE_HOUR;
        }
        setBookableHours(
          generateThirtyMinuteTimestamps(
            currentFirstBookableHour,
            lastBookableHour,
          ),
        );
      }
    }
  }, [date]);

  return (
    <div
      className={`flex flex-col justify-between space-y-4 overflow-hidden duration-300 ${isCalendarExpanded ? "h-[16rem] py-4" : "h-12 py-2"} w-full rounded bg-neutral-300 px-4 transition-all`}
    >
      <div
        className={`w-full overflow-hidden transition-all duration-300 ${isCalendarExpanded ? "h-36" : "h-0"}`}
      >
        <div
          className="grid"
          style={{
            gridTemplateRows: isCalendarExpanded ? "1fr" : "0fr",
            transition: "grid-template-rows 500ms",
          }}
        >
          <div className="overflow-hidden">
            <div className="overflow-hidden ">
              <div className="grid grid-cols-7 grid-rows-1">
                {DAYS_OF_THE_WEEK_ABBREVIATIONS.map(
                  (weekDayAbbreviation, index) => (
                    <div key={index} className="flex items-center">
                      <span className="flex w-full items-center justify-center py-0.5 font-aperçu text-[.625rem] font-bold small-caps dark:text-neutral-300">
                        {weekDayAbbreviation}
                      </span>
                    </div>
                  ),
                )}
              </div>
              <div className="grid grid-cols-7 grid-rows-5">
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

                      const currentHour = convertDateToHourString(new Date());
                      
                      const isDayUnbookable =
                        movingDate < currentDate ||
                        movingDate > lastBookableDay ||
                        ( convertDateToYearString(movingDate) === convertDateToYearString(currentDate) &&
                          currentHour > lastBookableHour);

                      const isSelectedBookDate =
                        convertDateToYearString(movingDate) === date;

                      return (
                        <motion.div
                          variants={buttonVariants}
                          whileTap={isDayUnbookable ? "" : "whileTap"}
                          key={dayIndex}
                          className={`relative flex items-center rounded-[2px] leading-[.5rem] ${isDayUnbookable ? "" : "hover:bg-neutral-100 "}`}
                        >
                          <motion.button
                            disabled={isDayUnbookable}
                            onClick={() => {
                              handleOnClick(movingDate);
                            }}
                            className={` flex h-6 w-full items-center justify-center font-aperçu ${isDayUnbookable ? "text-[.35rem] text-neutral-400" : " text-[.625rem]"} font-bold tabular-nums leading-[.5rem] small-caps `}
                          >
                            {dayOfTheMonth}
                          </motion.button>

                          {isSelectedBookDate && (
                            <motion.div
                              layoutId="selectedBookDate"
                              className="absolute left-0 top-0 h-full w-full rounded-[2px] bg-white bg-opacity-70"
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

      <div role="button" className="w-full space-y-2 overflow-hidden">
        <HourPicker
          bookableHours={bookableHours}
          duration={duration!}
          time={time}
          setTime={setTime}
        />
      </div>
      <div>
        <div className="flex">
          <div className="flex overflow-hidden font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-black transition-all duration-300 small-caps dark:text-neutral-300 md:text-xs">
            service:
          </div>

          <div className="flex ps-1 font-aperçu text-sm font-bold leading-[.5rem] text-black dark:text-neutral-300 md:text-xs">
            {capitalizeFirstLetter(service!)}
          </div>
        </div>

        <div className="flex">
          <div
            className={`flex overflow-hidden font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-black transition-all duration-300 small-caps dark:text-neutral-300 md:text-xs ${isCalendarExpanded ? "w-7" : "w-0"}`}
          >
            {isCalendarExpanded ? "date:" : ":"}
          </div>

          <div className="flex font-aperçu text-sm font-bold leading-[.5rem] text-black dark:text-neutral-300 md:text-xs">
            <AnimatedSlidingText
              text={`${convertDateToFullString(date)}${isCalendarExpanded ? "" : ", 09:00"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

/* if (parseStringToDate(date)?.getTime() !== currentDate.getTime()) {
  return;
} */

/*   useEffect(() => {
    const currentHour = `${new Date().getHours()}:${new Date().getMinutes()}`;
    const lastBookableHour = rounddownToNearestHalfHour(
      getLastBookableHour(duration!),
    );

    if (parseStringToDate(date)?.getTime() !== currentDate.getTime()) {
      return;
    }

    if (currentHour > lastBookableHour) {
      const nextDay = new Date();
      nextDay.setDate(nextDay.getDate() + 1);
      setDate(convertDateToDateString(nextDay));
      setBookableHours(
        generateThirtyMinuteTimestamps("07:00", lastBookableHour),
      );
      return;
    }

    setBookableHours(generateThirtyMinuteTimestamps("07:00", lastBookableHour));
  }, [date]); */
