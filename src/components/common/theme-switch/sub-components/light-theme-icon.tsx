import React, { FC } from "react";
import { basicComponentPropsType } from "@/types/component-props-types";

const LightThemeIcon: FC<basicComponentPropsType> = ({ scale = 1, color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={24 * scale}
      viewBox="0 -960 960 960"
      width={24 * scale}>
      <path
        fill={color}
        d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 59.999q-74.922 0-127.461-52.538Q300.001-405.078 300.001-480t52.538-127.461Q405.078-659.999 480-659.999t127.461 52.538Q659.999-554.922 659.999-480t-52.538 127.461Q554.922-300.001 480-300.001Zm-280-150H50v-59.998h150v59.998Zm709.999 0H760v-59.998h149.999v59.998ZM450.001-760v-149.999h59.998V-760h-59.998Zm0 710v-150h59.998v150h-59.998ZM262.924-656.925l-93.692-90.461 42.383-44.383 90.231 92.692-38.922 42.152Zm485.461 488.692-90.846-93.307 39.537-41.537 93.692 90.461-42.383 44.383Zm-91.461-528.844 90.461-93.692 44.383 42.383-92.692 90.231-42.152-38.922ZM168.232-211.615l93.307-90.846 40.768 39.537-90.076 94.077-43.999-42.768ZM480-480Z"
      />
    </svg>
  );
};

export default LightThemeIcon;
