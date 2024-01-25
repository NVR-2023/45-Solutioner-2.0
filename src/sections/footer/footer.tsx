import React, { FC } from "react";
import Link from "next/link";
import getURLfromString from "@/utils/geturlfromstring";
import getCurrentYear from "@/utils/getCurrentYear";

const Footer: FC = () => {
  type footerLinkList = {
    about: string[];
    legal: string[];
  };

  const footerLinkArray: footerLinkList = {
    about: ["About us", "Contact us", "Jobs", "Press kit"],
    legal: ["Terms of use", "Privacy policy", "Cookie policy"],
  };

  return (
    <footer className=" ps-20 bg-zinc-900 text-neutral-300">
      
      <nav className="flex">
        <div className="block space-y-1">
          <div className="">Company</div>
          {footerLinkArray.about.map((link, index) => (
            <div key={index} className="">
              <Link href={getURLfromString(link)}>{link}</Link>
            </div>
          ))}
        </div>

        <div className="block space-y-1">
          <div className="">Legal</div>
          {footerLinkArray.legal.map((link, index) => (
            <div key={index} className="">
              <Link href={getURLfromString(link)}>{link}</Link>
            </div>
          ))}
        </div>
        <div className="block">
          <div className="">1212121212</div>
          <div className="copyright">{`© ${getCurrentYear()} Nuno Rodrigues`}</div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
