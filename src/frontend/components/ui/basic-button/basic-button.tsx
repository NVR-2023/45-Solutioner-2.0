import { LABELS, TEXT_COLOR } from "@/app/global-styles.";
import { BasicButtonProps } from "@/types/component-props-types";

const BasicButton = ({
  type = "filled",
  size = "md",
  children,
}: BasicButtonProps) => {
  const baseStyle: string =
    `flex justify-center items-center rounded ${LABELS}`;

  const typeMap = new Map();
  typeMap.set(
    "outlined",
    "border-black text-black border-[1.5px]",
  );
  typeMap.set("filled", "bg-neutral-900 text-neutral-300");

  const sizeMap = new Map();
  sizeMap.set("sm", "w-14 h-6");
  sizeMap.set("md", "w-20 h-6");
  sizeMap.set("lg", "w-36 h-6");

  return (
    <div className={`${baseStyle} ${typeMap.get(type)} ${sizeMap.get(size)}`}>
      {children}
    </div>
  );
};

export default BasicButton;
