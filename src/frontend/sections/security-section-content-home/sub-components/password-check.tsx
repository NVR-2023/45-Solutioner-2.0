import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import AnimatedCheckedCircle from "@/frontend/components/icons/animated-icons/animated-checked-circle";
import HomepageSectionCaption from "@/frontend/components/ui/styled-text-components/homepage-section-caption";
import AnimatedStaggeredString from "@/frontend/components/ui/animated-components/animated-staggered-string";

type PasswordCheckProps = {
  referenceScrollYProgress: number;
};
const VARIANTS = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
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
  const isSectionScrolled = referenceScrollYProgress >= 0.6;

  type WrapperElementProps = {
    children: ReactNode;
  };
  const WrapperElement = ({ children }: WrapperElementProps) => (
    <span className="text-sm px-[0.3px] font-extrabold small-caps ">{children}</span>
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
          <div className="flex">
            <AnimatedCheckedCircle scale={1.8} />

            <div className="flex flex-col -space-y-2 ps-2">
              <AnimatedStaggeredString
                text="provider"
                WrapperElement={WrapperElement}
              />
              <AnimatedStaggeredString
                text="checks"
                baseDelay={0.3}
                WrapperElement={WrapperElement}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PasswordCheck;
