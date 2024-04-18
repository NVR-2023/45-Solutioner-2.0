import LogoSegment from "./sub-components/logo-segment";
import HomeSectionLinks from "./sub-components/home-section-links";
import AuthSegment from "./sub-components/auth-segment";

const NavbarHomepage = () => {
  return (
    <header className="relative z-50 flex justify-center">
      <nav className="fixed w-11/12 top-3 rounded bg-neutral-200  dark:bg-neutral-700 bg-opacity-70 dark:text-white smooth-theme-transition">
        <div className="flex items-center justify-between py-2 px-8">
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
