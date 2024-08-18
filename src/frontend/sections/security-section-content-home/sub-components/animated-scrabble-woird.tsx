import CustomAnimatedScrabbleCharacter from "./custom-animated-scrabble-character";

type AnimatedScrabbleWordProps = {
  word: string;
  referenceScrollYProgress: number;
};

const AnimatedScrabbleWord = ({
  word,
  referenceScrollYProgress,
}: AnimatedScrabbleWordProps) => {
  const characterArray: string[] = word.split("");

  return (
    <div className="flex space-x-2">
      {characterArray.map((character, index) => (
        <span
          key={index}
          className="flex h-12 w-8 items-center justify-center overflow-clip rounded border-[1px] border-[#fc6900]"
        >
          <CustomAnimatedScrabbleCharacter
            lastCharacter={character}
            referenceScrollYProgress={referenceScrollYProgress}
            delay={index * 0.1}
          />
        </span>
      ))}
    </div>
  );
};

export default AnimatedScrabbleWord;
