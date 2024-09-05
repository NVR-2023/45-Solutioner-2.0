import { useState, ReactNode, ComponentType } from "react";

type ElementWrapperProps = {
  children: ReactNode;
};

type TextMarqueeProps = {
  elementArray: string[];
  ElementWrapper: ComponentType<ElementWrapperProps>;
  direction: "left-to-right" | "right-to-left";
  duration: number;
};

const TextMarquee = ({
  elementArray,
  ElementWrapper,
  direction,
  duration,
}: TextMarqueeProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleOnMouseENter = () => {
    setIsHovered(true);
  };

  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  const halfMarquee = (
    <div className="flex">
      {elementArray.map((element, index) => (
        <ElementWrapper key={index}>{element}</ElementWrapper>
      ))}
    </div>
  );

  return (
    <div>
      <style>
        {`
          @keyframes first-half-marquee-animation {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes second-half-marquee-animation {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          .animated-first-half-marquee {
            animation: first-half-marquee-animation ${duration}s linear infinite;
            animation-direction: ${direction === "right-to-left" ? "normal" : "reverse"};

            }

          .animated-second-half-marquee {
            animation: second-half-marquee-animation ${duration}s linear infinite;
            animation-direction: ${direction === "right-to-left" ? "normal" : "reverse"};

            }
        `}
      </style>

      <div
        onMouseEnter={handleOnMouseENter}
        onMouseLeave={handleOnMouseLeave}
        className="relative flex"
      >
        <div
          className="animated-first-half-marquee whitespace-nowrap"
          style={{
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {halfMarquee}
        </div>
        <div
          className="animated-second-half-marquee absolute top-0 whitespace-nowrap"
          style={{
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {halfMarquee}
        </div>
      </div>
    </div>
  );
};

export default TextMarquee;
