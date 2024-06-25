import { useEffect, useRef, ReactNode, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AdvancedModalShellProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  children: ReactNode;
};

const variants = {
  initial: {
    scale: 0,
    transformOrigin: "center center",
  },
  animate: {
    scale: 1,
    transition: {
      delay: 0.1,
      ease: [0, 0.55, 0.45, 1],
      duration: 0.18,
    },
  },
  exit: {
    scale: 0,
    transformOrigin: "center center",
    transition: {
      ease: "easeOut",
      duration: 0.12,
    },
  },
};

const AdvancedModalShell = ({
  isModalOpen,
  setIsModalOpen,
  children,
}: AdvancedModalShellProps) => {
  const modalRef: RefObject<HTMLDialogElement> = useRef(null);

  const handleOnEscapeKeyPress = (
    event: React.KeyboardEvent<HTMLDialogElement>,
  ) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      if (modalRef.current) {
        modalRef.current.showModal();
      }
    } else {
      if (modalRef.current) {
        modalRef.current.close();
      }
    }
  }, [isModalOpen, setIsModalOpen]);

  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <motion.dialog
            ref={modalRef}
            initial="initial"
            animate="animate"
            exit="exit"
            onKeyDown={handleOnEscapeKeyPress}
            variants={variants}
            className="z-50 flex w-[18rem] justify-center rounded bg-[#c9c9c9] px-9 py-5 text-black shadow-[18px_18px_12px_0px_#00000040] backdrop:bg-transparent dark:text-neutral-300"
          >
            {children}
          </motion.dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdvancedModalShell;
