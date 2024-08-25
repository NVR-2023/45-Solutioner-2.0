import { ReactNode } from "react";
import HomepageSection from "../homepage-section/homepage-section";
import PricingAnimatedComponent from "./sub-components/pricing-animated-compoennt";

type WrappeElementProps = {
  children: ReactNode;
};
const WrapperElement = ({ children }: WrappeElementProps) => (
  <div className="size-40 text-base font-extrabold">{children}</div>
);

const PricingSectionContentHome = () => {
  return (
    <HomepageSection
      tagline1="Sales, bargains, discounts."
      tagline2="You can have it all."
      copy="Starting at €30,/ get affordable services/and grab regular sales."
      AnimatedComponent={PricingAnimatedComponent}
    />
  );
};

export default PricingSectionContentHome;
