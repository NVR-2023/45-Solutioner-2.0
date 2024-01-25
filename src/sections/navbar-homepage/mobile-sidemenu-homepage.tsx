import React, { FC } from "react";
import sectionLinksArray from "./section-list-array.t";
import Link from "next/link";
import SigninButton from "./signin-button";
import RegisterButton from "./register-button";
import { getSectionFomString } from "@/utils/getsectionfromurl";

const MobileSidemenuHomepage: FC = () => {
  return <div className="z-[999] absolute right-0 h-full w-40 bg-red-400"></div>;
  {
    <nav className="absolute left-0 -translate-y-5 px-2 bg-neutral-200 ">
      <ul className="mt-5 ">
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
        <li className="" key="signInButton">
          <SigninButton />
        </li>
        <li className="" key="registerButton">
          <RegisterButton />
        </li>
      </ul>
    </nav>;
  }
};

export default MobileSidemenuHomepage;
