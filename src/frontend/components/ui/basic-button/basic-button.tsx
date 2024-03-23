import { BasicButtonProps } from "@/types/component-props-types";

const BasicButton = ({
  type = "filled",
  size = "md",
  label, 
  onClick,
}: BasicButtonProps) => {
  const baseStyle: string = "flex justify-center items-center rounded ";

  const ButtonTypeMap = new Map([
    [
      "outlined",
      "border-black border-[1.5px] font-aperçu font-extrabold text-sm md:text-xs leading-[.5rem] tracking-wide small-caps text-black dark:text-neutral-300 ",
    ],
    [
      "filled",
      "bg-neutral-900 font-aperçu font-bold text-sm md:text-xs leading-[.5rem] tracking-wide small-caps text-neutral-300 font-bold dark:font-semibold dark:text-neutral-300",
    ],
  ]);

  const sizeMap = new Map([
    ["sm", "w-16 h-6"],
    ["md", "w-24 h-6"],
    ["lg", "w-36 h-6"],
  ]);

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${ButtonTypeMap.get(type)} ${sizeMap.get(size)}`}
    >{label}
    </button>
  );
};

export default BasicButton;
