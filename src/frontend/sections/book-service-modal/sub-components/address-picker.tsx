import { useState, useEffect } from "react";

import CyclicRecoilSlider from "@/frontend/components/ui/cyclic-recoil-sldier";
import SliderControls from "@/frontend/components/ui/slider-controls";
import ToggleControls from "@/frontend/components/ui/toggler-controls";

type AddressPickerProps = {
  setAddress: (quantity: number) => void;
};

const AddressPicker = ({ setAddress }: AddressPickerProps) => {
  const ADDRESS_TYPES = ["Main", "Second"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnGetNextItem = () => {
    if (currentIndex) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(1);
    }
  };

  const handleOnGetPreviousItem = () => {
    if (currentIndex) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(1);
    }
  };

  useEffect(() => {
    /*     setQuantity(parseInt(ADDRESS_TYPES[0]));
     */
  }, []);

  return (
    <div className="flex w-full flex-col space-y-0.5">
      <div className="flex w-full">
        <div className="w-[6.5rem]">
          <CyclicRecoilSlider
            label={"address"}
            items={ADDRESS_TYPES}
            currentIndex={currentIndex}
            size="lg"
          />
        </div>
        <div className="">
          <ToggleControls
            handleOnGetNextInNextItem={handleOnGetNextItem}
            handleOnGetPreviousItem={handleOnGetPreviousItem}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressPicker;
