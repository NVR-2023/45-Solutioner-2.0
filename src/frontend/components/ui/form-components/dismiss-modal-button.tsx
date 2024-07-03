import CloseICon from "../../icons/close-icon";
import Link from "next/link";
const DismissModalButton = () => {
  return (
    <Link href="/">
      <span aria-label="Close Modal" role="button" tabIndex={0} className="">
        <CloseICon scale={0.7} />
      </span>
    </Link>
  );
};

export default DismissModalButton;
