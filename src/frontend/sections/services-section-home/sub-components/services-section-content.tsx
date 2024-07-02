import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import RegisterButton from "./register-button";

const ServicesSectionContent = () => {
  const counterRef = useRef(null);
  const [referenceScrollYProgress, setReferenceScrollYProgress] = useState<
    number | null
  >(null);

  const { scrollYProgress } = useScroll({ target: counterRef });
  useMotionValueEvent(scrollYProgress, "change", (currentScrollYProgress) => {
    const MAX_SCROLL_Y_PROGRESS_VALUE = 0.62;
    const MIN_OUTPUT_ADJUSTED_VALUE = 0.5;
    const _ADJUSTED_VALUE = 1;

    const normalizedValue =
      currentScrollYProgress / MAX_SCROLL_Y_PROGRESS_VALUE;
    const adjustedScrollYProgress =
      1 -
      (normalizedValue * (_ADJUSTED_VALUE - MIN_OUTPUT_ADJUSTED_VALUE) +
        MIN_OUTPUT_ADJUSTED_VALUE);

    setReferenceScrollYProgress(adjustedScrollYProgress);
  });

  const MAX_NUMBER_OF_CATEGORIES = 12;
  const LEAD_NUMBER_OF_CATEGORIES = Math.floor(MAX_NUMBER_OF_CATEGORIES / 2);
  const currentNumberOfCategoriesCounter =
    Math.floor(MAX_NUMBER_OF_CATEGORIES * referenceScrollYProgress!) +
    LEAD_NUMBER_OF_CATEGORIES;

  const MAX_NUMBER_OF_SERVICES = 54;
  const LEAD_NUMBER_OF_SERVICES = Math.floor(MAX_NUMBER_OF_SERVICES / 2);
  const currentNumberOFServicesCounter =
    Math.floor(MAX_NUMBER_OF_SERVICES * referenceScrollYProgress!) +
    LEAD_NUMBER_OF_SERVICES;

  const TAGLINE =
    "From stubborn sink pipes to pesky hornets' nests, solutions are a click away";

  return (
    <motion.div className="xbg-green-400 grid w-full grid-cols-5 grid-rows-2 gap-x-0.5 font-aperçu text-lg font-extrabold text-[#ff7714]">
      <div className="row-span col-span-4 flex flex-col ps-6 text-2xl -tracking-[3%] ">
        <div className="flex flex-col -space-y-1">
          <div className="">Home services?</div>
          <div className="">We got you covered.</div>
        </div>
        <div className="flex justify-end pe-6 ps-5 pt-1 text-right text-xs font-bold leading-5">
          {TAGLINE}
        </div>
        <div>
          <RegisterButton />
        </div>
      </div>

      <div className="xbg-yellow-400 col-span-1 flex">
        <div className="flex items-baseline space-x-3 ps-4">
          <div className="flex flex-col -space-y-0.5 pt-4">
            <motion.div
              ref={counterRef}
              className="text-3xl font-bold tabular-nums tracking-wide"
            >
              {currentNumberOfCategoriesCounter}
            </motion.div>
            <div className="text-xs font-medium">Categories</div>
          </div>
          <div className="flex flex-col -space-y-0.5">
            <div className="text-5xl font-bold tabular-nums tracking-wide">
              {currentNumberOFServicesCounter}
            </div>
            <div className="text-xs font-medium">Services</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSectionContent;
