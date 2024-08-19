import { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedStaggeredStringPProps = {
  text: string;
  baseDelay?: number;
  WrapperElement: ComponentType<{ children: ReactNode }>;
};

const AnimatedStaggeredString = ({
  text,
  baseDelay = 0,
  WrapperElement,
}: AnimatedStaggeredStringPProps) => {
  const characterArray: string[] = text.split("");
  return (
    <div className="flex">
      {characterArray.map((character, index) => (
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.12,
              delay: baseDelay + index * 0.05,
            },
          }}
          key={index}
        >
          <WrapperElement>{character}</WrapperElement>
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedStaggeredString;
