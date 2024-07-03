import { useState, useEffect } from "react";

import CyclicRecoilSlider from "@/frontend/components/ui/animated-components/cyclic-recoil-sldier";
import SliderControls from "@/frontend/components/ui/slider-controls";

import { RecurrenceType } from "../book-service-modal";
const SERVICE_RECURRENCES = ["Once", "Monthly", "Weekly", "Daily"];

type QuantityPickerProps = {
  setRecurrence: (recurrence: RecurrenceType) => void;
};

const RecurrencePicker = ({ setRecurrence }: QuantityPickerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const serviceRecurrencesLength = SERVICE_RECURRENCES.length;
  const handleOnGetNextItem = () => {
    const nextIndex = (currentIndex + 1) % serviceRecurrencesLength;
    setCurrentIndex(nextIndex);
    setRecurrence(
      SERVICE_RECURRENCES[nextIndex].toLowerCase() as RecurrenceType,
    );
  };

  const handleOnGetPreviousItem = () => {
    const previousIndex =
      (currentIndex - 1 + serviceRecurrencesLength) % serviceRecurrencesLength;
    setCurrentIndex(previousIndex);
    setRecurrence(
      SERVICE_RECURRENCES[previousIndex].toLowerCase() as RecurrenceType,
    );
  };

  useEffect(() => {
    setRecurrence(SERVICE_RECURRENCES[0].toLowerCase() as RecurrenceType);
  }, []);

  return (
    <div className="flex w-full flex-col space-y-1.5">
      <div className="flex w-full">
        <div className="w-full">
          <CyclicRecoilSlider
            label={"book"}
            items={SERVICE_RECURRENCES}
            currentIndex={currentIndex}
            size="lg"
          />
        </div>
        <div className="">
          <SliderControls
            handleOnGetNextInNextItem={handleOnGetNextItem}
            handleOnGetPreviousItem={handleOnGetPreviousItem}
          />
        </div>
      </div>
    </div>
  );
};

export default RecurrencePicker;
