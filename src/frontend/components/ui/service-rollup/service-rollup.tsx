import { motion } from "framer-motion";
import { useState } from "react";
import ServiceCategoryRollupTag from "./sub-components/service-category-tag";
import { capitalizeFirstLetter } from "@/utils/functions/capitalize-first-letter";

import RollupContent from "../styled-text-components/rollup-content";
import RollupSmallNote from "../styled-text-components/rollup-small-note";
import BookServiceButton from "./sub-components/book-service-button";
import SaleTag from "./sub-components/sale-tag";
import PriceCutTag from "./sub-components/price-cut-tag";

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
  id: number;
  service: string;
  price: string;
  sale: string;
  saleExpiresBy: string;
  duration: string;
  description: string;
  unit: string;
  included: string;
  personnel: number;
};

const ServiceRollup = ({
  category,
  service,
  id,
  price,
  sale,
  saleExpiresBy,
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
  const processedIncludedString = capitalizeFirstLetter(included).trim();
  const processedPersonnelString = (
    personnel > 1
      ? `Serviced by ${personnel} professionals`
      : "Serviced by 1 professional"
  ).trim();

  const saleValue = parseFloat(sale);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div
        onMouseEnter={handleOnEnter}
        onMouseLeave={handleOnLeave}
        className={`flex h-7 w-[45rem] items-center bg-neutral-300 px-6 transition-all duration-700 ${isServiceRollupHovered ? "rounded-t-[4px]" : "rounded"}`}
      >
        <div className="grid w-full grid-cols-7 space-x-6">
          <div className="col-span-1 flex items-center justify-start">
            <ServiceCategoryRollupTag category={category} />
          </div>
          <div className="col-span-2 flex h-full items-center">
            <RollupContent text={capitalizeFirstLetter(service)} />
          </div>

          <div className="col-span-2 flex items-center">
            <RollupSmallNote text={processedDurationString} />
          </div>

          <div className=" col-span-1 flex items-center text-xs ">
            <div className="grid w-full grid-cols-2">
              <div className="col-span-1 flex justify-end pe-2">
                <span className="text-[.625rem]">€</span>

                <RollupContent text={price} />
              </div>
              <div className="col-span-1 flex justify-start ps-2">
                {sale ? <SaleTag /> : null}
              </div>
            </div>
          </div>
          <div className="col-span-1 flex h-full items-center justify-end">
            <div className=" flex h-full items-center">
              <BookServiceButton
                service={service}
                id={id}
                duration={duration}
                price={price}
                isServiceRollupHovered={isServiceRollupHovered}
              />
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
          <div className="grid grid-cols-7 space-x-6 overflow-hidden border-t-[1.2px] border-neutral-200 px-6 py-2">
            <div className="col-span-1"></div>
            <div className="col-span-2">
              <RollupSmallNote text={capitalizeFirstLetter(description)} />
            </div>
            <div className="col-span-2  space-y-2">
              <div className="flex grid-cols-2">
                <div className="w-2 pe-1 text-xs">▪</div>
                <RollupSmallNote text={processedUnitString} />
              </div>
              <div className="flex grid-cols-2">
                <div className="w-2 pe-1 text-xs">▪</div>
                <RollupSmallNote text={processedIncludedString} />
              </div>
              <div className="flex">
                <div className="w-2 pe-1 text-xs">▪</div>
                <RollupSmallNote text={processedPersonnelString} />
              </div>
            </div>

            <div className=" col-span-1 flex text-xs ">
              <div className="grid w-full grid-cols-2">
                <div className="col-span-1 flex justify-end pe-2 font-aperçu text-sm font-semibold tabular-nums text-black dark:text-neutral-300 md:text-xs"></div>
                <div className="col-span-1 flex items-start justify-start ps-2">
                  {sale ? <PriceCutTag sale={sale} /> : null}
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceRollup;
