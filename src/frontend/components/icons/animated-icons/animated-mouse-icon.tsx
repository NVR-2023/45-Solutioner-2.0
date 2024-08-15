import { BasicComponentProps } from "@/types/component-props-types";
import { motion } from "framer-motion";

const VARIANTS = {
  animate: {
    y: ["0px", "5px", "0px"],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
const AnimatedMouseIcon = ({
  scale = 1,
  color = "currentColor",
}: BasicComponentProps) => {
  return (
    <motion.svg
      variants={VARIANTS}
      animate="animate"
      className="m-0 flex items-center justify-center p-0"
      xmlns="http://www.w3.org/2000/svg"
      height={24 * scale}
      viewBox="0 -960 960 960"
      width={24 * scale}
      fill={color}
    >
      <path d="M480-80q-116 0-198-82t-82-198v-240q0-116 82-198t198-82q116 0 198 82t82 198v240q0 116-82 198T480-80Zm40-520h160q0-72-45.5-127T520-796v196Zm-240 0h160v-196q-69 14-114.5 69T280-600Zm200 440q83 0 141.5-58.5T680-360v-160H280v160q0 83 58.5 141.5T480-160Zm0-360Zm40-80Zm-80 0Zm40 80Z" />
    </motion.svg>
  );
};

export default AnimatedMouseIcon;
