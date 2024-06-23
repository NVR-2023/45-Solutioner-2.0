import { useState, useEffect, useMemo } from "react";
import { getRoundedupEndOfServiceHourString } from "@/utils/functions/date-time/get-roundedup-end-of-service-hour-string";
import { getSuggestedBookHourIndex } from "@/utils/functions/date-time/get-suggested-bookhour-index";

import CyclicRecoilSlider from "@/frontend/components/ui/cyclic-recoil-sldier";
import SliderControls from "@/frontend/components/ui/slider-controls";

type HourPickerProps = {
  bookableHours: string[];
  setTime: (time: string) => void;
  duration: string;
  isCalendarExpanded: boolean;
};

const TimePicker = ({
  bookableHours,
  setTime,
  duration,
  isCalendarExpanded,
}: HourPickerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bookableHoursLength = bookableHours.length;

  const handleOnGetNextItem = () => {
    const nextIndex = (currentIndex + 1) % bookableHoursLength;
    setCurrentIndex(nextIndex);
    setTime(bookableHours[nextIndex]);
  };

  const handleOnGetPreviousItem = () => {
    const previousIndex =
      (currentIndex - 1 + bookableHoursLength) % bookableHoursLength;
    setCurrentIndex(previousIndex);
    setTime(bookableHours[previousIndex]);
  };

  useEffect(() => {
    if (bookableHoursLength > 0) {
      const suggestHourIndex = getSuggestedBookHourIndex(bookableHours);
      setCurrentIndex(suggestHourIndex);
      setTime(bookableHours[suggestHourIndex]);
    }
  }, [bookableHours]);

  return (
    <div className="flex w-full flex-col space-y-0.5">
      <div className="flex w-full">
        <div className="w-24">
          <CyclicRecoilSlider
            label={"time"}
            items={bookableHours}
            currentIndex={currentIndex}
          />
        </div>
        {bookableHoursLength > 1 && isCalendarExpanded && (
          <div className="">
            <SliderControls
              handleOnGetNextInNextItem={handleOnGetNextItem}
              handleOnGetPreviousItem={handleOnGetPreviousItem}
            />
          </div>
        )}
      </div>
      {isCalendarExpanded && (
        <div>
          <CyclicRecoilSlider
            label={"ends"}
            items={bookableHours.map((hour) =>
              getRoundedupEndOfServiceHourString(hour, duration),
            )}
            currentIndex={currentIndex}
          />
        </div>
      )}
    </div>
  );
};

export default TimePicker;
