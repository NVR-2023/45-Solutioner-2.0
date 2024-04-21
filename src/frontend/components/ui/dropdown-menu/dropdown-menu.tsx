import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
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

  const handleOnClick = (entry: string) => {
    const newSearchParams = new URLSearchParams(
      existingSearchParams.toString(),
    );
    newSearchParams.set(dropdownMenuLabel, entry);
    const newQueryString = newSearchParams.toString();
    const newURL = `${window.location.pathname}?${newQueryString}`;
    router.replace(newURL);

    setIsMenuOpen(false);
  };

  const variants: Variants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.18,
        type: "tween",
        ease: "linear",
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        type: "tween",
        ease: "linear",
        delay: 0.1,
        opacity: { duration: 0.09 },
        height: { duration: 0.18 },
      },
    },
  };

  const childVariants: Variants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        delay: 0.1,
        duration: 0.18,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.18,
      },
    },
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
            <AnimatePresence>
              {isMenuOpen && (
                <motion.ul
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={variants}
                  onMouseEnter={handleOnMouseEnter}
                  onMouseLeave={handleOnMouseLeave}
                  className="absolute left-0 top-9 block w-full space-y-2 rounded-[2px] bg-neutral-300 px-2 py-4"
                >
                  {dropdownMenuEntries.map((entry, index) => {
                    return (
                      <motion.li
                        className="m-0 flex border-b-[1px] border-transparent px-0  hover:border-black"
                        key={index}
                        onClick={() => handleOnClick(entry)}
                        tabIndex={index}
                        variants={childVariants}
                      >
                        <span className="flex w-20 justify-start font-aperçu font-medium text-base  text-black dark:text-neutral-300 md:text-xs">
                          {changeFirstLetterToUppercase(entry)}
                        </span>
                        <span className="flex items-center justify-center">
                          {entry === existingDropdownSearchParams ? (
                            <CheckIcon scale={0.6125} />
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

/* useEffect(() => {
  // Read initial value from URL search parameters
  const urlParams = new URLSearchParams(window.location.search);
  const initialValue = urlParams.get("dropdownValue");

  // Set the initial value (if available) or a default value
  const defaultValue = initialValue || "defaultOption";
  setSelectedValue(defaultValue);

  // Update the URL search parameters
  if (!initialValue) {
    // First component: Add ? and set the parameter
    urlParams.set("dropdownValue", defaultValue);
    window.history.pushState({}, "", `?${urlParams.toString()}`);
  } else if (!urlParams.has("dropdownValue")) {
    // Not the first component, but unrelated parameters: Set the parameter
    urlParams.set("dropdownValue", defaultValue);
    window.history.pushState({}, "", `?${urlParams.toString()}`);
  }
}, []); */
