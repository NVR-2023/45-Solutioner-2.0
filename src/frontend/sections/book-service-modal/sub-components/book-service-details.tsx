import SingleAccordion from "@/frontend/components/ui/single-accordeon/single-accordion";
import LabelWIthAnimatedSlidingText from "@/frontend/components/ui/animated-components/label-with-animated-sliding-text";

type BookServiceDetailsProps = {
  isCalendarExpanded: boolean;
  setIsCalendarExpanded: (isCalendarExpanded: boolean) => void;
};

const BookServiceDetails = ({
  isCalendarExpanded,
  setIsCalendarExpanded,
}: BookServiceDetailsProps) => {
  return (
    <div
      className={`rounded bg-neutral-300 px-4 ${isCalendarExpanded ? "py-0.5" : "py-2"}`}
    >
      <div className="space-y-2">
        <SingleAccordion label="details">


          <div className="mt-4 flex flex-col space-y-2">
            <LabelWIthAnimatedSlidingText label="quantity" text="1" />
            <LabelWIthAnimatedSlidingText label="recurrence" text="once" />
            <LabelWIthAnimatedSlidingText label="address" text="main" />
          </div>


        </SingleAccordion>
      </div>
    </div>
  );
};

export default BookServiceDetails;
