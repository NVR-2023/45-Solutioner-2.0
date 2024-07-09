import RegisterButton from "../../components/ui/register-button";
import HomepageSectionTagline from "@/frontend/components/ui/styled-text-components/homepage-section-tagline";
import HomepageSectionCopy from "@/frontend/components/ui/styled-text-components/homepage-section-copy";
import CategoriesCounter from "./sub-components/categories-counter";
import ServicesCounter from "./sub-components/services-counter";

const ServicesSectionContentHome = () => {
  return (
    <div className="absolute left-[7%] top-[15%] font-aperçu text-[#ff7714]">
      <div className=" ">
        <div className="flex flex-col -space-y-2 font-extrabold">
          <HomepageSectionTagline text="Home services?" />
          <HomepageSectionTagline text="We got you covered." />
        </div>

        <div className="w-60 pt-1.5">
          <HomepageSectionCopy
            text="From stubborn sink pipes to pesky hornets' nests, fixes are a
          click away."
          />
        </div>
        <div className="flex space-x-2 pt-10">
          <CategoriesCounter />
          <ServicesCounter />
        </div>
        <div>
          <RegisterButton />
        </div>
      </div>
    </div>
  );
};

export default ServicesSectionContentHome;
