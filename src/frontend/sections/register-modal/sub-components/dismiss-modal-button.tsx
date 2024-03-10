import CloseICon from "@/frontend/components/icons/close-icon";
import Link from "next/link";
const DismissMOdalButton = () => {
  return (
    <div className="">
      <Link href="/">
        <span aria-label="Close Modal" role="button" tabIndex={0} className="">
          <CloseICon scale={0.7} />
        </span>
      </Link>
    </div>
  );
};

export default DismissMOdalButton;
