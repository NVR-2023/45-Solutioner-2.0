"use client";
import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

import DropdownMenu from "@/frontend/components/ui/dropdown-menu/dropdown-menu";
import SearchBar from "@/frontend/components/ui/search-bar/search-bar";
import PresetsSegment from "../../components/ui/presets-segment/presets-segment";
import NavbarCollapseToggle from "../../components/ui/navbar-collapsable-toggle/navbar-collapse-toggle";

const NavbarBookServicesContent = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(true);
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
      width: "3rem",
      paddingInline: "0.25rem",
      transition: {
        duration: 0.3,
        ease: [0.64, 0, 0.78, 0],
      },
    },
    expanded: {
      width: "auto",
      paddingInline: "2.5rem",
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
        className="relative flex h-9 w-full justify-between rounded bg-neutral-300 px-10      
 dark:bg-[#4b4b4b] dark:text-[#8b8b8b]"
      >
        {isNavbarExpanded && (
          <motion.div className="flex items-center space-x-5">
            <DropdownMenu
              dropdownMenuLabel="category"
              dropdownMenuEntries={[
                "any",
                "cleaning",
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
                "Cheaper",
                "Pricier",
                "On sale first",
                "On sale last",
                "More popular",
                "Less popular",
                "A to Z",
                "Z to A",
              ]}
            />
            <motion.div>
              <PresetsSegment />
            </motion.div>
          </motion.div>
        )}

        <motion.div className="flex justify-between space-x-2">
          {isNavbarExpanded ? (
            <motion.div className="w-32">
              <SearchBar label={"search"} />
            </motion.div>
          ) : null}
          <NavbarCollapseToggle
            isNavbarExpanded={isNavbarExpanded}
            setIsNavbarExpanded={setIsNavbarExpanded}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NavbarBookServicesContent;
