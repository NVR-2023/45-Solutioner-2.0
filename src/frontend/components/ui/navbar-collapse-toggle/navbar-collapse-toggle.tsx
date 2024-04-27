import { Dispatch , SetStateAction } from "react";
import CloseOpenNavbarIcon from "@/frontend/components/icons/close-open-navbar-icon";

type NavbarCollapseToggleProps = {
  isNavbarExpanded: boolean;
  setIsNavbarExpanded: Dispatch<SetStateAction<boolean>>;
};
const NavbarCollapseToggle = ({
  isNavbarExpanded,
  setIsNavbarExpanded,
}: NavbarCollapseToggleProps) => {
  const handleOnClick = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  return (
    <div className="flex items-center justify-center">
      <button onClick={handleOnClick}>
        <span
          className={`text-neutral-400 flex origin-center items-center transition-transform duration-300 ${
            isNavbarExpanded ? "" : "rotate-180"
          } `}
        >
          <CloseOpenNavbarIcon scale={0.7} />
        </span>
      </button>
    </div>
  );
};

export default NavbarCollapseToggle;
