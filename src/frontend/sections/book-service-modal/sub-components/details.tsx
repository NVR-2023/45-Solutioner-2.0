import MenuDownArrow from "@/frontend/components/icons/menu-down-arrow";
import QuantityPicker from "./quantity-picker";
import RecurrencePicker from "./recurrence-picker";

import FieldLabel from "@/frontend/components/ui/styled-text-components/field-label";

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

  return (
    <div className="rounded bg-neutral-300 px-4 py-2">
      <button
        onClick={handleOnClick}
        className="flex w-full items-center justify-between"
      >
        <FieldLabel text={"details"} />
        <div className="relative flex items-center">
          <div className="flex pt-1 font-aperçu text-sm font-bold text-black dark:text-neutral-300 md:text-xs">
            <div
              className={`flex origin-center items-end justify-center transition-all duration-300 ${
                isCalendarExpanded ? "" : "rotate-180"
              }`}
            >
              <MenuDownArrow scale={0.6125} />
            </div>
          </div>
        </div>
      </button>
      <div
        className="grid w-full overflow-hidden"
        style={{
          gridTemplateRows: isCalendarExpanded ? "0fr" : "1fr",
          transition: "grid-template-rows 300ms",
        }}
      >
        <div className="flex w-full flex-col space-y-3">
          <div className="mt-3 ">
            <QuantityPicker setQuantity={setQuantity} />
          </div>
          <div>
            <RecurrencePicker setRecurrence={setRecurrence} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
