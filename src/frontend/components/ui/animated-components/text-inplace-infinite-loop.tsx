import { useState, useEffect, ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";

type TextInplaceInfiniteLoopProps = {
  textArray: string[];
  WrapperElement: ComponentType<{ children: ReactNode }>;
  duration: number;
};

const TextInplaceInfiniteLoop = ({
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
    <motion.div
      animate={{
        opacity: [0, 1,1, 0],
        transition: {
          duration: durationForEachText,
          times: [0, 0.2, 0.8, 1],
        },
      }}
      key={textArray[currentIndex]}
    >
      <WrapperElement>{textArray[currentIndex]}</WrapperElement>
    </motion.div>
  );
};

export default TextInplaceInfiniteLoop;
