import { BasicComponentProps } from "@/types/component-props-types";

const HamburgerIcon = ({ scale = 1, color = "currentColor" }: BasicComponentProps) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={24 * scale}
        viewBox="0 -960 960 960"
        width={24 * scale}
        fill={color}>
        <path d="M140.001-254.616v-59.999h679.998v59.999H140.001Zm0-195.385v-59.998h679.998v59.998H140.001Zm0-195.384v-59.999h679.998v59.999H140.001Z" />
      </svg>
    </div>
  );
};

export default HamburgerIcon;
