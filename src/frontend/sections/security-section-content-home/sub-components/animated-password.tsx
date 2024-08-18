import { motion } from "framer-motion";

type AnimatedProfileProps = {
  referenceScrollYProgress: number;
};

const AnimatedPassword = ({ referenceScrollYProgress }: AnimatedProfileProps) => {
  const SCRABBLE_ARRAY = [
    ["A", "Z", "D", "K", "E", "0", "P"],
    ["Z", "D", "3", "E", "S", "Y", "A"],
    ["Y", "U", "T", "1", "R", "F", "S"],
    ["O", "P", "2", "L", "K", "J", "S"],
    ["7", "W", "A", "U", "Y", "H", "W"],
    ["B", "A", "H", "V", "X", "8", "O"],
    ["S", "R", "I", "6", "Z", "T", "R"],
    ["C", "D", "1", "E", "M", "P", "D"],
  ];

  const X_GAP = 1.25;
  const X_OFFSET = 1;
  const Y_GAP = 1.75;
  const SCROLL_Y_ENTER = 0.3;
  const SCROLL_Y_LEAVE = 0.7;

  let arrayIndexFromScrollYProgress: number;
  if (!referenceScrollYProgress) {
    arrayIndexFromScrollYProgress = 0;
  } else if (
    referenceScrollYProgress >= SCROLL_Y_ENTER &&
    referenceScrollYProgress <= SCROLL_Y_LEAVE
  ) {
    arrayIndexFromScrollYProgress = Math.round(
      ((referenceScrollYProgress - SCROLL_Y_ENTER) / (SCROLL_Y_LEAVE - SCROLL_Y_ENTER)) *
        6,
    );
  } else if (referenceScrollYProgress >= SCROLL_Y_LEAVE) {
    arrayIndexFromScrollYProgress = 6;
  }

  return (
    <div
      className="relative h-7 w-full overflow-clip rounded-[2px] border-[1px] border-[#fc6900]
 bg-[rgba(212,212,212,0.18)] "
    >
      {SCRABBLE_ARRAY.map((scrabbleWord, wordIndex) => (
        <motion.div
          key={wordIndex}
          className="absolute flex flex-col"
          animate={{ y: `-${arrayIndexFromScrollYProgress * Y_GAP}rem` }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 1,
            duration: 0.1,
            ease: "easeInOut",
            delay: wordIndex * 0.05,
          }}
          style={{ left: `${X_GAP * wordIndex + X_OFFSET}rem` }}
        >
          {scrabbleWord.map((scrabbleLetter, letterIndex) => (
            <div
              key={letterIndex}
              className="text-xl font-extrabold text-[#fc6900]"
            >
              {scrabbleLetter}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedPassword;
