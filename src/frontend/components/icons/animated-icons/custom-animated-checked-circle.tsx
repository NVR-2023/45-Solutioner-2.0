import { BasicComponentProps } from "@/types/component-props-types";
import { motion } from "framer-motion";

const VARIANTS = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 1.2,
      ease: [0.5, 0, 0.75, 0],
    },
  },
};

const CustomAnimatedCheckedCircle = ({
  scale = 1,
  color = "currentColor",
  thickness = 10,
}: BasicComponentProps & { thickness?: number }) => {
  return (
    <svg
      className="m-0 flex items-center justify-center p-0"
      xmlns="http://www.w3.org/2000/svg"
      height={24 * scale}
      viewBox="0 -960 960 960"
      width={24 * scale}
      fill="none"
      stroke={color}
      strokeWidth={thickness}
    >
      <motion.path
        variants={VARIANTS}
        initial="initial"
        animate="animate"
        d="M340-408 L424-311 L650-562"
        className="fill-transparent stroke-current stroke-[50] text-current dark:text-black"
      />
      <circle cx="480" cy="-480" r="400" stroke={color} strokeWidth={50} />
    </svg>
  );
};

export default CustomAnimatedCheckedCircle;
