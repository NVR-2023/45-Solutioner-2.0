const AnimatedDiscountLoop = () => {
  return (
    <div className="borer-[1px] py-1 flex flex-col items-center rounded border-[1pt] border-[#fc6900] px-2 ">
      <div className="items-centre justify-center w-full flex border-b-[0.75pt] border-[#fc6900] text-sm font-semibold small-caps">
        up to
      </div>
      <div className="py-1 text-3xl font-black leading-none  text-[#fc6900]">
        30
        <span className="text-2xl">%</span>
      </div>
      <div className="w-full items-centre flex justify-center border-t-[0.75pt] border-[#fc6900] text-sm font-semibold small-caps">
        off
      </div>
    
    </div>
  );
};

export default AnimatedDiscountLoop;
