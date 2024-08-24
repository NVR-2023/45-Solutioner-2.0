import { useRef } from "react";
import AnimatedSVGSequence from "./animated-svg-sequence";
import TextInplaceInfiniteLoop from "@/frontend/components/ui/animated-components/text-inplace-infinite-loop";
import HomepageSectionCaption from "@/frontend/components/ui/styled-text-components/homepage-section-caption";
import AnimatedDiscountLoop from "./animated-discount-loop";
import { motion, useInView } from "framer-motion";

const VARIANTS = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 1,
    },
  },
};

const PricingAnimatedComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <motion.div
      variants={VARIANTS}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      ref={ref}
      className="-mt-8 mb-2 flex w-48 justify-between text-[#fc6900]"
    >
      <div className="flex size-20 flex-col">
        <AnimatedSVGSequence />
        <div className="flex justify-center">
          <TextInplaceInfiniteLoop
            WrapperElement={HomepageSectionCaption}
            textArray={["Affordable", "Discounted", "On Sale"]}
            duration={3.141}
          />
        </div>
      </div>
      <div className="mt-1,5">
        <AnimatedDiscountLoop />
      </div>
    </motion.div>
  );
};

export default PricingAnimatedComponent;
