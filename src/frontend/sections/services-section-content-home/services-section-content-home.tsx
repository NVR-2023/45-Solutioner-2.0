import RegisterButton from "../../components/ui/register-button";
import HomepageSectionTagline from "@/frontend/components/ui/styled-text-components/homepage-section-tagline";
import HomepageSectionCopy from "@/frontend/components/ui/styled-text-components/homepage-section-copy";
import ServicesCounter from "./sub-components/services-counter";

import CategoryMarquee from "./sub-components/category-marquee";

const ServicesSectionContentHome = () => {
  return (
    <article>
      <div className="absolute left-[7%] top-[17.5%] font-aperçu text-[#fc6900]">
        <div className="flex flex-col -space-y-1 font-extrabold">
          <HomepageSectionTagline text="Home services?/We got you." />
        </div>

        <div className="hidden w-48 pt-2 bg-blend-multiply md:flex">
          <HomepageSectionCopy
            text="From unclogging sink pipes to/ removing hornets' nests,/ solutions are a
          click away."
          />
        </div>

        <div className="flex flex-col space-y-1 pt-9">
          <div className="mt-2 flex items-end space-x-4">
            <CategoryMarquee />
            <ServicesCounter />
          </div>
          <div className="pt-4">
            <RegisterButton />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServicesSectionContentHome;
