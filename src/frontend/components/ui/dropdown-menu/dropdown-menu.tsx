import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { changeFirstLetterToUppercase } from "@/utils/functions/change-first-letter-to-uppercase";
import { wait } from "@/utils/functions/wait";
import MenuDownArrow from "../../icons/menu-down-arrow";
import CheckIcon from "../../icons/check-icon";

import AnimatedDropdownMenuContent from "./sub-components/animated-dropdown-menu-content";

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

  if (
    !existingDropdownSearchParams ||
    !dropdownMenuEntries.includes(existingDropdownSearchParams)
  ) {
    const updatedSearchParams = new URLSearchParams(existingSearchParams);
    updatedSearchParams.set(dropdownMenuLabel, dropdownMenuEntries[0]);
    const queryString = updatedSearchParams.toString();
    router.replace(window.location.pathname + "?" + queryString);
  }

  const handleOnMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleOnMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const handleOnClick = async (entry: string) => {
    const newSearchParams = new URLSearchParams(existingSearchParams);
    newSearchParams.set(dropdownMenuLabel, entry);
    const newQueryString = newSearchParams.toString();
    const newURL = `${window.location.pathname}?${newQueryString}`;
    router.replace(newURL);
    await wait(500);
    setIsMenuOpen(false);
  };

  const variants = {
    open: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: {
        type: "tween",
        duration: 0.12,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    closed: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      transition: {
        type: "tween",
        duration: 0.12,
        ease: [0.64, 0, 0.78, 0],
      },
    },
  };

  const elementVariants = {
    whileHover: {
      fontWeight: 600,
      transition: {
        duration: 0.18,
      },
    },

    whileTap: {},
  };

  return (
    <div key={dropdownMenuLabel} className="relative">
      <button
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className="flex h-14 w-full items-center"
      >
        <div className="flex items-baseline">
          <label
            htmlFor={`${dropdownMenuLabel}-label`}
            className="flex font-aperçu text-sm font-extrabold leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs"
          >
            {dropdownMenuLabel + ":"}
          </label>
          <div className="relative flex px-2">
            <span
              id={`${dropdownMenuLabel}-label`}
              className="flex w-20  justify-start font-aperçu text-sm font-medium leading-[.5rem] text-black dark:text-neutral-300 md:text-xs"
            >
              <AnimatedDropdownMenuContent
                text={`${changeFirstLetterToUppercase(existingDropdownSearchParams as string) ?? ""}`}
              />
            </span>
            <span
              className={`flex origin-center items-center justify-center pt-[2px] transition-all duration-300 ${
                isMenuOpen ? "rotate-180" : ""
              } `}
            >
              <MenuDownArrow scale={0.6125} />
            </span>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.ul
                  variants={variants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onMouseEnter={handleOnMouseEnter}
                  onMouseLeave={handleOnMouseLeave}
                  className="absolute left-0 top-8 block w-full rounded-[2px] bg-neutral-300 px-2 py-4"
                >
                  {dropdownMenuEntries.map((entry, index) => {
                    return (
                      <motion.li
                        key={`${dropdownMenuLabel}${index}`}
                        variants={elementVariants}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        onClick={() => handleOnClick(entry)}
                        tabIndex={index}
                        className="m-0 flex"
                      >
                        <span className="flex w-20 justify-start font-aperçu text-base font-medium text-black dark:text-neutral-300 md:text-[.625rem]">
                          {changeFirstLetterToUppercase(entry)}
                        </span>
                        <span className="flex items-center justify-center">
                          {entry === existingDropdownSearchParams ? (
                            <motion.div
                              layoutId={`${dropdownMenuLabel}-checkmark`}
                              transition={{ duration: 0.2 }}
                              className="ps-[2px]"
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
            </AnimatePresence>
          </div>
        </div>
      </button>
    </div>
  );
};

export default DropdownMenu;
