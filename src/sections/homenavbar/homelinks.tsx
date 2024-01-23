import React, { FC } from "react";
import Link from "next/link";

import { linkListType } from "@/types/componentpopstypes";

const HomeLinks: FC = () => {
  const linkArray: linkListType = [
    { link: "Services", path: "/services" },
    { link: "Security", path: "/security" },
    { link: "Pricing", path: "/pricing" },
  ];

  return (
    <div className="flex space-x-7">
      {linkArray.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className="flex items-center font-aperçu font-bold text-base tracking-wide"
          style={{}}>
          {link.link}
        </Link>
      ))}
    </div>
  );
};

export default HomeLinks;
