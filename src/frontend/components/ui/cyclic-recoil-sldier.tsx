import FieldLabel from "./styled-text-components/field-label";
import FieldContent from "./styled-text-components/field-content";
type CyclicRecoilSliderProps = {
  label: string;
  items: string[];
  currentIndex: number;
  size?: "sm" | "md" | "lg";
};

const CyclicRecoilSlider = ({
  label,
  items,
  currentIndex,
  size = "md",
}: CyclicRecoilSliderProps) => {
  const widthClasses = new Map([
    ["sm", "w-3"],
    ["md", "w-9"],
    ["lg", "w-12"],
  ]);

  const currentWIdthClass = widthClasses.get(size);
  return (
    <div className="flex space-x-1">
      <span>
        <FieldLabel text={`${label}:`} />
      </span>
      <span className={`relative ${widthClasses.get(size)} overflow-hidden`}>
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items?.map((item, index) => (
            <div
              key={index}
              className={`flex ${currentWIdthClass} flex-shrink-0 justify-start tabular-nums`}
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
