import { useState, useRef } from "react";
import { getHexColorFromInitials } from "@/utils/functions/get-hex-color-from-initials";
import { useUserDetailsContext } from "@/frontend/contexts/use-user-details";

import SidebannerNavbarPrivate from "./sidebanner-navbar-private";
export const AvatarSegment = () => {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);
  const sideBannerRef = useRef();

  const { userInitials } = useUserDetailsContext();
  const avatarBackgroundColor = getHexColorFromInitials(userInitials!, 0.4);

  const handleOnMouseEnter = () => {
    setIsAvatarHovered(true);
  };
  const handleOnMouseLeave = () => {
    setIsAvatarHovered(false);
  };

  const closeSidebanner = () => {
    setIsAvatarHovered(false);
  };

  return (
    <div className="">
      <div
        onMouseEnter={handleOnMouseEnter}
        className="flex items-center justify-center rounded-full p-1  tracking-wide"
        style={{
          backgroundColor: avatarBackgroundColor,
        }}
      >
        <span className="flex h-5 w-5 items-center justify-center text-[.625rem] font-semibold text-white small-caps dark:text-neutral-700">
          {userInitials}
        </span>
      </div>

      <div className="absolute right-0 top-0 h-screen">
        <div
          className={`${isAvatarHovered ? "w-36" : "w-0"} transition-all duration-300`}
        >
          <div className="flex overflow-hidden">
            <div
              onMouseLeave={handleOnMouseLeave}
              className="z-50 h-screen w-36  overflow-hidden border-black bg-[#c9c9c9] font-aperçu text-sm font-bold text-black dark:text-neutral-300 md:text-xs"
            >
              <SidebannerNavbarPrivate closeSidebanner={closeSidebanner}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
