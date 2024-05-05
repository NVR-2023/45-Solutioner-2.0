import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { changeFirstLetterToUppercase } from "@/utils/functions/change-first-letter-to-uppercase";
import { wait } from "@/utils/functions/wait";
import MenuDownArrow from "../../icons/menu-down-arrow";
import CheckIcon from "../../icons/check-icon";

import AnimatedSlidingLabel from "../animated-components/animated-sliding-label.";

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
    if (
      !existingDropdownSearchParams ||
      !dropdownMenuEntries.includes(existingDropdownSearchParams)
    ) {
      const updatedSearchParams = new URLSearchParams(existingSearchParams);
      updatedSearchParams.set(dropdownMenuLabel, dropdownMenuEntries[0]);
      const queryString = updatedSearchParams.toString();
      router.push(window.location.pathname + "?" + queryString);
    }
  }, [
    dropdownMenuEntries,
    dropdownMenuLabel,
    existingDropdownSearchParams,
    existingSearchParams,
  ]);

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
        delay: 0.1,
        duration: 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    closed: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      transition: {
        type: "tween",
        duration: 0.15,
        ease: [0.64, 0, 0.78, 0],
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
        <div className="flex items-baseline ">
          <label className="flex border-s-[0.7px] border-black ps-1.5 font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs">
            {`${dropdownMenuLabel}:`}
          </label>
          <div className="relative flex pe-2 ps-2">
            <div
              id={`${dropdownMenuLabel}-label`}
              className="flex w-28 justify-between space-x-2 font-aperçu text-sm font-bold leading-[.5rem] text-black dark:text-neutral-300 md:text-xs"
            >
              {existingDropdownSearchParams ? (
                <span className="tabular-nums">
                  <AnimatedSlidingLabel
                    text={`${changeFirstLetterToUppercase(existingDropdownSearchParams as string)}`}
                  />
                </span>
              ) : (
                <span>&nbsp;</span>
              )}
              <span
                className={`flex origin-center justify-center pt-0.5 transition-all duration-300 ${
                  isMenuOpen ? "rotate-180" : ""
                } `}
              >
                <MenuDownArrow scale={0.6125} />
              </span>
            </div>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.ul
                  variants={variants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onMouseEnter={handleOnMouseEnter}
                  onMouseLeave={handleOnMouseLeave}
                  className="absolute left-0 top-9 block w-full rounded-[2px] bg-neutral-300 px-2 py-2"
                >
                  {dropdownMenuEntries.map((entry, index) => {
                    return (
                      <motion.li
                        key={`${dropdownMenuLabel}${index}`}
                        onClick={() => handleOnClick(entry)}
                        tabIndex={index}
                        className="flex"
                      >
                        <motion.span className="flex w-28 justify-start font-aperçu text-base font-medium tabular-nums leading-[1.7] text-black hover:font-bold dark:text-neutral-300 md:text-[.625rem]">
                          {changeFirstLetterToUppercase(entry)}
                        </motion.span>
                        <span className="flex items-center justify-center">
                          {entry === existingDropdownSearchParams ? (
                            <motion.div
                              layoutId={`${dropdownMenuLabel}-checkmark`}
                              transition={{ duration: 0.2 }}
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
