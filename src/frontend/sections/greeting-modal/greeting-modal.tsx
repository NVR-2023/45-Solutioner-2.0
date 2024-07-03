import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useUserDetailsContext } from "@/frontend/contexts/use-user-details";

type GreetingModalProps = {
  isGreetingModalOpen: boolean;
  closeGreetingsModal: () => void;
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

const GreetingModal = ({
  isGreetingModalOpen,
  closeGreetingsModal,
}: GreetingModalProps) => {
  const router = useRouter();

  useEffect(() => {
    const initializeModal = () => {
      const timeoutId = setTimeout(() => {
        closeGreetingsModal();
      }, 1500);
      return () => clearTimeout(timeoutId);
    };

    initializeModal();
  }, []);

  const { userName } = useUserDetailsContext();

  return (
    <AnimatePresence key="greetingModal">
      {isGreetingModalOpen && (
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="z-50 flex w-48 overflow-hidden  rounded bg-yellow-300 shadow-[18px_18px_12px_0px_#00000040]"
        >
          <div className="flex w-full flex-col">
            <div className="flex h-12 items-center justify-center text-xs font-medium ">
              {`Welcome, ${userName?.split(" ")[0].substring(0, 12)}`}
            </div>
            <div className=" h-24 w-full bg-green-400">ABD</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GreetingModal;
