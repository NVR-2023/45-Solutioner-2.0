import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormModalShellProps = {
  isModalOpen: boolean;
  children: ReactNode;
};

const FormModalShell = ({ isModalOpen, children }: FormModalShellProps) => {
  const variants = {
    initial: { x: "-300%" },
    animate: {
      x: 0,
      transition: {
        delay: 0.18,
        ease: [0, 0.55, 0.45, 1],
        duration: 0.36,
      },
    },
    exit: {
      x: "300%",
      transition: {
        delay: 0.1,
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isModalOpen && (
          <motion.div
            key={`modal-${Math.random().toString(36).substring(2, 7)}`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex w-[18rem] justify-center rounded bg-neutral-300 px-14 py-7 text-black shadow-[18px_18px_12px_0px_#00000040] dark:text-neutral-300"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FormModalShell;
