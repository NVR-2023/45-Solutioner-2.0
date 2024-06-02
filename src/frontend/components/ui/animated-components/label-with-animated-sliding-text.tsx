import AnimatedSlidingText from "./animated-sliding-text.";

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
      <label className="flex font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs">
        {`${label}:`}
      </label>
      <div className="flex ps-1">
        <div className="flex font-aperçu text-sm font-bold leading-[.5rem] text-black dark:text-neutral-300 md:text-xs">
          <AnimatedSlidingText
          text={text}
          />
        </div>
      </div>
    </div>
  );
};

export default LabelWIthAnimatedSlidingText;

/*      <AnimatedSlidingLabel
       label={(selectedBookDate
         ? new Date(selectedBookDate)
         : new Date()
       ).toLocaleDateString("en-US", {
         weekday: "long",
         year: "numeric",
         month: "long",
         day: "numeric",
       })}
     />; */
