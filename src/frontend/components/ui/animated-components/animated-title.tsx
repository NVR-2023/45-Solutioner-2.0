import { motion } from "framer-motion";

type AnimatedTitleProps = {
  title: string;
};

const AnimatedTitle = ({ title }: AnimatedTitleProps) => {
  const characterArray = title.split(/(?!$)/u);
  const variants = {
    initial: {
      opacity: 0,
      rotateY: -180, 
    },
    animate: {
      opacity: 1,
      rotateY: 0,
     
    },
  };

  return (
    <div className="flex">
      {characterArray.map((character, index) => {
        return (
          <motion.span
            key={`${title}-${index}`}
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="inline-block text-[1rem] font-semibold text-[#ff7714]"
          >
            {character === " " ? "\u00A0" : character}{" "}
          </motion.span>
        );
      })}
    </div>
  );
};

export default AnimatedTitle;
