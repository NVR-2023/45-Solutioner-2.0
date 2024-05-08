import { useState } from "react";
import ServiceCategoryRollupLabel from "./service-category-label";
import { changeFirstLetterToUppercase } from "@/utils/functions/change-first-letter-to-uppercase";

type ServiceRollupProps = {
  category: string;
  service: string;
  price: string;
  duration: string;
};
const ServiceRollup = ({ category, service, price, duration }: ServiceRollupProps) => {
  const [isServiceRollupHovered, setIsServiceRollupHovered] = useState(false);

  const handleOnEnter = () => {
    setIsServiceRollupHovered(true);
  };

  const handleOnLeave = () => {
    setIsServiceRollupHovered(false);
  };

  const processedDuration =
    parseInt(duration) > 1 ? `${parseInt(duration)} hours` : parseInt(duration) === 1 ? "1 hour" : `${(Math.ceil(parseFloat(duration)*60)).toString()} minutes` ;
  return (
    <div className="">
      <div
        onMouseEnter={handleOnEnter}
        onMouseLeave={handleOnLeave}
        className={`h-7 w-[45rem] bg-neutral-300 px-6 transition-all duration-700 ${isServiceRollupHovered ? "rounded-t-[4px]" : "rounded"}`}
      >
        <div className="grid h-full w-full grid-cols-6 items-center space-x-4">
          <div className="col-span-1">
            <ServiceCategoryRollupLabel service={service} category={category} />
          </div>
          <div className="col-span-2 flex font-aperçu text-sm font-bold text-black dark:text-neutral-300 md:text-xs">
            {changeFirstLetterToUppercase(service)}
          </div>
          <div className="col-span-1 flex place-content-center justify-end font-aperçu text-sm font-semibold tabular-nums text-black dark:text-neutral-300 md:text-[0.625rem]">
            {processedDuration}
          </div>
          <div className="col-span-1 space-x-1 flex justify-end text-xs font-bold  tabular-nums  ">
          <div>  
            <span className="text-[.625rem] font-bold0">€</span>
            <span>{price}</span>
          </div>
          </div>
          <div className="col-span-1 flex justify-end">123 </div>
        </div>
      </div>

      <div
        className="grid duration-500"
        style={{
          gridTemplateRows: isServiceRollupHovered ? "1fr" : "0fr",
          transition: "grid-template-rows 500ms",
        }}
      >
        <div
          onMouseEnter={handleOnEnter}
          onMouseLeave={handleOnLeave}
          className="overflow-hidden rounded-b bg-neutral-300 "
        >
          <div className="overflow-hidden">
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ServiceRollup;
