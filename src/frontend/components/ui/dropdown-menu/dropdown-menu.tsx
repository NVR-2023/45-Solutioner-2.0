import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
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
    await wait(500);
    setIsMenuOpen(false);
  };

  const variants = {
    open: {
      scaleY: 1,
      transformOrigin: "top",
      transition: {
        duration: 0.12,
        type: "tween",
        ease: [0.12, 0, 0.38, 0],
        delayChildren: .05,
        staggerChildren: .05,
      },
    },
    closed: {
      scaleY: 0,
      transformOrigin: "top",
      transition: {
        duration: 0.12,
        type: "tween",
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const childrenVariants = {
    open: {  
      opacity: 1, 
      transition: {
        duration: .05,
        delay: 0.2
      }
    },
    closed: { 
      opacity: 0, 
      transition: {
        duration: .05
      }
      
    }
  }
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
              className="flex w-20  justify-start font-aperçu text-sm font-medium   leading-[.5rem] text-black dark:text-neutral-300 md:text-xs"
            >
              {`${changeFirstLetterToUppercase(existingDropdownSearchParams as string)}`}
            </span>
            <span
              className={`flex origin-center items-center transition-all duration-300 ${
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
                        variants={childrenVariants}
                        initial="closed"
                        animate="open"
                        whileHover={{ transition: { duration: 0.1 } }}
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
