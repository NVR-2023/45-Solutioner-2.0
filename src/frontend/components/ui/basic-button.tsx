import { MouseEventHandler, ReactNode } from "react";
import { motion } from "framer-motion";

export type BasicButtonProps = {
  type?: "outlined" | "filled";
  size?: "sm" | "md" | "lg";
  label?: ReactNode;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const outlinedVariants = {
  initial: {
    scale: 1,
  },
  whileTap: {
    scale: [1, 1.05, 0.9, 1],
    transition: {
      duration: 0.12,
      ease: "easeInOut"
    },
  },
};

const filledVariants = {
  initial: {
    scale: 1,
  },
  whileTap: {
    scale: [1, 1.2, 0.9, 1],
    transition: {
      duration: 0.12,
    },
  },
};

const BasicButton = ({
  type = "filled",
  size = "md",
  label,
  onClick,
  disabled,
}: BasicButtonProps) => {
  const baseStyle: string = "flex justify-center items-center rounded ";

  const ButtonTypeMap = new Map([
    [
      "outlined",
      "border-black border-[1.5px] font-aperçu font-extrabold text-sm md:text-xs leading-[.5rem] tracking-wide small-caps text-black dark:text-neutral-300 ",
    ],
    [
      "filled",
      "bg-neutral-900 font-aperçu font-bold text-sm md:text-xs leading-[.5rem] tracking-wide small-caps text-neutral-300 font-bold dark:font-semibold dark:text-neutral-300",
    ],
  ]);

  const sizeMap = new Map([
    ["sm", "w-16 h-6"],
    ["md", "w-24 h-6"],
    ["lg", "w-32 h-6"],
  ]);

  return (
    <motion.button
      variants={type === "outlined" ? outlinedVariants : filledVariants}
      initial="initial"
      whileHover="whileHover"
      whileTap="whileTap"
      onClick={onClick}
      className={`${baseStyle} ${ButtonTypeMap.get(type)} ${sizeMap.get(size)}`}
      disabled={disabled}
    >
      {label}
    </motion.button>
  );
};

export default BasicButton;
