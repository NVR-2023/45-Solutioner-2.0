import { useRef } from "react";
import { useInView } from "framer-motion"; // Import useInView from framer-motion
import { star, heart } from "./paths";
import SVGMorph from "@/frontend/components/ui/animated-components/svg-morph";

const AnimatedSmiley = () => {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { amount: "some" });

  return (
    <div ref={inViewRef}>
      <svg viewBox="0 0 192 192">
        {isInView && (
          <>
            <SVGMorph paths={[star, heart, star]} />
          </>
        )}
      </svg>
    </div>
  );
};

export default AnimatedSmiley;
