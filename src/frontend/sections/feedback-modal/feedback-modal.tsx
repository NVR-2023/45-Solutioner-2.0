import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";
import { capitalizeFirstLetter } from "@/utils/functions/capitalize-first-letter";

import LogoIcon from "@/frontend/components/icons/logo-icon";

type FeedbackModalProps = {
  isFeedbackModalOpen: boolean;
  closeFeedbackModal: () => void;
};

const variants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.3,
    },
  },
  exit: {
    scale: 0,
    transition: {
      ease: "easeOut",
      duration: 0.18,
    },
  },
};

const FeedbackModal = ({
  isFeedbackModalOpen,
  closeFeedbackModal,
}: FeedbackModalProps) => {
  const {
    bookServiceModalContext: { service },
  } = useBookServiceModalContext();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      closeFeedbackModal();
    }, 1800);

    return () => clearTimeout(timeoutId);
  }, [closeFeedbackModal]);

  return (
    <AnimatePresence key="greetingModal">
      {isFeedbackModalOpen && (
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="z-50 flex h-14 w-48  items-center justify-center overflow-hidden  rounded bg-yellow-300 shadow-[18px_18px_12px_0px_#00000040]"
        >
          <div className="flex items-center tracking-wide justify-center text-xs font-semibold">
            {capitalizeFirstLetter(service!)} booked
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeedbackModal;
