import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";

import QuantityPicker from "./quantity-picker";
import RecurrencePicker from "./recurrence-picker";
import AddressPicker from "./address-picker";

import ModalSubareaShell from "@/frontend/components/ui/form-components/modal-subarea-shell";
import SingleAccordionWithInverseExternalState from "@/frontend/components/ui/animated-components/single-accordion-with-inverse-external-state";

import { RecurrenceType } from "../book-service-modal";

type DetailsProps = {
  isCalendarExpanded: boolean;
  setIsCalendarExpanded: (isCalendarExpanded: boolean) => void;
  setQuantity: (newQuantity: number) => void;
  setRecurrence: (newRecurrence: RecurrenceType) => void;
  setAddressId: (addressId: number) => void;
};

const Details = ({
  isCalendarExpanded,
  setIsCalendarExpanded,
  setQuantity,
  setRecurrence,
  setAddressId,
}: DetailsProps) => {
  const handleOnClick = () => {
    setIsCalendarExpanded(!isCalendarExpanded);
  };

  const {
    bookServiceModalContext: { price },
  } = useBookServiceModalContext();
  return (
    <ModalSubareaShell>
      <SingleAccordionWithInverseExternalState
        label="details"
        externalBooleanState={isCalendarExpanded}
        setExternalBooleanState={setIsCalendarExpanded}
      >
        <div className="mt-3 w-full space-y-3">
          <AddressPicker setAddressId={setAddressId} />
          <RecurrencePicker setRecurrence={setRecurrence} />
        </div>
      </SingleAccordionWithInverseExternalState>
      <div className="mt-3">
        <QuantityPicker
          setQuantity={setQuantity}
          isCalendarExpanded={isCalendarExpanded}
        />
      </div>
    </ModalSubareaShell>
  );
};

export default Details;
