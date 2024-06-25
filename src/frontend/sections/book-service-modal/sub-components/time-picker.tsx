import { useState, useEffect, useMemo } from "react";
import { getRoundedupEndOfServiceHourString } from "@/utils/functions/date-time/get-roundedup-end-of-service-hour-string";
import { getSuggestedBookHourIndex } from "@/utils/functions/date-time/get-suggested-bookhour-index";

import CyclicRecoilSlider from "@/frontend/components/ui/cyclic-recoil-sldier";
import SliderControls from "@/frontend/components/ui/slider-controls";
import { motion, AnimatePresence } from "framer-motion";

type HourPickerProps = {
  bookableHours: string[];
  setTime: (time: string) => void;
  duration: string;
  isCalendarExpanded: boolean;
};

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: .8,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: .8,
    },
  },
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
        <div className="flex w-full space-x-1">
          <div>
            <CyclicRecoilSlider
              label={"start"}
              items={bookableHours}
              currentIndex={currentIndex}
              size="md"
            />
          </div>
          <div>
            <CyclicRecoilSlider
              label={"end"}
              items={bookableHours.map((hour) =>
                getRoundedupEndOfServiceHourString(hour, duration),
              )}
              currentIndex={currentIndex}
            />
          </div>
        </div>
        <AnimatePresence>
          {isCalendarExpanded && (
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <SliderControls
                handleOnGetNextInNextItem={handleOnGetNextItem}
                handleOnGetPreviousItem={handleOnGetPreviousItem}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TimePicker;
