import { motion } from "framer-motion";
import { ReactNode, ComponentType } from "react";

type StaggeredWordSentenceProps = {
  text: string;
  baseDelay?: number;
  WrapperElement: ComponentType<{ children: ReactNode }>;
};

const StaggeredWordSentence = ({
  text,
  baseDelay = 0,
  WrapperElement,
}: StaggeredWordSentenceProps) => {
  const wordArray: string[] = text.split(" ");

  const PARENT_VARIANTS = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: baseDelay,
      },
    },
  };

  const CHILD_VARIANTS = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={PARENT_VARIANTS}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      className="flex"
    >
      {wordArray.map((word, wordIndex) => (
        <motion.span variants={CHILD_VARIANTS} key={wordIndex}>
          <WrapperElement> {word}&nbsp; </WrapperElement>{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default StaggeredWordSentence;
