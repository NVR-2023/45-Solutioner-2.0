import { BasicComponentProps } from "@/types/component-props-types";

const LogoIcon = ({ scale = 1, color = "black" }: BasicComponentProps) => {
  return (
    <svg
      width={`${scale}rem`}
      height={`${scale * 1.5}rem`}
      viewBox="0 0 36 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 1">
        <circle id="Ellipse 1" cx={13} cy={49} r={5} fill={color} />
        <circle id="Ellipse 3" cx={5} cy={43} r={5} fill={color} />
      </g>
      <g id="Group 5">
        <circle id="Ellipse 1_2" cx={13} cy={27} r={5} fill={color} />
        <circle id="Ellipse 3_2" cx={5} cy={21} r={5} fill={color} />
      </g>
      <g id="Group 4">
        <circle id="Ellipse 1_3" cx={31} cy={33} r={5} fill={color} />
        <circle id="Ellipse 3_3" cx={23} cy={27} r={5} fill={color} />
      </g>
      <g id="Group 7">
        <circle id="Ellipse 1_4" cx={31} cy={11} r={5} fill={color} />
        <circle id="Ellipse 3_4" cx={23} cy={5} r={5} fill={color} />
      </g>
      <g id="Group 3">
        <circle
          id="Ellipse 1_5"
          cx={5}
          cy={5}
          r={5}
          transform="matrix(1 0 0 -1 26 48)"
          fill={color}
        />
        <circle
          id="Ellipse 3_5"
          cx={5}
          cy={5}
          r={5}
          transform="matrix(1 0 0 -1 18 54)"
          fill={color}
        />
      </g>
      <g id="Group 6">
        <circle
          id="Ellipse 1_6"
          cx={5}
          cy={5}
          r={5}
          transform="matrix(1 0 0 -1 8 10)"
          fill={color}
        />
        <circle
          id="Ellipse 3_6"
          cx={5}
          cy={5}
          r={5}
          transform="matrix(1 0 0 -1 0 16)"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default LogoIcon;
