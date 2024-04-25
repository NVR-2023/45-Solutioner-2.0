import { motion } from "framer-motion";

type TextProps = {
  text: string;
};

const Text = ({ text }: TextProps) => {
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
    <div className="h-full w-full overflow-hidden">
      <motion.div
        key={text}
        variants={variants}
        initial="initial"
        animate="animate"
        className="overflow-hidden"
      >
        {text}
      </motion.div>
    </div>
  );
};

export default Text;
