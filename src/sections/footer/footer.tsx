import React, { FC } from "react";
import Link from "next/link";
import getURLfromString from "@/utils/functions/geturlfromstring";
import { useThemeContext } from "@/contexts/theme-context";

import footerLinkArray from "./sub-components/footerLinks";

import {
  LIGHT_THEME_DEFAULT,
  DARK_THEME_DEFAULT,
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
      <div className={`flex justify-center py-4 ${LIGHT_THEME_DEFAULT} ${DARK_THEME_DEFAULT}`}>
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
              {linksColumn.socialMediaIcons && (
                <li className="ist-none flex flex-col space-y-2" key="social-media-icons">
                  <div className="flex">{linksColumn.socialMediaIcons.children}</div>
                </li>
              )}
              <ul className="list-none flex flex-col space-y-2">
                {linksColumn.links?.map((link, index) => (
                  <li className="flex" key={index}>
                    {link[0] === "©" ? (
                      <p
                        className={`${LIGHT_THEME_FOOTER_CAPTION} ${DARK_THEME_FOOTER_CAPTION}`}>
                        {link}
                      </p>
                    ) : (
                      <Link
                        className={`flex ${LIGHT_THEME_FOOTER_TEXT} ${DARK_THEME_FOOTER_TEXT} pb-[2px] border-b-[1px] border-solid border-transparent transition-all duration-300 hover:border-current`}
                        href={getURLfromString(link)}
                        aria-current="page">
                        {link}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

/*    {
     linksColumn.notice && (
       <li className={`${LIGHT_THEME_FOOTER_CAPTION} ${DARK_THEME_FOOTER_CAPTION} `} key="caption">
         {linksColumn.notice}
       </li>
     );
   } */
