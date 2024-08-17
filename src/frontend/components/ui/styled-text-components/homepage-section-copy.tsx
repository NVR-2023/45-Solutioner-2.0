import { TextComponentProps } from "@/types/component-props-types";
import { motion, Variants as VariantType } from "framer-motion";

const BASE_DELAY = .5;
const PARENT_VARIANTS: VariantType = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    transition: {
      delay: BASE_DELAY,
    },
  },
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
const HomepageSectionCopy = ({ text }: TextComponentProps) => {
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
              delay: 0.05 * index + BASE_DELAY,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, amount: 0.5 }}
            key={index}
            className="leading-~6 text-sm font-bold"
          >
            {sentence}
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default HomepageSectionCopy;

/*     <motion.div
      variants={VARIANTS}
      initial="initial"
      whileInView="whileInView"
      className="leading-~6 text-sm font-bold"
    >
      {text}
    </motion.div> */
