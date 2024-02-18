import React, { FC } from "react";
import SocialMediaIcons from "./social-media-icons-footer";
import getCurrentYearSpan from "@/utils/functions/getCurrentYearSpan";
import {
  LIGHT_THEME_FOOTER_LABELS,
  DARK_THEME_FOOTER_LABELS,
  LIGHT_THEME_FOOTER_CAPTION,
  DARK_THEME_FOOTER_CAPTION,
} from "@/app/global-text-styles";

const FooterSocialSegment: FC = () => {
  return (
    <nav key="social" className="block w-64">
        <div
          className={`${LIGHT_THEME_FOOTER_LABELS} ${DARK_THEME_FOOTER_LABELS} mb-3`}
          id="footerHeading">
          social
        </div>
        <div>
          <SocialMediaIcons />
        </div>
        <div className="pt-2 md:pt-6">
          <p className={`${LIGHT_THEME_FOOTER_CAPTION} ${DARK_THEME_FOOTER_CAPTION}`}>
            {`©${getCurrentYearSpan()} Nuno Violante Rodrigues. All rights reserved.`}
          </p>
        </div>
    </nav>
  );
};

export default FooterSocialSegment;
