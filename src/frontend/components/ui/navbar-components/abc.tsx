import { useState } from "react";

const ABC = () => {
  const [isDropdownMenuHovered, setIsDropdownMenuHovered] = useState(false);

  const handleOnMouseEnter = () => {
    setIsDropdownMenuHovered(true);
  };

  const handleOnMouseLeave = () => {
    setIsDropdownMenuHovered(false);
  };

  return (
    <div>
      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className="relative"
      >
        header
      </div>

      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className="absolute top-12 grid rounded-[2px] "
        style={{
          gridTemplateRows: isDropdownMenuHovered ? "1fr" : "0fr",
          transition: "grid-template-rows 100ms",
        }}
      >
        <div className="overflow-hidden  shadow-[18px_18px_12px_0px_#00000040]">
          <div className="z-[9999] block w-full overflow-hidden rounded-[2px] bg-neutral-300 px-2 py-2">
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABC;
