import { Dispatch, SetStateAction } from "react";
import CollapseNavbarIcon from "@/frontend/components/icons/collapse-navbar-icon";

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
    <div
      className={`z-50 origin-center text-neutral-400 transition-transform ${areNavbarsExpanded ? "rotate-0" : "rotate-180"}`}
    >
      <CollapseNavbarIcon scale={scale} />
    </div>
  );
};

export default CollapseToggle;
