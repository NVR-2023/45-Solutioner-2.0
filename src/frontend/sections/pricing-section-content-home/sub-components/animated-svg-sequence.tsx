import { svgEuro, svgHeart, svgStar } from "./svg-paths";
import SVGMorph from "@/frontend/components/ui/animated-components/svg-morph";

const AnimatedSVGSequence = () => {
  return (
    <div>
      <svg viewBox="0 0 192 192">
        <SVGMorph
          pathsArray={[svgEuro, svgStar, svgHeart, svgEuro]}
          duration={1}
        />
      </svg>
    </div>
  );
};

export default AnimatedSVGSequence;
