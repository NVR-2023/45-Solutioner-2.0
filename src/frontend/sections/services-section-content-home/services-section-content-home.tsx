import HomepageSection from "../homepage-section/homepage-section";
import ServicesAnimatedComponent from "./sub-components/ServicesAnimatedComponent";

const ServicesSectionContentHome = () => {
  return (
    <HomepageSection
      tagline1="Home services?"
      tagline2="We got you."
      copy="From stubborn sink pipes to/ pesky hornets' nests,/ solutions are a
          click away."
      AnimatedComponent={ServicesAnimatedComponent}
    />
  );
};

export default ServicesSectionContentHome;
