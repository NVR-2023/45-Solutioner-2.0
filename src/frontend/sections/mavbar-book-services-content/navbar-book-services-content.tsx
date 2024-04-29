"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { motion, useAnimationControls } from "framer-motion";

import DropdownMenu from "@/frontend/components/ui/dropdown-menu/dropdown-menu";
import SearchBar from "@/frontend/components/ui/search-bar/search-bar";
import PresetsSegment from "../../components/ui/presets-segment/presets-segment";
import NavbarCollapseToggle from "../../components/ui/navbar-collapse-toggle/navbar-collapse-toggle";

type NavbarBookServicesContentProps = {
  areNavbarsExpanded: boolean;
  setAreNavbarsExpanded: Dispatch<SetStateAction<boolean>>;
};

const NavbarBookServicesContent = ({
  areNavbarsExpanded,
  setAreNavbarsExpanded,
}: NavbarBookServicesContentProps) => {
  return (
    <motion.div>
      <motion.div
        layout
        key="bookServicesContentNavbar"
        style={
          areNavbarsExpanded
            ? {
                width: "auto",
                paddingLeft: "2.5rem",
                paddingRight: "2.5rem",
                borderRadius: "4px",
              }
            : {
                width: "2rem",
                paddingLeft: "0.25rem",
                paddingRight: "0.25rem",
                borderRadius: "4px",
              }
        }
        transition={{
          duration: 0.36,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`flex h-10 ${
          areNavbarsExpanded ? "justify-between" : "justify-center"
        }  bg-neutral-300 dark:bg-[#4b4b4b] dark:text-[#8b8b8b]`}
      >
        {areNavbarsExpanded && (
          <motion.div className="flex items-center space-x-5">
            <motion.div layout="position">
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
            </motion.div>

            <motion.div layout="position">
              <DropdownMenu
                dropdownMenuLabel="price"
                dropdownMenuEntries={["any", "€0-30", "€30-60", "€60-120"]}
              />
            </motion.div>
            <motion.div layout="position">
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
            </motion.div>
            <motion.div layout="position">
              <PresetsSegment />
            </motion.div>
          </motion.div>
        )}

        <motion.div className="flex space-x-4">
          {areNavbarsExpanded ? (
            <motion.div layout="position" className="w-36">
              <SearchBar label={"search"} />
            </motion.div>
          ) : null}
          <motion.div className="flex items-center justify-center">
            <motion.div layout="position" className="flex justify-center ">
              <NavbarCollapseToggle
                areNavbarsExpanded={areNavbarsExpanded}
                setAreNavbarsExpanded={setAreNavbarsExpanded}
                scale={0.7}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NavbarBookServicesContent;
