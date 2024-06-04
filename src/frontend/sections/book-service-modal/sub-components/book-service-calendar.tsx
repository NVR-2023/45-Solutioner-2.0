import { useEffect } from "react";
import LabelWIthAnimatedSlidingText from "@/frontend/components/ui/animated-components/label-with-animated-sliding-text";
import BookServiceTimePicker from "./book-service-time-picker";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";

import { motion } from "framer-motion";

import { roundToNearestHalfHour } from "@/utils/functions/date-time/roundup-to-nearest-half-hour-string";
import { convertDateToFullString } from "@/utils/functions/date-time/convert-date-to-full-string";
import { parseStringToDate } from "@/utils/functions/parse-string-to-date";
import { convertDateToYearString } from "@/utils/functions/date-time/convert-date-to-year-string";

type BookServiceCalendarProps = {
  bookServiceDate: string;
  setBookServiceDate: (date: string) => void;
  bookServiceTime: string;
  setBookServiceTime: (time: string) => void;
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

const BookServiceCalendar = ({
  bookServiceDate,
  setBookServiceDate,
  bookServiceTime,
  setBookServiceTime,
  isCalendarExpanded,
  setIsCalendarExpanded,
}: BookServiceCalendarProps) => {
  const { bookServiceModalContext: bookServiceModalObject } =
    useBookServiceModalContext();
  const duration = bookServiceModalObject.duration;

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
    const parsedCurrentDate = convertDateToYearString(currentDate);
    setBookServiceDate(parsedCurrentDate);
  }, []);

  useEffect(() => {
    if (
      parseStringToDate(bookServiceDate)?.getTime() === currentDate.getTime()
    ) {
      let currentHour = currentDate.getHours();
    }
  }, [bookServiceDate]);

  const handleOnClick = (selectedDate: Date) => {
    const parsedSelectedDate: string = convertDateToYearString(selectedDate);
    setBookServiceDate(parsedSelectedDate);
  };

  const handleToggleCalendarExpansion = () => {
    setIsCalendarExpanded(!isCalendarExpanded);
  };

  return (
    <div className="g-0 m-0 p-0">
      <div
        className="grid"
        style={{
          gridTemplateRows: isCalendarExpanded ? "1fr" : "0fr",
          transition: "grid-template-rows 500ms",
        }}
      >
        <div className="overflow-hidden">
          <div className="overflow-hidden rounded-tl rounded-tr bg-neutral-300 p-2 ">
            <div className="grid grid-cols-7 grid-rows-1">
              {DAYS_OF_THE_WEEK_ABBREVIATIONS.map(
                (weekDayAbbreviation, index) => (
                  <div key={index} className="flex items-end ">
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

                    const isDayUnbookable =
                      movingDate < currentDate || movingDate > lastBookableDay;

                    const isSelectedBookDate =
                      movingDate.getTime() ===
                      parseStringToDate(bookServiceDate)?.getTime();

                    return (
                      <motion.div
                        variants={buttonVariants}
                        whileTap={isDayUnbookable ? "" : "whileTap"}
                        key={dayIndex}
                        className={`relative flex items-center rounded-[2px] leading-[.5rem] ${isDayUnbookable ? "" : "hover:bg-neutral-200 "}`}
                      >
                        <motion.button
                          disabled={isDayUnbookable}
                          onClick={() => {
                            handleOnClick(movingDate);
                          }}
                          className={` flex h-6 w-full items-center justify-center font-aperçu ${isDayUnbookable ? "text-[.35rem] text-neutral-400" : "text-[.625rem]"} font-bold tabular-nums leading-[.5rem] small-caps `}
                        >
                          {dayOfTheMonth}
                        </motion.button>

                        {isSelectedBookDate && (
                          <motion.div
                            layoutId="selectedBookDate"
                            className="absolute left-0 top-0 h-full w-full rounded-[2px] bg-neutral-100 bg-opacity-50"
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

      <div
        onClick={handleToggleCalendarExpansion}
        className={`bg-neutral-300 p-2 transition-all ${isCalendarExpanded ? "rounded-bl rounded-br" : "rounded"}`}
      >
        <div className="space-y-2 ps-2">
          <LabelWIthAnimatedSlidingText
            label={"date"}
            text={convertDateToFullString(bookServiceDate)}
          />
          <LabelWIthAnimatedSlidingText label={"time"} text={"sdsd"} />
        </div>
        <div className="">
          <BookServiceTimePicker />
        </div>
      </div>
    </div>
  );
};

export default BookServiceCalendar;
