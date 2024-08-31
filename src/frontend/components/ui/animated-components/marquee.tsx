import React, { useState, ReactNode } from "react";

type MarqueeProps = {
  elementsArray: ReactNode[];
  direction: "left-to-right" | "right-to-left";
  duration: number;
};

const Marquee = ({ elementsArray, direction, duration }: MarqueeProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };

  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <style>
        {`
          @keyframes marquee-left-to-right {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes marquee-right-to-left {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .marquee {
            display: flex;
            white-space: nowrap;
            animation: ${direction === "left-to-right" ? "marquee-left-to-right" : "marquee-right-to-left"} ${duration}s linear infinite;
            animation-play-state: ${isHovered ? "paused" : "running"};
          }
        `}
      </style>

      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className="relative flex overflow-hidden"
      >
        <div className="marquee">
          {elementsArray.map((element, index) => (
            <span key={index} className="mx-2">
              {element}
            </span>
          ))}
          {elementsArray.map((element, index) => (
            <span key={index + elementsArray.length} className="mx-2">
              {element}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Marquee;
