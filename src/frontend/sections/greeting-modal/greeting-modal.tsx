import { useEffect, Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wait } from "@/utils/functions/wait";

type GreetingModalProps = {
  isModalShown: boolean;
  closeGreetingsModal: () => void;
};

const variants = {
  initial: { x: "-500%" },
  animate: {
    x: 0,
    transition: {
      delay: 0.27,
      ease: [0, 0.55, 0.45, 1],
      duration: 0.36,
    },
  },
  exit: {
    x: "500%",
    transition: {
      delay: 0.1,
      ease: "easeOut",
      duration: 0.36,
    },
  },
};

const GreetingModal = ({
  isModalShown,
  closeGreetingsModal,
}: GreetingModalProps) => {
  useEffect(() => {
    const initializeModal = async () => {
      await wait(1500);
      closeGreetingsModal();
    };
    initializeModal();
  }, []);

  return (
    <AnimatePresence key="greetingModal">
      {isModalShown && (
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="z-100 box-border flex h-12 w-36 items-center justify-center rounded bg-yellow-300 px-4 py-2 shadow-[18px_18px_12px_0px_#00000040]"
        >
          <motion.div className=" text-xs font-[700] ">
            Welcome,
            <motion.span className="small-caps">nr</motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GreetingModal;
