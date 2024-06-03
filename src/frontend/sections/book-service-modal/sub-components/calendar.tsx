import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CalendarProps = {
  bookServiceDate: string;
  setBookServiceDate: (date: string) => void;
  bookServiceTime: string;
  setBookServiceTime: (time: string) => void;
  isCalendarExpanded: boolean;
  setIsCalendarExpanded: (isCalendarExpanded: boolean) => void;
};

const Calendar = ({
  bookServiceDate,
  setBookServiceDate,
  bookServiceTime,
  setBookServiceTime,
  isCalendarExpanded,
  setIsCalendarExpanded,
}: CalendarProps) => {
  const handleOnToggleCalendarExpansion = () => {
    setIsCalendarExpanded(!isCalendarExpanded);
  };
  
useEffect(()=>{
    setIsCalendarExpanded(true);
}, [])

  return (
    <div
      onClick={handleOnToggleCalendarExpansion}
      className={`flex flex-col items-center justify-between overflow-hidden duration-300 ${isCalendarExpanded ? "h-40" : "h-10"} w-full rounded bg-neutral-300 px-4 py-2 transition-all`}
    >
      <div 
      className={`overflow-hidden transition-all duration-300 w-full ${ isCalendarExpanded ? "h-20" : "h-0"} bg-green-400`}>
          <div className="bg-blue-400">ABC</div>
          <div className="bg-blue-400">ABC</div>
          <div className="bg-blue-400">ABC</div>
      </div>

      <div className="w-full overflow-hidden bg-purple-400">
        <div className="flex ">
          <div
            className={`overflow-hidden transition-all duration-300 ${isCalendarExpanded ? "w-10" : "w-0"}`}
          >
            date:
          </div>

          <div>{`Tuesday, May, 24, 24 ${isCalendarExpanded ? "" : "abc"} `}</div>
        </div>

        <div className="flex bg-orange-400">
          <div>from:</div>
          <div>zzz</div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
