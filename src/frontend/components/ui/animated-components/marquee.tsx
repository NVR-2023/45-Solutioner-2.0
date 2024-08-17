import { ReactNode, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  animate,
  AnimationPlaybackControls,useTransform
} from "framer-motion";

type MarqueeProps = {
  elements: ReactNode[];
  direction: "left-to-right" | "right-to-left";
  duration: number;
};

const Marquee = ({ elements, direction, duration }: MarqueeProps) => {
  const translationXStart = direction === "left-to-right" ? -100 : 0;
  const translationXEnd = direction === "left-to-right" ? 0 : -100;
  const translationXAnimatedValue = useMotionValue(translationXStart);
  const translationXAnimatedPercentage = useTransform(
    translationXAnimatedValue,
    (value) => `${value}%`,
  );

  const controlsRef = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    const controls = animate(translationXAnimatedValue, translationXEnd, {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
    });

    controlsRef.current = controls;
  }, [translationXAnimatedValue, translationXEnd, duration]);

  const halfMarquee = (
    <motion.div
      style={{
        x: translationXAnimatedPercentage,
      }}
      className="flex"
    >
      {elements.map((element, index) => (
        <div key={index}>{element}</div>
      ))}
    </motion.div>
  );

  return (
    <motion.div
      onMouseEnter={() => {
        controlsRef.current?.pause();
      }}
      onMouseLeave={() => {
        controlsRef.current?.play();
      }}
      className="flex w-full overflow-hidden"
    >
      {halfMarquee}
      {halfMarquee}
    </motion.div>
  );
};

export default Marquee;
