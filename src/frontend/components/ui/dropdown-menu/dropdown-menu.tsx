"use client";
import { useState } from "react";
import InputFieldLabel from "../forms/input-field-label";

type DropDownMenuProps = {
  menuLabel: string;
  menuEntries: string[];
};

const DropdownMenu = ({ menuLabel, menuEntries }: DropDownMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative block ">
      <button onClick={handleOnClick} className="flex justify-between">
        <span>
          <InputFieldLabel label={menuLabel} />
        </span>
        <span>{`: ${menuEntries[0]}`}</span>
      </button>
      <menu className="absolute left-0 top-8 block w-full">
        {isMenuOpen &&
          menuEntries.map((entry, index) => {
            return (
              <div className="text bg-green-400" key={index}>
                {entry}
              </div>
            );
          })}
      </menu>
    </div>
  );
};

export default DropdownMenu;
