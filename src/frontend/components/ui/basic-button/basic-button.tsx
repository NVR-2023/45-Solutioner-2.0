import { FILLED_BUTTON_LABELS, OUTLINED_BUTTON_LABELS, TEXT_COLOR, REVERSE_TEXT_COLOR } from "@/app/global-styles.";
import { BasicButtonProps } from "@/types/component-props-types";

const BasicButton = ({
  type = "filled",
  size = "md",
  onClick,
  children,
}: BasicButtonProps) => {
  const baseStyle: string = `flex justify-center items-center rounded `;

  const typeMap = new Map([
    [
      "outlined",
      `border-black border-[1.5px] ${OUTLINED_BUTTON_LABELS} ${TEXT_COLOR}`,
    ],
    ["filled", `bg-neutral-900 ${FILLED_BUTTON_LABELS} ${REVERSE_TEXT_COLOR}`],
  ]);

  const sizeMap = new Map([
    ["sm", "w-16 h-6"],
    ["md", "w-24 h-6"],
    ["lg", "w-36 h-6"],
  ]);

  return (
    <button onClick={onClick} className={`${baseStyle} ${typeMap.get(type)} ${sizeMap.get(size)}`}>
      {children}
    </button>
  );
};

export default BasicButton;
