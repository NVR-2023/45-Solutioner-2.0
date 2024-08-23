import AnimatedScrabbleWord from "./animated-scrabble-woird";
import PasswordCheck from "./password-check";

type SecurityAnimatedComponentProps = {
  referenceScrollYProgress: number;
};
const SecurityAnimatedComponent = ({
  referenceScrollYProgress,
}: SecurityAnimatedComponentProps) => {
  return (
    <div className="flex items-center justify-center space-x-4 pt-4">
      <AnimatedScrabbleWord
        word={"PASSWORD"}
        referenceScrollYProgress={referenceScrollYProgress!}
      />
      <PasswordCheck referenceScrollYProgress={referenceScrollYProgress!} />
    </div>
  );
};

export default SecurityAnimatedComponent;
