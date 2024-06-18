import HOMEPAGE_SECTIONS from "@/utils/data/homepage-sections";
import Link from "next/link";
import { getSectionFomString } from "@/utils/functions/get-section-from-url";

type MobileSidemenuPropsType = {
  action: () => void;
};

const MobileSidemenuHomepage = ({ action }: MobileSidemenuPropsType) => {
  return (
    <nav className="z-[999] -me-3 mt-3.5 bg-neutral-300 bg-opacity-70 text-base font-semibold dark:bg-neutral-700 dark:bg-opacity-70">
      <div className="flex justify-start">
        <menu className="mx-3 mt-3 flex list-none flex-col space-y-1">
          {HOMEPAGE_SECTIONS &&
            HOMEPAGE_SECTIONS.map((section, index) => (
              <li key={index} onClick={action}>
                <Link
                  className="border-b-[1px] border-solid border-transparent pb-[2px] transition-all duration-300 hover:border-current"
                  href={getSectionFomString(section)}
                >
                  {section}
                </Link>
              </li>
            ))}
          <br />
        </menu>
      </div>
    </nav>
  );
};

export default MobileSidemenuHomepage;
