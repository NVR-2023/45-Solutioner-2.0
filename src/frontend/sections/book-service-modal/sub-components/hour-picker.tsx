import { useState, useEffect } from "react";
import { getRoundedupEndOfServiceHourString } from "@/utils/functions/date-time/get-roundedup-end-of-service-hour-string";
import { getSuggestedBookHourIndex } from "@/utils/functions/date-time/get-suggested-bookhour-index";

import CyclicRecoilSlider from "@/frontend/components/ui/cyclic-recoil-slider/cyclic-recoil-sldier";
import SliderControls from "@/frontend/components/ui/slider-controls.tsx/slider-controls";

type HourPickerProps = {
  bookableHours: string[];
  setTime: (time: string) => void;
  duration: string;
};

const HourPicker = ({ bookableHours, setTime, duration }: HourPickerProps) => {
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
      setCurrentIndex(0);
      setTime(bookableHours[0]);
    }
  }, [bookableHours]);

  return (
    <div className="flex w-full justify-between">
      <div className="flex">
        <div className="col-span-1">
          <CyclicRecoilSlider
            label={"starts"}
            items={bookableHours}
            currentIndex={currentIndex}
          />
        </div>
        <div className="col-span-1">
          <SliderControls
            handleOnGetNextInNextItem={handleOnGetNextItem}
            handleOnGetPreviousItem={handleOnGetPreviousItem}
          />
        </div>
      </div>
      <div>
        {" "}
        <CyclicRecoilSlider
          label={"ends"}
          items={bookableHours.map(
            (hour) => getRoundedupEndOfServiceHourString(hour, duration),
          )}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
};

export default HourPicker;
