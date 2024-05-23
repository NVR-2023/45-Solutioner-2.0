import { motion } from "framer-motion";
import { useState } from "react";
import ServiceCategoryRollupLabel from "./sub-components/service-category-label";
import { capitalizeFirstLetter } from "@/utils/functions/capitalize-first-letter";
import BookServiceButton from "./sub-components/book-service-button";
import SaleTag from "./sub-components/sale-tag";
const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    x: "300pt",
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

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

  const processedDurationString =
    parseInt(duration) > 1
      ? `${parseInt(duration)} hours`
      : parseInt(duration) === 1
        ? "1 hour"
        : `${Math.ceil(parseFloat(duration) * 60).toString()} minutes`;

  const processedUnitString = capitalizeFirstLetter(unit).trim();
  const processedIncludedString = capitalizeFirstLetter(unit).trim();
  const processedPersonnelString = (
    personnel > 1
      ? `Serviced by ${personnel} professionals`
      : "Serviced by 1 professional"
  ).trim();

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="z-0"
    >
      <div
        onMouseEnter={handleOnEnter}
        onMouseLeave={handleOnLeave}
        className={`flex h-7 w-[45rem] items-center bg-neutral-300 px-6 transition-all duration-700 ${isServiceRollupHovered ? "rounded-t-[4px]" : "rounded"}`}
      >
        <div className="grid w-full grid-cols-7 space-x-6">
          <div className="col-span-1 flex items-center justify-start">
            <ServiceCategoryRollupLabel category={category} />
          </div>
          <div className="col-span-2 flex h-full items-center  font-aperçu text-sm font-semibold text-black dark:text-neutral-300 md:text-xs">
            <div>{capitalizeFirstLetter(service)}</div>
          </div>
          <div className="col-span-2 flex items-center font-aperçu text-sm font-semibold tabular-nums text-black dark:text-neutral-300 md:text-[0.625rem]">
            <div className="flex items-baseline">{processedDurationString}</div>
          </div>
          <div className="col-span-1 flex items-center justify-start space-x-2 text-xs font-bold  tabular-nums  ">
            {/*             <SaleTag />
             */}
            <div className="flex items-center font-semibold">
              <span className="text-[.625rem]">€</span>
              <span className="flex justify-end">{price}</span>
            </div>
          </div>
          <div className="col-span-1 flex h-full items-center justify-end">
            <div className=" flex h-full items-center">
              <BookServiceButton />
            </div>
          </div>
        </div>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateRows: isServiceRollupHovered ? "1fr" : "0fr",
          transition: "grid-template-rows 500ms",
        }}
      >
        <div
          onMouseEnter={handleOnEnter}
          onMouseLeave={handleOnLeave}
          className="w-[45rem] overflow-hidden rounded-b  bg-neutral-300 "
        >
          <div className="grid grid-cols-7 space-x-6 overflow-hidden border-t-[.625px] border-black px-6">
            <div className="col-span-1"></div>
            <div className="col-span-2">
              <div className=" py-2 text-[0.625rem] font-medium leading-[150%] ">
                {capitalizeFirstLetter(description)}
              </div>
            </div>
            <div className="col-span-2  space-y-2 py-2 text-[.625rem] font-semibold leading-[150%]">
              <div className="flex grid-cols-2">
                <div className="w-2">▪</div>
                <div>{processedUnitString}</div>
              </div>
              <div className="flex grid-cols-2">
                <div className="w-2">▪</div>
                <div>{processedIncludedString}</div>
              </div>
              <div className="flex">
                <div className="w-2">▪</div>
                <div>{processedPersonnelString}</div>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceRollup;
