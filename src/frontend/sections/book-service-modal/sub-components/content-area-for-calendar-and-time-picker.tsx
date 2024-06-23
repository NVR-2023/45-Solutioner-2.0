import { useState, useEffect, useMemo } from "react";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";

import { motion } from "framer-motion";

import { convertDateToHourString } from "@/utils/functions/date-time/convert-date-to-hour-string";
import { convertDateToFullString } from "@/utils/functions/date-time/convert-date-to-full-string";
import { increaseHourByTwoBeyondTwentyFour } from "@/utils/functions/date-time/increase-hour-by-two-beyond-twenty-four";
import { roundupToNearestHalfHour } from "@/utils/functions/date-time/roundup-to-nearest-half-hour-string";
import { getLastBookableHour } from "@/utils/functions/date-time/get-last-bookable-hour";
import { convertDateToYearString } from "@/utils/functions/date-time/convert-date-to-year-string";
import { generateThirtyMinuteTimestamps } from "@/utils/functions/date-time/generate-thirty-minute-timestamps";

import LabelWIthAnimatedSlidingText from "@/frontend/components/ui/animated-components/label-with-animated-sliding-text";
import TimePicker from "./time-picker";
import FieldLabel from "@/frontend/components/ui/styled-text-components/field-label";
import MenuDownArrow from "@/frontend/components/icons/menu-down-arrow";

import ModalContentSubareaShell from "@/frontend/components/ui/modal-components/modal-content-subarea-shell";
import Calendar from "./calendar";
type ContentAreaForCalendarAndTimePickerProps = {
  date: string;
  setDate: (date: string) => void;
  setTime: (time: string) => void;
  isCalendarExpanded: boolean;
  setIsCalendarExpanded: (isCalendarExpanded: boolean) => void;
};

const ContentAreaForCalendarAndTimePicker = ({
  date,
  setDate,
  setTime,
  isCalendarExpanded,
  setIsCalendarExpanded,
}: ContentAreaForCalendarAndTimePickerProps) => {
  const { bookServiceModalContext } = useBookServiceModalContext();
  const duration = bookServiceModalContext.duration;

  const [bookableHours, setBookableHours] = useState<string[]>([]);

  const currentDate = useMemo(() => {
    return new Date();
  }, []);
  currentDate.setHours(0, 0, 0, 0);

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

  const handleOnExpandCalendar = () => {
    setIsCalendarExpanded(true);
  };

  return (
    <ModalContentSubareaShell>
      <div className="flex flex-col">
        <div>
          {!isCalendarExpanded && (
            <button
              onClick={handleOnExpandCalendar}
              className="flex w-full items-center justify-between"
            >
              <FieldLabel text={"calendar"} />
              <div className="flex items-center">
                <div className="flex pt-1 font-aperçu text-sm font-bold text-black dark:text-neutral-300 md:text-xs">
                  <div
                    className={`flex origin-center items-end justify-center transition-all duration-300 ${
                      isCalendarExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <MenuDownArrow scale={0.6125} />
                  </div>
                </div>
              </div>
            </button>
          )}
        </div>

        <div className="mt-2">
          <Calendar
            isCalendarExpanded={isCalendarExpanded}
            date={date}
            setDate={setDate}
          />
        </div>
        <div className="">
          <LabelWIthAnimatedSlidingText
            label={"date"}
            text={convertDateToFullString(date)}
          />
        </div>
        <div className="">
          <TimePicker
            bookableHours={bookableHours}
            setTime={setTime}
            duration={duration!}
            isCalendarExpanded={isCalendarExpanded}
          />
        </div>
      </div>
    </ModalContentSubareaShell>
  );
};

export default ContentAreaForCalendarAndTimePicker;
