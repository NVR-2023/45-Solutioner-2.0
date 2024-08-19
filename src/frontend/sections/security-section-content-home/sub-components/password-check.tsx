import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import CustomAnimatedCheckedCircle from "@/frontend/components/icons/animated-icons/custom-animated-checked-circle";
import AnimatedStaggeredString from "@/frontend/components/ui/animated-components/animated-staggered-string";

type PasswordCheckProps = {
  referenceScrollYProgress: number;
};
const VARIANTS = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    duration: 0.3,
  },
};
const PasswordCheck = ({ referenceScrollYProgress }: PasswordCheckProps) => {
  const SCROLL_LEAVE = 0.6
  const isSectionScrolled =
    Math.ceil(referenceScrollYProgress * 10) / 10 >= SCROLL_LEAVE;

  type WrapperElementProps = {
    children: ReactNode;
  };
  const WrapperElement = ({ children }: WrapperElementProps) => (
    <span className="px-[0.3px] text-sm font-black italic small-caps ">
      {children}
    </span>
  );

  return (
    <AnimatePresence>
      {isSectionScrolled && (
        <motion.div
          variants={VARIANTS}
          initial="initial"
          animate="animate"
          exit="exit"
          key="passwordCheck"
        >
          <div className="flex items-center">
            <CustomAnimatedCheckedCircle scale={1.5} />
            <span className="ps-1">
              <AnimatedStaggeredString
                text="provider checks"
                WrapperElement={WrapperElement}
                baseDelay={0.7}
              />
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PasswordCheck;
