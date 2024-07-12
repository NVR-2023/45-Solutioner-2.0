import { motion } from "framer-motion";
import { BasicComponentProps } from "@/types/component-props-types";

const tickVariants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 0.7,
      ease: [0.64, 0, 0.78, 0],
    },
  },
};

const AnimatedCheckedBox = ({ scale = 1 }: BasicComponentProps) => {
  return (
    <svg
      className="m-0 flex items-center justify-center p-0"
      xmlns="http://www.w3.org/2000/svg"
      height={24 * scale}
      viewBox="0 -960 960 960"
      width={24 * scale}
    >
      <path
        d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"
        className="fill-current text-black dark:text-white"
      />
      <motion.path
        variants={tickVariants}
        initial="initial"
        animate="animate"
        d="M340-408 L424-311 L650-562"
        className="fill-transparent stroke-current stroke-[40] text-white dark:text-black" // Add stroke styles
      />
    </svg>
  );
};

export default AnimatedCheckedBox;
