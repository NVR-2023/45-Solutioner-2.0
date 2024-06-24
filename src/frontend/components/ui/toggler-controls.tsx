import { motion } from "framer-motion";

type TogglerControlsProps = {
  handleOnGetNextInNextItem: () => void;
  handleOnGetPreviousItem: () => void;
};

const ToggleControls = ({
  handleOnGetNextInNextItem,
  handleOnGetPreviousItem,
}: TogglerControlsProps) => {
  return (
    <motion.div className="flex h-4 w-9 hover:bg-neutral-700 transition-all duration-300 flex-shrink-0 items-center rounded bg-neutral-400">
      <motion.div 
      layout
      className="w-full px-1 text-[0.45rem] font-extrabold text-neutral-200">|</motion.div>
    </motion.div>
  );
};

export default ToggleControls;
