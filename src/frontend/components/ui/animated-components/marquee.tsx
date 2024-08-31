import { useState, ReactNode } from "react";

type TextMarqueeProps = {
  elementArray: ReactNode[];
  direction: "left-to-right" | "right-to-left";
  duration: number;
};

const TextMarquee = ({
  elementArray,
  direction,
  duration,
}: TextMarqueeProps) => {
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
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes marqueeReverse {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          .animated-marquee {
            animation: ${direction === "left-to-right" ? "marquee" : "marqueeReverse"} ${duration}s linear infinite;
          }
        `}
      </style>

      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className="relative flex overflow-hidden"
        style={{ whiteSpace: "nowrap" }}
      >
        <div
          className="animated-marquee"
          style={{
            display: "inline-flex",
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {elementArray}
        </div>
        <div
          className="animated-marquee absolute top-0"
          style={{
            display: "inline-flex",
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {elementArray}
        </div>
      </div>
    </>
  );
};

export default TextMarquee;
