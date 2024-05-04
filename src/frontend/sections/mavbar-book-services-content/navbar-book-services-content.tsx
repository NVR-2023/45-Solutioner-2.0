"use client";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AllServiceStaticDataType } from "@/utils/functions/fetch-data/services-endpoint-submissions";

import DropdownMenu from "@/frontend/components/ui/navbar-components/dropdown-menu";
import SearchBar from "@/frontend/components/ui/navbar-components/search-bar";
import PresetsSegment from "../../components/ui/navbar-components/presets-segment";
import CollapseToggle from "@/frontend/components/ui/collapse-toggle/collapse-toggle";

type NavbarBookServicesContentProps = {
  areNavbarsExpanded: boolean;
  setAreNavbarsExpanded: Dispatch<SetStateAction<boolean>>;
  allServicesStaticData: AllServiceStaticDataType | null;
};

const NavbarBookServicesContent = ({
  areNavbarsExpanded,
  setAreNavbarsExpanded,
  allServicesStaticData,
}: NavbarBookServicesContentProps) => {
  const [categoryList, setCategoryList] = useState<string[]>([""]);
  const [priceIntervalList, setPriceIntervalList] = useState<string[]>([""]);

useEffect(() => {
  if (allServicesStaticData) {
    const uniqueCategoriesSet = new Set(
      allServicesStaticData.map((service) => service.category),
    );
    const categoryList = ["any", ...Array.from(uniqueCategoriesSet)].sort();
    setCategoryList(categoryList);
  } else {
    setCategoryList(["\u00A0"]);
  }
}, [allServicesStaticData]);


  return (
    <motion.div key="bookServicesContentNavbar" className="relative">
      <div className="absolute left-2 top-1/2 z-50 flex -translate-y-1/2">
        <CollapseToggle
          areNavbarsExpanded={areNavbarsExpanded}
          setAreNavbarsExpanded={setAreNavbarsExpanded}
          scale={0.625}
        />
      </div>
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
          <motion.div className="flex h-full w-full items-center justify-between">
            <motion.div className="flex items-center space-x-0.5   ">
              <motion.div layout="position">
                <DropdownMenu
                  dropdownMenuLabel="category"
                  dropdownMenuEntries={categoryList}
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
                    "category",
                    "lowest price",
                    "highest price",
                    "on sale",
                    "most popular",
                    "a-z",
                    "z-a",
                  ]}
                />
              </motion.div>
              <motion.div layout="position">
                <PresetsSegment />
              </motion.div>
            </motion.div>
            <motion.div layout="position" className="w-40">
              <SearchBar label={"search"} />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default NavbarBookServicesContent;
