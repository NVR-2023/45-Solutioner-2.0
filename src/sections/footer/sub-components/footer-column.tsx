import React, { FC } from "react";
import { FooterLinkColumnType } from "@/types/component-props-types";
import getURLfromString from "@/utils/functions/geturlfromstring";
import Link from "next/link";

import {
  LIGHT_THEME_DEFAULT,
  DARK_THEME_DEFAULT,
  LIGHT_THEME_FOOTER_LABELS,
  DARK_THEME_FOOTER_LABELS,
  LIGHT_THEME_FOOTER_LINK,
  DARK_THEME_FOOTER_LINK,
  LIGHT_THEME_FOOTER_CAPTION,
  DARK_THEME_FOOTER_CAPTION,
} from "@/app/global-text-styles";

const FooterColumn: FC<{ linksColumn: FooterLinkColumnType }> = ({ linksColumn }) => {
  return (
    <nav key={linksColumn.label}>
      <div className="block w-16 md:w-64 mb-2">
        <div
          className={`${LIGHT_THEME_FOOTER_LABELS} ${DARK_THEME_FOOTER_LABELS} mb-2`}
          id="footerHeading">
          {linksColumn.label}
        </div>
        {linksColumn.socialMediaIcons && (
          <div className="ist-none flex flex-col space-y-2" key="social-media-icons">
            {linksColumn.socialMediaIcons.children}
          </div>
        )}
        <ul className="list-none flex flex-col space-y-0.5 md:space-y-1" aria-label="List of Links">
          {linksColumn.links?.map((link, index) => (
            <li className="flex" key={index}>
              {link[0] === "©" ? (
                <div className={`${LIGHT_THEME_FOOTER_CAPTION} ${DARK_THEME_FOOTER_CAPTION} mt-3`}>
                  {link}
                </div>
              ) : (
                <Link
                  className={`flex ${LIGHT_THEME_FOOTER_LINK} ${DARK_THEME_FOOTER_LINK} pb-[2px] border-b-[1px] border-solid border-transparent transition-all duration-300 hover:border-current`}
                  href={getURLfromString(link)}
                  aria-current="page">
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default FooterColumn;
