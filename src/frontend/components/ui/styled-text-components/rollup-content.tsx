import { TextComponentProps } from "@/types/component-props-types";

const RollupContent = ({ text }: TextComponentProps) => {
  return (
    <span className="font-aperçu text-sm font-semibold text-black dark:text-neutral-300 md:text-xs">
      {text}
    </span>
  );
};

export default RollupContent;
