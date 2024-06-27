import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { convertDateToYearString } from "@/utils/functions/date-time/convert-date-to-year-string";
import { convertDateToHourString } from "@/utils/functions/date-time/convert-date-to-hour-string";
import { increaseHourByTwoBeyondTwentyFour } from "@/utils/functions/date-time/increase-hour-by-two-beyond-twenty-four";
import { roundupToNearestHalfHour } from "@/utils/functions/date-time/roundup-to-nearest-half-hour-string";
import { getLastBookableHour } from "@/utils/functions/date-time/get-last-bookable-hour";

import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";
import { useUserDetailsContext } from "@/frontend/contexts/use-user-details";

import { fetchUserServiceRequestsSummary } from "@/backend/server-actions/services/fetch-user-service-requests-summary";

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

  const { userId } = useUserDetailsContext();
  const [userServiceRequestsSummary, setUserServiceRequestsSummary] = useState<
    Record<string, string | number>[]
  >([]);

  const DAYS_OF_THE_WEEK_ABBREVIATIONS = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
  ] as const;

  const serviceCategoryColorMap = new Map([
    ["cleaning", "bg-[#32CD32]"],
    ["wardrobe", "bg-[#FF0000]"],
    ["plumbing", "bg-[#AFEEEE]"],
    ["electrical", "bg-[#FFFF00]"],
    ["hvac", "bg-[#A020F0]"],
    ["security", "bg-[#9400D3]"],
    ["handyman", "bg-[#EE4B2B]"],
    ["patching", "bg-[#DFFF00]"],
    ["gardening", "bg-[#008000]"],
    ["extermination", "bg-[#008080]"],
    ["eventing", "bg-[#A020F0]"],
    ["companionship", "bg-[#FF69B5]"],
    ["grooming", "bg-[#000080]"],
    ["nursing", "bg-[#86efac]"],
    ["nannying", "bg-[#00FFFF]"],
    ["petcare", "bg-[#964B00]"],
    ["wellness", "bg-[#FFC0CB]"],
    ["several", "bg-white border-[1.2px] border-neutral-700 "],
  ]);

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
    const fetchCurrentUserServiceRequestsSummary = async () => {
      try {
        const serviceRequestsSummary = await fetchUserServiceRequestsSummary(
          userId!,
        );
        setUserServiceRequestsSummary(serviceRequestsSummary);
      } catch (error) {
        console.error("Error fetching service requests summary:", error);
        return null;
      }
    };
    fetchCurrentUserServiceRequestsSummary();
  }, []);

  const handleOnClick = (selectedDate: Date) => {
    const convertedSelectedDate: string = convertDateToYearString(selectedDate);
    setDate(convertedSelectedDate);
  };

  return (
    <motion.div>
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

                    const currentDateString =
                      convertDateToYearString(currentDate);
                    const movingDateString =
                      convertDateToYearString(movingDate);

                    const isCurrentDate =
                      currentDateString === movingDateString;

                    const isDayUnbookable =
                      movingDate < currentDate ||
                      movingDate > lastBookableDay! ||
                      (movingDateString === currentDateString &&
                        currentFirstBookableHour > lastBookableHour);

                    const isSelectedBookDate = movingDateString === date;
                    const indexOfCurrentDayInServiceRequestSummary =
                      userServiceRequestsSummary.findLastIndex(
                        (serviceRequest) =>
                          serviceRequest.dateOfService === movingDateString,
                      );

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
                          className={` ${isCurrentDate ? "underline decoration-1 underline-offset-2" : null} flex h-5 w-full items-center justify-center font-aperçu  ${isDayUnbookable ? "text-[.35rem] text-neutral-400 decoration-neutral-400" : " text-[.5rem] decoration-black "} font-bold tabular-nums decoration-black small-caps `}
                        >
                          {dayOfTheMonth}
                        </motion.button>

                        {isSelectedBookDate && (
                          <motion.div
                            layoutId="selectedBookDate"
                            className="absolute left-0 top-0 h-full w-full rounded-[2px] bg-white bg-opacity-40"
                          ></motion.div>
                        )}

                        {indexOfCurrentDayInServiceRequestSummary !== -1 && (
                          <motion.div
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{
                              delay:
                                indexOfCurrentDayInServiceRequestSummary * 0.1, // Stagger effect delay
                              duration: 0.3,
                            }}
                            className="absolute left-0.5 top-0 flex h-full items-center"
                          >
                            <div
                              className={`${userServiceRequestsSummary[indexOfCurrentDayInServiceRequestSummary].recurrence === "once" ? "rounded-none" : "rounded-full"} h-1.5 w-1.5 ${serviceCategoryColorMap.get(userServiceRequestsSummary[indexOfCurrentDayInServiceRequestSummary].category as string)}`}
                            ></div>
                          </motion.div>
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
    </motion.div>
  );
};

export default Calendar;
