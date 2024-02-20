import LogoIcon from "../../../components/icons/logo-icon";
import Link from "next/link";

const LogoSegment = () => {
  return (
    <div className="flex h-full items-left">
      <Link href={"/#services"} className="flex items-center">
        <div>
          <LogoIcon />
        </div>
        <div className="hidden md:flex font-bold ">Solutioner</div>
      </Link>
    </div>
  );
};

export default LogoSegment;
