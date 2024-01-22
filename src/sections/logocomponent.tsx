import React, { FC } from "react";
import LogoIcon from "./navbar/logoicon";

const LogoComponent: FC = () => {
  return (
    <div className="flex">
      <LogoIcon size={.5} color={"green"}/>
      <div className="font-aperçu font-bold" style={{letterSpacing: .9}}>olutioner</div>
    </div>
  );
};

export default LogoComponent;
