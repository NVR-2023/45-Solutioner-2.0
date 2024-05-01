"use client";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

import DropdownMenu from "@/frontend/components/ui/navbar-components/dropdown-menu";
import SearchBar from "@/frontend/components/ui/navbar-components/search-bar";
import PresetsSegment from "../../components/ui/navbar-components/presets-segment";
import CollapseToggle from "@/frontend/components/ui/collapse-toggle/collapse-toggle";
type NavbarBookServicesContentProps = {
  areNavbarsExpanded: boolean;
  setAreNavbarsExpanded: Dispatch<SetStateAction<boolean>>;
};

const NavbarBookServicesContent = ({
  areNavbarsExpanded,
  setAreNavbarsExpanded,
}: NavbarBookServicesContentProps) => {
  const handleOnClick = () => {
    setAreNavbarsExpanded(!areNavbarsExpanded);
  };

  return (
    <motion.div key="bookServicesContentNavbar" className="relative">
      <button
        onClick={handleOnClick}
        className="absolute left-2 top-1/2 z-50 flex -translate-y-1/2"
      >
        <CollapseToggle
          areNavbarsExpanded={areNavbarsExpanded}
          setAreNavbarsExpanded={setAreNavbarsExpanded}
          scale={0.625}
        />
      </button>
      <motion.div
        layout
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
          <motion.div className="flex w-full h-full items-center justify-between">
            <motion.div className="flex items-center space-x-4   ">
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
            <motion.div layout="position" className="w-36">
              <SearchBar label={"search"} />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default NavbarBookServicesContent;
