import { Dispatch , SetStateAction } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{
        scale: [1, 1.2, 0.8, 1],
        transition: {
          duration: 0.3,
        },
      }}
      className="flex items-center justify-center  text-neutral-400 hover:text-neutral-900"
    >
      <button onClick={handleOnClick}>
        <span
          className={`flex origin-center items-center transition-transform duration-300 ${
            isNavbarExpanded ? "" : "rotate-180"
          } `}
        >
          <CloseOpenNavbarIcon scale={0.7} />
        </span>
      </button>
    </motion.div>
  );
};

export default NavbarCollapseToggle;
