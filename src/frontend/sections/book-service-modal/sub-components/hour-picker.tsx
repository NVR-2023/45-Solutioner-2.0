import { useState, useEffect } from "react";
import { getEndOfServiceHourString } from "@/utils/functions/date-time/get-end-of-service-hour-string";


type HourPickerProps = {
  bookableHours: string[];
  duration: string;
  time: string;
  setTime: (time: string) => void;
};

const HourPicker = ({
  bookableHours,
  duration,
  time,
  setTime,
}: HourPickerProps) => {
  const [isTimeSlotHovered, setIsTimeSlotHovered] = useState(false);

  const handleOnMouseENter = () => {
    setIsTimeSlotHovered(true);
  };

  const handleOnMouseLeave = () => {
    setIsTimeSlotHovered(false);
  };

  return (
    <div className="flex w-full overflow-hidden">
      {Array.from({ length: 17 }).map((slot, index) => (
        <div
          onMouseEnter={handleOnMouseENter}
          onMouseLeave={handleOnMouseLeave}
          key={index}
          className=" justify-centre flex flex-grow items-center "
        >
        </div>
      ))}
    </div>
  );
};




export default HourPicker;
