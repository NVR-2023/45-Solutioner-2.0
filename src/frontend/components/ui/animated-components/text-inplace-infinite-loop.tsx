import { useState, useEffect, ComponentType, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TextInplaceInfiniteLoopProps = {
  textArray: string[];
  WrapperElement: ComponentType<{ children: ReactNode }>;
  duration: number;
};

const TextInfiniteLoop = ({
  textArray,
  WrapperElement,
  duration,
}: TextInplaceInfiniteLoopProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const durationForEachText = duration / textArray.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % textArray.length);
    }, durationForEachText * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: durationForEachText,
          },
        }}
        exit={{ opacity: 0 }}
        key={textArray[currentIndex]}
      >
        <WrapperElement>{textArray[currentIndex]}</WrapperElement>
      </motion.div>
    </AnimatePresence>
  );
};

export default TextInfiniteLoop;
