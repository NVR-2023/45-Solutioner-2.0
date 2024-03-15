import { BasicComponentProps } from "@/types/component-props-types";

const CheckedBox = ({
  scale = 1,
  color = "currentColor",
}: BasicComponentProps) => {
  return (
    <svg
      className="m-0 flex items-center justify-center p-0"
      xmlns="http://www.w3.org/2000/svg"
      height={24 * scale}
      viewBox="0 -960 960 960"
      width={24 * scale}
      fill={color}
    >
      <path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
    </svg>
  );
};

export default CheckedBox;
