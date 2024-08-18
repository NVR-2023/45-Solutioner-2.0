import { motion } from "framer-motion";
import { ReactNode, ComponentType, useMemo } from "react";
import getRandomCapsCharacter from "@/utils/functions/get-random-caps-character";

type AnimatedScrabbleCharacterProps = {
  lastCharacter: string;
  totalNumberOfCharacters: number;
  WrapperElement: ComponentType<{ children: ReactNode }>;
  yGap: number;
  currentIndex: number;
  delay: number;
};

const AnimatedScrabbleCharacter = ({
  lastCharacter,
  totalNumberOfCharacters,
  WrapperElement,
  yGap,
  currentIndex = 0,
  delay,
}: AnimatedScrabbleCharacterProps) => {
  const scrabbleArray: string[] = useMemo(() => {
    const array: string[] = [];
    let currentCharacter: string = "";
    for (let i = 0; i < totalNumberOfCharacters - 1; i++) {
      currentCharacter = getRandomCapsCharacter();
      while (
        array.includes(currentCharacter) ||
        currentCharacter === lastCharacter[0]
      ) {
        currentCharacter = getRandomCapsCharacter();
      }
      array.push(currentCharacter);
    }
    array.push(lastCharacter[0]);
    return array;
  }, []);

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.div
        animate={{ y: `${currentIndex * yGap}rem` }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 1.5,
          duration: 0.12,
          ease: "easeInOut",
          delay: delay,
        }}
        className="flex h-full w-full items-center justify-center"
      >
        {scrabbleArray.map((character, index) => (
          <div
            className=""
            style={{
              position: "absolute",
              top: `-${yGap * index}rem`,
              transform: "translateY(25%)",
            }}
            key={index}
          >
            <WrapperElement>{character}</WrapperElement>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedScrabbleCharacter;
