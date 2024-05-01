"use client";

import { motion, AnimatePresence } from "framer-motion";
import LogoSegment from "../../components/ui/navbar-components/logo-segment";
import PrivateNavbarTabsSegment from "./sub-components/private-navabr-tabs-segment";
import ThemeSwitch from "@/frontend/components/ui/theme-switch/theme-switch";
import { AvatarSegment } from "./sub-components/avatar-segment";

type NavbarPrivateProps = {
  areNavbarsExpanded: boolean;
};

const variants = {
  initial: { height: 0 },
  animate: {
    height: "40px",
  },
  exit: { height: 0 },
};
const NavbarPrivate = ({ areNavbarsExpanded }: NavbarPrivateProps) => {
  return (
    <AnimatePresence>
      {areNavbarsExpanded && (
        <motion.nav
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex h-10 w-full items-center justify-between rounded bg-neutral-300 px-10"
        >
          {areNavbarsExpanded && (
            <motion.div className="flex w-full justify-between">
              <motion.span className="flex space-x-6">
                <LogoSegment />
{/*                 <PrivateNavbarTabsSegment />
 */}              </motion.span>
              <motion.span className="flex h-full items-center  space-x-4">
                <ThemeSwitch scale={0.9} />
                <AvatarSegment name={"Nuno Rodrigues"} />
              </motion.span>
            </motion.div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default NavbarPrivate;
