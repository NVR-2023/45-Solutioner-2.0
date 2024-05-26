import { motion, AnimatePresence } from "framer-motion";
import LogoSegment from "../../components/ui/navbar-components/logo-segment";
import ThemeSwitch from "@/frontend/components/ui/theme-switch/theme-switch";
import { AvatarSegment } from "./sub-components/avatar-segment";

type NavbarPrivateProps = {
  areNavbarsExpanded: boolean;
};

const variants = {
  initial: { height: "40px", width: "auto" },
  animate: {
    height: "40px",
    width: "auto",
  },
  exit: { height: 0, width: "auto" },
};

const NavbarPrivate = ({ areNavbarsExpanded }: NavbarPrivateProps) => {
  return (
    <motion.nav
      variants={variants}
      initial="initial"
      animate={areNavbarsExpanded ? "animate" : "exit"} // Use exit animation when collapsing
      exit="exit"
      className=" h-10 rounded bg-neutral-300 px-10"
    >
      <AnimatePresence>
        {areNavbarsExpanded && (
          <motion.div className="w-full h-full flex justify-between">
            <motion.span className="flex space-x-6">
              <LogoSegment />
            </motion.span>
            <motion.span className="flex h-full items-center space-x-4">
              <ThemeSwitch scale={0.9} />
              <AvatarSegment />
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavbarPrivate;
