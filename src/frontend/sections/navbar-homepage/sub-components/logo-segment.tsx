import Link from "next/link";
import LogoIcon from "@/frontend/components/icons/logo-icon";
const LogoSegment = () => {
  return (
    <div className="dark:text-[#ff8d14] flex h-full items-center space-x-[1px] text-[1rem] font-semibold text-[#ff7714]">
      <span className="translate-y-[1pt] transform">
        <LogoIcon />
      </span>
      <span>
        <Link href="/#services">Solutioner</Link>
      </span>
    </div>
  );
};

export default LogoSegment;
