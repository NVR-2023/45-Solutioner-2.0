import React from "react";
import "./xmarquee.css";

const XMarquee = () => {
  return (
    <>
      {/* Add the 'marquee-animation' class to this div */}
      <div className="marquee-animation flex w-max gap-4 pl-4">
        <p className="rounded-sm border border-white bg-[#141414] px-2 py-1">
          JavaScript
        </p>
        <p className="rounded-sm border border-white bg-[#141414] px-2 py-1">
          TypeScript
        </p>
        <p className="rounded-sm border border-white bg-[#141414] px-2 py-1">
          CSS
        </p>
        <p className="rounded-sm border border-white bg-[#141414] px-2 py-1">
          TailwindCSS
        </p>
        <p className="rounded-sm border border-white bg-[#141414] px-2 py-1">
          Accessibility
        </p>
        <p className="rounded-sm border border-white bg-[#141414] px-2 py-1">
          React
        </p>
        <p className="rounded-sm border border-white bg-[#141414] px-2 py-1">
          Angular
        </p>
        <p
          className="rounded-sm border border-white bg-[#141414] px-2 py-1"
          aria-hidden="true"
        >
          JavaScript
        </p>
        <p
          className="rounded-sm border border-white bg-[#141414] px-2 py-1"
          aria-hidden="true"
        >
          TypeScript
        </p>
        <p
          className="rounded-sm border border-white bg-[#141414] px-2 py-1"
          aria-hidden="true"
        >
          CSS
        </p>
        <p
          className="rounded-sm border border-white bg-[#141414] px-2 py-1"
          aria-hidden="true"
        >
          TailwindCSS
        </p>
        <p
          className="rounded-sm border border-white bg-[#141414] px-2 py-1"
          aria-hidden="true"
        >
          Accessibility
        </p>
        <p
          className="rounded-sm border border-white bg-[#141414] px-2 py-1"
          aria-hidden="true"
        >
          React
        </p>
        <p
          className="rounded-sm border border-white bg-[#141414] px-2 py-1"
          aria-hidden="true"
        >
          Angular
        </p>
      </div>
    </>
  );
};

export default XMarquee;
