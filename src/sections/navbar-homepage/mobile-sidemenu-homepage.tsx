"use client";

import React, { FC } from "react";
import sectionLinksArray from "./section-list-array.t";
import Link from "next/link";
import SigninButton from "./signin-button";
import RegisterButton from "./register-button";
import { getSectionFomString } from "@/utils/getsectionfromurl";

const MobileSidemenuHomepage: FC = () => {
  return (
    <div className="z-[999] absolute right-0 h-full w-1/4 bg-neutral-200">
      <nav className="flex justify-center">
        <ul className="mt-5">
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
          <li className="mt-16" key="signInButton">
            <SigninButton />
          </li>
          <li className="mt-4" key="registerButton">
            <RegisterButton />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileSidemenuHomepage;
