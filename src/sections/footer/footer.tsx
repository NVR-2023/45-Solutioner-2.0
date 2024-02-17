import React, { FC } from "react";
import { useThemeContext } from "@/contexts/theme-context";

import footerLinkArray from "./sub-components/footerLinks";
import FooterColumn from "./sub-components/footer-column";

import {
  LIGHT_THEME_DEFAULT,
  DARK_THEME_DEFAULT,

} from "@/app/global-text-styles";

const Footer: FC = () => {
  const { isDarkThemeOn } = useThemeContext();

  return (
    <footer id="footer" className={isDarkThemeOn ? "dark" : ""}>
      <div className={`flex justify-around p-4 ${LIGHT_THEME_DEFAULT} ${DARK_THEME_DEFAULT}`}>
        <div className="flex" aria-labelledby="footerHeading">
          {footerLinkArray.map((linksColumn, index) => (
            <FooterColumn linksColumn={linksColumn} key={index} />
          ))}
        </div>
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
