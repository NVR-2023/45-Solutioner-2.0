"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { changeFirstLetterToUppercase } from "@/utils/functions/change-first-letter-to-uppercase";

import MenuDownArrow from "../../icons/menu-down-arrow";
import CheckIcon from "../../icons/check-icon";

type DropDownMenuProps = {
  dropdownMenuLabel: string;
  dropdownMenuEntries: string[];
};

const DropdownMenu = ({
  dropdownMenuLabel,
  dropdownMenuEntries,
}: DropDownMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  let dropdownSearchParams = searchParams.get(dropdownMenuLabel);
  if (
    !dropdownSearchParams ||
    !dropdownMenuEntries.includes(dropdownSearchParams)
  ) {
    dropdownSearchParams = dropdownMenuEntries[0];
  }

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
    newSearchParams.set(dropdownMenuLabel, entry);
    const newQueryString = newSearchParams.toString();
    const newURL = `${window.location.pathname}?${newQueryString}`;
    router.replace(newURL);

    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <button
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className="flex h-14 w-full items-center"
      >
        <div className="flex items-baseline">
          <span className="flex font-aperçu text-sm font-extrabold leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs">
            {dropdownMenuLabel + ":"}
          </span>
          <div className="relative flex px-2">
            <span className="flex w-20 justify-start font-aperçu text-sm font-semibold  leading-[.5rem] text-black dark:text-neutral-300 md:text-xs">
              {`${changeFirstLetterToUppercase(dropdownSearchParams as string)}`}
            </span>
            <span
              className={`flex origin-center items-center transition-all duration-300 ${isMenuOpen ? "rotate-180" : ""} `}
            >
              <MenuDownArrow scale={0.6125} />
            </span>
            {isMenuOpen && (
              <ul
                onMouseEnter={handleOnMenuMouseEnter}
                onMouseLeave={handleOnMenuMouseLeave}
                className="absolute left-0 top-9 block w-full space-y-2 rounded-[2px] bg-neutral-300 px-2 py-4"
              >
                {dropdownMenuEntries.map((entry, index) => {
                  return (
                    <li
                      className=" m-0 flex border-b-[1px] border-transparent px-0 py-[1px] hover:border-black"
                      key={index}
                      onClick={() => handleOnClick(entry)}
                      tabIndex={index}
                    >
                      <span className="flex w-20 justify-start font-aperçu text-xs font-semibold italic leading-[.5rem]  text-black dark:text-neutral-300 md:text-xs">
                        {changeFirstLetterToUppercase(entry)}
                      </span>
                      <span className="items-centre flex justify-center">
                        {entry === dropdownSearchParams ? (
                          <CheckIcon scale={0.6125} />
                        ) : null}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </button>
    </div>
  );
};

export default DropdownMenu;
