import { motion } from "framer-motion";

type TogglerControlsProps = {
  currentIndex: number;
  handleOnToggle: () => void;
};

const ToggleControls = ({
  currentIndex,
  handleOnToggle,
}: TogglerControlsProps) => {
  return (
    <button
      className={`flex h-4 w-9 items-center rounded-[2px]	 px-1 transition-all duration-300 
            ${currentIndex === 0 ? "justify-start bg-neutral-400 text-neutral-200" : "justify-end bg-neutral-100 text-neutral-400"}`}
      onClick={handleOnToggle}
    >
      <motion.div
        layout
        className="flex items-center text-[0.45rem] font-extrabold"
      >
        |
      </motion.div>
    </button>
  );
};

export default ToggleControls;
