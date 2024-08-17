import { motion } from "framer-motion";
import { TextComponentProps } from "@/types/component-props-types";

const HomepageSectionTagline = ({ text }: TextComponentProps) => {
  const phrasesArray: string[] = text.split("/");
  const wordsArray = phrasesArray.map((phrase) => phrase.split(" "));

  const PARENT_VARIANTS = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const CHILD_VARIANTS = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.div
      variants={PARENT_VARIANTS}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
    >
      {wordsArray.map((phrase, phraseIndex) => (
        <div key={phraseIndex}>
          {phrase.map((word, wordIndex) => (
            <motion.span
              variants={CHILD_VARIANTS}
              transition={{
                duration: 0.5,
              }}
              key={phraseIndex * phrase.length + wordIndex}
              className="text-2xl -tracking-[3%]"
            >
              {`${word} `}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default HomepageSectionTagline;
