type AnimatedProfileProps = {
  scrollYProgress: number;
};
const AnimatedProfile = ({ scrollYProgress }: AnimatedProfileProps) => {
  const scrollYProgressString: string = scrollYProgress?.toFixed(7);
  
  
  return (
      <div className="flex flex-col -space-y-1.5">
        <div className="mb-4 text-[.625rem] font-extrabold tracking-wide ">
          Password
        </div>
        <div className="size-24 flex justify-center items-center bg-orange-300 ">{scrollYProgressString}</div>
      </div>
    );
};

export default AnimatedProfile;
