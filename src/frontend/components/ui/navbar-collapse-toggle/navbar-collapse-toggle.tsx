import { Dispatch, SetStateAction } from "react";
import HamburgerIcon from "../../icons/hamburger-icon";
import { motion } from "framer-motion";
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
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{
        scale: [1, 1.2, 0.8, 1],
        transition: {
          duration: 0.5,
        },
      }}
      className="flex items-center justify-center"
    >
      <button onClick={handleOnClick}>
        <span className="flex items-center justify-center">
          {areNavbarsExpanded ? (
            <CollapseNavbarIcon scale={scale} />
          ) : (
            <HamburgerIcon scale={scale ? scale * 0.9 : 1} />
          )}
        </span>
      </button>
    </motion.div>
  );
};

export default NavbarCollapseToggle;
