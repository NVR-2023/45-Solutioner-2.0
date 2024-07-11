import AnimatedCounter from "@/frontend/components/ui/animated-components/animated-counter";

const CategoriesCounter = () => {
  return (
    <div className="flex flex-col -space-y-2">
      <AnimatedCounter
        start={1}
        end={12}
        duration={1800}
        weight={"black"}
        size={"3xl"}
      />
      <div className="text-[.625rem] font-bold tracking-wide ">Categories</div>
    </div>
  );
};

export default CategoriesCounter;
