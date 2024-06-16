import { TextComponentProps } from "@/types/component-props-types";

const RollupSmallNote = ({ text }: TextComponentProps) => {
  return (
    <div className="font-aperçu text-sm font-semibold tabular-nums leading-[150%] text-black dark:text-neutral-300 md:text-[0.625rem]">
      {text}
    </div>
  );
};

export default RollupSmallNote;
