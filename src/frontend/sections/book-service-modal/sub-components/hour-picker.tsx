import { useState, useEffect } from "react";

type HourPickerProps = {
  bookableHours: string[];
  time: string;
  setTime: (time: string) => void;
};

const HourPicker = ({ bookableHours, time, setTime }: HourPickerProps) => {
  const [bookableHoursIndex, setBookableHoursIndex] = useState(0);

  const handleOnIncrease = () => {
    setBookableHoursIndex((bookableHoursIndex + 1) % bookableHours.length);
  };

  const handleOnDecrease = () => {
    setBookableHoursIndex(
      (bookableHoursIndex - 1 + bookableHours.length) % bookableHours.length,
    );
  };

  useEffect(() => {
    setTime(bookableHours[bookableHoursIndex]);
  }, [bookableHoursIndex, setTime, bookableHours]);

  return (
    <div className="flex h-full w-full items-center space-x-2 bg-blue-400 font-semibold tabular-nums">
      <div className="flex items-center justify-center bg-green-400">
        {bookableHours[bookableHoursIndex]}
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
    </div>
  );
};

export default HourPicker;
