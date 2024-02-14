import React, { FC } from "react";
import { basicComponentPropsType } from "@/types/component-props-types";
const SystemThemeIcon: FC<basicComponentPropsType> = ({ scale = 1, color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={24 * scale}
      viewBox="0 -960 960 960"
      width={24 * scale}
      fill={color}>
      <path d="M340.001-140.001V-200h80v-80H172.309q-30.308 0-51.308-21t-21-51.307v-395.384q0-30.308 21-51.308t51.308-21h615.382q30.308 0 51.308 21t21 51.308v395.384q0 30.307-21 51.307-21 21-51.308 21H539.999v80h80v59.999H340.001ZM172.309-339.999h615.382q4.616 0 8.463-3.846 3.846-3.846 3.846-8.462v-395.384q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H172.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v395.384q0 4.616 3.846 8.462 3.847 3.846 8.463 3.846Zm-12.309 0V-760-339.999Z" />
    </svg>
  );
};

export default SystemThemeIcon;
