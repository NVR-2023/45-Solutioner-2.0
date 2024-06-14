import { useState, useEffect } from "react";
import { getRoundedupEndOfServiceHourString } from "@/utils/functions/date-time/get-roundedup-end-of-service-hour-string";

type HourPickerProps = {
  bookableHours: string[];
    time: string;
  setTime: (time: string) => void;
duration: string;
};

const HourPicker = ({ bookableHours, time, setTime, duration }: HourPickerProps) => {
  const [bookableHoursIndex, setBookableHoursIndex] = useState(0);

  const handleOnIncrease = () => {
    const newIndex = (bookableHoursIndex + 1) % bookableHours.length;
    setBookableHoursIndex(newIndex);
    setTime(bookableHours[newIndex]);
  };

  const handleOnDecrease = () => {
    const newIndex =
      (bookableHoursIndex - 1 + bookableHours.length) % bookableHours.length;
    setBookableHoursIndex(newIndex);
    setTime(bookableHours[newIndex]);
  };

  const selectedSlot = bookableHours[bookableHoursIndex];

  return (
    <div className="flex h-full w-full items-center space-x-2 bg-blue-400 font-semibold tabular-nums">
      <div className="flex items-center justify-center bg-green-400">
        {selectedSlot}
      </div>
      <div className="flex items-center space-x-0.5">
        <button
          onClick={handleOnIncrease}
          className="flex w-4 items-center justify-center rounded-[2px] border-b-[3px] border-red-400 bg-neutral-700 px-1 py-0.5 text-neutral-300"
        >
          +
        </button>
        <button
          onClick={handleOnDecrease}
          className="flex w-4 items-center justify-center rounded-[2px] bg-neutral-700 px-1 py-0.5 text-neutral-300"
        >
          -
        </button>
      </div>
      <div>{getRoundedupEndOfServiceHourString(selectedSlot, duration)}</div>
    </div>
  );
};

export default HourPicker;
