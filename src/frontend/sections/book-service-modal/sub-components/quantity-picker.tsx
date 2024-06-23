import { useState , useEffect } from "react";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";

import CyclicRecoilSlider from "@/frontend/components/ui/cyclic-recoil-sldier";
import SliderControls from "@/frontend/components/ui/slider-controls";
type QuantityPickerProps = {
  setQuantity: (quantity: number) => void;
};

const QuantityPicker = ({ setQuantity }: QuantityPickerProps) => {
  const SERVICE_QUANTITIES = ["1", "2", "3"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const { bookServiceModalContext } = useBookServiceModalContext();
  const price = bookServiceModalContext.price;

  const handleOnGetNextItem = () => {
    const nextIndex = (currentIndex + 1) % 3;
    setCurrentIndex(nextIndex);
    setQuantity(parseInt(SERVICE_QUANTITIES[nextIndex]));
  };

  const handleOnGetPreviousItem = () => {
    const previousIndex = (currentIndex - 1 + 3) % 3;
    setCurrentIndex(previousIndex);
    setQuantity(parseInt(SERVICE_QUANTITIES[previousIndex]));
  };

  useEffect(()=>{
    setQuantity(parseInt(SERVICE_QUANTITIES[0]));
  },[])

  return (
    <div className="flex w-full flex-col space-y-0.5">
      <div className="flex w-full">
        <div className="w-24">
          <CyclicRecoilSlider
            label={"quantity"}
            items={SERVICE_QUANTITIES}
            currentIndex={currentIndex}
            size="sm"
          />
        </div>
        <div className="">
          <SliderControls
            handleOnGetNextInNextItem={handleOnGetNextItem}
            handleOnGetPreviousItem={handleOnGetPreviousItem}
          />
        </div>
      </div>
      <div>
        <CyclicRecoilSlider
          label={"price"}
          items={SERVICE_QUANTITIES.map(
            (quantity) => `€${parseInt(quantity) * parseInt(price!)} `,
          )}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
};

export default QuantityPicker;
