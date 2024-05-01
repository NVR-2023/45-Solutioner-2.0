import getURLfromString from "@/utils/functions/geturlfromstring";
import Link from "next/link";
const PrivateNavbarTabsSegment = () => {
  const PRIVATE_TABS = ["Book", "Track", "Notifications"];

  return (
    <nav className="flex items-center justify-between space-x-4">
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
    </nav>
  );
};

export default PrivateNavbarTabsSegment;
