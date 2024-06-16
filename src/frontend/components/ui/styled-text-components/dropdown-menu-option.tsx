import { TextComponentProps } from "@/types/component-props-types";

const DropDownMenuOption = ({ text }: TextComponentProps) => {
  return (
    <span className="flex w-28 justify-start font-aperçu text-base font-semibold tabular-nums leading-[1.7] text-black hover:font-extrabold dark:text-neutral-300 md:text-[.625rem]">
      {text}
    </span>
  );
};

export default DropDownMenuOption;
