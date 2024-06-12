import { useState } from "react";

type HourCell = {
  hour: number;
};

const HourCell = ({ hour }: HourCell) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOnMouseEnter = () => {
    setIsHovered(true)
  }

  const handleOnMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className="flex">
      <div 
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className="text-[.5625rem] font-bold tabular-nums">{hour}</div>
      
      
      <div
        className="grid"
        style={{
          gridTemplateColumns: isHovered ? "1fr" : "0fr",
          transition: "grid-template-columns 180ms",
        }}
      >
        <div className="flex overflow-hidden">
          <div className="flex h-4 items-end overflow-hidden font-aperçu text-sm font-bold text-black dark:text-neutral-300 md:text-xs">
            12345678910111213141516171811920
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourCell;
