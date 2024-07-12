import RegisterButton from "../../components/ui/register-button";
import HomepageSectionTagline from "@/frontend/components/ui/styled-text-components/homepage-section-tagline";
import HomepageSectionCopy from "@/frontend/components/ui/styled-text-components/homepage-section-copy";
import CategoriesCounter from "./sub-components/categories-counter";
import ServicesCounter from "./sub-components/services-counter";

const ServicesSectionContentHome = () => {
  return (
    <div className="absolute left-[12%] top-[20%] font-aperçu text-[#fc6900]">
      <div className="flex flex-col -space-y-1 font-extrabold">
        <HomepageSectionTagline text="Home services?" />
        <HomepageSectionTagline text="We got you." />
      </div>

      <div className="hidden w-48 pt-2 md:flex">
        <HomepageSectionCopy
          text="From unclogging sink pipes to removing hornets' nests, solutions are a
          click away."
        />
      </div>

      <div className="flex flex-col space-y-1 pt-9">
        <div className="flex items-end space-x-4">
          <CategoriesCounter />
          <ServicesCounter />
        </div>
        <div className="pt-4">
          <RegisterButton />
        </div>
      </div>
    </div>
  );
};

export default ServicesSectionContentHome;
