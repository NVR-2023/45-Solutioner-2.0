import React, { FC, Fragment } from "react";
import { useThemeContext } from "@/contexts/theme-context";

import footerLinkArray from "./sub-components/footer-links-array";
import FooterLinksSegment from "./sub-components/footer-links-segment";
import FooterSocialSegment from "./sub-components/footer-social-segment";

import { LIGHT_THEME_DEFAULT, DARK_THEME_DEFAULT } from "@/app/global-text-styles";

const Footer: FC = () => {
  const { isDarkThemeOn } = useThemeContext();

  return (
    <footer id="footer" className={isDarkThemeOn ? "dark" : ""}>
      <div
        className={`flex flex-col md:flex-row md:justify-around p-4 ${LIGHT_THEME_DEFAULT} ${DARK_THEME_DEFAULT}`}>
        <FooterLinksSegment linkList={footerLinkArray[0]} />
        <FooterLinksSegment linkList={footerLinkArray[1]} />
        <FooterSocialSegment />
      </div>
    </footer>
  );
};

export default Footer;
