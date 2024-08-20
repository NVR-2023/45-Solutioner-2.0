import { motion } from "framer-motion";

const IrradiatingCircle = () => {
  return (
    <div className="relative h-14 w-14 text-black">
      <div className="absolute inset-0 flex items-center justify-center">
        Sales
      </div>

      <motion.div
        animate={{
          scale: [1, 1.5],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: [0, 0.55, 0.45, 1],
          delay: 3,
        }}
        className="absolute inset-0 flex items-center justify-center rounded-full border-[1.5px]  border-[#fc6900]"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1.2, 1.7],
          opacity: [0.25, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: [0, 0.55, 0.45, 1],
          delay:4,
        }}
        className="absolute inset-0 flex items-center justify-center rounded-full border-[1.5px] border-[#fc6900]"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1.4, 1.9],
          opacity: [0.125, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: [0, 0.55, 0.45, 1],
          delay: 5,
        }}
        className="absolute inset-0 flex items-center justify-center rounded-full border-[1.5px]  border-[#fc6900]"
      ></motion.div>
    </div>
  );
};

export default IrradiatingCircle;
