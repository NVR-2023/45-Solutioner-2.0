import { useRef } from "react";
import { svgStar, svgHeart, svgEuro } from "./svg-paths";
import SVGMorph from "@/frontend/components/ui/animated-components/svg-morph";

const AnimatedSVGSequence = () => {
  const inViewRef = useRef(null);

  return (
    <div ref={inViewRef}>
      <svg viewBox="0 0 192 192">
        <SVGMorph
          pathsArray={[svgEuro, svgStar, svgHeart, svgEuro]}
          duration={.83333}
        />
      </svg>
    </div>
  );
};

export default AnimatedSVGSequence;
