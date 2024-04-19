import { BasicComponentProps } from "@/types/component-props-types";

const MenuDownArrow = ({
  scale = 1,
  color = "currentColor",
}: BasicComponentProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={24 * scale}
      viewBox="0 -960 960 960"
      width={24 * scale}
      fill={color}
    >
      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  );
};

export default MenuDownArrow;
