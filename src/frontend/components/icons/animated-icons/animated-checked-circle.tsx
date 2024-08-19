import { BasicComponentProps } from "@/types/component-props-types";
import { motion } from "framer-motion";

const VARIANTS = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: .9,
    },
  },
};

const AnimatedCheckedCircle = ({
  scale = 1,
  color = "currentColor",
}: BasicComponentProps) => {
  return (
    <svg
      className="m-0 flex items-center justify-center p-0"
      xmlns="http://www.w3.org/2000/svg"
      height={24 * scale}
      viewBox="0 -960 960 960"
      width={24 * scale}
      fill={color}
    >
      <motion.path
        variants={VARIANTS}
        initial="initial"
        animate="animate"
        d="M340-408 L424-311 L650-562"
        className="fill-transparent stroke-current stroke-[70] text-current dark:text-black"
      />
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" />
    </svg>
  );
};

export default AnimatedCheckedCircle;
