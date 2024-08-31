import React from "react";

const XMarquee = () => {
  return (
    <>
      {/* Define the CSS for animation directly in a style tag */}
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
            animation: marquee 25s linear infinite;
            animation-direction: reverse;
          }

          .animate-marquee2 {
            animation: marquee2 25s linear infinite;
            animation-direction: reverse;

          }
        `}
      </style>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap py-12">
          <span className="mx-4 text-4xl">Marquee Item 1</span>
          <span className="mx-4 text-4xl">Marquee Item 2</span>
          <span className="mx-4 text-4xl">Marquee Item 3</span>
          <span className="mx-4 text-4xl">Marquee Item 4</span>
          <span className="mx-4 text-4xl">Marquee Item 5</span>
        </div>

        <div className="animate-marquee2 absolute top-0 whitespace-nowrap py-12">
          <span className="mx-4 text-4xl">Marquee Item 1</span>
          <span className="mx-4 text-4xl">Marquee Item 2</span>
          <span className="mx-4 text-4xl">Marquee Item 3</span>
          <span className="mx-4 text-4xl">Marquee Item 4</span>
          <span className="mx-4 text-4xl">Marquee Item 5</span>
        </div>
      </div>
    </>
  );
};

export default XMarquee;
