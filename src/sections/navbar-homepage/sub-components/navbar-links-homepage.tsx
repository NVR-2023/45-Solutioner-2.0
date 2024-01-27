import React, { FC } from "react";
import Link from "next/link";
import { getSectionFomString } from "@/utils/getsectionfromurl";
import sectionLinksArray from "./section-list-array.t";

const HomeSectionLinks: FC = () => {
  return (
    <div className="flex h-full space-x-7">
      {sectionLinksArray.map((link, index) => (
        <li className="list-none" key={index}>
          <Link
            href={getSectionFomString(link)}
            className="flex h-full items-center font-aperçu font-bold text-base text-green-700 tracking-wide"
            style={{}}>
            {link}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default HomeSectionLinks;
