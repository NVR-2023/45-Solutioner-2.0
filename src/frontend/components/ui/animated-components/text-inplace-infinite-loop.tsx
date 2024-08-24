import {
  useState,
  useEffect,
  useLayoutEffect,
  ComponentType,
  ReactNode,
} from "react";
import { motion } from "framer-motion";
import { wait } from "@/utils/functions/wait";

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

  useLayoutEffect(() => {
    const waitAtTheBeginning = async () => {
      await wait(1000);
    };
    waitAtTheBeginning();
  }, []);

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
        opacity: [0, 1, 1, 0],
        transition: {
          duration: durationForEachText,
          times: [0, 0.15, 0.85, 1],
          easing: [0.16, 1, 0.3, 1],
        },
      }}
      key={textArray[currentIndex]}
    >
      <WrapperElement>{textArray[currentIndex]}</WrapperElement>
    </motion.div>
  );
};

export default TextInplaceInfiniteLoop;
