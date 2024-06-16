type SLiderControlsProps = {
  handleOnGetNextInNextItem: () => void;
  handleOnGetPreviousItem: () => void;
};

const SliderControls = ({
  handleOnGetNextInNextItem,
  handleOnGetPreviousItem,
}: SLiderControlsProps) => {
  return (
    <div className="flex h-5 items-center  space-x-1">
      <button
        onClick={handleOnGetNextInNextItem}
        className="flex h-5 w-5 items-center justify-center rounded-[2px] bg-neutral-400 text-neutral-200"
      >
        +
      </button>
      <button
        onClick={handleOnGetPreviousItem}
        className="flex h-5 w-5 items-center justify-center rounded-[2px] bg-neutral-400 text-neutral-200"
      >
        -
      </button>
    </div>
  );
};

export default SliderControls;
