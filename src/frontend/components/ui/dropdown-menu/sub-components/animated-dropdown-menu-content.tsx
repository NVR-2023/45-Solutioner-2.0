import { motion } from "framer-motion";

type AnimatedDropdownMenuContentProps = {
  text: string;
};

const AnimatedDropdownMenuContent = ({
  text,
}: AnimatedDropdownMenuContentProps) => {
  const variants = {
    initial: {
      x: "-100%",
    },
    animate: {
      x: 0,
      transition: {
        delay:.18,
        duration: 0.27,
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

export default AnimatedDropdownMenuContent;
