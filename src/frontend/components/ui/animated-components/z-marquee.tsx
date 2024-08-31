import { ReactNode, ComponentType } from "react";

type ElementWrapperProps = {
  children: ReactNode;
};

type ZMarqueeProps = {
  elementArray: string[];
  ElementWrapper: ComponentType<ElementWrapperProps>;
  direction: "left-to-right" | "right-to-left";
  duration: number;
};

const ZMarquee = ({
  elementArray,
  ElementWrapper,
  direction,
  duration,
}: ZMarqueeProps) => {
  const halfMArquee = (
    <div className="flex">
      {elementArray.map((element, index) => (
        <ElementWrapper key={index}>{element}</ElementWrapper>
      ))}
    </div>
  );

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

          @keyframes marquee2 {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          .animate-marquee {
            animation: marquee ${duration}s linear infinite;
            animation-direction: ${direction === "right-to-left" ? "normal" : "reverse"};

            }

          .animate-marquee2 {
            animation: marquee2 ${duration}s linear infinite;
            animation-direction: ${direction === "right-to-left" ? "normal" : "reverse"};

            }
        `}
      </style>

      <div className="relative flex">
        <div className="animate-marquee whitespace-nowrap">{halfMArquee}</div>
        <div className="animate-marquee2 absolute top-0 whitespace-nowrap">
          {halfMArquee}
        </div>
      </div>
    </>
  );
};

export default ZMarquee;
