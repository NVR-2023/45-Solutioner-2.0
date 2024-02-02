import React, { FC } from "react";
import Link from "next/link";
import getURLfromString from "@/utils/functions/geturlfromstring";
import { useThemeContext } from "@/contexts/theme-context";

import footerLinkArray from "./sub-components/footerLinks";

import {
  LIGHT_THEME_BACKGROUND,
  DARK_THEME_BACKGROUND,
  LIGHT_THEME_FOOTER_LABELS,
  DARK_THEME_FOOTER_LABELS,
  LIGHT_THEME_FOOTER_TEXT,
  DARK_THEME_FOOTER_TEXT,
  LIGHT_THEME_FOOTER_CAPTION,
  DARK_THEME_FOOTER_CAPTION,
} from "@/app/global-text-styles";

const Footer: FC = () => {
const { isDarkThemeOn } = useThemeContext();

  return (
    <footer id="footer" className={isDarkThemeOn ? "dark" : ""}>
      <div
        className="flex justify-center py-5 bg-green-500 dark:bg-red-500">
        <nav className="flex md:space-x-24" aria-labelledby="footerHeading">
          {footerLinkArray.map((linksColumn, index) => (
            <div className="block w-28 md:w-48" key={index}>
              <div className="mb-2" key={`column-${index}`}>
                <span
                  className={`${LIGHT_THEME_FOOTER_LABELS} ${DARK_THEME_FOOTER_LABELS}`}
                  id="footerHeading">
                  {linksColumn.label}
                </span>
              </div>
              <ul className="list-none flex flex-col space-y-2">
                {linksColumn.links?.map((link, index) => (
                  <li className="flex " key={index}>
                    <Link
                      className={`flex items-center ${LIGHT_THEME_FOOTER_TEXT} ${DARK_THEME_FOOTER_TEXT} pb-[2px] border-b-[1px] border-solid border-transparent transition-all duration-300 hover:border-black`}
                      href={getURLfromString(link)}
                      aria-current="page">
                      {link}
                    </Link>
                  </li>
                ))}
                {linksColumn.socialMediaIcons && (
                  <li className="flex" key="social-media-icons">
                    <div className="flex items-center">{linksColumn.socialMediaIcons.children}</div>
                  </li>
                )}
                <br />
                {linksColumn.notice && (
                  <li
                    className={`${LIGHT_THEME_FOOTER_CAPTION} ${DARK_THEME_FOOTER_CAPTION} flex items-center`}
                    key="caption">
                    {linksColumn.notice}
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
