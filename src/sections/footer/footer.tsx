import React, { ReactNode, FC } from "react";
import Link from "next/link";
import getURLfromString from "@/utils/geturlfromstring";
import getCurrentYear from "@/utils/getCurrentYear";
import SocialMediaIcons from "./social-media-icons-footer";

const Footer: FC = () => {
  type FooterLinkColumnType = {
    label: string;
    links: string[];
  };

  type FooterLinkListType = FooterLinkColumnType[];

  const footerLinkArray: FooterLinkListType = [
    {
      label: "company",
      links: ["About us", "Contact us", "Providers", "Jobs", "Press kit"],
    },
    { label: "legal", links: ["Terms of use", "Privacy policy", "Cookie policy"] },
  ];

  return (
    <footer id="footer" className="py-10 md:py-5 bg-zinc-900">
      <div className="flex justify-center ">
      <nav className="flex space-x-3 md:space-x-48 ">
        {footerLinkArray.map((linksColumn, index) => (
          <div className="block w-4/12 space-y-0.5" key={index}>
            <div
              className=" font-aperçu font-bold text-md tracking-wider text-neutral-500 "
              style={{ fontVariant: "small-caps" }}
              key={`column-${index}`}>
              {linksColumn.label}
            </div>
            {linksColumn.links.map((link, index) => (
              <div className="" key={index}>
                <Link
                  className=" font-aperçu font-bold text-xs tracking-wide text-neutral-300"
                  href={getURLfromString(link)}>
                  {link}
                </Link>
              </div>
            ))}
          </div>
        ))}

        <div className="block w-4/12 space-y-0.5 ">
          <div
            className=" font-aperçu font-bold text-md tracking-wider text-neutral-500 "
            style={{ fontVariant: "small-caps" }}>
            social media
          </div>
          <div className="">
            <SocialMediaIcons />
          </div>
          <div className=" font-aperçu font-bold text-xs tracking-wide text-neutral-300">
            {`© ${getCurrentYear()} Nuno Rodrigues`}
          </div>
        </div>
      </nav>
      </div>
    </footer>
  );
};

export default Footer;
