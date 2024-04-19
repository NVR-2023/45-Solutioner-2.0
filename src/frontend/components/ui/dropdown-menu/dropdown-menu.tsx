"use client";
import { useState } from "react";
import InputFieldLabel from "../forms/input-field-label";
import MenuDownArrow from "../../icons/menu-down-arrow";

type DropDownMenuProps = {
  menuLabel: string;
  menuEntries: string[];
};

const DropdownMenu = ({ menuLabel, menuEntries }: DropDownMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOnMouseEnter = () => {
    setIsMenuOpen(true);
  };
  const handleOnMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const handleOnMenuMouseEnter = () => {
    setIsMenuOpen(true);
  }

  const handleOnMenuMouseLeave = () => {
    setIsMenuOpen(false);
  }

  

  const handleOnSelect = () => {};

  return (
    <div className="relative flex items-center px-2">
      <button
        onClick={handleOnToggle}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className="flex w-full h-14 items-center space-x-2"
      >
        <span className="flex">
          <InputFieldLabel label={menuLabel + ":\u00A0"} />
          {`${menuEntries[0]}`}
        </span>
        <span
          className={`flex origin-center items-center transition-all duration-300 ${isMenuOpen ? "rotate-180" : ""} `}
        >
          <MenuDownArrow scale={0.6125} />
        </span>
      </button>
      {isMenuOpen && (
        <menu
          onMouseEnter={handleOnMenuMouseEnter}
          onMouseLeave={handleOnMenuMouseLeave}
          className="px-2 absolute left-0 top-14 block w-full rounded-[2px] bg-green-300 py-2"
        >
          {menuEntries.map((entry, index) => {
            return (
              <option
                className="m-0 p-0 flex justify-start  hover:w-50 rounded-[2px]  hover:bg-purple-400 active:bg-yellow-500"
                key={index}
              >
                {entry}
              </option>
            );
          })}
        </menu>
      )}
    </div>
  );
};

export default DropdownMenu;
