import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormModalShellProps = {
  isModalOpen: boolean;
  children: ReactNode;
};
const variants = {
  initial: {
    scale: 0.1,
    transformOrigin: "center center",
  },
  animate: {
    scale: 1,
    transition: {
      delay: 0.1,
      ease: [0, 0.55, 0.45, 1],
      duration: 0.5,
    },
  },
  exit: {
    scale: 0,
    transformOrigin: "center center",
    transition: {
      ease: "easeOut",
      duration: 0.18,
    },
  },
};

const ModalShell = ({ isModalOpen, children }: FormModalShellProps) => {
  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="z-50 flex w-[18rem] justify-center rounded bg-neutral-300 px-14 py-7 text-black shadow-[18px_18px_12px_0px_#00000040] dark:text-neutral-300"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalShell;
