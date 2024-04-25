import { motion } from "framer-motion";

type AnimatedDropdownMenuContentProps = {
  text: string;
};

const AnimatedDropdownMenuContent = ({
  text,
}: AnimatedDropdownMenuContentProps) => {
  const variants = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.27,
      },
    },
  };

  return (
    <div className="h-full w-full overflow-y-hidden">
      <motion.div
        key={text}
        variants={variants}
        initial="initial"
        animate="animate"
        className="overflow-y-hidden"
      >
        {text}
      </motion.div>
    </div>
  );
};

export default AnimatedDropdownMenuContent;
