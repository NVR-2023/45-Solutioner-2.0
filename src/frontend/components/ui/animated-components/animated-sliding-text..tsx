import { motion } from "framer-motion";

type AnimatedSlidingTextProps = {
  text: string;
};

const AnimatedSlidingText = ({ text }: AnimatedSlidingTextProps) => {
  const variants = {
    initial: {
      x: "-100%",
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.18,
      },
    },
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <motion.div
        key={text}
        variants={variants}
        initial="initial"
        animate="animate"
        className="flex justify-start overflow-hidden"
      >
        {text}
      </motion.div>
    </div>
  );
};

export default AnimatedSlidingText;