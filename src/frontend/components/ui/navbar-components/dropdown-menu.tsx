import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { capitalizeFirstLetter } from "@/utils/functions/capitalize-first-letter";
import { wait } from "@/utils/functions/wait";
import MenuDownArrow from "../../icons/menu-down-arrow";
import CheckIcon from "../../icons/check-icon";

import AnimatedSlidingText from "../animated-components/animated-sliding-text.";
import LabelWIthAnimatedSlidingText from "../animated-components/label-with-animated-sliding-text";

type DropDownMenuProps = {
  dropdownMenuLabel: string;
  dropdownMenuEntries: string[];
};

const DropdownMenu = ({
  dropdownMenuLabel,
  dropdownMenuEntries,
}: DropDownMenuProps) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  const router = useRouter();
  const pathName = usePathname();
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
      router.push(pathName + "?" + queryString);
    }
  }, [
    dropdownMenuEntries,
    dropdownMenuLabel,
    existingDropdownSearchParams,
    existingSearchParams,
  ]);

  const handleOnMouseEnter = () => {
    setIsDropdownMenuOpen(true);
  };

  const handleOnMouseLeave = () => {
    setIsDropdownMenuOpen(false);
  };

  const handleOnClick = async (entry: string) => {
    const newSearchParams = new URLSearchParams(existingSearchParams);
    newSearchParams.set(dropdownMenuLabel, entry);
    const newQueryString = newSearchParams.toString();
    const newURL = `${window.location.pathname}?${newQueryString}`;
    router.replace(newURL);
    await wait(500);
    setIsDropdownMenuOpen(false);
  };
  return (
    <div
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      key={dropdownMenuLabel}
      className="<-10  flex h-14 w-full items-center"
    >
      <div className="flex">
        <label className="flex border-s-[0.7px] border-black ps-1.5 font-aperçu text-sm font-[700] leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs">
          {`${dropdownMenuLabel}:`}
        </label>
        <div className="relative z-10 flex pe-2 ps-1">
          <div
            id={`${dropdownMenuLabel}-label`}
            className="flex w-28 space-x-2 font-aperçu text-sm font-bold leading-[.5rem] text-black dark:text-neutral-300 md:text-xs"
          >
            {existingDropdownSearchParams ? (
              <span className="tabular-nums">
                <AnimatedSlidingText
                  text={`${capitalizeFirstLetter(existingDropdownSearchParams as string)}`}
                />
              </span>
            ) : (
              <span>&nbsp;</span>
            )}
            <span
              className={`flex origin-center justify-center pt-0.5 transition-all duration-300 ${
                isDropdownMenuOpen ? "rotate-180" : ""
              } `}
            >
              <MenuDownArrow scale={0.6125} />
            </span>
          </div>

          <div
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            className="absolute -left-1 top-[2.3rem] grid w-32 rounded-[2px]"
            style={{
              gridTemplateRows: isDropdownMenuOpen ? "1fr" : "0fr",
              transition: "grid-template-rows 100ms",
            }}
          >
            <div className="overflow-hidden rounded-[2px] shadow-[18px_18px_12px_0px_#00000040]">
              <motion.ul className="z-10  w-full bg-neutral-300 px-2 py-2">
                {dropdownMenuEntries.map((entry, index) => {
                  return (
                    <motion.li
                      key={`${dropdownMenuLabel}${index}`}
                      onClick={() => handleOnClick(entry)}
                      tabIndex={index}
                      className="flex"
                    >
                      <motion.span className="flex w-28 justify-start font-aperçu text-base font-semibold tabular-nums leading-[1.7] text-black hover:font-extrabold dark:text-neutral-300 md:text-[.625rem]">
                        {capitalizeFirstLetter(entry)}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
