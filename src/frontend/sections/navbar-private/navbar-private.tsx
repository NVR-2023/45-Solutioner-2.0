"use client";
import LogoSegment from "../navbar-homepage/sub-components/logo-segment";
import PrivateNavbarTabsSegment from "./sub-components/private-navabr-tabs-segment";
import ThemeSwitch from "@/frontend/components/ui/theme-switch/theme-switch";
import AvatarSegment from "./sub-components/avatar-segment";

const NavbarPrivate = () => {
  return (
    <nav className="m-0 flex h-10 w-full items-center justify-between rounded bg-neutral-300 px-8">
      <span className="flex space-x-6">
        <LogoSegment />
        <PrivateNavbarTabsSegment />
      </span>

      <span className="flex space-x-4">
        <ThemeSwitch />
        <AvatarSegment />
      </span>
    </nav>
  );
};

export default NavbarPrivate;
