import Link from "next/link";
import LogoIcon from "@/frontend/components/icons/logo-icon";
const LogoSegment = () => {
  return (
    <div
      className="h-full flex items-center font-semibold text-[1rem] text-[#ff7714] space-x-1">
      <LogoIcon />
      <Link href="/#services">Solutioner</Link>
    </div>
  );
};

export default LogoSegment;
