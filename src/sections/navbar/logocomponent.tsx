import React, { FC } from "react";
import LogoIcon from "./logoicon";

const LogoComponent: FC = () => {
  return (
    <div className="flex">
      <LogoIcon size={0.5} color={"green"} />
      <div className="font-aperçu font-bold" style={{ letterSpacing: 0.9 }}>
        olutioner
      </div>
    </div>
  );
};

export default LogoComponent;
