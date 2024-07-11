import { useState, useEffect } from "react";

type AnimatedSliderCounterProps = {
  start?: number;
  end: number;
  currentIndex: number;
  size?: "sm" | "md" | "lg";
};

const AnimatedSliderCounter = ({
  start=1,
  end,
  size = "md",
}: AnimatedSliderCounterProps) => {
  const widthClasses = new Map([
    ["sm", "w-3"],
    ["md", "w-9"],
    ["lg", "w-16"],
  ]);

  const currentWIdthClass = widthClasses.get(size);
  const [ currentIndex , setCurrentIndex ] = useState(0);
  const numberArray = Array.from({length: end - start +1}, (_ , index ) => start + index)

  return (
    <div className={`relative ${widthClasses.get(size)} overflow-hidden`}>
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {numberArray?.map((number, index) => (
          <div
            key={index}
            className={`flex ${currentWIdthClass} flex-shrink-0 justify-start tabular-nums`}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSliderCounter;
