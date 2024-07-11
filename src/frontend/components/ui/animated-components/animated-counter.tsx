import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

const sizeMap = new Map([
  ["sm", "text-sm"],
  ["md", "text-base"],
  ["lg", "text-lg"],
  ["xl", "text-xl"],
  ["3xl", "text-3xl"],
  ["5xl", "text-5xl"],
]);

const weightMap = new Map([
  ["semibold", "font-semibold"],
  ["bold", "font-bold"],
  ["black", "font-black"],
]);

type AnimatedCounterProps = {
  start?: number;
  end: number;
  duration: number;
  size?: "sm" | "md" | "lg" | "xl" | "3xl" | "5xl";
  weight?: "semibold" | "bold" | "black";
};

const AnimatedCounter = ({
  start = 0,
  end,
  duration,
  size = "md",
  weight = "semibold",
}: AnimatedCounterProps) => {
  const counter = useMotionValue(start);
  const roundedCounter = useTransform(counter, Math.floor);

  const counterRef = useRef(null);
  const isCounterInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (!isCounterInView) {
      return;
    }
    const animation = animate(counter, end, {
      delay: 0.3,
      duration: duration / 1000,
      ease: [0.55, 0, 1, 0.45],
    });
    return animation.stop;
  }, [isCounterInView]);

  return (
    <motion.div
      ref={counterRef}
      className={` tabular-nums ${sizeMap.get(size)} ${weightMap.get(weight)}`}
    >
      {roundedCounter}
    </motion.div>
  );
};

export default AnimatedCounter;
