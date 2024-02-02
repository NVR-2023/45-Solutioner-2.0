import React, { useState } from "react";
import CloseICon from "../../icons/close-icon";
import HamburgerIcon from "@/components/icons/hamburger-icon";
import { basicComponentPropsType } from "@/types/component-props-types";
import { useMobileNavbarPulldownContext } from "@/contexts/mobile-navbar-pulldown-context";

const MenuToggle: React.FC<basicComponentPropsType> = ({ scale = 1, color = "currentColor" }) => {
  const {
    isMobileNavbarPulldownOpen: mobileNavbarContext,
    setIsMobileNavbarPulldownOpen: setMobileNavbarContext,
  } = useMobileNavbarPulldownContext();

  const handleToggle = () => {
    setMobileNavbarContext(!mobileNavbarContext);
  };

  return (
    <div className="relative flex overflow-hidden items-center justify-center w-6 h-6">
      <div
        className={`absolute -left-3 top-0 w-6 h-6 flex transition-transform duration-300 ease-in-out ${
          mobileNavbarContext ? "translate-x-3" : "-translate-x-3"
        }`}>
        <div
          className={`w-6 h-6 flex justify-center items-center`}
          onClick={handleToggle}
          role="button"
          aria-expanded={mobileNavbarContext}
          aria-label="close icon">
          <CloseICon scale={scale} color={color} />
        </div>
        <div
          className={`w-6 h-6 flex justify-center items-center`}
          onClick={handleToggle}
          role="button"
          aria-expanded={mobileNavbarContext}
          aria-label="open icon">
          <HamburgerIcon scale={scale} color={color} />
        </div>
      </div>
    </div>
  );
};

export default MenuToggle;
