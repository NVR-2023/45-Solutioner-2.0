import AnimatedSlidingText from "./animated-sliding-text.";
import FieldLabel from "../styled-text-components/field-label";

type LabelWIthAnimatedSlidingTextProps = {
  label: string;
  text: string;
};

const LabelWIthAnimatedSlidingText = ({
  label,
  text,
}: LabelWIthAnimatedSlidingTextProps) => {
  return (
    <div className="flex w-full">
      <FieldLabel text={`${label}:`} />
      <div className="flex ps-1">
        <div className="flex font-aperçu text-sm font-bold text-black dark:text-neutral-300 md:text-xs">
          <AnimatedSlidingText text={text} />
        </div>
      </div>
    </div>
  );
};

export default LabelWIthAnimatedSlidingText;
