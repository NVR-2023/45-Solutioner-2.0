import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VARIANTS = {
  initial: { x: -25, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.18,
      delay: 1,
      easing: [0.7, 0, 0.84, 0],
    },
  },
};

const AnimatedDiscountLoop = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="borer-[1px] flex flex-col items-center overflow-clip rounded border-[1pt] border-[#fc6900] px-2 py-1"
    >
      <div className="flex w-full items-center justify-center border-b-[0.75pt] border-[#fc6900] text-sm font-bold small-caps">
        up to
      </div>
      <motion.div
        variants={VARIANTS}
        initial="initial"
        animate={isInView ? "animate" : "initial"} // Trigger animation based on isInView
        className="flex translate-y-0.5 items-center py-1 text-4xl font-black"
      >
        <span className="">30</span>
        <span className="text-2xl">%</span>
      </motion.div>

      <div className="flex w-full items-center justify-center border-t-[0.75pt] border-[#fc6900] text-sm font-bold small-caps">
        off
      </div>
    </div>
  );
};

export default AnimatedDiscountLoop;
