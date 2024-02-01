import React, { FC } from "react";
import { basicComponentPropsType } from "@/types/component-props-types";

const SystemThemeIcon: FC<basicComponentPropsType> = ({ scale = 1, color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={24 * scale}
      viewBox="0 0 24 24"
      width={24 * scale}
      fill={color}>
      <g id="check_box_outline_blank_FILL0_wght300_GRAD0_opsz24 1">
        <path
          id="Vector"
          d="M5.30773 20.5C4.8026 20.5 4.37503 20.325 4.02503 19.975C3.67503 19.625 3.50003 19.1974 3.50003 18.6923V5.30772C3.50003 4.80259 3.67503 4.37502 4.02503 4.02502C4.37503 3.67502 4.8026 3.50002 5.30773 3.50002H18.6923C19.1974 3.50002 19.625 3.67502 19.975 4.02502C20.325 4.37502 20.5 4.80259 20.5 5.30772V18.6923C20.5 19.1974 20.325 19.625 19.975 19.975C19.625 20.325 19.1974 20.5 18.6923 20.5H5.30773ZM5.30773 19H18.6923C18.7692 19 18.8397 18.9679 18.9039 18.9038C18.968 18.8397 19 18.7692 19 18.6923V5.30772C19 5.23079 18.968 5.16027 18.9039 5.09615C18.8397 5.03205 18.7692 5 18.6923 5H5.30773C5.2308 5 5.16027 5.03205 5.09616 5.09615C5.03206 5.16027 5.00001 5.23079 5.00001 5.30772V18.6923C5.00001 18.7692 5.03206 18.8397 5.09616 18.9038C5.16027 18.9679 5.2308 19 5.30773 19Z"
          fill={color}
        />
        <line
          id="Line 1"
          x1="6.35355"
          y1="6.64645"
          x2="17.3536"
          y2="17.6464"
          stroke={color}
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};

export default SystemThemeIcon;
