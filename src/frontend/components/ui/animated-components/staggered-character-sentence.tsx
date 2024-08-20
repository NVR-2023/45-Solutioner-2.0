import { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";

type StaggeredCharacterSentenceProps = {
  text: string;
  baseDelay?: number;
  WrapperElement: ComponentType<{ children: ReactNode }>;
};

const StaggeredCharacterSentence = ({
  text,
  baseDelay = 0,
  WrapperElement,
}: StaggeredCharacterSentenceProps) => {
  const characterArray: string[] = text
    .split("")
    .map((character) => (character === " " ? "\u00A0" : character));

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
              ease: "easeInOut",
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

export default StaggeredCharacterSentence;
