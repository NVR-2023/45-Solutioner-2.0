import MenuDownArrow from "@/frontend/components/icons/menu-down-arrow";
import QuantityPicker from "./quantity-picker";
import FieldLabel from "@/frontend/components/ui/styled-text-components/field-label";
import FieldContent from "@/frontend/components/ui/styled-text-components/field-content";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";
import RecurrencePicker from "./recurrence-picker";

import ModalContentSubareaShell from "@/frontend/components/ui/modal-components/modal-content-subarea-shell";
import SingleAccordionWithInverseExternalState from "@/frontend/components/ui/single-accordion-with-inverse-external-state";

type DetailsProps = {
  isCalendarExpanded: boolean;
  setIsCalendarExpanded: (isCalendarExpanded: boolean) => void;
  setQuantity: (newQuantity: number) => void;
  setRecurrence: (newRecurrence: string) => void;
};

const Details = ({
  isCalendarExpanded,
  setIsCalendarExpanded,
  setQuantity,
  setRecurrence,
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
        <div className="mt-3 space-y-3">
          <RecurrencePicker setRecurrence={setRecurrence} />
          <QuantityPicker setQuantity={setQuantity} />
        </div>
      </SingleAccordionWithInverseExternalState>
      {isCalendarExpanded && (
        <div className={`flex ${isCalendarExpanded ? "mt-2" : null} space-x-1`}>
          <FieldLabel text="price:" />
          <FieldContent text={`€${price}`} />
        </div>
      )}
    </ModalContentSubareaShell>
  );
};

export default Details;
