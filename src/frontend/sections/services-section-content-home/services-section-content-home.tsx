import RegisterButton from "../../components/ui/register-button";
import HomepageSectionTagline from "@/frontend/components/ui/styled-text-components/homepage-section-tagline";
import HomepageSectionCopy from "@/frontend/components/ui/styled-text-components/homepage-section-copy";
import CategoriesCounter from "./sub-components/categories-counter";
import ServicesCounter from "./sub-components/services-counter";
import AnimatedMouseIcon from "@/frontend/components/icons/animated-icons/animated-mouse-icon";
const ServicesSectionContentHome = () => {
  return (
    <article>
      <div className="absolute left-[7%] top-[20%] font-aperçu text-[#fc6900]">
        <div className="flex flex-col -space-y-1 font-extrabold">
          <HomepageSectionTagline text="Home services?" />
          <HomepageSectionTagline text="We got you." />
        </div>

        <div className="hidden w-48 pt-2 bg-blend-multiply md:flex">
          <HomepageSectionCopy
            text="From unclogging sink pipes to/ removing hornets' nests,/ solutions are a
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
      <div className="text  absolute bottom-[36%] right-9 justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center  text-[0.6125rem] font-semibold  tracking-wider small-caps">
            scroll
          </div>
          <div className="flex justify-center">
            <AnimatedMouseIcon scale={.9}/>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServicesSectionContentHome;
