"use client";

import React, { FC } from "react";
import { useMobileNavbarContext } from "@/contextes/mobile-navbar-pulldown";
import sectionLinksArray from "./section-list-array.t";
import Link from "next/link";
import { getSectionFomString } from "@/utils/getsectionfromurl";
import CloseButton from "@/components/common/close-button";
import ThemeSwitch from "@/components/common/theme-switch/theme-switch";

const MobileSidemenuHomepage: FC = () => {
  const { mobileNavbarContext: homepageContext, setMobileNavbarContext: setHomepageContext } =
    useMobileNavbarContext();

  const closeHomepageSideMenu = () => {
    setHomepageContext(false);
  };
  return (
    <>
      {homepageContext && (
        <div className="z-[999] absolute right-1 px-2 bg-neutral-200">
          <div className="flex w-full justify-between mt-3 me-3">
            <ThemeSwitch color="#15803d" />
            <CloseButton
              onClick={() => {
                closeHomepageSideMenu();
              }}
              color="#15803d"
            />
          </div>
          <nav className="flex justify-start ">
            <ul className="mt-3">
              {sectionLinksArray &&
                sectionLinksArray.map((section, index) => (
                  <li
                    key={index}
                    className="mb-2 font-aperçu font-bold text-base text-green-700 tracking-wide"
                    onClick={() => {
                      closeHomepageSideMenu();
                    }}>
                    <Link href={getSectionFomString(section)}>{section}</Link>
                  </li>
                ))}
              <br />
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileSidemenuHomepage;
