import RegisterButton from "../../components/ui/register-button";
import HomepageSectionTagline from "@/frontend/components/ui/styled-text-components/homepage-section-tagline";
import HomepageSectionCopy from "@/frontend/components/ui/styled-text-components/homepage-section-copy";

import IrradiatingCircle from "./sub-components/irradiating-circle";
const PricingSectionContentHome = () => {
  return (
    <article>
      <div className="absolute left-[7%] top-[17.5%] font-aperçu text-[#fc6900]">
        <div className="flex flex-col -space-y-1 font-extrabold">
          <HomepageSectionTagline text="Sales, bargains, discounts/You can have it all" />
        </div>

        <div className="hidden w-48 pt-2 bg-blend-multiply md:flex">
          <HomepageSectionCopy
            text="Affordable dog walking,/ regular sales on popular services,  sink pipes to/ pesky hornets' nests,/ solutions are a
          click away."
          />
        </div>

        <div className="flex flex-col space-y-1 pt-9">
          <div className="ms-20">
            <IrradiatingCircle />
          </div>
          <div className="pt-4">
            <RegisterButton />
          </div>
        </div>
      </div>
    </article>
  );
};

export default PricingSectionContentHome;
