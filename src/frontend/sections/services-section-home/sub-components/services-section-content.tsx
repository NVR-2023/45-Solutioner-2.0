import RegisterButton from "./register-button";

const ServicesSectionContent = () => {
  return (
    <div className="xbg-green-400 grid w-full grid-cols-5 grid-rows-2 gap-x-0.5 font-aperçu text-lg font-extrabold text-[#ff7714]">
      <div className="row-span col-span-4 flex flex-col ps-6 text-2xl -tracking-[3%] ">
        <div className="flex flex-col -space-y-1">
          <div className="">Home services?</div>
          <div className="">We got you covered.</div>
        </div>
        <div className="flex justify-end pe-6 ps-5 pt-1 text-right text-xs font-bold leading-5">
          From unclogging stubborn sink pipes to removing pesky hornet&apos;s
          nests, all a click away.
        </div>
        <div>

            <RegisterButton />
        </div>
      </div>

      <div className="xbg-yellow-400 col-span-1 flex">
        <div className="flex items-baseline space-x-3 ps-4">
          <div className="flex flex-col -space-y-0.5 pt-4">
            <div className="text-3xl font-bold tabular-nums tracking-wide">
              12
            </div>
            <div className="text-xs font-medium">Categories</div>
          </div>
          <div className="flex flex-col -space-y-0.5">
            <div className="text-5xl font-bold tabular-nums tracking-wide">
              54
            </div>
            <div className="text-xs font-medium">Services</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSectionContent;
