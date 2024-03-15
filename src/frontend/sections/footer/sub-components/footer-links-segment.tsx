import getURLfromString from "@/utils/functions/geturlfromstring";
import Link from "next/link";

type LinkListType = {
  label: string;
  links: string[];
};

type LinkListProps = {
  linkList: LinkListType;
}
const FooterLinksSegment = ({linkList}: LinkListProps) => {
  return (
    <nav key={linkList.label}>
      <div className="flex flex-col w-26 md:w-64">
        <label
          className="text-sm font-bold small-caps tracking-wide md:mb-2 pe-2 md:pe-0"
          id="footerHeading">
          {linkList.label}
        </label>
        <menu
          className="list-none flex flex-row md:flex-col space-x-0.5 md:space-x-0 md:space-y-2"
          aria-label="List of Links">
          {linkList.links?.map((link, index) => (
            <li className="flex" key={index}>
              <Link
                className="text-sm md:text-xs font-semibold pb-[1px] px-1 md:px-0 border-b-[1px] border-solid border-transparent transition-all duration-300 hover:border-current"
                href={getURLfromString(link)}
                aria-current="page">
                {link}
              </Link>
            </li>
          ))}
        </menu>
      </div>
    </nav>
  );
};

export default FooterLinksSegment;
