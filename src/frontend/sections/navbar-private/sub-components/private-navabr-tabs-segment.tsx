import getURLfromString from "@/utils/functions/get-url-from-string";
import { capitalizeFirstLetter } from "@/utils/functions/capitalize-first-letter";
import Link from "next/link";

import { usePathname } from "next/navigation";
import NavbarTab from "@/frontend/components/ui/styled-text-components/navbar-tab";

const PrivateNavbarTabsSegment = () => {
  const PRIVATE_TABS = ["book", "track", "notifications"];
  const fullPath = usePathname();
  const currentTab = fullPath.split("/").at(-1);

  return (
    <nav className="flex items-center justify-between space-x-4">
      {PRIVATE_TABS.map((tab, index) => {
        return (
          <li key={index} className="relative flex items-center justify-center">
            <Link href={"/private/main/" + tab} className="">
              <NavbarTab text={capitalizeFirstLetter(tab)} />
              {tab === currentTab && (
                <div className="absolute left-0 top-full mt-0.5 w-full border-t-[1px] border-current"></div>
              )}
            </Link>
          </li>
        );
      })}
    </nav>
  );
};

export default PrivateNavbarTabsSegment;

/*     <nav className="flex items-center justify-between space-x-4">
      {PRIVATE_TABS.map((tab, index) => {
        return (
          <li key={index} className="relative flex items-center justify-center">
            <Link href={"/private/main/" + tab} className="">
              <span className="relative text-xs  font-semibold">{tab}</span>
              {tab === "Book" && (
                <div className="absolute left-0 top-full mt-0.5 w-full border-t-[1px] border-current"></div>
              )}
            </Link>
          </li>
        );
      })}
    </nav>; */
