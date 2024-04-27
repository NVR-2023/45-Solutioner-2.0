"use client";
import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

import CloseOpenNavbarIcon from "@/frontend/components/icons/close-open-navbar-icon";
import DropdownMenu from "@/frontend/components/ui/dropdown-menu/dropdown-menu";
import SearchBar from "@/frontend/components/ui/search-bar/search-bar";
import NavbarCollapseToggle from "./sub-components/navbar-collapse-toggle";

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

  const handleOnClick = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

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
    <motion.div
      variants={variants}
      initial="expanded"
      animate={navbarControls}
      className="relative flex h-9 w-full px-10 rounded bg-neutral-300      
 dark:bg-[#4b4b4b] dark:text-[#8b8b8b]"
    >
      {isNavbarExpanded && (
        <div className="flex items-center space-x-6">
          <DropdownMenu
            dropdownMenuLabel="category"
            dropdownMenuEntries={[
              "any category",
              "cleaning",
              "eventing",
              "painting",
              "gardening",
            ]}
          />

          <DropdownMenu
            dropdownMenuLabel="price"
            dropdownMenuEntries={[
              "any price",
              "€0 to €30",
              "€30 to €60",
              "€60 to €120",
            ]}
          />
          <DropdownMenu
            dropdownMenuLabel="sort by"
            dropdownMenuEntries={[
              "A to Z",
              "Z to A",
              "More popular",
              "Less popular",
              "Cheaper",
              "Pricier",
              "On sale first",
              "On sale last",
            ]}
          />
          <div>Quick selects</div>
          <div className="flex justify-between">
            <SearchBar label={"search"} />
          </div>
        </div>
      )}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 transform">

            <NavbarCollapseToggle
              isNavbarExpanded={isNavbarExpanded}
              setIsNavbarExpanded={setIsNavbarExpanded}
            />
        
      </div>
    </motion.div>
  );
};

export default NavbarBookServicesContent;
