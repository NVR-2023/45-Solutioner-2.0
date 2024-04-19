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

  const handleOnSelect = () => {};

  return (
    <div className="relative block px-2">
      <button
        onClick={handleOnToggle}
        className="flex w-full items-center space-x-2"
      >
        <span className="flex">
          <InputFieldLabel label={menuLabel + ":"} />
          {`: ${menuEntries[0]}`}
        </span>
        <span
          className={`origin-center flex items-center transition-all duration-300 ${isMenuOpen ? "rotate-180" : ""} `}
        >
          <MenuDownArrow scale={0.5} />
        </span>
      </button>
      {isMenuOpen && (
        <menu className=" absolute left-0 top-8 block w-full rounded-[2px] bg-green-300 px-2 py-2">
          {menuEntries.map((entry, index) => {
            return (
              <option
                className=" hover:w-50 rounded-[2px] px-2 hover:bg-purple-400 active:bg-yellow-500"
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
