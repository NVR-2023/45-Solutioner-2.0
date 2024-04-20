"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { changeFirstLetterToUppercase } from "@/utils/functions/change-first-letter-to-uppercase";

import MenuDownArrow from "../../icons/menu-down-arrow";

type DropDownMenuProps = {
  menuLabel: string;
  menuEntries: string[];
};

const DropdownMenu = ({ menuLabel, menuEntries }: DropDownMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  let dropdownSearchParams = searchParams.get(menuLabel);
  if (!dropdownSearchParams || !menuEntries.includes(dropdownSearchParams)) {
    dropdownSearchParams = menuEntries[0];
  }
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
  };

  const handleOnMenuMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const handleOnClick = (entry: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set(menuLabel, entry);
    const newQueryString = newSearchParams.toString();
    const newURL = `${window.location.pathname}?${newQueryString}`;
    router.replace(newURL);

    setIsMenuOpen(false);
  };

  return (
    <div className="relative flex items-center px-2">
      <button
        onClick={handleOnToggle}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className="flex w-full items-center"
      >
        <div className="flex h-14 items-center">
          <span className="font-aperçu text-sm font-extrabold leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs">
            {menuLabel + ":"}
          </span>
          <div className="relative flex">
            <span className="flex w-20 ps-2 justify-start font-aperçu text-sm font-semibold italic leading-[.5rem] tracking-wide text-black dark:text-neutral-300 md:text-xs">
              {`${changeFirstLetterToUppercase(dropdownSearchParams as string)}`}
            </span>
            <span
              className={`flex origin-center items-center transition-all duration-300 ${isMenuOpen ? "rotate-180" : ""} `}
            >
              <MenuDownArrow scale={0.6125} />
            </span>
            {isMenuOpen && (
              <menu
                onMouseEnter={handleOnMenuMouseEnter}
                onMouseLeave={handleOnMenuMouseLeave}
                className="space-y-2 absolute left-0 top-8 block w-full rounded-[2px] bg-green-300 px-2 py-1"
              >
                {menuEntries.map((entry, index) => {
                  return (
                    <li
                      className="hover:w-50 m-0 flex rounded-[2px] p-0 hover:bg-purple-400 active:bg-yellow-500"
                      key={index}
                      onClick={() => handleOnClick(entry)}
                    >
                      <span className="flex justify-start font-aperçu text-sm font-semibold leading-[.5rem] tracking-wide text-black dark:text-neutral-300 md:text-xs">
                        {changeFirstLetterToUppercase(entry)}
                      </span>
                    </li>
                  );
                })}
              </menu>
            )}
          </div>
        </div>
      </button>
    </div>
  );
};

export default DropdownMenu;
