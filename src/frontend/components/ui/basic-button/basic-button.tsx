import { BasicButtonProps } from "@/types/component-props-types";

const BasicButton = ({ type = "filled", size = "md", children }: BasicButtonProps) => {
  const baseStyle: string =
    "flex justify-center items-center rounded font-aperçu font-bold text-base";

  const typeMap = new Map();
  typeMap.set("outlined", "border-black border-2 ");
  typeMap.set("filled", "bg-neutral-900 text-neutral-300");

  const sizeMap = new Map();
  sizeMap.set("sm", "");
  sizeMap.set("md", "w-20 h-8");
  sizeMap.set("lg", "");

  return <div className={`${baseStyle} ${typeMap.get(type)} ${sizeMap.get(size)}`}>{children}</div>;
};

export default BasicButton;
