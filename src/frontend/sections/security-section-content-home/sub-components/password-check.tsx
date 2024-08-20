import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import CustomAnimatedCheckedCircle from "@/frontend/components/icons/animated-icons/custom-animated-checked-circle";
import StaggeredCharacterSentence from "@/frontend/components/ui/animated-components/staggered-character-sentence";
import VerifiedProviderCaption from "@/frontend/components/ui/styled-text-components/verified-provider-caption";

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
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    duration: 0.3,
  },
};
const PasswordCheck = ({ referenceScrollYProgress }: PasswordCheckProps) => {
  const SCROLL_LEAVE = 0.6;
  const isSectionScrolled =
    Math.ceil(referenceScrollYProgress * 10) / 10 >= SCROLL_LEAVE;

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
              <StaggeredCharacterSentence
                text="verified provider"
                WrapperElement={VerifiedProviderCaption}
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
