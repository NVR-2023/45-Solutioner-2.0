import { useState, useEffect, useMemo } from "react";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";

import { convertDateToHourString } from "@/utils/functions/date-time/convert-date-to-hour-string";
import { increaseHourByTwo } from "@/utils/functions/date-time/increase-hour-by-two";
import { roundupToNearestHalfHour } from "@/utils/functions/date-time/roundup-to-nearest-half-hour-string";
import { rounddownToNearestHalfHour } from "@/utils/functions/date-time/rounddown-to-nearest-half-hour-string";
import { getLastBookableHour } from "@/utils/functions/date-time/get-last-bookable-hour";
import { convertDateToYearString } from "@/utils/functions/date-time/convert-date-to-year-string";
import { generateThirtyMinuteTimestamps } from "@/utils/functions/date-time/generate-thirty-minute-timestamps";

type BookServiceCalendarProps = {
  date: string;
  setDate: (date: string) => void;
  time: string;
  setTime: (time: string) => void;
  isCalendarExpanded: boolean;
  setIsCalendarExpanded: (isCalendarExpanded: boolean) => void;
};

const BookServiceCalendar = ({
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

  const lastFourWeekCalendarDate = useMemo(() => {
    const temporaryDate = new Date(mostRecentSunday);
    temporaryDate.setDate(mostRecentSunday.getDate() + 34);
    temporaryDate.setHours(0, 0, 0, 0);
    return temporaryDate;
  }, [mostRecentSunday]);

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

  const currentFirstBookableHour = increaseHourByTwo(
    roundupToNearestHalfHour(currentHour),
  );

  const lastBookableHour = useMemo(() => {
    return rounddownToNearestHalfHour(getLastBookableHour(duration!));
  }, []);


  

  useEffect(()=>{
        let defaultDate;
        if (currentFirstBookableHour > lastBookableHour) {
          const nextDay = new Date();
          nextDay.setDate(nextDay.getDate() + 1);
          defaultDate = convertDateToYearString(nextDay);
        } else {
          defaultDate = convertDateToYearString(currentDate);
        }
        setDate(defaultDate);
  }, [])


   useEffect(() => {
     const generateHours = () => {
       if (date !== convertDateToYearString(currentDate)) {
         return generateThirtyMinuteTimestamps(
           FIRST_SERVICE_HOUR,
           lastBookableHour,
         );
       } else {
         return generateThirtyMinuteTimestamps(
           currentFirstBookableHour,
           lastBookableHour,
         );
       }
     };

     setBookableHours(generateHours());
   }, [date]);

  console.log("re-rendering");

  return <div>bool service calendar</div>;
};

export default BookServiceCalendar;
