const AnimatedDiscountLoop = () => {
  return (
    <div className="borer-[1px] flex flex-col items-center rounded border-[1pt] border-[#fc6900] px-2 py-1 ">
      <div className="flex w-full items-center justify-center border-b-[0.75pt] border-[#fc6900] text-sm font-bold small-caps">
        up to
      </div>
      <div className="flex items-center py-1 text-4xl font-black">
        <span className="">30</span>
        <span className="text-2xl">%</span>
      </div>

      <div className="items-centre flex w-full justify-center border-t-[0.75pt] border-[#fc6900] text-sm font-bold small-caps">
        off
      </div>
    </div>
  );
};

export default AnimatedDiscountLoop;
