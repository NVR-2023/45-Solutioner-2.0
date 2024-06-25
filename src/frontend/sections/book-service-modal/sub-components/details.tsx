import MenuDownArrow from "@/frontend/components/icons/menu-down-arrow";
import FieldLabel from "@/frontend/components/ui/styled-text-components/field-label";
import FieldContent from "@/frontend/components/ui/styled-text-components/field-content";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";

import QuantityPicker from "./quantity-picker";
import RecurrencePicker from "./recurrence-picker";
import AddressPicker from "./address-picker";

import ModalContentSubareaShell from "@/frontend/components/ui/modal-components/modal-content-subarea-shell";
import SingleAccordionWithInverseExternalState from "@/frontend/components/ui/single-accordion-with-inverse-external-state";

import { motion, AnimatePresence } from "framer-motion";

type DetailsProps = {
  isCalendarExpanded: boolean;
  setIsCalendarExpanded: (isCalendarExpanded: boolean) => void;
  setQuantity: (newQuantity: number) => void;
  setRecurrence: (newRecurrence: string) => void;
  setAddress: (addressId: number) => void;
};

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Details = ({
  isCalendarExpanded,
  setIsCalendarExpanded,
  setQuantity,
  setRecurrence,
  setAddress,
}: DetailsProps) => {
  const handleOnClick = () => {
    setIsCalendarExpanded(!isCalendarExpanded);
  };

  const {
    bookServiceModalContext: { price },
  } = useBookServiceModalContext();
  return (
    <ModalContentSubareaShell>
      <SingleAccordionWithInverseExternalState
        label="details"
        externalBooleanState={isCalendarExpanded}
        setExternalBooleanState={setIsCalendarExpanded}
      >
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          className="mt-3 w-full space-y-3"
        >
          <AddressPicker setAddress={setAddress} />
          <RecurrencePicker setRecurrence={setRecurrence} />
          <QuantityPicker setQuantity={setQuantity} />
        </motion.div>
      </SingleAccordionWithInverseExternalState>
      {isCalendarExpanded && (
        <div className={`flex ${isCalendarExpanded ? "mt-2" : null} space-x-1`}>
          <FieldLabel text="total:" />
          <FieldContent text={`€${price}`} />
        </div>
      )}
    </ModalContentSubareaShell>
  );
};

export default Details;
