import CategoryMarquee from "./category-marquee";
import ServicesCounter from "./services-counter";

const ServicesAnimatedComponent = () => {
  return (
      <div className="mt-2 flex items-end space-x-4">
        <CategoryMarquee />
        <ServicesCounter />
      </div>
  );
};

export default ServicesAnimatedComponent;
