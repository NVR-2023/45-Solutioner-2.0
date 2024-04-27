import { BasicComponentProps } from "@/types/component-props-types";

const CloseOpenNavbarIcon = ({
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
      className="rotate-90"
    >
      <path d="M160-120v-80h640v80H160Zm320-160L280-480l56-56 104 104v-408h80v408l104-104 56 56-200 200Z" />
    </svg>
  );
};

export default CloseOpenNavbarIcon;
