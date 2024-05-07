import { useState } from "react";

const ServiceRollup = () => {
  const [isServiceRollupHovered, setIsServiceRollupHovered] = useState(false);

  const handleOnEnter = () => {
    setIsServiceRollupHovered(true);
  };

  const handleOnLeave = () => {
    setIsServiceRollupHovered(false);
  };

  return (
    <div className="">
      <div
        onMouseEnter={handleOnEnter}
        onMouseLeave={handleOnLeave}
        className={` h-7 w-[700px] bg-red-400 ${isServiceRollupHovered ? "rounded-t-lg" : "rounded-lg"}`}
      >
        <div className="h-full w-full">123</div>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateRows: isServiceRollupHovered ? "1fr" : "0fr",
          transition: "grid-template-rows 500ms",
        }}
      >
        <div className="overflow-hidden rounded-b bg-green-400 ">
          <div className="overflow-hidden">skfljlsdhflshfljksdfhsdljf</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ServiceRollup;
