import LogoSegment from "../../components/ui/navbar-components/logo-segment";
import HomeSectionLinks from "./sub-components/home-section-links";
import AuthSegment from "./sub-components/auth-segment";

const NavbarHomepage = () => {
  return (
    <header className="relative z-50 flex w-full items-center justify-center bg-purple-400">
      <nav className="fixed top-3 flex w-full items-center px-8  ">
        <div className="smooth-theme-transition flex h-11 w-full items-center justify-between rounded bg-neutral-300 bg-opacity-70 px-10 dark:bg-neutral-700 dark:bg-opacity-70 dark:text-neutral-100">
          <div className="flex space-x-6">
            <LogoSegment />
            <div className="hidden md:flex">
              <HomeSectionLinks />
            </div>
          </div>
          <div className="">
            <AuthSegment />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarHomepage;
