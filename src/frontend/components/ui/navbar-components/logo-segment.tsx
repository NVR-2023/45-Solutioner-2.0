import Link from "next/link";
import LogoIcon from "@/frontend/components/icons/logo-icon";
import SolutionerTitle from "../styled-text-components/solutioner-title";

const LogoSegment = () => {
  return (
    <div className="flex h-full items-center space-x-0 text-[1rem] font-semibold text-[#ff7714] dark:text-[#ff8d14]">
      <span className="-translate-x-[0.5rem] translate-y-[1pt] transform">
        <LogoIcon />
      </span>
      <span className="-translate-x-[0.5rem]">
        <Link href="/#services">
          <SolutionerTitle />
        </Link>
      </span>
    </div>
  );
};

export default LogoSegment;
