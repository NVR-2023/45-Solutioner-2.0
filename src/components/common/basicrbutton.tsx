import React, { FC, ReactNode } from "react";
import { basicButtonType } from "@/types/componentpopstypes";

const BasicButton: FC<basicButtonType> = ({ type = "filled", size = "md", children }) => {
  let typeMap = new Map();
  typeMap.set("outlined", "border-2 border-green-700 text-green-700");
  typeMap.set("filled", "bg-green-700 text-neutral-300");

  let sizeMap = new Map();
  sizeMap.set("sm", "");
  sizeMap.set("md", "w-24 h-8");
  sizeMap.set("lg", "");

  return (
    <div
      className={`flex justify-center items-center rounded font-aperçu font-bold text-sm tracking-wide ${typeMap.get(
        type
      )} ${sizeMap.get(size)}`}>
      {children}
    </div>
  );
};

export default BasicButton;
