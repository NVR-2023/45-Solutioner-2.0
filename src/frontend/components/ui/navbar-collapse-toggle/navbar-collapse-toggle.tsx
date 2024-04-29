import { Dispatch, SetStateAction } from "react";
import CollapseNavbarIcon from "@/frontend/components/icons/collapse-navbar-icon";

type NavbarCollapseToggleProps = {
  areNavbarsExpanded: boolean;
  setAreNavbarsExpanded: Dispatch<SetStateAction<boolean>>;
  scale?: number;
};

const NavbarCollapseToggle = ({
  areNavbarsExpanded,
  setAreNavbarsExpanded,
  scale,
}: NavbarCollapseToggleProps) => {
  const handleOnClick = () => {
    setAreNavbarsExpanded(!areNavbarsExpanded);
  };

  return (
    <button
      onClick={handleOnClick}
      className="flex items-center justify-center text-neutral-400"
    >
      <span
        className={`origin-center transition-transform duration-300 ${
          areNavbarsExpanded ? "rotate-0" : "rotate-180 transform"
        }`}
      >
        <CollapseNavbarIcon scale={scale} />
      </span>
    </button>
  );
};

export default NavbarCollapseToggle;
