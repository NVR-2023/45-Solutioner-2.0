import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { svgEuro, svgHeart, svgStar } from "./svg-paths";
import SVGMorph from "@/frontend/components/ui/animated-components/svg-morph";

const VARIANTS = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 1,
    },
  },
};
const AnimatedSVGSequence = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      variants={VARIANTS}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <svg viewBox="0 0 192 192">
        <SVGMorph
          pathsArray={[svgEuro, svgStar, svgHeart, svgEuro]}
          duration={1}
        />
      </svg>
    </motion.div>
  );
};

export default AnimatedSVGSequence;
