import { motion } from "framer-motion";

type AnimatedSlidingLabelProps = {
  label: string;
};

const AnimatedSlidingLabel = ({ label }: AnimatedSlidingLabelProps) => {
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
        key={label}
        variants={variants}
        initial="initial"
        animate="animate"
        className="flex justify-start overflow-hidden"
      >
        {label}
      </motion.div>
    </div>
  );
};

export default AnimatedSlidingLabel;
