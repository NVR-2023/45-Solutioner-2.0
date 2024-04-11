import Link from "next/link";
import LogoIcon from "@/frontend/components/icons/logo-icon";
const LogoSegment = () => {
  return (
    <div
      className="h-full flex items-center font-semibold text-[1rem] text-[#ff7714] space-x-[1px]">
      <span className="transform translate-y-[1pt]"><LogoIcon /></span>
      <span><Link href="/#services">Solutioner</Link></span>
    </div>
  );
};

export default LogoSegment;
