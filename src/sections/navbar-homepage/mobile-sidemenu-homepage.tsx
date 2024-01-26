"use client";

import React, { FC } from "react";
import sectionLinksArray from "./section-list-array.t";
import Link from "next/link";
import { getSectionFomString } from "@/utils/getsectionfromurl";
import CloseButton from "@/components/common/close-button";
import ThemeSwitch from "@/components/common/theme-switch/theme-switch";

const MobileSidemenuHomepage: FC = () => {
  return (
    <div className="z-[999] absolute right-0 h-full w-1/4 bg-neutral-200">
      <nav className="flex justify-center">
        <ul className="mt-5">
          <div className="flex justify-between mb-8">
            <ThemeSwitch color="#15803d" />
            <CloseButton color="#15803d" />
          </div>
          {sectionLinksArray &&
            sectionLinksArray.map((section, index) => (
              <li
                key={index}
                className="ms-1 mb-1.5 font-aperçu font-bold text-base text-green-700 tracking-wide"
                onClick={() => {
                  console.log("sss");
                }}>
                <Link href={getSectionFomString(section)}>{section}</Link>
              </li>
            ))}
          <br />
          <li
            className="ms-1 mb-1.5 font-aperçu font-bold text-base text-green-700 tracking-wide"
            key="signIn">
            <Link href="/signin">Sign in</Link>
          </li>
          <li
            className="ms-1 mb-1.5 font-aperçu font-bold text-base text-green-700 tracking-wide"
            key="register">
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileSidemenuHomepage;
