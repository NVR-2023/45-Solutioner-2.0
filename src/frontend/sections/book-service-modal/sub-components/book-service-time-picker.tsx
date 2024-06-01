import React from "react";

const BookServiceTimePicker = () => {
  return (
    <div className="flex w-full flex-col rounded">
      <div className="grid-cols-17 justify-centre flex w-full grid-rows-1 items-center border-b-[0.7px] border-black px-2">
        {Array.from({ length: 17 }).map((_, hourIndex) => (
          <div
            key={hourIndex}
            className="col-span-1 row-span-1 flex w-[calc(100%/17)] items-center justify-center bg-purple-400 text-[.5rem] font-bold"
          >
            {hourIndex % 2 !== 1 ? String(hourIndex + 7).padStart(2, "0") : ""}
          </div>
        ))}
      </div>

      <div className="h-6 relative w-full bg-green-400 px-2">
        <div
          className="w-10 h-6 rounded-[2px] bg-purple-400"
          style={{
            position: "absolute",
            top: 0,
            left: "0px",
          }}
        >123</div>
      </div>
    </div>
  );
};

export default BookServiceTimePicker;
