import React, { ReactNode, FC } from "react";
import Link from "next/link";
import getURLfromString from "@/utils/geturlfromstring";
import getCurrentYear from "@/utils/getCurrentYear";
import SocialMediaIcons from "./sub-components/social-media-icons-footer";

const Footer: FC = () => {
  type FooterLinkColumnType = {
    label: string;
    links?: string[];
    socialMediaIcons?: { children: ReactNode };
    caption?: string;
  };

  type FooterLinkListType = FooterLinkColumnType[];

  const footerLinkArray: FooterLinkListType = [
    {
      label: "company",
      links: ["About us", "Contact us", "Providers", "Jobs", "Press kit"],
      caption: `© ${getCurrentYear()} Nuno Rodrigues`,
    },
    { label: "legal", links: ["Terms of use", "Privacy policy", "Cookie policy"] },
    {
      label: "social media",
      socialMediaIcons: { children: <SocialMediaIcons /> },
    },
  ];

  return (
    <footer id="footer" className="py-5 bg-zinc-900">
      <div className="flex justify-center">
        <nav className="flex md:space-x-24">
          {footerLinkArray.map((linksColumn, index) => (
            <div className="block w-28 md:w-48" key={index}>
              <div
                className="font-aperçu font-semibold text-sm text-neutral-500 tracking-wide mb-2"
                style={{ fontVariant: "small-caps" }}
                key={`column-${index}`}>
                {linksColumn.label}
              </div>
              <ul className="">
                {linksColumn.links?.map((link, index) => (
                  <li
                    className="font-aperçu font-semibold text-xs tracking-wide text-neutral-300 mb-1.5"
                    key={index}>
                    <Link href={getURLfromString(link)}>{link}</Link>
                  </li>
                ))}
                {linksColumn.socialMediaIcons && (
                  <li
                    className="font-aperçu font-semibold text-xs text-neutral-300 mb-1.5"
                    key="social-media-icons">
                    {linksColumn.socialMediaIcons.children}
                  </li>
                )}
                <br />
                {linksColumn.caption && (
                  <li
                    className="font-aperçu font-bold text-xs text-neutral-300 mb-1.5"
                    key="caption">
                    {linksColumn.caption}
                  </li>
                )}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
