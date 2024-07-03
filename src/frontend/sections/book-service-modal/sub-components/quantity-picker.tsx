import { useState, useEffect } from "react";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";

import CyclicRecoilSlider from "@/frontend/components/ui/animated-components/cyclic-recoil-sldier";
import SliderControls from "@/frontend/components/ui/slider-controls";
import SingleHorizontalExpandableWithoutLabelAndWIthWitExternalState from "@/frontend/components/ui/animated-components/single-horizontal-exapandable-without-label-and-with-external-state";

import { motion, AnimatePresence } from "framer-motion";

type QuantityPickerProps = {
  setQuantity: (quantity: number) => void;
  isCalendarExpanded: boolean;
};

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const QuantityPicker = ({
  setQuantity,
  isCalendarExpanded,
}: QuantityPickerProps) => {
  const { bookServiceModalContext } = useBookServiceModalContext();
  const price = bookServiceModalContext.price;

  const SERVICE_QUANTITIES = ["1", "2", "3"];
  const PRICES = SERVICE_QUANTITIES.map(
    (quantity) => `€${parseInt(quantity) * parseInt(price!)} `,
  );
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    setQuantity(parseInt(SERVICE_QUANTITIES[0]));
  }, []);

  return (
    <div className="flex w-full flex-col space-y-0.5">
      <div className="flex w-full">
        <div
          className={`flex w-full ${!isCalendarExpanded ? "space-x-1" : ""}`}
        >
          <div>
            <SingleHorizontalExpandableWithoutLabelAndWIthWitExternalState
              externalBooleanState={isCalendarExpanded}
            >
              <CyclicRecoilSlider
                label={"quantity"}
                items={SERVICE_QUANTITIES}
                currentIndex={currentIndex}
                size="sm"
              />
            </SingleHorizontalExpandableWithoutLabelAndWIthWitExternalState>
          </div>
          <div>
            <CyclicRecoilSlider
              label={"total"}
              items={PRICES}
              currentIndex={currentIndex}
            />
          </div>
        </div>

        <AnimatePresence>
          {!isCalendarExpanded && (
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

export default QuantityPicker;
