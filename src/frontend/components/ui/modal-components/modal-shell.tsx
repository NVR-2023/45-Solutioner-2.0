import { useEffect, useRef, ReactNode, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ModalShellProps = {
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
      duration: 0.18,
    },
  },
};

const ModalShell = ({
  isModalOpen,
  setIsModalOpen,
  children,
}: ModalShellProps) => {
  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handleOnCloseModal = () => {
      setIsModalOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleOnCloseModal();
      }
    };

    if (isModalOpen) {
      // Disable pointer events globally
      document.body.style.pointerEvents = "none";

      // Re-enable pointer events for the modal
      if (modalRef.current) {
        modalRef.current.style.pointerEvents = "auto";
      }

      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.pointerEvents = "auto";
    }

    return () => {
      document.body.style.pointerEvents = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, setIsModalOpen]);

  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex w-[18rem] justify-center rounded bg-[#c9c9c9] px-7 py-7 text-black shadow-[18px_18px_12px_0px_#00000040] dark:text-neutral-300"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalShell;

