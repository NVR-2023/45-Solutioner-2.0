"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { wait } from "@/utils/functions/wait";
import { useRouter, usePathname } from "next/navigation";

type ModalProps = {
  caption: string;
};
const Modal = ({ caption }: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const router = useRouter();
  const pathName = usePathname();

  const variants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: { ease: "easeOut", duration: 0.5 },
    },
    exit: {
      scale: 0,
      transition: { ease: "easeIn", duration: 0.5 },
    },
  };

  return (
    <div>
      <AnimatePresence mode="wait" onExitComplete={() => null}>
        {isModalOpen && (
          <motion.div
            key="modal"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex h-60 w-60 flex-col rounded bg-yellow-700"
          >
            <span>{caption}</span>
            <span>
              <button
                onClick={async () => {
                  setIsModalOpen(!isModalOpen);
                  await wait(500);
                  if (pathName === "/test3") {
                    router.push("/test4");
                  } else {
                    router.push("/test3");
                  }
                }}
              >
                Modal Toggle
              </button>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modal;
