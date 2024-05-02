import { Dispatch, SetStateAction } from "react";
import CollapseNavbarIcon from "@/frontend/components/icons/collapse-navbar-icon";
import HamburgerIcon from "../../icons/hamburger-icon";

type CollapseToggleProps = {
  areNavbarsExpanded: boolean;
  setAreNavbarsExpanded: Dispatch<SetStateAction<boolean>>;
  scale?: number;
};

const CollapseToggle = ({
  areNavbarsExpanded,
  setAreNavbarsExpanded,
  scale,
}: CollapseToggleProps) => {
  const handleOnClick = () => {
    setAreNavbarsExpanded(!areNavbarsExpanded);
  };

  return (
    <button
      onClick={handleOnClick}
      className="z-50"
    >
  {  areNavbarsExpanded ? <CollapseNavbarIcon scale={scale} /> : <HamburgerIcon scale={scale} />}
    </button>
  );
};

export default CollapseToggle;
