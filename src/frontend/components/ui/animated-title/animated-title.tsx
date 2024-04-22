import { motion } from "framer-motion";

type AnimatedTitleProps = {
  title: string;
};

const AnimatedTitle = ({ title }: AnimatedTitleProps) => {
  const characterArray = title.split("");

  const variants = {
    initial: {
      opacity: 0,
      rotateY: -180, // Rotate each character initially
    },
    animate: {
      opacity: 1,
      rotateY: 0, // Rotate each character back to its original position
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
            transition={{ duration: 0.7, delay: index * 0.1 }} // Stagger the animations
            className="inline-block text-[1rem] font-semibold text-[#ff7714]"
          >
            {character}
          </motion.span>
        );
      })}
    </div>
  );
};

export default AnimatedTitle;
