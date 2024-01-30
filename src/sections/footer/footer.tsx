import React, { ReactNode, FC } from "react";
import Link from "next/link";
import getURLfromString from "@/utils/functions/geturlfromstring";

import footerLinkArray from "./sub-components/footerLinks";
import {
  LIGHT_THEME_BACKGROUND,
  DARK_THEME_BACKGROUND,
  LIGHT_THEME_FOOTER_LABELS,
  DARK_THEME_FOOTER_LABELS,
  LIGHT_THEME_FOOTER_TEXT,
  DARK_THEME_FOOTER_TEXT,
  LIGHT_THEME_FOOTER_CAPTION,
  DARK_THEME_FOOTER_CAPTION

} from "@/app/global-text-styles";

const Footer: FC = () => {
  return (
    <footer id="footer" className="">
      <div
        className={`flex justify-center py-5 ${LIGHT_THEME_BACKGROUND} ${DARK_THEME_BACKGROUND}`}>
        <nav className="flex md:space-x-24">
          {footerLinkArray.map((linksColumn, index) => (
            <div className="block w-28 md:w-48" key={index}>
              <div className="mb-1" key={`column-${index}`}>
                <span className={`${LIGHT_THEME_FOOTER_LABELS} ${DARK_THEME_FOOTER_LABELS}`}>
                  {linksColumn.label}
                </span>
              </div>
              <ul className="m-0 p-0">
                {linksColumn.links?.map((link, index) => (
                  <li className="m-0 p-0" key={index}>
                    <Link
                      className={`m-0 p-0 ${LIGHT_THEME_FOOTER_TEXT} ${DARK_THEME_FOOTER_TEXT}`}
                      href={getURLfromString(link)}>
                      {link}
                    </Link>
                  </li>
                ))}
                {linksColumn.socialMediaIcons && (
                  <li
                    className=""
                    key="social-media-icons">
                      <div className="">
                    {linksColumn.socialMediaIcons.children}
                    </div>
                  </li>
                )}
                <br />
                {linksColumn.caption && (
                  <li
                    className={`${LIGHT_THEME_FOOTER_CAPTION} ${DARK_THEME_FOOTER_CAPTION}`}
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
