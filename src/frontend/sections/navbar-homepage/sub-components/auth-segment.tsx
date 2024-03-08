import ThemeSwitch from "@/frontend/components/ui/theme-switch/theme-switch";
import Link from "next/link";

import SigninIcon from "../../../components/icons/signin-icon";
import MenuToggle from "@/frontend/sections/navbar-homepage/sub-components/menu-toggle";

const AuthSegment = () => {
  return (
    <div className="h-full">
      <div className="hidden md:flex items-center space-x-4 font-semibold text-xs">
        <div>
          <ThemeSwitch scale={0.9} />
        </div>
        <div className="">
          <Link href="">Sign in</Link>
        </div>
        <div className="">
          <Link href="/register">Register</Link>
        </div>
      </div>
      <div className="md:hidden flex items-center space-x-4">
        <ThemeSwitch scale={1.2} />
        <SigninIcon scale={1.2} />
        <MenuToggle scale={1.2} />
      </div>
    </div>
  );
};

export default AuthSegment;
