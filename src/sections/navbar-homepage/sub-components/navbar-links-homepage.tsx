import React, { FC } from "react";
import Link from "next/link";
import { getSectionFomString } from "@/utils/functions/getsectionfromurl";
import homepageSections from "@/utils/data/homepageSections";

const HomeSectionLinks: FC = () => {
  return (
    <div className="flex items-center space-x-7">
      {homepageSections.map((link, index) => (
        <li className="list-none" key={index}>
          <Link
            href={getSectionFomString(link)}
            className="flex items-center font-aperçu font-semibold text-sm"
            style={{}}>
            {link}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default HomeSectionLinks;
