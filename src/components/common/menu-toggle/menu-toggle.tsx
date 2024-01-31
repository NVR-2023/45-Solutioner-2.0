import React, { useState } from "react";
import CloseICon from "../../icons/close-icon";
import HamburgerIcon from "@/components/icons/hamburger-icon";

const YourComponent: React.FC = () => {
  const [isSlidRight, setIsSlidRight] = useState(false);

  const handleSlideClick = () => {
    setIsSlidRight((prev) => !prev);
  };

  return (
    <div className="relative flex overflow-hidden items-center justify-center w-6 h-6 bg-red-400">
      <div
        className={`absolute -left-3 top-0 w-6 h-6 flex transition-transform duration-500 ease-in-out ${
          isSlidRight ? "translate-x-3" : "-translate-x-3"
        }`}>
        <div className={`w-6 h-6 flex justify-center items-center`} onClick={handleSlideClick}>
          <CloseICon/>
        </div>
        <div className={`w-6 h-6 flex justify-center items-center`} onClick={handleSlideClick}>
          <HamburgerIcon/>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
