import { useState } from "react";
import ServiceCategoryRollupLabel from "./service-category-label";
import { capitalizeFirstLetter } from "@/utils/functions/capitalize-first-letter";
import BookServiceButton from "./book-service-button";
type ServiceRollupProps = {
  category: string;
  service: string;
  price: string;
  duration: string;

  description: string;
  unit: string;
  included: string;
  personnel: number;
};
const ServiceRollup = ({
  category,
  service,
  price,
  duration,
  description,
  unit,
  included,
  personnel,
}: ServiceRollupProps) => {
  const [isServiceRollupHovered, setIsServiceRollupHovered] = useState(false);

  const handleOnEnter = () => {
    setIsServiceRollupHovered(true);
  };

  const handleOnLeave = () => {
    setIsServiceRollupHovered(false);
  };

  const processedDuration =
    parseInt(duration) > 1
      ? `${parseInt(duration)} hours`
      : parseInt(duration) === 1
        ? "1 hour"
        : `${Math.ceil(parseFloat(duration) * 60).toString()} minutes`;

  return (
    <div className="">
      <div
        onMouseEnter={handleOnEnter}
        onMouseLeave={handleOnLeave}
        className={`flex h-7 w-[45rem] items-center bg-neutral-300 px-6 transition-all duration-700 ${isServiceRollupHovered ? "rounded-t-[4px]" : "rounded"}`}
      >
        <div className="grid w-full grid-cols-6 space-x-4">
          <div className="col-span-1 flex items-center justify-start">
            <ServiceCategoryRollupLabel category={category} />
          </div>
          <div className="col-span-2 flex h-full items-center  font-aperçu text-sm font-semibold text-black dark:text-neutral-300 md:text-xs">
            <div>{capitalizeFirstLetter(service)}</div>
          </div>
          <div className="col-span-1 flex items-center font-aperçu text-sm font-semibold tabular-nums text-black dark:text-neutral-300 md:text-[0.625rem]">
            <div classNAme="flex items-baseline">{processedDuration}</div>
          </div>
          <div className="col-span-1 flex items-center justify-end space-x-1 text-xs font-bold  tabular-nums  ">
            <div className="flex items-center justify-end font-semibold">
              <span className="text-[.625rem]">€</span>
              <span className="flex justify-end">{price}</span>
            </div>
          </div>
          <div className="400 col-span-1 flex justify-end">
            <div>
              <BookServiceButton />
            </div>
          </div>
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
          className="overflow-hidden rounded-b  bg-neutral-300 "
        >
          <div className="grid grid-cols-6 items-center space-x-4 overflow-hidden border-t-[.625px] border-black px-6">
            <div className="col-span-1">123</div>
            <div className="col-span-2">
              <div className="bg-red-400">123</div>
            </div>
            <div className="col-span-1">123</div>
            <div className="col-span-1">123</div>
            <div className="col-span-1">123</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ServiceRollup;
