import { BUTTON_LABELS, TEXT_COLOR, REVERSE_TEXT_COLOR } from "@/app/global-styles.";
import { BasicButtonProps } from "@/types/component-props-types";

const BasicButton = ({
  type = "filled",
  size = "md",
  children,
}: BasicButtonProps) => {
  const baseStyle: string = `flex justify-center items-center rounded ${BUTTON_LABELS} `;

  const typeMap = new Map();
typeMap.set("outlined", `border-black border-[1.5px] ${TEXT_COLOR}`);
typeMap.set("filled", `bg-neutral-900 ${REVERSE_TEXT_COLOR}`);


  const sizeMap = new Map();
  sizeMap.set("sm", "w-16 h-6");
  sizeMap.set("md", "w-24 h-6");
  sizeMap.set("lg", "w-36 h-6");

  return (
    <div className={`${baseStyle} ${typeMap.get(type)} ${sizeMap.get(size)}`}>
      {children}
    </div>
  );
};

export default BasicButton;
