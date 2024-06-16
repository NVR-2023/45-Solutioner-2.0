import { useState, useEffect, useMemo } from "react";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";

import { motion } from "framer-motion";
import AnimatedSlidingText from "@/frontend/components/ui/animated-components/animated-sliding-text.";

import { convertDateToHourString } from "@/utils/functions/date-time/convert-date-to-hour-string";
import { convertDateToFullString } from "@/utils/functions/date-time/convert-date-to-full-string";
import { increaseHourByTwoBeyondTwentyFour } from "@/utils/functions/date-time/increase-hour-by-two-beyond-twenty-four";
import { roundupToNearestHalfHour } from "@/utils/functions/date-time/roundup-to-nearest-half-hour-string";
import { getLastBookableHour } from "@/utils/functions/date-time/get-last-bookable-hour";
import { convertDateToYearString } from "@/utils/functions/date-time/convert-date-to-year-string";
import { generateThirtyMinuteTimestamps } from "@/utils/functions/date-time/generate-thirty-minute-timestamps";

import { capitalizeFirstLetter } from "@/utils/functions/capitalize-first-letter";

import LabelWIthAnimatedSlidingText from "@/frontend/components/ui/animated-components/label-with-animated-sliding-text";
import HourPicker from "./hour-picker";

type BookServiceCalendarProps = {
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
}: BookServiceCalendarProps) => {
  const { bookServiceModalContext } = useBookServiceModalContext();
  const service = bookServiceModalContext.service;
  const duration = bookServiceModalContext.duration;

  const [bookableHours, setBookableHours] = useState<string[]>([]);

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

  useEffect(() => {
    let defaultDate;

    if (currentFirstBookableHour > lastBookableHour) {
      const nextDay = new Date();
      nextDay.setDate(nextDay.getDate() + 1);
      defaultDate = convertDateToYearString(nextDay);
    } else {
      defaultDate = convertDateToYearString(currentDate);
    }
    setDate(defaultDate);
  }, []);

  useEffect(() => {
    if (date !== convertDateToYearString(currentDate)) {
      const bookableHoursArray = generateThirtyMinuteTimestamps(
        FIRST_SERVICE_HOUR,
        lastBookableHour,
      );
      setBookableHours(bookableHoursArray);
    } else {
      const bookableHoursArray = generateThirtyMinuteTimestamps(
        currentFirstBookableHour,
        lastBookableHour,
      );

      setBookableHours(bookableHoursArray);
    }
  }, [date]);

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
    const convertedSelectedDate: string = convertDateToYearString(selectedDate);
    setDate(convertedSelectedDate);
  };

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
                          className={`relative flex items-center rounded-[2px] leading-[.5rem] ${isDayUnbookable ? "" : "hover:bg-neutral-100 "}`}
                        >
                          <motion.button
                            disabled={isDayUnbookable}
                            onClick={() => {
                              handleOnClick(movingDate);
                            }}
                            className={` ${isCurrentDate ? "underline decoration-1 underline-offset-2" : null} flex h-6 w-full items-center justify-center font-aperçu ${isDayUnbookable ? "text-[.35rem] text-neutral-400 decoration-neutral-400" : " text-[.625rem] decoration-black "} font-bold tabular-nums leading-[.5rem] decoration-black small-caps `}
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

      <div role="button" className="w-full space-y-2 overflow-hidden">
        <HourPicker
          bookableHours={bookableHours}
          time={time}
          setTime={setTime}
          duration={duration!}
        />
      </div>
      <div>
        <div className="flex">
          <LabelWIthAnimatedSlidingText
            label={"date"}
            text={convertDateToFullString(date)}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
