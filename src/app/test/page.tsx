"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { wait } from "@/utils/functions/wait";
const TestAnimation = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const variants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { ease: "easeOut", duration: .7 },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: { ease: "easeIn", duration: .2 },
    },
  };

  return (
    <div className="relative flex h-screen flex-col items-center justify-center space-y-4">
      <AnimatePresence mode="wait" onExitComplete={() => {}}>
        {isModalOpen && (
          <motion.div
            key={"modal"}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex h-40 w-40 items-start justify-center bg-green-400"
          >
            <span>
              <div>This is modal 1</div>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <button
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded bg-blue-700 px-4 py-2 text-white"
          onClick={async () => {
            setIsModalOpen(!isModalOpen);
            await wait(500);
            router.push("/test2");
          }}
        >
          Toggle
        </button>
      </div>
    </div>
  );
};

export default TestAnimation;
