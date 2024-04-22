import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { changeFirstLetterToUppercase } from "@/utils/functions/change-first-letter-to-uppercase";

import MenuDownArrow from "../../icons/menu-down-arrow";
import CheckIcon from "../../icons/check-icon";
import { wait } from "@/utils/functions/wait";

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
  const existingSearchParams = useSearchParams();
  const existingDropdownSearchParams =
    existingSearchParams.get(dropdownMenuLabel);

  useEffect(() => {
    const existingDropdownSearchParams =
      existingSearchParams.get(dropdownMenuLabel);

    if (
      !existingDropdownSearchParams ||
      !dropdownMenuEntries.includes(existingDropdownSearchParams)
    ) {
      const updatedSearchParams = new URLSearchParams(existingSearchParams);
      updatedSearchParams.set(dropdownMenuLabel, dropdownMenuEntries[0]);
      const queryString = updatedSearchParams.toString();
      router.replace(window.location.pathname + "?" + queryString);
    }
  }, [dropdownMenuLabel, dropdownMenuEntries, existingSearchParams]);

  const handleOnMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleOnMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const handleOnClick = async (entry: string) => {
    const newSearchParams = new URLSearchParams(
      existingSearchParams.toString(),
    );
    newSearchParams.set(dropdownMenuLabel, entry);
    const newQueryString = newSearchParams.toString();
    const newURL = `${window.location.pathname}?${newQueryString}`;
    router.replace(newURL);
    await wait(750);
    setIsMenuOpen(false);
  };

  const variants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        opacity: { duration: 0.18 },
        height: { duration: 0.12 },
        type: "tween",
        ease: "easeOnOut",
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        opacity: { duration: 0.12 },
        height: { duration: 0.27 },
      },
    },
  };

  return (
    <div key={dropdownMenuLabel} className="relative">
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
            <span className="flex w-20  justify-start font-aperçu text-sm font-semibold   leading-[.5rem] text-black dark:text-neutral-300 md:text-xs">
              {`${changeFirstLetterToUppercase(existingDropdownSearchParams as string)}`}
            </span>
            <span
              className={`flex origin-center items-center transition-all duration-300 ${
                isMenuOpen ? "rotate-180" : ""
              } `}
            >
              <MenuDownArrow scale={0.6125} />
            </span>
            {isMenuOpen && (
              <motion.ul
                initial="closed"
                animate={isMenuOpen ? "open" : "closed"}
                variants={variants}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                className="absolute left-0 top-9 block w-full rounded-[2px] bg-neutral-300 px-2 py-4"
              >
                {dropdownMenuEntries.map((entry, index) => {
                  return (
                    <motion.li
                      className="m-0 flex"
                      key={`${dropdownMenuLabel}${index}`}
                      onClick={() => handleOnClick(entry)}
                      tabIndex={index}
                    >
                      <span className="flex w-20 justify-start font-aperçu text-base font-medium  text-black dark:text-neutral-300 md:text-[.625rem]">
                        {changeFirstLetterToUppercase(entry)}
                      </span>
                      <span className="flex items-center justify-center">
                        {entry === existingDropdownSearchParams ? (
                         <motion.div 
                         layoutId={`${dropdownMenuLabel}-checkmark`}
                         transition={ {duration: .2}}
                         >
                          <CheckIcon scale={0.5} />
                          </motion.div>
                        ) : null}
                      </span>
                    </motion.li>
                  );
                })}
              </motion.ul>
            )}
          </div>
        </div>
      </button>
    </div>
  );
};

export default DropdownMenu;
