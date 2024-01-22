import React, { FC } from "react";
import LogoIcon from "./navbar/logoicon";

const LogoComponent: FC = () => {
  return (
    <div className="flex align-baseline justify-between space-x-3">
      <LogoIcon color={"white"}/>
      <div className="text-white">solutioner</div>
    </div>
  );
};

export default LogoComponent;
