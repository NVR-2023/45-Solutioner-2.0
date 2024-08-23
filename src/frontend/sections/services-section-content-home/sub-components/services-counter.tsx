import AnimatedCounter from "@/frontend/components/ui/animated-components/animated-counter";
import HomepageSectionCaption from "@/frontend/components/ui/styled-text-components/homepage-section-caption";
const ServicesCounter = () => {
  return (
    <div className="flex flex-col -space-y-1.5">
      <AnimatedCounter
        start={1}
        end={54}
        duration={1800}
        weight={"black"}
        size={"5xl"}
      />
      <HomepageSectionCaption>Services</HomepageSectionCaption>
    </div>
  );
};

export default ServicesCounter;
