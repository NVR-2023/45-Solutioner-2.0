import React from "react";

// Define the constant for animation duration
const DURATION = 5; // Change this to the desired duration

const XMarquee = () => {
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
            animation: marquee ${DURATION}s linear infinite;
            animation-direction: normal; /* Default direction, change if needed */
          }

          .animate-marquee2 {
            animation: marquee2 ${DURATION}s linear infinite;
            animation-direction: normal; /* Default direction, change if needed */
          }
        `}
      </style>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-1 text-xs">Item 1</span>
          <span className="mx-1 text-xs">Item 2</span>
          <span className="mx-1 text-xs">Item 3</span>
          <span className="mx-1 text-xs">Item 4</span>
          <span className="mx-1 text-xs">Item 5</span>
        </div>

        <div className="animate-marquee2 absolute top-0 whitespace-nowrap">
          <span className="mx-1 text-xs">Item 1</span>
          <span className="mx-1 text-xs">Item 2</span>
          <span className="mx-1 text-xs">Item 3</span>
          <span className="mx-1 text-xs">Item 4</span>
          <span className="mx-1 text-xs">Item 5</span>
        </div>
      </div>
    </>
  );
};

export default XMarquee;
