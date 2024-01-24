import React, { FC } from "react";
import Link from "next/link";

import { linkListType } from "@/types/componentpopstypes";

const HomeLinks: FC = () => {
  const linkArray: linkListType = [
    { name: "Services", sectionHash: "#services" },
    { name: "Security", sectionHash: "#security" },
    { name: "Pricing", sectionHash: "#pricing" },
  ];

  return (
    <div className="flex h-full space-x-7">
      {linkArray.map((link, index) => (
        <li className="list-none" key={link.sectionHash}>
          <Link
            href={link.sectionHash}
            className="flex h-full items-center font-aperçu font-bold text-sm text-green-700 tracking-wide"
            style={{}}>
            {link.name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default HomeLinks;
