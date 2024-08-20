import { ReactNode, ComponentType } from "react";
import { motion, Variants as VariantType } from "framer-motion";

type StaggeredSentenceParagraphProps = {
  text: string;
  baseDelay?: number;
  WrapperElement: ComponentType<{ children: ReactNode }>;
};
const CHILD_VARIANTS: VariantType = {
  initial: {
    x: -100,
    opacity: 0.1,
  },
  whileInView: {
    x: 0,
    opacity: 1,
  },
};
const StaggeredSentenceParagraph = ({
  text,
  baseDelay = 0,
  WrapperElement,
}: StaggeredSentenceParagraphProps) => {
  const PARENT_VARIANTS: VariantType = {
    initial: {
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
      transition: {
        delay: baseDelay,
      },
    },
  };

  const sentenceArray: string[] = text.split("/");

  return (
    <motion.ul
      variants={PARENT_VARIANTS}
      initial="initial"
      whileInView="whileInView"
    >
      {sentenceArray.map((sentence, index) => {
        return (
          <motion.li
            variants={CHILD_VARIANTS}
            initial="initial"
            whileInView="whileInView"
            transition={{
              delay: 0.05 * index + baseDelay,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, amount: 0.5 }}
            key={index}
          >
            <WrapperElement> {sentence}</WrapperElement>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default StaggeredSentenceParagraph;

/*     <motion.div
      variants={VARIANTS}
      initial="initial"
      whileInView="whileInView"
      className="leading-~6 text-sm font-bold"
    >
      {text}
    </motion.div> */
