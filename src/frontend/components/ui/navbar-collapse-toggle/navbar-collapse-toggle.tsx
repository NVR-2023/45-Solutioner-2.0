import { Dispatch, SetStateAction } from "react";
import HamburgerIcon from "../../icons/hamburger-icon";
import { motion, AnimatePresence } from "framer-motion";
import CollapseNavbarIcon from "@/frontend/components/icons/collapse-navbar-icon";

type NavbarCollapseToggleProps = {
  isNavbarExpanded: boolean;
  setIsNavbarExpanded: Dispatch<SetStateAction<boolean>>;
  scale?: number;
};

const NavbarCollapseToggle = ({
  isNavbarExpanded,
  setIsNavbarExpanded,
  scale,
}: NavbarCollapseToggleProps) => {
  const handleOnClick = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
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
        <span
          
          className="flex items-center justify-center"
        >
            {isNavbarExpanded ? (
              <span key="expanded">
                <CollapseNavbarIcon scale={scale} />
              </span>
            ) : (
              <span key="collapsed">
                <HamburgerIcon scale={scale} />
              </span>
            )}
        </span>
      </button>
    </motion.div>
  );
};

export default NavbarCollapseToggle;
