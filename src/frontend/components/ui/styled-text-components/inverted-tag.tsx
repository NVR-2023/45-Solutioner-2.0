import { TextComponentProps } from "@/types/component-props-types";
const InvertedTag = ({ text }: TextComponentProps) => {
  return (
    <span className="font-aperçu text-sm font-[400] tracking-wider text-white small-caps dark:text-neutral-900 md:text-[.625rem]">
      {text}
    </span>
  );
};

export default InvertedTag;
