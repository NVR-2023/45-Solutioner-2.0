import { useRef } from "react";
import { useInView } from "framer-motion"; // Import useInView from framer-motion
import { star, star2, heart, } from "./paths";
import SVGMorph from "@/frontend/components/ui/animated-components/svg-morph";

const AnimatedSVGSequence = () => {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { amount: "some" });

  return (
    <div ref={inViewRef}>
      <svg viewBox="0 0 192 192">
        {isInView && (
          <>
            <SVGMorph paths={[star, heart,  star2, star]} />
          </>
        )}
      </svg>
    </div>
  );
};

export default AnimatedSVGSequence;
