import FieldLabel from "../styled-text-components/field-label";
import FieldContent from "../styled-text-components/field-content";

type CyclicRecoilSliderProps = {
  label: string;
  items: string[];
  currentIndex: number;
};

const CyclicRecoilSlider = ({
  label,
  items,
  currentIndex,
}: CyclicRecoilSliderProps) => {
  const itemsLength = items?.length;
  return (
    <div className="flex space-x-1">
      <FieldLabel text={`${label}:`} />
      <span className="relative w-9 overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items?.map((item, index) => (
            <div
              key={index}
              className="flex w-9 flex-shrink-0 justify-start tabular-nums"
            >
              <FieldContent text={item} />
            </div>
          ))}
        </div>
      </span>
    </div>
  );
};

export default CyclicRecoilSlider;
