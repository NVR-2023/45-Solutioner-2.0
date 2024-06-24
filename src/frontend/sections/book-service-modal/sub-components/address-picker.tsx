import { useState, useEffect } from "react";

import CyclicRecoilSlider from "@/frontend/components/ui/cyclic-recoil-sldier";
import ToggleControls from "@/frontend/components/ui/toggler-controls";

type AddressPickerProps = {
  setAddress: (quantity: number) => void;
};

const AddressPicker = ({ setAddress }: AddressPickerProps) => {
  const ADDRESS_TYPES = ["Main", "Second"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnToggle = () => {
    if (currentIndex) {
      setCurrentIndex(0);
    } else setCurrentIndex(1);
  };

  return (
    <div className="flex w-full flex-col space-y-0.5">
      <div className="flex w-full justify-between">
        <div className="w-full">
          <CyclicRecoilSlider
            label={"address"}
            items={ADDRESS_TYPES}
            currentIndex={currentIndex}
            size="lg"
          />
        </div>
        <div className="">
          <ToggleControls
            currentIndex={currentIndex}
            handleOnToggle={handleOnToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressPicker;
