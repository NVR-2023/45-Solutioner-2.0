import { useEffect, Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wait } from "@/utils/functions/wait";

type GreetingModalProps = {
  isModalShown: boolean;
  closeModal: () => void;
};

const GreetingModal = ({ isModalShown, closeModal }: GreetingModalProps) => {
  useEffect(() => {
    const flashModal = async () => {
      await wait(3000);
      closeModal();
    };

    flashModal();
  }, []);

  return (
    <AnimatePresence>
      {isModalShown && (
        <motion.div className="justify-enter h20 flex w-20 items-center rounded bg-blue-700">
          Greetings
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GreetingModal;
