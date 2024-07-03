import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";
import { capitalizeFirstLetter } from "@/utils/functions/capitalize-first-letter";

type ToastProps = {
  isToastOpen: boolean;
  closeToast: () => void;
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

const Toast = ({
  isToastOpen,
  closeToast,
}: ToastProps) => {
  const {
    bookServiceModalContext: { service },
  } = useBookServiceModalContext();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      closeToast();
    }, 1800);

    return () => clearTimeout(timeoutId);
  }, [closeToast]);

  return (
    <AnimatePresence key="greetingModal">
      {isToastOpen && (
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="z-50 flex h-14 w-48  items-center justify-center overflow-hidden  rounded bg-yellow-300 shadow-[18px_18px_12px_0px_#00000040]"
        >
          <div className="flex items-center justify-center text-xs font-semibold tracking-wide">
            {capitalizeFirstLetter(service!)} booked
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
