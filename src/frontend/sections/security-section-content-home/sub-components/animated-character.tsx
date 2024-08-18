import { ReactNode, memo} from "react";
import AnimatedScrabbleCharacter from "@/frontend/components/ui/animated-scrabble-character";

type AnimatedCharacterProps = {
  referenceScrollYProgress: number;
  length: number;
};

type WrapperElementProps = {
  children: ReactNode;
};

const WrapperElement = memo(({ children }: WrapperElementProps) => {
  return (
    <div className="text-3xl font-extrabold text-purple-400">{children}</div>
  );
});

WrapperElement.displayName = "WrapperElement";

const AnimatedCharacter = ({
  referenceScrollYProgress,
  length,
}: AnimatedCharacterProps) => {
  const SCROLL_Y_ENTER = 0.3;
  const SCROLL_Y_LEAVE = 0.7;
  const lastIndex = length - 1;


  let arrayIndexFromScrollYProgress: number = 0;
  if (referenceScrollYProgress < SCROLL_Y_ENTER) {
    arrayIndexFromScrollYProgress = 0;
  } else if (referenceScrollYProgress >= SCROLL_Y_ENTER && referenceScrollYProgress <= SCROLL_Y_LEAVE) {
    arrayIndexFromScrollYProgress = Math.round(
      ((referenceScrollYProgress - SCROLL_Y_ENTER) / (SCROLL_Y_LEAVE - SCROLL_Y_ENTER)) *
        lastIndex,
    );
  } else if (referenceScrollYProgress > SCROLL_Y_LEAVE) {
    arrayIndexFromScrollYProgress = lastIndex;
  }

  return (
    <AnimatedScrabbleCharacter
      finalCharacter="A"
      length={length}
      WrapperElement={WrapperElement}
      delay={0.1}
      yGap={2.25}
      currentIndex={arrayIndexFromScrollYProgress}
    />
  );
};

export default AnimatedCharacter;
