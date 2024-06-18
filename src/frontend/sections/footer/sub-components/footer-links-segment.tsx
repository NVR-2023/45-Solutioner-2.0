import getURLfromString from "@/utils/functions/get-url-from-string";
import Link from "next/link";

type LinkListType = {
  label: string;
  links: string[];
};

type LinkListProps = {
  linkList: LinkListType;
};
const FooterLinksSegment = ({ linkList }: LinkListProps) => {
  return (
    <nav key={linkList.label}>
      <div className="w-26 flex flex-col md:w-64">
        <label
          className="pe-2 text-sm font-bold tracking-wide small-caps md:mb-2 md:pe-0"
          id="footerHeading"
        >
          {linkList.label}
        </label>
        <menu
          className="flex list-none flex-row space-x-0.5 md:flex-col md:space-x-0 md:space-y-2"
          aria-label="List of Links"
        >
          {linkList.links?.map((link, index) => (
            <li className="flex" key={index}>
              <Link
                className="border-b-[1px] border-solid border-transparent px-1 pb-[1px] text-sm font-semibold transition-all duration-300 hover:border-current md:px-0 md:text-xs"
                href={`/footer/${getURLfromString(link)}`}
                aria-current="page"
              >
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
