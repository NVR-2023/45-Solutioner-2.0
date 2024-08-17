import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { wait } from "@/utils/functions/wait";
import { motion, AnimatePresence } from "framer-motion";

type BasicModalShellProps = {
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

const BasicModalShell = ({
  isModalOpen,
  setIsModalOpen,
  children,
}: BasicModalShellProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleEscapeKeyPress = async (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
        await wait(400);
        router.push("/");
      }
    };

    document.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [setIsModalOpen]);

  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
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

export default BasicModalShell;