import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const AnimatedDiscountLoop = () => {
  const DISCOUNT_ARRAY = ["5", "10", "30"];
  const discountArrayIndex = useMotionValue(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get the current value, increment, and wrap around
      const currentIndex = discountArrayIndex.get();
      discountArrayIndex.set(
        (Math.round(currentIndex) + 1) % DISCOUNT_ARRAY.length,
      );
    }, 1000); // Change interval as needed

    return () => clearInterval(intervalId);
  }, [discountArrayIndex]);

  return (
    <div className="flex h-16 w-24 flex-col items-center justify-center ">
      <div className="flex items-baseline pt-2">

        <motion.div className="text-5xl font-black leading-none">
          {DISCOUNT_ARRAY[Math.round(discountArrayIndex.get())]}
        </motion.div>
        <div className="text-xl font-black">%</div>
      </div>
    </div>
  );
};

export default AnimatedDiscountLoop;
