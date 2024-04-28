"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { motion, useAnimationControls } from "framer-motion";

import DropdownMenu from "@/frontend/components/ui/dropdown-menu/dropdown-menu";
import SearchBar from "@/frontend/components/ui/search-bar/search-bar";
import PresetsSegment from "../../components/ui/presets-segment/presets-segment";
import NavbarCollapseToggle from "../../components/ui/navbar-collapse-toggle/navbar-collapse-toggle";


type NavbarBookServicesContentProps = {
  isNavbarExpanded: boolean;
  setIsNavbarExpanded: Dispatch<SetStateAction<boolean>>;
};

const NavbarBookServicesContent = ({
  isNavbarExpanded,
  setIsNavbarExpanded,
}: NavbarBookServicesContentProps) => {
  const navbarControls = useAnimationControls();

  useEffect(() => {
    if (!isNavbarExpanded) {
      navbarControls.start("collapsed");
    } else {
      navbarControls.start("expanded");
    }
  }, [isNavbarExpanded]);

  const variants = {
    collapsed: {
      width: "2rem",
      paddingLeft: "0.25rem",
      paddingRight: "0.25rem",
      transition: {
        duration: 0.3,
        ease: [0.64, 0, 0.78, 0],
      },
    },
    expanded: {
      width: "auto",
      paddingLeft: "2.5rem",
      paddingRight: "2.5rem",
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div>
      <motion.div
        variants={variants}
        initial="expanded"
        animate={navbarControls}
        className={`flex h-10 ${
          isNavbarExpanded ? "justify-between" : "justify-center"
        } rounded bg-neutral-300 dark:bg-[#4b4b4b] dark:text-[#8b8b8b]`}
      >
        {isNavbarExpanded && (
          <motion.div className="flex items-center space-x-5">
            <DropdownMenu
              dropdownMenuLabel="category"
              dropdownMenuEntries={[
                "any",
                "disinfestation",
                "eventing",
                "painting",
                "gardening",
              ]}
            />

            <DropdownMenu
              dropdownMenuLabel="price"
              dropdownMenuEntries={["any", "€0-30", "€30-60", "€60-120"]}
            />
            <DropdownMenu
              dropdownMenuLabel="sort by"
              dropdownMenuEntries={[
                "cheaper",
                "pricier",
                "on sale",
                "popular",
                "a-z",
                "z-a",
              ]}
            />
            <motion.div>
              <PresetsSegment />
            </motion.div>
          </motion.div>
        )}

        <motion.div className="flex space-x-4">
          {isNavbarExpanded ? (
            <motion.div className="w-32">
              <SearchBar label={"search"} />
            </motion.div>
          ) : null}
          <motion.div className="flex items-center justify-center">
            <motion.span className="flex justify-center ">
              <NavbarCollapseToggle
                isNavbarExpanded={isNavbarExpanded}
                setIsNavbarExpanded={setIsNavbarExpanded}
                scale={0.7}
              />
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NavbarBookServicesContent;
