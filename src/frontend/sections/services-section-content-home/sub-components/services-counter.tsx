import AnimatedCounter from "@/frontend/components/ui/animated-components/animated-counter";

const ServicesCounter = () => {
  return (
    <div className="flex flex-col -space-y-2">
      <AnimatedCounter
        start={1}
        end={54}
        duration={1800}
        weight={"black"}
        size={"5xl"}
      />
      <div className="text-[.625rem] font-bold tracking-wide ">Services</div>
    </div>
  );
};

export default ServicesCounter;
