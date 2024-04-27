import LogoSegment from "./sub-components/logo-segment";
import HomeSectionLinks from "./sub-components/home-section-links";
import AuthSegment from "./sub-components/auth-segment";

const NavbarHomepage = () => {
  return (
    <header className="relative z-50 flex justify-center">
      <nav className="dark:bg-opacity-70 dark:text-neutral-100 smooth-theme-transition fixed top-3 w-11/12  rounded bg-neutral-200 bg-opacity-70 dark:bg-neutral-700 ">
        <div className="flex items-center justify-between px-8 py-2">
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
