import { ReactNode, memo } from "react";
import AnimatedScrabbleCharacter from "@/frontend/components/ui/animated-scrabble-character";

type AnimatedCharacterProps = {
  lastCharacter: string;
  referenceScrollYProgress: number;
  length?: number;
  delay: number;
};

type WrapperElementProps = {
  children: ReactNode;
};

const WrapperElement = memo(({ children }: WrapperElementProps) => {
  return (
    <div className="text-2xl font-extrabold text-[#fc6900]">{children}</div>
  );
});

WrapperElement.displayName = "WrapperElement";

const CustomAnimatedScrabbleCharacter = ({
  lastCharacter,
  referenceScrollYProgress,
  length: totalNumberOfCharacters = 5,
  delay,
}: AnimatedCharacterProps) => {
  const SCROLL_Y_ENTER = 0.3;
  const SCROLL_Y_LEAVE = 0.6;
  const lastIndex = totalNumberOfCharacters - 1;

  let arrayIndexFromScrollYProgress: number = 0;

  referenceScrollYProgress = Math.ceil(referenceScrollYProgress * 10) / 10;
  if (referenceScrollYProgress < SCROLL_Y_ENTER) {
    arrayIndexFromScrollYProgress = 0;
  } else if (
    referenceScrollYProgress >= SCROLL_Y_ENTER &&
    referenceScrollYProgress <= SCROLL_Y_LEAVE
  ) {
    arrayIndexFromScrollYProgress = Math.round(
      ((referenceScrollYProgress - SCROLL_Y_ENTER) /
        (SCROLL_Y_LEAVE - SCROLL_Y_ENTER)) *
        lastIndex,
    );
  } else {
    arrayIndexFromScrollYProgress = lastIndex;
  }

  if (arrayIndexFromScrollYProgress < 0) {
    arrayIndexFromScrollYProgress = 0;
  } else if (arrayIndexFromScrollYProgress > lastIndex) {
    arrayIndexFromScrollYProgress = lastIndex;
  }

  return (
    <AnimatedScrabbleCharacter
      lastCharacter={lastCharacter}
      totalNumberOfCharacters={totalNumberOfCharacters}
      WrapperElement={WrapperElement}
      delay={delay}
      yGap={2}
      currentIndex={arrayIndexFromScrollYProgress}
    />
  );
};

export default CustomAnimatedScrabbleCharacter;
