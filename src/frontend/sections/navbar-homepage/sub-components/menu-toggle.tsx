import { useState } from "react";
import CloseICon from "../../../components/icons/close-icon";
import HamburgerIcon from "@/frontend/components/icons/hamburger-icon";
import MobileSidemenuHomepage from "@/frontend/sections/navbar-homepage/sub-components/mobile-sidemenu-homepage";

import { BasicComponentProps } from "@/types/component-props-types";

const MenuToggle = ({ scale = 1, color = "currentColor" }: BasicComponentProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="Block">
      <div className="relative flex overflow-hidden items-center justify-center w-6 h-6">
        <div
          className={`absolute -left-3 top-0 w-6 h-6 flex transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-3" : "-translate-x-3"
          }`}>
          <div
            className={`w-6 h-6 flex justify-center items-center`}
            onClick={handleToggle}
            role="button"
            aria-expanded={isMenuOpen}
            aria-label="close icon">
            <CloseICon scale={scale} color={color} />
          </div>
          <div
            className={`w-6 h-6 flex justify-center items-center`}
            onClick={handleToggle}
            role="button"
            aria-expanded={isMenuOpen}
            aria-label="open icon">
            <HamburgerIcon scale={scale} color={color} />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute right-9">
          <MobileSidemenuHomepage action={handleCloseMenu} />{" "}
        </div>
      )}
    </div>
  );
};

export default MenuToggle;
