import { ReactNode, ComponentType } from "react";
import { motion, useAnimationControls } from "framer-motion";

type ElementWrapperProps = {
  children: ReactNode;
};

type MarqueeProps = {
  elementArray: string[];
  ElementWrapper: ComponentType<ElementWrapperProps>;
  direction: "left-to-right" | "right-to-left";
  duration: number;
};

const Marquee = ({
  elementArray,
  ElementWrapper,
  direction,
  duration,
}: MarqueeProps) => {
  const VARIANTS = {
    initial: {
      x: direction === "left-to-right" ? "-100%" : 0,
    },
    animate: {
      x: direction === "left-to-right" ? "0%" : "-100%",
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const controls = useAnimationControls();

  const halfMarquee = (
    <motion.div
      variants={VARIANTS}
      initial="initial"
      animate="animate"
      className="flex "
    >
      {elementArray.map((element, index) => (
        <ElementWrapper key={index}>{element}</ElementWrapper>
      ))}
    </motion.div>
  );

  return (
    <div className="flex w-full">
      {halfMarquee}
      {halfMarquee}
    </div>
  );
};

export default Marquee;
