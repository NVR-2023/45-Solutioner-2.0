import { BasicComponentProps } from "@/types/component-props-types";

const Graph = ({ scale = 1, color = "currentColor" }: BasicComponentProps) => {
  return (
    <svg
      width="188"
      height="138"
      viewBox="0 0 188 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 136.5L70.5 118.5L94.5 90H112.5L158 55L186.5 0.5"
        stroke={color}
        stroke-width="1.5"
      />
    </svg>
  );
};

export default Graph;
